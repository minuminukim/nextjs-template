import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { experimental_createServerActionHandler } from '@trpc/next/app-dir/server';
import { TRPCError, initTRPC } from '@trpc/server';
import { headers } from 'next/headers';
import superjson from 'superjson';
import { ZodError } from 'zod';
import { getServerSession } from '~/server/auth';
import { prisma } from '~/server/db';

type CreateContextOptions = {
  headers: Headers;
};

export async function createInnerContext(opts: CreateContextOptions) {
  const session = await getServerSession();

  return {
    session,
    headers: opts.headers,
    db: prisma,
  };
}

export async function createContext(opts: FetchCreateContextFnOptions) {
  return await createInnerContext({
    headers: opts.req.headers,
  });
}

type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter(opts) {
    const { shape, error } = opts;
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === 'BAD_REQUEST' && error.cause instanceof ZodError
            ? error.cause.flatten()
            : null,
      },
    };
  },
});

export const createAction = experimental_createServerActionHandler(t, {
  async createContext() {
    return await createInnerContext({
      headers: headers(),
    });
  },
});

export const createRouter = t.router;

export const publicProcedure = t.procedure;

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);

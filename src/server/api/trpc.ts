import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { experimental_createServerActionHandler } from '@trpc/next/app-dir/server';
import { initTRPC } from '@trpc/server';
import { headers } from 'next/headers';
import superjson from 'superjson';
import { ZodError } from 'zod';
import { prisma } from '~/server/db';

type CreateContextOptions = {
  headers: Headers;
};

export function createInnerTRPCContext(opts: CreateContextOptions) {
  return {
    headers: opts.headers,
    db: prisma,
  };
}

export function createTRPCContext(opts: FetchCreateContextFnOptions) {
  return {
    headers: opts.req.headers,
  };
}

type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>>;

const t = initTRPC.context<TRPCContext>().create({
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
  createContext() {
    return createInnerTRPCContext({
      headers: headers(),
    });
  },
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

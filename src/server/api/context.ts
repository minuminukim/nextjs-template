import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export function createTRPCContext(opts?: FetchCreateContextFnOptions) {
  return {
    headers: opts && Object.fromEntries(opts.req.headers),
  };
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

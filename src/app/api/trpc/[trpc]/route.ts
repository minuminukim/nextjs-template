import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from '~/server/api/trpc';
import { appRouter } from '~/server/api/routers/_app';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: createContext,
  });

export { handler as GET, handler as POST };

'use server';

import { httpBatchLink, loggerLink } from '@trpc/client';
import { experimental_createTRPCNextAppDirServer } from '@trpc/next/app-dir/server';
import type { AppRouter } from '~/server/api/routers/_app';
import { headers } from 'next/headers';
import superjson from 'superjson';
import { getUrl } from './shared';
import { env } from '~/env.mjs';

export const api = experimental_createTRPCNextAppDirServer<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (op) =>
            env.NODE_ENV === 'development' ||
            (op.direction === 'down' && op.result instanceof Error),
        }),
        httpBatchLink({
          url: getUrl(),
          headers() {
            // Forward headers from the browser to the API
            return {
              ...Object.fromEntries(headers()),
              'x-trpc-source': 'rsc',
            };
          },
        }),
      ],
    };
  },
});

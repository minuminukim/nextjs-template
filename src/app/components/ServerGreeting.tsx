'use server';

import { api } from '~/trpc/server';

export async function ServerGreeting() {
  const greeting = await api.greeting.query({ text: 'from server' });

  return <>{greeting}</>;
}

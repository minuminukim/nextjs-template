'use client';

import { use } from 'react';
import { api } from '~/trpc/client';

export const ClientGreeting = () => {
  const greeting = use(api.greeting.query({ text: 'from client' }));

  return <>{greeting}</>;
};

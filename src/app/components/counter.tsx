'use client';

import { useState } from 'react';
import { Button } from '~/ui/components/Button';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="flex h-full flex-col justify-center">
      <p className="my-4 text-2xl">Count: {count}</p>
      <div>
        <Button
          variant="secondary"
          className="mr-2"
          onClick={() => setCount((c) => c - 1)}
        >
          -
        </Button>
        <Button variant="secondary" onClick={() => setCount((c) => c + 1)}>
          +
        </Button>
      </div>
    </section>
  );
}

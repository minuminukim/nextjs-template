import { Suspense } from 'react';
import { ThemeSwitch } from '~/ui/ThemeSwitch';
import { ClientGreeting } from './components/ClientGreeting';
import { ServerGreeting } from './components/ServerGreeting';
import { api } from '~/trpc/server';

export default async function Page() {
  const promise = new Promise<string>(async (resolve) => {
    await new Promise((r) => setTimeout(r, 1000)); // wait for demo purposes
    resolve(api.greeting.query({ text: 'streamed server data' }));
  });

  return (
    <main className="h-full">
      <ThemeSwitch />
      <div className="my-4 ">
        <h1 className="text-4xl">Hello, next.js</h1>
      </div>
      <>
        <div>
          <Suspense fallback={<>Loading client...</>}>
            <ClientGreeting />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<>Loading server...</>}>
            <ServerGreeting />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<>Loading stream...</>}>
            <StreamedSC promise={promise} />
          </Suspense>
        </div>
      </>
    </main>
  );
}

async function StreamedSC(props: { promise: Promise<string> }) {
  const data = await props.promise;

  return <div>{data}</div>;
}

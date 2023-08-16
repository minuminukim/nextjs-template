import { Suspense } from 'react';
import { ThemeSwitch } from '~/ui/ThemeSwitch';

export default async function Page() {
  const promise = new Promise<string>(async (resolve) => {
    await new Promise((r) => setTimeout(r, 1000)); // wait for demo purposes
    resolve('streamed server data');
  });

  return (
    <main className="h-full">
      <ThemeSwitch />
      <div className="my-4 ">
        <h1 className="text-4xl">Hello, next.js</h1>
      </div>
      <Suspense fallback={<>Loading stream...</>}>
        <StreamedSC promise={promise} />
      </Suspense>
    </main>
  );
}

async function StreamedSC(props: { promise: Promise<string> }) {
  const data = await props.promise;

  return <div>{data}</div>;
}

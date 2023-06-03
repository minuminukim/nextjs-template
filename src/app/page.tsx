import { ThemeSwitch } from '~/ui/ThemeSwitch';
import { Counter } from './components/counter';

export default function Page() {
  return (
    <main className="h-full">
      <ThemeSwitch />
      <div className="my-4 ">
        <h1 className="text-4xl">Hello, next.js</h1>
        <Counter />
      </div>
    </main>
  );
}

import { ThemeSwitch } from '~/components/theme-switch';

export default function Page() {
  return (
    <main className="h-full p-6">
      <ThemeSwitch />
      <h1 className="text-4xl font-medium">
        The quick brown fox jumped over the lazy dog.
      </h1>
      <h2 className="text-2xl font-semibold">
        The quick brown fox jumped over the lazy dog.
      </h2>
      <h3 className="text-xl font-semibold">
        The quick brown fox jumped over the lazy dog.
      </h3>
      <h3 className="text-base font-semibold">
        The quick brown fox jumped over the lazy dog.
      </h3>
      <h3 className="text-xl font-normal">
        The quick brown fox jumped over the lazy dog.
      </h3>
      <p className="text-base">The quick brown fox jumped over the lazy dog.</p>
      <p className="text-sm">The quick brown fox jumped over the lazy dog.</p>
      <p className="text-xs">The quick brown fox jumped over the lazy dog.</p>
      <p className="text-2xl font-semibold text-rose-400">
        The quick brown fox jumped over the lazy dog.
      </p>
      <p className="text-2xl font-semibold text-pink-400">
        The quick brown fox jumped over the lazy dog.
      </p>
      <p className="text-2xl font-semibold text-blue-900">
        The quick brown fox jumped over the lazy dog.
      </p>
      <p className="text-2xl font-semibold text-blue-500">
        The quick brown fox jumped over the lazy dog.
      </p>
    </main>
  );
}

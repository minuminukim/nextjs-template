import type { Metadata } from "next";
import Link from "next/link";
import { getServerSession } from "~/server/auth";
import { button } from "~/ui/button";
import { cn } from "~/lib/cn";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function LoginPage() {
  const session = await getServerSession();
  return (
    <main>
      <section className="flex flex-col gap-4">
        {session && <span>Logged in as {session.user?.name}</span>}
      </section>
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className={cn(button())}
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
    </main>
  );
}

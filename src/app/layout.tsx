import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "~/lib/cn";
import { ThemeProvider } from "~/components/theme-provider";
import { SessionProvider } from "~/components/session-provider";

export const metadata = {
  title: "nextjs-template",
  description: "nextjs-template",
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen p-8 font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

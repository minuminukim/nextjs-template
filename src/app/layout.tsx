import { Inter } from 'next/font/google';
import clsx from 'clsx';
import '~/styles/globals.css';

export const metadata = {
  title: 'nextjs-template',
  description: 'nextjs-template',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={clsx(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}

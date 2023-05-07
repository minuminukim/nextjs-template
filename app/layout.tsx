import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'next13-template',
  description: 'next13-template',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

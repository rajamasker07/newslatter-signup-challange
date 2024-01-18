import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import React from 'react';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});

export const metadata: Metadata = {
  title: 'Newslatter App',
  description: 'Newslatter App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-900`}>{children}</body>
    </html>
  );
}

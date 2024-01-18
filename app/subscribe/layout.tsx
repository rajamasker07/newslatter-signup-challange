import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Newslatter App',
  description: 'Signup Page'
};

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className='grid h-screen place-items-center items-center sm:place-items-start sm:items-start'>
      { children }
    </section>
  );
}

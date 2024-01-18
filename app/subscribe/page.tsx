import Image from 'next/image';
import React from 'react';
import iconList from '../../public/assets/icon-list.svg';
import illustrationDesktop from '../../public/assets/illustration-sign-up-desktop.svg';
import illustrationMobile from '../../public/assets/illustration-sign-up-mobile.svg';
import Form from '../components/form';

export default function Page() {
  return (
    <div className="flex h-fit w-[700px] flex-row items-center gap-5 rounded-xl bg-white p-5 sm:h-fit sm:w-screen sm:flex-col-reverse sm:p-0 *:sm:w-screen">
      <section className='flex w-[50%] flex-col gap-6 sm:p-5'>
        <hgroup>
          <h1 className='mb-3 text-4xl font-bold text-slate-800'>Stay updated!</h1>
          <p className='text-xs text-slate-800'>
            Join 60,000+ product manager receving monthly updated on:
          </p>
        </hgroup>
        <ul className='flex flex-col gap-2 *:justify-start *:text-slate-800 *:has-[li]:inline-flex *:has-[li]:items-center *:has-[li]:gap-2 *:has-[p]:text-xs'>
          <li>
            <Image
              src={iconList}
              alt='list-icon'
              width={21}
              height={21}
            />
            <p>Product discovery and building what metters </p>
          </li>
          <li>
            <Image
              src={iconList}
              alt='list-icon'
              width={21}
              height={21}
            />
            <p>Measuring ensure updates are success </p>
          </li>
          <li>
            <Image
              src={iconList}
              alt='list-icon'
              width={21}
              height={21}
            />
            <p>And much more </p>
          </li>
        </ul>
        <Form/>
      </section>
      <section className='w-[50%]'>
        <Image
          src={illustrationDesktop}
          alt='img-illustration'
          width={100}
          height={100}
          className='h-auto w-full rounded-b-xl sm:hidden'
        />
        <Image
          src={illustrationMobile}
          alt='img-illustration'
          width={100}
          height={100}
          className='h-auto w-full rounded-b-xl md:hidden lg:hidden xl:hidden 2xl:hidden'
        />
      </section>
    </div>
  );
}

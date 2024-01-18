'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import successIcon from '../../../public/assets/icon-success.svg';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Page() {

  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {

    console.log(router);

  }, [router]);
  
  return (
    <div className="flex h-fit w-[350px] flex-col gap-6 rounded-xl bg-white p-6 text-slate-800">
      <Image
        src={successIcon}
        alt='success-icon'
        width={50}
        height={50}
      />

      <hgroup>
        <h1 className="text-4xl font-bold">Thanks for subscribing</h1>
        <p className='mt-2 text-sm'>
          A confirmation email has been sent <br/>
          <b>
            { params.get("email") }
          </b>
          &nbsp; please open it and click the button inside to confirm your subscription
        </p>
      </hgroup>
      <button className="h-12 w-full rounded-xl bg-slate-900 p-1" onClick={() => router.push('/subscribe')} >
        <h1 className="text-sm font-medium text-white">Dismiss message</h1>
      </button>
    </div>
  );
}

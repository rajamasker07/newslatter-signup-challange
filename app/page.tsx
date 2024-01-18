'use client';

import Link from "next/link";
import { useUrl } from "nextjs-current-url";

export default function Home() {

  const url = useUrl();

  return (
    <main className="flex min-h-screen w-screen place-content-center items-center p-0">
      <div className="flex min-w-10 flex-col gap-5 text-center text-sm text-white">
        <p>
          hi, this project is provided by &nbsp;
          <Link href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv" className="text-blue-600 underline hover:font-bold hover:text-orange-600">frontendmentor.io</Link>,
          and done by &nbsp;
          <Link href="https://github.com/rajamasker07/newslatter-signup-challange" className="text-blue-600 underline hover:font-bold hover:text-orange-600">rajamasker07</Link>. <br />
          visit the link below to see the results
        </p>
        <Link className="h-auto w-full rounded-lg bg-blue-700 p-2 text-center font-bold hover:bg-orange-600" href={`${url?.href}subscribe`}>
          Lets Go
        </Link>
      </div>
    </main>
  );
}

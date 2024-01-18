'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    console.log(router);
  }, [router]);

  return (
    <main className="flex min-h-screen w-screen items-center p-0">
      <div className="w-[500px] bg-white p-5">
        <Link href={{ pathname: '/subscribe' }}> Go to subscribe page </Link>
      </div>
    </main>
  );
}

'use client';

import React, { useState } from "react";

export default function Form() {

  const [emailValid, setEmailValid] = useState<boolean>(true);
  const validationEmail = (email: string): boolean => {
    const regexp: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(email);
  };

  const inputEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    validationEmail(e.target.value) === true ? setEmailValid(true) : setEmailValid(false);
  };

  return (
    <form method="get" action="/subscribe/success">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <label htmlFor="email" className="text-xs text-slate-900">Email Address</label>
          {
            <h1 className="text-xs text-red-700"> { emailValid ? "" : "Valid email required" } </h1>
          }
        </div>
        <input 
          type="email" 
          name="email" 
          id="email"
          className={`block rounded-lg px-3 py-2 ring-1 ring-neutral-500 placeholder:text-neutral-500 hover:ring-blue-500 ${ emailValid ? "" : "bg-red-200 text-red-700" } text-xs outline-none invalid:ring-red-700`}
          placeholder="example@mail.com"
          autoFocus
          onChange={inputEmailChangeHandler}
          required
        />

        {
          emailValid ?
            <button className="h-12 w-full rounded-xl bg-slate-900 p-1 disabled:bg-slate-500">
              <h1 className="text-sm font-medium text-white">Subscribe to monthly newslatter</h1>
            </button>

          :

            <button className="h-12 w-full rounded-xl bg-slate-900 p-1 disabled:bg-slate-500" disabled>
              <h1 className="text-sm font-medium text-white">Subscribe to monthly newslatter</h1>
            </button>
        }

      </div>
    </form>
  );
}

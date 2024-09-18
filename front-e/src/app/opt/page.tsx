'use client';

import { MailSvg } from '@/assets/MailSvg';
import Link from 'next/link';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

export default function Forget() {
  const inputData = [
    {
      placeholder: 'Имэйл хаяг оруулах',
    },
  ];

  const [otp, setOtp] = useState('');

  return (
    <main className="max-w-screen-lg h-[800px] m-auto ">
      <div className="w-[686px] h-fit flex flex-col gap-6 items-center mt-[104px]">
        <MailSvg />
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-6 font-semibold"> Баталгаажуулах</h1>
          <p className="text-[14px] text-[#18181B]">
            “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
          </p>
        </div>

        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />

        <button className="text-[14px] text-[#71717A]">
          Дахин илгээх (30)
        </button>
      </div>
    </main>
  );
}

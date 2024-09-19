'use client';

import Link from 'next/link';

export default function newPass() {
  const inputData = [
    {
      placeholder: 'Шинэ нууц үг',
      type: 'password',
    },

    {
      placeholder: 'Шинэ нууц үг давтах',
      type: 'password',
    },
  ];

  return (
    <main className="max-w-screen-lg h-[800px] m-auto ">
      <div className="flex flex-col gap-6 items-center mt-[104px]">
        <h1 className="text-6 font-semibold"> Нууц үг сэргээх</h1>
        <form className="flex flex-col w-[334px] h-fit gap-4">
          {inputData.map((item, index) => {
            return (
              <input
                key={index}
                className="border pl-3 py-2  rounded-md"
                placeholder={item.placeholder}
                type={item.type}
              ></input>
            );
          })}

          <Link href="/login">
            <button className="w-full h-fit border py-2 rounded-md bg-black text-white text-[14px]">
              Үүсгэх
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
}

'use client';

import Link from 'next/link';

export default function Login() {
  const inputData = [
    {
      placeholder: 'Нэр',
      type: 'text',
    },

    {
      placeholder: 'Нууц үг',
      type: 'password',
    },
  ];

  return (
    <main className="max-w-screen-lg h-[800px] m-auto ">
      <div className="flex flex-col gap-6 items-center mt-[35px]">
        <Link href="/register">
          <button>Бүртгүүлэх</button>
        </Link>
        <h1 className="text-6 font-semibold"> Нэвтрэх</h1>
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

          <Link href="/">
            <button className="w-full h-fit border py-2 rounded-md bg-black text-white text-[14px]">
              Нэвтрэх
            </button>
          </Link>
        </form>

        <Link href="/forget">
          <p className="text-[#71717A] text-[14px] underline underline-offset-4">
            Нууц үг мартсан
          </p>
        </Link>
      </div>
    </main>
  );
}

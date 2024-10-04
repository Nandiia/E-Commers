'use client';

import { AuthContext } from '@/components/contexts/auth.context';
import Link from 'next/link';
import { useContext, useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useContext(AuthContext);

  console.log(login);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <main className="max-w-screen-lg h-[800px] m-auto ">
      <div className="flex flex-col gap-6 items-center mt-[35px]">
        <Link href="/register">
          <button>Бүртгүүлэх</button>
        </Link>
        <h1 className="text-6 font-semibold"> Нэвтрэх</h1>
        <div
          // onSubmit={handleSubmit}
          className="flex flex-col w-[334px] h-fit gap-4"
        >
          <input
            type="email"
            placeholder="email"
            className="border pl-3 py-2  rounded-md"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
          <input
            type="password"
            placeholder="password"
            className="border pl-3 py-2  rounded-md"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>

          <button
            onClick={() => login({ email, password })}
            className="w-full h-fit border py-2 rounded-md bg-black text-white text-[14px]"
          >
            Нэвтрэх
          </button>
        </div>

        <Link href="/forget">
          <p className="text-[#71717A] text-[14px] underline underline-offset-4">
            Нууц үг мартсан
          </p>
        </Link>
      </div>
    </main>
  );
}

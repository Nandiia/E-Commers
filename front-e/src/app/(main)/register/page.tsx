// 'use client';

// import { AuthContext } from '@/components/contexts/auth.context';
// import Link from 'next/link';
// import { useContext, useState } from 'react';

// export default function Register() {
//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [rePassword, setRePassword] = useState<string>('');

//   const { register } = useContext(AuthContext);

//   return (
//     <main className="max-w-screen-lg h-[800px] m-auto ">
//       <div className="flex flex-col gap-6 items-center mt-[35px]">
//         <Link href="/login">
//           <button>Нэвтрэх</button>
//         </Link>
//         <h1 className="text-6 font-semibold">Бүртгүүлэх</h1>

//         <div

//           className="flex flex-col w-[334px] h-fit gap-4"
//         >
//           <input
//             className="border pl-3 py-2  rounded-md"
//             placeholder="Нэр"
//             type="text"
//             value={name}
//             onChange={(event) => {
//               setName(event.target.value);
//             }}
//           ></input>

//           <input
//             className="border pl-3 py-2  rounded-md"
//             placeholder="Имэйл хаяг"
//             type="email"
//             value={email}
//             onChange={(event) => {
//               setEmail(event.target.value);
//             }}
//           ></input>

//           <input
//             className="border pl-3 py-2  rounded-md"
//             placeholder="Нууц үг"
//             type="password"
//             value={password}
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}
//           ></input>

//           <input
//             className="border pl-3 py-2  rounded-md"
//             placeholder="Нууц үг давтах"
//             type="password"
//             value={rePassword}
//             onChange={(event) => {
//               setRePassword(event.target.value);
//             }}
//           ></input>

//           <button
//             onClick={() => {
//               register({ name, email, password });
//             }}
//             className="w-full h-fit border py-2 rounded-md bg-black text-white text-[14px]"
//           >
//             Үүсгэх
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

'use client';

import { AuthContext } from '@/components/contexts/auth.context';
import Link from 'next/link';
import { useContext, useState } from 'react';

export default function Register() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');

  const { register } = useContext(AuthContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    register({ name, email, password });
  };

  return (
    <main className="max-w-screen-lg h-[800px] m-auto ">
      <div className="flex flex-col gap-6 items-center mt-[35px]">
        <Link href="/login">
          <button>Нэвтрэх</button>
        </Link>
        <h1 className="text-6 font-semibold">Бүртгүүлэх</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[334px] h-fit gap-4"
        >
          <input
            className="border pl-3 py-2  rounded-md"
            placeholder="Нэр"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>

          <input
            className="border pl-3 py-2  rounded-md"
            placeholder="Имэйл хаяг"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>

          <input
            className="border pl-3 py-2  rounded-md"
            placeholder="Нууц үг"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>

          <input
            className="border pl-3 py-2  rounded-md"
            placeholder="Нууц үг давтах"
            type="password"
            value={rePassword}
            onChange={(event) => {
              setRePassword(event.target.value);
            }}
          ></input>

          <button
            type="submit"
            className="w-full h-fit border py-2 rounded-md bg-black text-white text-[14px]"
          >
            Үүсгэх
          </button>
        </form>
      </div>
    </main>
  );
}

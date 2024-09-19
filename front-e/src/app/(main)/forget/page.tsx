'use clinet';
import Link from 'next/link';

export default function Forget() {
  const inputData = [
    {
      placeholder: 'Имэйл хаяг оруулах',
      type: 'email',
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

          <Link href="/opt">
            <button className="w-full h-fit border py-2 rounded-md bg-black text-white text-[14px]">
              Илгээх
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
}

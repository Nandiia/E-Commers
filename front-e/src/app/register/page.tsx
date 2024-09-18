import Link from 'next/link';

export default function Register() {
  const inputData = [
    {
      placeholder: 'Нэр',
      type: 'text',
    },
    {
      placeholder: 'Имэйл хаяг',
      type: 'email',
    },
    {
      placeholder: 'Нууц үг',
      type: 'password',
    },
    {
      placeholder: 'Нууц үг давтах ',
      type: 'password',
    },
  ];

  return (
    <main className="max-w-screen-lg h-[800px] m-auto ">
      <div className="flex flex-col gap-6 items-center mt-[35px]">
        <Link href="/login">
          <button>Нэвтрэх</button>
        </Link>
        <h1 className="text-6 font-semibold">Бүртгүүлэх</h1>
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

          <button className="w-full h-fit border py-2 rounded-md bg-black text-white text-[14px]">
            Үүсгэх
          </button>
        </form>
      </div>
    </main>
  );
}

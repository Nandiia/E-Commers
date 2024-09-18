import { EcommerceLogo } from '@/assets/EcommerceLogo';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { PineLogo } from '@/assets/PineLogo';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import { SlBasket } from 'react-icons/sl';
import { HeartIcon } from 'lucide-react';
import Link from 'next/link';

export const Nav = () => {
  return (
    // <main >

    //         <div className="flex w-[1240px] h-10 justify-between m-auto">

    //             <div className="flex gap-16">
    //                 <EcommerceLogo/>

    //                 <div className="text-[#0D0E43] flex items-center gap-5">
    //                     <p>Нүүр</p>

    //                     <div className="flex gap-1 items-center">
    //                         <p>Ангилал </p>
    //                         <MdOutlineKeyboardArrowDown className="w-5 h-5 mt-[3px]"/>
    //                     </div>

    //                 </div>
    //             </div>

    //             <div className="flex">
    //                 <input type="string" className="border-y-[2px] border-l-[2px] border-color-[#E7E6EF] w-[280.21px] h-10 rounded-[2px]"></input>
    //                 <div className="w-[53.71px] h-10 bg-[#FB2E86] flex justify-center items-center rounded-r-lg">
    //                     <FaMagnifyingGlass className="w-5 h-5 text-white "/>
    //                 </div>
    //             </div>
    //         </div>
    // </main>

    <main className="w-screen h-full bg-black">
      <div className="flex justify-between px-6 py-4">
        <div className="flex gap-4 items-center">
          <PineLogo />
          <Link href="/category">
            <button className="text-white text-[14px]">Бүтээгдэхүүн</button>
          </Link>
        </div>

        <div className="w-[300px] h-[40px] bg-primary flex rounded-md">
          <div className="items-center flex gap-[11px]  ml-4">
            <MagnifyingGlassIcon className="w-6 h-6 text-primary-foreground" />
            <input
              type="text"
              placeholder="Бүтээгдэхүүн хайх"
              className=" bg-primary "
            ></input>
          </div>
        </div>

        <div className="flex gap-[26px] items-center">
          <HeartIcon className="text-white w-6 h-6 cursor-pointer" />
          <SlBasket className="text-white  w-6 h-6 cursor-pointer" />
          <div className="flex gap-2">
            <Link href="/register">
              <button className="text-white px-[12px] py-2 border rounded-md border-[#2563EB]">
                Бүртгүүлэх
              </button>
            </Link>

            <Link href="/login">
              <button className="text-white px-[12px] py-2  rounded-md bg-[#2563EB]">
                Нэвтрэх
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

'use client';

import { useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

export const CartComp = () => {
  const [count, setCount] = useState<number>(1);

  const [isButtonBlackPlus, setIsButtonBlackPlus] = useState(false);

  const [isButtonBlackMinus, setIsButtonBlackMinus] = useState(false);

  const increase = () => {
    setCount(count + 1);

    setIsButtonBlackPlus(true);

    setTimeout(() => {
      setIsButtonBlackPlus(false);
    }, 500);
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      count;
    }

    setIsButtonBlackMinus(true);

    setTimeout(() => {
      setIsButtonBlackMinus(false);
    }, 500);
  };
  return (
    <div>
      <div className="border p-4 flex w-fit h-fit rounded-2xl">
        <div className="w-[100px] h-[100px] bg-green-200 rounded-2xl flex-none"></div>
        <div className="ml-5 flex-1">
          <div className="w-[354px]">Chunky Glyph Tee</div>

          <div className="+-button flex gap-1 mt-1">
            <button
              onClick={decrease}
              className={`border w-8 h-8 border-black rounded-full   cursor-pointer ${isButtonBlackMinus ? 'bg-black text-white' : 'bg-white'}`}
            >
              -
            </button>

            <div className="w-8 h-8 flex items-center justify-center">
              {count}
            </div>

            <button
              className={`border w-8 h-8 border-black rounded-full  cursor-pointer ${isButtonBlackPlus ? 'bg-black text-white' : 'bg-white'}`}
              onClick={increase}
            >
              +
            </button>
          </div>

          <div className="font-bold mt-2">12000</div>
        </div>
        <div className="flex-none ml-5 text-[24px] ">
          <HiOutlineTrash />
        </div>
      </div>
    </div>
  );
};

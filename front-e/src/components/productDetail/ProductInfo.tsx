'use client';

import { sizeData } from '@/app/category/page';
import { CiHeart } from 'react-icons/ci';
import { ReviewAll } from './ReviewAll';
import { useEffect, useState } from 'react';
import { setUncaughtExceptionCaptureCallback } from 'process';

export const ProductInfo = () => {
  const [slectedSize, setSelectedSize] = useState<string>('');

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
    <div className="flex flex-col justify-end">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <div className="text-xs font-semibold px-[10px] py-[2px] rounded-full border border-[#2563EB] w-fit  ">
            шинэ
          </div>
          <div className=" flex items-center gap-[18px]">
            <h2 className="text-base font-bold">Wildflower Hoodie</h2>
            <CiHeart className="w-6 h-6 cursor-pointer " />
          </div>

          <p>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</p>
        </div>

        <div>
          <p className="text-[14px]">Хэмжээний заавар</p>

          <div className="flex gap-1">
            {sizeData.slice(1).map((item, index) => {
              return (
                <div
                  key={index}
                  {...item}
                  onClick={() => {
                    setSelectedSize(item.size);
                  }}
                  className={`border rounded-full w-8 h-8 flex justify-center items-center text-xs border-black hover:bg-[#09090B80] cursor-pointer ${item.size === slectedSize ? 'bg-black text-white' : 'bg-white'}  `}
                >
                  {item.size}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-1">
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

        <div className="space-y-4">
          <div className="text-xl font-bold">120000₮</div>
          <div className="px-9 py-2 border rounded-full w-fit bg-[#2563EB] text-sm text-white font-medium ">
            Сагсанд нэмэх
          </div>
        </div>
      </div>
      <div>
        <ReviewAll />
      </div>
    </div>
  );
};

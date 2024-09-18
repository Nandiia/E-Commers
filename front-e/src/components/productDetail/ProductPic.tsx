'use client';
import Image from 'next/image';
import { useState } from 'react';

export const ProductPic = () => {
  // const productImageData = [
  //   {
  //     productImage: '/picture/productImage/pimg1.png',
  //   },
  //   {
  //     productImage: '/picture/productImage/pimg2.png',
  //   },
  //   {
  //     productImage: '/picture/productImage/pimg3.png',
  //   },
  //   {
  //     productImage: '/picture/productImage/pimg4.png',
  //   },
  // ];

  const productImageData = [
    '/picture/productImage/pimg1.png',
    '/picture/productImage/pimg2.png',
    '/picture/productImage/pimg3.png',
    '/picture/productImage/pimg4.png',
  ];

  const [selectedPic, setSelectedPic] = useState<string>(
    '/picture/productImage/pimg1.png'
  );

  return (
    <main>
      <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-2 ">
          {productImageData.map((item, index) => {
            return (
              //   <div key={index} className="w-16 h-16 rounded">
              //     {item.productImage}
              //   </div>
              <div key={index} className="w-16 h-16 relative">
                <Image
                  src={item}
                  alt="productPic"
                  fill
                  className={`rounded ${item === selectedPic ? 'border-[2px] border-black' : ''}`}
                  onClick={() => setSelectedPic(item)}
                ></Image>
              </div>
            );
          })}
        </div>

        <div className="w-[422px] h-[521px] bg-blue-200 rounded-2xl relative">
          <Image src={selectedPic} alt="productPic" fill className="rounded" />
        </div>
      </div>
    </main>
  );
};

'use client';

import { ProductCard } from '@/components/product/ProductCard';
import { Title } from '../Title';
import { productDataType } from '@/components/product/ProductCard';
import { useEffect, useState } from 'react';
import { api } from '@/axios';

export const productData = [
  {
    image: '/picture/coverCarousel/image.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image1.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image2.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image1.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image2.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image1.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image2.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image1.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image2.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image1.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image2.png',
    title: 'product',
    price: 10000,
  },
];

export const Product = () => {
  return (
    <main className="conatiner max-w-screen-lg m-auto mt-8 mb-[84px] ">
      {/* <div className="grid grid-cols-4 grid-rows ">
        {productData.map((item, index) => {
          return (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div> */}

      <div className="grid grid-cols-4 grid-rows-6 gap-y-12 gap-x-5 [&>div:nth-child(1)]:bg-green-300 [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:row-span-2 ">
        {productData.map((item, index) => {
          const customHeight =
            index === 6 ? 'h-[692px]' : index === 7 ? 'h-[692px]' : 'h-[331px]';

          return (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              customHeight={customHeight}
            />
          );
        })}
      </div>
    </main>
    // <main className="container flex justify-center h-fit w-[1280px] m-auto p-14">
    //   <div className=" justify-center grid grid-cols-4 grid-rows-6 [&>div:nth-child(6)]:col-span-2 [&>div:nth-child(6)]:row-span-2 [&>div:nth-child(7)]:col-span-2  [&>div:nth-child(7)]:row-span-2">
    //     {productData.map((item, index) => {
    //       const customHeight =
    //         index === 6
    //           ? 'h-[990px] w-fit'
    //           : index === 7
    //             ? 'h-[990px] w-fit'
    //             : 'h-[450px]';
    //       return (
    //         <ProductCard
    //           key={index}
    //           image={item.image}
    //           title={item.title}
    //           price={item.price}
    //           // customHeight={customHeight}
    //         />
    //       );
    //     })}
    //   </div>
    // </main>
    // <main className="w-[1280px] m-auto p-14">
    //   <div className="h-full w-full justify-center grid grid-cols-4 grid-rows-6 gap-y-12 gap-x-5  [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(8)]:row-span-2 [&>div:nth-child(8)]:col-span-2 ">
    //     {productData.map((item, index) => {
    //       // const customHeight = [6, 7].includes(index)
    //       //   ? 'h-[1000px] w-fit'
    //       //   : 'h-[450px]';

    //       return (
    //         <ProductCard
    //           key={index}
    //           image={item.image}
    //           title={item.title}
    //           price={item.price}
    //           // customHeight={customHeight}
    //         />
    //       );
    //     })}
    //   </div>
    // </main>
  );
};

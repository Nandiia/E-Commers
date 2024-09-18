'use client';

import { useState } from 'react';
import { Slide } from './Slide';

export const CoverCarousel = () => {
  const slides = [
    {
      title: '2024 оны хамгийн шинэ загвар',
      image: '/picture/coverCarousel/cover.png',
    },
    // { title: 'Slide2', image: '/picture/coverCarousel/sandal1.png' },
    // { title: 'Slide3', image: '/picture/coverCarousel/sandal1.png' },
  ];

  const [slideIndex, setSlideIndex] = useState<number>(0);

  return (
    <div className="max-w-screen-lg h-[446px] rounded-2xl m-auto overflow-hidden relative mt-5">
      <div
        className="w-[100%] bg-green-200 h-full flex "
        style={{
          transition: '300ms',
          transform: `translateX(-${(slideIndex * 100) / 3}%)`,
        }}
      >
        {/* <div className="w-[100%] bg-orange-200">Slide 1</div>
                <div className="w-[100%] bg-blue-200">Slide 2</div>
                <div className="w-[100%] bg-yellow-200">Slide 3</div> */}

        {slides.map((item, index) => {
          return (
            <div key={index} className="w-[100%] ">
              <Slide title={item.title} image={item.image} />
            </div>
          );
        })}
      </div>

      <div className=" top-[400px] left-[50%] flex gap-4 m-auto absolute ">
        <div
          className={`w-[10px] h-[10px] rotate-45 border border-[#rotate-45] ${slideIndex === 0 ? 'bg-[#FB2E86]' : 'bg-slate-500'}`}
          onClick={() => {
            setSlideIndex(0);
          }}
        ></div>
        <div
          className={`w-[10px] h-[10px] rotate-45 border border-[#rotate-45] ${slideIndex === 1 ? 'bg-[#FB2E86]' : 'bg-slate-500'}`}
          onClick={() => {
            setSlideIndex(1);
          }}
        ></div>
        <div
          className={`w-[10px] h-[10px] rotate-45 border border-[#rotate-45] ${slideIndex === 2 ? 'bg-[#FB2E86]' : 'bg-slate-500'}`}
          onClick={() => {
            setSlideIndex(2);
          }}
        ></div>
      </div>
    </div>
  );
};

import { CiHeart } from 'react-icons/ci';
import Image from 'next/image';

export type productDataType = {
  // id: number;
  image: string;
  title: string;
  price: number;
  customHeight?: string;
};
export const ProductCard = ({
  image,
  title,
  price,
  customHeight,
}: productDataType) => {
  return (
    <div className="bg-orange-300 rounded-2xl">
      {/* <Image
        src="/picture/coverCarousel/image.png"
        alt="productPic"
        width={100}
        height={100}
      /> */}

      <div
        className={` relative w-full ${customHeight} overflow-hidden hover:border-black  rounded-2xl `}
      >
        <Image
          src={image}
          alt="logo"
          // width={400}
          // height={331}
          fill
          className="rounded-2xl hover:scale-125 hover:transition-all  "
          // className='object-fit: "contain"'

          // style={{ height: '331px', width: '400px' }}
          //
          // className={` rounded-2xl ${customHeight}`}
        />

        <CiHeart className="absolute z-20 top-[19px] right-[19px] text-[24px] cursor-pointer" />
      </div>
      <div className="mt-1">
        <p className="text-[14px]">{title}</p>
        <div className="font-bold mt-1">{price}</div>
      </div>
    </div>
  );
};

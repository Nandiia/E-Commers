'use client';

import Image from 'next/image';
import { productDataType } from './ProductCard';

export const CategoryProductCard = ({
  //зураг хоосон орж ирж байгаа бол undefined гэсэн алдаа заана. бас төрөл (array, string, object etc.) алдаа гарна.
  image = [
    'https://res.cloudinary.com/dtrxzxl7x/image/upload/v1727323038/kp51fijplii5kedsxmdt.png',
  ],
  title,
  price,
}: productDataType) => {
  return (
    <div>
      {/* <Image
        src="/picture/coverCarousel/image.png"
        alt="productPic"
        width={100}
        height={100}
      /> */}

      <div className={` relative w-full h-[331px]`}>
        <Image
          src={image[0]}
          alt="logo"
          fill
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="mt-1">
        <p className="text-[14px]">{title}</p>
        <div className="font-bold mt-1">{price}</div>

        <div></div>
      </div>
    </div>
  );
};

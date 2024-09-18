import Image from 'next/image';
import { productDataType } from './ProductCard';

export const CategoryProductCard = ({
  image,
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
        <Image src={image} alt="logo" fill className="rounded-2xl" />
      </div>
      <div className="mt-1">
        <p className="text-[14px]">{title}</p>
        <div className="font-bold mt-1">{price}</div>
      </div>
    </div>
  );
};

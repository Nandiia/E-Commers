import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

type ProductSaveCardItem = {
  image: string;
  title: string;
  price: number;
};

export const ProductCardSave = ({
  image,
  title,
  price,
}: ProductSaveCardItem) => {
  return (
    <div className="border rounded-2xl bg-white">
      <div className="p-4">
        <div className="flex justify-between">
          <div className=" flex gap-5">
            <div className="relative w-[100px] h-[100px] ">
              <Image
                src={image}
                fill
                alt="productPic"
                className="rounded-2xl"
                objectFit="cover"
              ></Image>
            </div>

            <div>
              <div className="text-base">{title}</div>
              <div className="text-[14px] font-bold">{price}</div>

              <button className="px-3 py-1 border rounded-full text-white bg-[#2563EB] mt-2">
                Сагслах
              </button>
            </div>
          </div>

          <FaHeart className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

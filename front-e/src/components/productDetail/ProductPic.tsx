'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ProductPicProps {
  productImage: string[] | undefined; // Массив буюу undefined байж болно
}

export type ProductType = {
  _id: string;
  productName: string;
  productImage: string[];
  price: number;
  size: string;
  category: string[];
  moreInformation?: string;
};

export const ProductPic: React.FC<ProductPicProps> = ({ productImage }) => {
  const [selectedPic, setSelectedPic] = useState<string>('');

  console.log(productImage, 'product shuudee ene chine');

  //productImage uurchlugduh burt useEffect shinechlegdene. productimage massiv bol, 0-s ih bol zuragtai bn gej uzeed setSelectedPic-g shinechlene. selectedPic state-n anhnii utga ni productImage[0] bn.
  useEffect(() => {
    if (productImage && productImage.length > 0) {
      setSelectedPic(productImage[0]);
    }
  }, [productImage]);

  return (
    <main>
      <div className="flex gap-5 items-center">
        <div className="flex flex-col gap-2 ">
          {productImage?.map((item) => {
            return (
              //   <div key={index} className="w-16 h-16 rounded">
              //     {item.productImage}
              //   </div>
              <div key={item} className="w-16 h-16 relative">
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

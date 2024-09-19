'use client';

import { Title } from '@/components/Title';

import { CategoryProductCard } from '@/components/product/CategoryProductCard';
import { productData } from '@/components/product/Product';
import { GiveReview } from '@/components/productDetail/GiveReview';
import { ProductInfo } from '@/components/productDetail/ProductInfo';
import { ProductPic } from '@/components/productDetail/ProductPic';

export default function ProductDetail() {
  return (
    <main className="max-w-screen-xl h-fit border m-auto">
      <div className="flex border gap-x-4">
        <div className=" flex-1 border">
          <div>
            <ProductPic />
          </div>
          <div></div>
        </div>

        <div className=" flex-1 border gap-6">
          <ProductInfo />
        </div>
      </div>

      <div>
        <Title>Холбоотой бараа</Title>
        <div className="grid grid-cols-4 grid-rows-3 gap-y-5 gap-x-2 mt-6">
          {productData.map((item, index) => {
            return (
              <CategoryProductCard
                key={index}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

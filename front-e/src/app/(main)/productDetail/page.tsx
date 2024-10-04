'use client';

import { api } from '@/axios';
import { Title } from '@/components/Title';

import { CategoryProductCard } from '@/components/product/CategoryProductCard';
import { ProductType } from '@/components/product/Product';

import { GiveReview } from '@/components/productDetail/GiveReview';
import { ProductInfo } from '@/components/productDetail/ProductInfo';
import { ProductPic } from '@/components/productDetail/ProductPic';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function ProductDetail() {
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    try {
      const response = await api.get('/product');

      setProducts(response.data.product as ProductType[]);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.message || 'An error occurred.');
      } else {
        toast.error('An unknown error occurred.');
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
          {products.map((product, index) => {
            return (
              <CategoryProductCard
                key={product._id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

'use client';

import { api } from '@/axios';
import { CategoryProductCard } from '@/components/product/CategoryProductCard';
import { ProductType } from '@/components/product/Product';
import { ProductInfo } from '@/components/productDetail/ProductInfo';
import { ProductPic } from '@/components/productDetail/ProductPic';
import { Title } from '@/components/Title';
import { AxiosError } from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);

  const getOneProduct = async () => {
    try {
      const response = await api.get(`/product/${id}`);
      setProduct(response.data as ProductType);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.message || 'An error occurred.');
      } else {
        toast.error('An unknown error occurred.');
      }
    }
  };

  const getAllProducts = async () => {
    const response = await api.get('/product');

    setAllProducts(response.data.product as ProductType[]);
  };

  useEffect(() => {
    getOneProduct();
    getAllProducts();
  }, [id]);

  return (
    <div>
      <main className="max-w-screen-xl  m-auto">
        <div className="flex  gap-x-4 mt-[100px]">
          <div className=" flex-1">
            <ProductPic productImage={product?.productImage} />
          </div>

          <div className=" flex-1 mt-[100px]">
            {product && (
              <ProductInfo
                category={product?.category}
                price={product?.price}
                productName={product?.productName}
                size={product?.size}
                description={product?.moreInformation}
                product={product}
              />
            )}
          </div>
        </div>

        <div className="mt-[80px]">
          <Title>Холбоотой бараа</Title>
          <div className="grid grid-cols-4 grid-rows-3 gap-y-5 gap-x-2 mt-[24px]">
            {allProducts.map((product, index) => {
              return (
                <CategoryProductCard
                  key={product._id}
                  image={product.productImage}
                  title={product.productName}
                  price={product.price}
                />
              );
            })}

            {}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;

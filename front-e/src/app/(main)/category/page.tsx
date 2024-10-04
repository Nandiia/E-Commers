'use client';
import { api } from '@/axios';
import { CategoryProductCard } from '@/components/product/CategoryProductCard';
import { ProductType } from '@/components/product/Product';
import { ProductCard } from '@/components/product/ProductCard';
import { AxiosError } from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../cart/_components/CartProvider';

const categoryData = [
  {
    categoryName: 'Малгай ',
  },
  {
    categoryName: 'Усны сав ',
  },
  {
    categoryName: 'T-shirt ',
  },
  {
    categoryName: 'Hoodie ',
  },
  {
    categoryName: 'Tee',
  },
  {
    categoryName: 'Цүнх ',
  },
];

const sizeData = [
  {
    size: 'Free',
  },
  {
    size: 'S',
  },
  {
    size: 'M',
  },
  {
    size: 'L',
  },
  {
    size: 'XL',
  },
  {
    size: '2XL',
  },
  {
    size: '2XL',
  },
];
export type CategoryType = {
  _id: string;
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
};

type sizeType = {
  size: string;
};
export default function CategoryPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>('');

  const { addProductToCart } = useCart();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await api.get('/category');
        setCategories(response.data.category as CategoryType[]);
        console.log(setCategories, 'catttt');
      } catch (err: unknown) {
        if (err instanceof AxiosError) {
          toast.error(err.response?.data?.message || 'An error occurred.');
        } else {
          toast.error('An unknown error occurred.');
        }
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get('/product', {
          params: {
            category: selectedCategory,
            // size: selectedSize,
          },
        });

        console.log(selectedCategory, 'selected');

        const sizes = response.data.product.map(
          (product: ProductType) => product.size
        );
        setSizes(sizes);

        setProducts(response.data.product as ProductType[]);
        console.log(setProducts, 'shdee');
      } catch (err: unknown) {
        if (err instanceof AxiosError) {
          toast.error(err.response?.data?.message || 'An error occurred.');
        } else {
          toast.error('An unknown error occurred.');
        }
      }
    };
    getProducts();
  }, [selectedCategory]);

  const handleSizeClick = (item: string) => {
    setSelectedSize(item); // Сонгосон size-г хадгална
  };
  console.log(sizes, 'ene bl size');

  return (
    <main className="container max-w-screen-lg h-fit m-auto mt-12 mb-[100px]">
      <div className="flex border">
        <div className="flex-2 ">
          <div className="w-[245px] h-fit ">
            <div className="flex flex-col gap-y-4">
              <h1 className="font-bold">Ангилал</h1>
              <div className="flex flex-col gap-y-2">
                {categories.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-[14px] cursor-pointer"
                      style={{
                        color: selectedCategory.includes(item._id)
                          ? 'blue'
                          : '',
                        fontWeight: selectedCategory.includes(item._id)
                          ? 'bold'
                          : '',
                      }}
                      onClick={() => {
                        setSelectedCategory((prev) => {
                          if (prev.includes(item._id)) {
                            return prev.filter((id) => id !== item._id);
                          }

                          return [...prev, item._id];
                        });
                      }}
                    >
                      {item.categoryName}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-y-4 mt-12">
              <h1 className="font-bold">Хэмжээ</h1>
              <div className="flex flex-col gap-y-2">
                {sizes.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="text-[14px] cursor-pointer"
                      style={{
                        color: selectedSize === item ? 'blue' : '',
                      }}
                      onClick={() => setSelectedSize(item)}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-3 grid-rows-5 gap-x-2 gap-y-5 overflow-scroll ">
            {products.map((product, index) => {
              return (
                <Link key={product._id} href={`/product/${product._id}`}>
                  <CategoryProductCard
                    title={product.productName}
                    image={product.productImage}
                    price={product.price}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

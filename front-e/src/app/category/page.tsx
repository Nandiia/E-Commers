import { CategoryProductCard } from '@/components/product/CategoryProductCard';
import { productData } from '@/components/product/Product';
import { ProductCard } from '@/components/product/ProductCard';

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

export const sizeData = [
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

export default function CategoryPage() {
  return (
    <main className="container max-w-screen-lg h-fit m-auto mt-12 mb-[100px]">
      <div className="flex border">
        <div className="flex-2 ">
          <div className="w-[245px] h-fit ">
            <div className="flex flex-col gap-y-4">
              <h1 className="font-bold">Ангилал</h1>
              <div className="flex flex-col gap-y-2">
                {categoryData.map((item, index) => {
                  return (
                    <p key={index} className="text-[14px]">
                      {item.categoryName}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-y-4 mt-12">
              <h1 className="font-bold">Хэмжээ</h1>
              <div className="flex flex-col gap-y-2">
                {sizeData.map((item, index) => {
                  return (
                    <p key={index} className="text-[14px]">
                      {item.size}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-3 grid-rows-5 gap-x-2 gap-y-5 overflow-scroll ">
            {productData.map((item, index) => {
              return (
                <CategoryProductCard
                  key={index}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

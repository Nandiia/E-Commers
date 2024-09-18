import { ProductCardSave } from '@/components/productSave/ProductCardSave';
import { Title } from '@/components/Title';

export const savedProductData = [
  {
    image: '/picture/coverCarousel/image.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image1.png',
    title: 'product',
    price: 10000,
  },
  {
    image: '/picture/coverCarousel/image2.png',
    title: 'product',
    price: 10000,
  },
];

export default function ProductSave() {
  return (
    <div className="w-screen bg-[#f7f7f7] ">
      <div className="border w-[622px] h-fit m-auto pt-[60px] pb-[200px]">
        <div className="flex items-center gap-2">
          <Title titleSize="text-[20px]">Хадгалсан бараа</Title>
          <div className="text-[20px] text-[#5E6166]">(3)</div>
        </div>

        <div className="mt-[18px] space-y-4">
          {savedProductData.map((item, index) => {
            return (
              <ProductCardSave
                key={index}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

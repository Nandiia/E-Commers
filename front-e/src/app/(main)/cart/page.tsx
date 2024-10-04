import { Product } from '@/components/product/Product';
import { CartComp } from './_components/CartComp';
import { useCart } from './_components/CartProvider';

const cartPage = () => {
  const {
    cart,
    removeProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    addProductToCart,
  } = useCart();

  return (
    <div className="w-screen h-fit bg-[#f7f7f7]">
      <div className="max-w-screen-xl h-fit m-auto">
        <div className="flex justify-center items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 px-3 py-1 bg-[#2563EB] text-white font-bold rounded-full ">
              1
            </div>
            <div className="w-20 border border-black"></div>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 px-3 py-1  border border-black  rounded-full ">
              2
            </div>
            <div className="w-20 border border-black"></div>
          </div>

          <div className="flex items-center">
            <div className="w-8 h-8 px-3 py-1 border border-black rounded-full ">
              3
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[58px]">
          <div className="bg-white w-fit h-fit p-8 rounded-2xl ">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-[20px]">1. Сагс </h1>
                <div className="font-bold text-gray-500">(4)</div>
              </div>

              <div>
                {cart.map((product) => {
                  return <CartComp />;
                })}
              </div>

              <CartComp />
              <CartComp />
            </div>

            <div className=" flex justify-end mt-4">
              <button className="px-9 py-2 bg-[#2563EB] rounded-[18px] text-white">
                Худалдан авах
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cartPage;

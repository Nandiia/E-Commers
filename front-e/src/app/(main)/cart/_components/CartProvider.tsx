'use client';

import { PropsWithChildren, useContext, useState } from 'react';
import { createContext } from 'react';

//DataBase deer baigaa product-n type bn. (gantshan dan product)
type ProductType = {
  _id: string;
  productName: string;
  productImage: string[];
  price: number;
  size: string;
  category: string[];
  moreInformation?: string;
};

//Cartand orson product-n yalgaa ni quantity nemegdej eswel hasagdana. (neg ner torliin baraanaas 3-g gehed ter 3-g hadgaldah cart gesen ug)
type CartProductType = {
  product: ProductType;
  quantity: number;
};

type CartContextType = {
  //sagsalsan buh baraanuudiig haruulj baigaa neg tom cart. ene ni CartProductType-n [] bn. ene ni sagsand orson baraanuud neg array bolno gesen ug um.
  cart: CartProductType[];
  removeProductFromCart: (product: ProductType) => void;
  increaseProductQuantity: (product: ProductType) => void;
  decreaseProductQuantity: (product: ProductType) => void;
  addProductToCart: (product: ProductType) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: PropsWithChildren) => {
  //zahialga hiih gej baigaa buh baraanuudiig aguulj bui undsen tom Cart. sags gesen ug. ene olon productiig aguulah tull array bn.
  const [cart, setCart] = useState<CartProductType[]>([]);

  //cart state dotorh productuudiin id-g props-r orj irj bga productiin id-tai taarch bga esgig shalgaad taarch baiwal filterteed taarahgui baigaanuudiig ni cart ruu hiij setCart-g setlene. taarch bga neg ni cart-d orohgui uchir remove hiigdene.
  const removeProductFromCart = (product: ProductType) => {
    setCart(cart.filter((p) => p.product._id !== product._id));
  };

  //cart buyu sagsruu buteegdehuun nemdeg function. cart-ruu propsoor product orj irne, ingehdee cartand baigaa buh product-uudiig neg burchlen shalgaad tuhain propsoor orj irsen budeegdehuunii id ni cartand baigaa buteegdehuuniihtei taarch bnuu gedgiig shalgaad. taarch baiwal ter buteegdehuunii medeeleliig heweer uldeegeed toog ni 1-j nemne. taarahgui bol zugeer orj irsen item buyu product-r cart-g setlene
  const increaseProductQuantity = (product: ProductType) => {
    setCart(
      cart.map((item) =>
        item.product._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  //sagsan dahi buteegdehuunuudiig neg burchlen shalgaad product.id-tai tentsej baiwal too shirhegiig ni hasaad tentsehgui buteegdehuunuudiig uurchlulgui ter chigeer ni uldeene. herwee too shirheg ni neg baiwal shuud remove hiine
  const decreaseProductQuantity = (product: ProductType) => {
    const existingProduct = cart.find((p) => p.product._id === product._id);

    //sagsan dahi buteegdehiin 1-c baga baiwal remove hiigdene.
    if (existingProduct?.quantity === 1) {
      removeProductFromCart(product);
    } else {
      setCart(
        cart.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const addProductToCart = (product: ProductType) => {
    //hereglech neg baraagaa sagslahad ter sagsalj baigaa baraa ni umnu ni sagslagdajuu guu yu gedgiig shalgaj bn. sagslagdsan bol existingProduct-ruu hiij bn.
    const existingProduct = cart.find((p) => p.product._id === product._id);

    if (existingProduct) {
      //existingProduct dotor baigaa product-g increaseProductQuantity gesen functionruu propsoor damjuulj bn
      increaseProductQuantity(product);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

//ene Cart Provider ni admin deer shaardlagui tul main-n layoutaa oroono. admin deer baraa sagslahgui tul.

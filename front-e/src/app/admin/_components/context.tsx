import { api } from '@/axios';
import { useState } from 'react';

type ProductInfoType = {
  productNAme: string;
  moreInformation: string;
  commodityCode: number;
  productImage: string[];
  price: number;
  quantity: number;
  ctaegory: string;
  size: string;
};

export const addProduct = async (productInfo: ProductInfoType) => {
  const [product, setProduct] = useState<ProductInfoType>();
  const responce = await api.post('/product', productInfo);
};

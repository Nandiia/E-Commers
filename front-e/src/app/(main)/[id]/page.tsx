'use client';

import { useParams } from 'next/navigation';

export const MainProductPage = () => {
  const { id } = useParams();
  return <div>Product Page:{id}</div>;
};

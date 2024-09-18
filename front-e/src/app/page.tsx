import { CoverCarousel } from '@/components/CoverCarousel';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/header/Nav';
import { Top } from '@/components/header/Top';
import { Product } from '@/components/product/Product';

import { SlideCover } from '@/components/SlideCover';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <CoverCarousel />
      <Product />
    </main>
  );
}

'use client';

import { api } from '@/axios';
import { CoverCarousel } from '@/components/CoverCarousel';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/header/Nav';
import { Top } from '@/components/header/Top';
import { Product } from '@/components/product/Product';

import { SlideCover } from '@/components/SlideCover';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [res, setRes] = useState<string>('');
  // useEffect(() => {
  //   api.get('/').then((res) => setRes(res.data.message));
  // }, []);

  useEffect(() => {
    const getData = async () => {
      console.log('hello world ----');

      console.log(process.env.API);

      const result = await axios.get('http://localhost:3001/');

      const res = await api.get('/');
      console.log('data fetched');
      setRes(res.data.message);
    };

    getData();
  }, []);

  return (
    <main>
      <h1>{res}</h1>

      <CoverCarousel />
      <Product />
    </main>
  );
}

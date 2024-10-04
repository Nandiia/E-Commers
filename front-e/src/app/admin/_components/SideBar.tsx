'use client';

import { api } from '@/axios';
import axios from 'axios';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import { FaListUl, FaRegClipboard } from 'react-icons/fa6';
import { IoIosPricetags, IoIosSettings } from 'react-icons/io';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { RiLayoutGridFill } from 'react-icons/ri';
import { TiPlus } from 'react-icons/ti';

export const SideBar = () => {
  const sideData = [
    {
      logo: <RiLayoutGridFill />,
      name: 'Хяналтын самбар',
    },
    {
      logo: <FaRegClipboard />,
      name: 'Захиалга',
    },
    {
      logo: <IoIosPricetags />,
      name: 'Орлого',
    },
    {
      logo: <FaListUl />,
      name: 'Бүтээгдэхүүн',
    },
    {
      logo: <IoIosSettings />,
      name: 'Тохиргоо',
    },
  ];

  // const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
  //   const files = e.currentTarget.files;
  //   if (files) setImage(files[0]);
  // };

  // const handleUpload = async () => {
  //   if (!image) return;

  //   setLoading(true);

  //   const formData = new FormData();

  //   formData.append('image', image);

  //   const res = await axios.post('http://localhost:3001/upload', formData);

  //   console.log(res.data);

  //   setLoading(false);
  // console.log(image, 'image shuu');
  // };

  type ProductInfoType = {
    productName: string;
    moreInformation: string;
    commodityCode?: number;
    productImage: string[];
    price: number;
    quantity: number;
    category: string;
    size: string;
  };

  type CategoryType = {
    categoryName: string;
    _id: string;
  };

  const [images, setImages] = useState<string[]>([]);

  const [productName, setProductName] = useState<string>('');
  const [moreInformation, setMoreInformation] = useState<string>('');
  const [commodityCode, setProductCode] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number | null>(null);
  const [category, setCategory] = useState<string>();
  const [size, setSize] = useState<string>('');
  const [product, setProduct] = useState<ProductInfoType | null>(null);

  const [allCategories, setAllCategories] = useState<CategoryType[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');

  const [createNewCategory, setCreateNewCategory] = useState<CategoryType[]>(
    []
  );

  const getAllCatgories = async () => {
    const responce = await api.get('/category');
    console.log(responce, 'category res shuu');

    setAllCategories(responce.data.category);
  };

  useEffect(() => {
    getAllCatgories();
  }, []);

  console.log(allCategories, 'aall category shdee');

  const createCategory = async () => {
    const newCategory = {
      categoryName,
    };

    try {
      const responce = await api.post('/category', newCategory);

      console.log(responce, 'category res');
      const newCategoryData = responce.data;
      setCreateNewCategory((prevCategories) => [
        ...prevCategories,
        newCategoryData,
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await api.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const imageUrl = response.data.secure_url;
        setImages((prevImages) => [...prevImages, imageUrl]);

        console.log(imageUrl, 'shuu');
      } catch (error: any) {
        if (error.response) {
          // Серверийн хариу байна (4xx, 5xx алдаанууд)
          console.error('Server response error:', error.response.data);
          console.error('Status:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {
          // Хүсэлт серверт очсон ч хариу алга
          console.error('No response received:', error.request);
        } else {
          // Хүсэлт үүсгэх үед гарсан алдаа
          console.error('Error creating request:', error.message);
        }
      }
    }
  };

  const addNewProduct = async () => {
    if (
      !productName ||
      !moreInformation ||
      !commodityCode ||
      !images ||
      !price ||
      !quantity ||
      !category ||
      !size
    ) {
      console.log('productName:', productName);
      console.log('commodityCode:', commodityCode);
      console.log('price:', price);
      console.log('quantity:', quantity);
      console.log('category:', category);
      console.log('size:', size);
      console.error('aldaa');
      return;
    }

    const newProduct: ProductInfoType = {
      productName,
      moreInformation,
      commodityCode: commodityCode!,
      productImage: images,
      price: price!,
      quantity: quantity!,
      category,
      size,
    };

    console.log(newProduct, 'new');

    try {
      const response = await api.post('/product', newProduct);
      setProduct(newProduct);
      console.log('Product added successfull', response.data);
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  console.log(category, 'LLLL');

  return (
    <div className="bg-[#f7f7f7] w-screen h-screen">
      <div className=" constainer max-w-screen-xl h-screen bg-[#f7f7f7] m-auto ">
        <div className="flex">
          <div className="flex-3 space-y-4 pt-6 w-[222px] h-screen  bg-white">
            {sideData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center  cursor-pointer hover:bg-gray-200"
                >
                  <div className="text-[24px] px-4 py-2 ">{item.logo}</div>
                  <div className=" ">{item.name}</div>
                </div>
              );
            })}
          </div>

          <div className=" w-full h-fit ">
            <div>
              <div className="flex flex-1 h-fit items-center bg-white ">
                <div className="text-[24px] px-4 py-[18px]">
                  <MdKeyboardArrowLeft />
                </div>
                <h1 className="p-4">Бүтээгдэхүүн нэмэх</h1>
              </div>
            </div>

            <div className="max-w-6xl h-fit  p-[32px]">
              <div className="flex gap-x-[26px] ">
                <div className="flex-1 space-y-6 ">
                  <div className="p-6 rounded-xl bg-white space-y-4">
                    <div className="flex flex-col ">
                      <label className="font-semibold">
                        Бүтээгдэхүүний нэр
                      </label>

                      <input
                        type="text"
                        placeholder="Нэр"
                        className="bg-[#F7F7F8] border border-[#D6D8DB] rounded-[8px] mt-2 p-2 "
                        onChange={(event) => {
                          setProductName(event.target.value);
                        }}
                      ></input>
                    </div>

                    <div className="flex flex-col">
                      <label className="font-semibold">Нэмэлт мэдээлэл</label>
                      <textarea
                        cols={50}
                        rows={2}
                        placeholder="Нэр"
                        className="bg-[#F7F7F8] border border-[#D6D8DB] rounded-[8px] mt-2 p-2"
                        onChange={(event) => {
                          setMoreInformation(event.target.value);
                        }}
                      ></textarea>
                    </div>

                    <div className="flex flex-col">
                      <label className="font-semibold">Барааны код </label>
                      <input
                        type="number"
                        placeholder="#12345678"
                        className="bg-[#F7F7F8] border border-[#D6D8DB] rounded-[8px] mt-2 p-2"
                        onChange={(event) => {
                          const value = event.target.value
                            ? Number(event.target.value)
                            : null;
                          setProductCode(value);
                        }}
                      ></input>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl">
                    <div className="flex flex-col space-y-4 p-6">
                      <label className="font-semibold">
                        Бүтээгдэхүүний зураг
                      </label>
                      <input
                        type="file"
                        placeholder="#12345678"
                        className="bg-[#F7F7F8] border border-[#D6D8DB] rounded-[8px] mt-2 p-2 "
                        // onChange={handleChangeFile}
                        onChange={handleAddImage}
                      ></input>

                      <div className="w-fit  h-fit border flex gap-[10px]">
                        {images.map((item) => {
                          return (
                            <div
                              key={item}
                              className="w-[125px] h-[125px] border border-red-300 relative"
                            >
                              <Image
                                src={item}
                                fill
                                alt="product imgs"
                                className="absolute object-cover"
                              ></Image>
                            </div>
                          );
                        })}
                      </div>

                      <button
                        className="bg-gray-600 p-3 text-white rounded-lg"
                        // onClick={handleUpload}
                      >
                        {loading ? '... Uploading' : 'Upload'}
                      </button>
                    </div>
                  </div>

                  <div className="flex p-6 bg-white rounded-xl justify-between">
                    <div className="flex flex-col">
                      <label className="font-semibold">Үндсэн үнэ </label>
                      <input
                        type="number"
                        placeholder="Үндсэн үнэ"
                        className="bg-[#F7F7F8] border border-[#D6D8DB] rounded-[8px] mt-2 p-2  "
                        onChange={(event) => {
                          const value = event.target.value
                            ? Number(event.target.value)
                            : null;
                          setPrice(value);
                        }}
                      ></input>
                    </div>

                    <div className="flex flex-col">
                      <label className="font-semibold">
                        Үлдэгдэл тоо ширхэг
                      </label>
                      <input
                        type="number"
                        placeholder="Үлдэгдэл тоо ширхэг"
                        className="bg-[#F7F7F8] border border-[#D6D8DB] rounded-[8px] mt-2 p-2"
                        onChange={(event) => {
                          const value = event.target.value
                            ? Number(event.target.value)
                            : null;
                          setQuantity(value);
                        }}
                      ></input>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="flex flex-col p-6 bg-white rounded-xl justify-between gap-4">
                    <div className="flex flex-col">
                      <label className="font-semibold"> Шинэ ангилал </label>
                      <input
                        className="bg-[#F7F7F8] border border-[#D6D8DB] rounded-[8px] mt-2 p-2"
                        onChange={(event) => {
                          setCategoryName(event.target.value);
                        }}
                      ></input>

                      <button
                        className="bg-gray-600 p-3 text-white rounded-lg mt-2"
                        onClick={createCategory}
                      >
                        Add category
                      </button>
                    </div>

                    <div className="flex flex-col">
                      <label className="font-semibold">Ерөнхий ангилал </label>
                      <select
                        className="bg-[#F7F7F8] border border-[#D6D8DB] rounded-[8px] mt-2 p-2"
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                      >
                        {allCategories?.map((item, index) => {
                          return (
                            <option value={item._id} key={index}>
                              {item?.categoryName}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 space-y-6">
                    <div className="text-2xl font-semibold">Төрөл</div>

                    <div>
                      <div className="flex gap-6 ">
                        <div>Өнгө</div>
                        <div className="p-[10px] bg-[#ECEDF0] rounded-full">
                          <TiPlus />
                        </div>
                      </div>

                      <div className="flex gap-6 items-center mt-3">
                        <div>Хэмжээ</div>
                        <input
                          type="string"
                          placeholder="Хэмжээ"
                          className="border p-2 rounded-md"
                        ></input>

                        <button className="p-[10px] bg-[#ECEDF0] rounded-full">
                          <TiPlus />
                        </button>
                      </div>
                      <label>Үүсгэсэн хэмжээнүүд</label>
                      <select></select>
                    </div>

                    <button className="px-4 py-[10px] border border-[#D6D8DB] rounded-[8px]">
                      Төрөл нэмэх
                    </button>
                  </div>

                  <div className="flex flex-col space-y-2 bg-white rounded-xl p-6">
                    <label>Таг</label>
                    <textarea
                      name="tag"
                      id=""
                      rows={2}
                      cols={20}
                      placeholder="Таг нэмэх ..."
                      className="py-3 px-2 border border-[#D6D8DB] rounded-xl bg-[#F7F7F8]"
                    ></textarea>
                    <p className="text-[#5E6166] text-[14px]">
                      Санал болгох: Гутал , Цүнх , Эмэгтэй{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-6 pr-8 ">
              <button className="px-6 py-4 border border-[#D6D8DB] bg-white rounded-lg text-[18px] font-semibold">
                Ноорог
              </button>
              <button
                className="px-6 py-4 border border-[#D6D8DB] bg-black text-white rounded-lg text-[18px] font-semibold"
                onClick={addNewProduct}
              >
                Нийтлэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

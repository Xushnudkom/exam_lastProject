"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import click from "@/public/proucts/click.png";
import payme from "@/public/proucts/payme.png";
import Link from 'next/link'
import Home from '@/public/ProductsSection/home.svg'
import Arrow from '@/public/ProductsSection/right_arrow.svg'
import Modal from "@/app/choosepayment/page";
import basket from "@/service/basket.service";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await basket.get();
      console.log("API Response:", response);
      const initializedProducts = response.data.map((product) => ({
        ...product,
        count: product.count || 0,
      }));
      
      setProducts(initializedProducts);
    } catch (error) {
      console.log("Error fetching data:", error);
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const incrementCount = (id) => {
    setProducts(
      products.map((product) =>
        product.product_id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const decrementCount = (id) => {
    setProducts(
      products.map((product) =>
        product.product_id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const deleteCard = async (id) => {
    const updatedProducts = products.filter(
      (product) => product.product_id !== id
    );
    setProducts(updatedProducts);
    try {
      await basket.basketdel(id);
      console.log("Product deleted successfully");
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
      setError("Failed to delete product. Please try again later.");
    }
  };

  const totalQuantity = products.reduce(
    (total, product) => total + product.count,
    0
  );
  const totalPrice = products.reduce(
    (total, product) => total + product.count * product.cost,
    0
  );

  useEffect(() => {
    getData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        handleClose={handleClose}
        handleOpen={() => handleOpen(false)}
      />
      <div className="lg:hidden flex items-center justify-between p-0 bg-[#F2F2F2]">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <AiOutlineClose className="text-white text-2xl" />
          ) : (
            <AiOutlineMenu className="text-white text-2xl" />
          )}
        </button>
      </div>
      <div className="bg-custom-gray pt-2 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-1">
          <div className='flex gap-2 sm:gap-4 pb-4 items-center'>
            <Image src={Home} alt='Home' className='w-5 h-5'/>
            <Link href="/">
              <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
            </Link>
            <Image src={Arrow} alt='Arrow' className='w-5 h-5'/>
            <Link href="/shopping">
              <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Корзина</p>
            </Link>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
            <div className="w-full max-w-full sm:max-w-md lg:max-w-[600px] bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center pb-4">
                <h1 className="text-lg sm:text-[24px] font-bold">Ваша корзина</h1>
                <button onClick={() => setProducts([])} className="text-red-500 text-sm font-medium sm:text-[16px] sm:font-medium">
                  Очистить все
                </button>
              </div>
              <div className="space-y-4  rounded-md">
                {products.map((product) => (
                  <div
                    key={product.product_id}
                    className="flex flex-col bg-[#F2F2F2] sm:flex-row border rounded-lg bg-custom-gray overflow-hidden p-4 relative"
                  >
                    <button
                      onClick={() => deleteCard(product.product_id)}
                      className="absolute top-2 right-2 text-red-500"
                    >
                      <DeleteOutlineOutlinedIcon />
                    </button>
                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-24  sm:w-32 sm:h-32 flex-shrink-0">
                        <Image
                          src={product.image_url[0]}
                          alt={product.product_name}
                          width={128}
                          height={128}
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="font-bold text-lg mb-2">
                          <h1 className="text-base sm:text-[24px] sm:ml-[-20px] mt-[20px] lg:mt-[-30px] mb-[30px] text-center">{product.product_name}</h1>
                        </div>
                        <div className="flex items-center  space-x-2">
                          <button
                            onClick={() => decrementCount(product.product_id)}
                            className="bg-white ml-0 lg:ml-[40px] border rounded-full w-8 font-extrabold h-8 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span>{product.count}</span>
                          <button
                            onClick={() => incrementCount(product.product_id)}
                            className="bg-white border rounded-full w-8 h-8 font-extrabold flex items-center justify-center"
                          >
                            +
                          </button>
                          <span className="text-[16px] lg:text-[20px] font-medium">
                            {(
                              product.count * product.cost
                            ).toLocaleString()}{" "}
                            uzs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="pt-4 text-blue-600">Все информация о доставке</h3>
              <p className="max-w-xs sm:max-w-md">
                Если у вас имеются вопросы, позвоните по номеру: <span className="text-blue-600">+998 (99) 995 55 65</span>{" "}
              </p>
            </div>
            <div className="w-full max-w-full sm:max-w-md lg:max-w-[600px] mt-6 lg:mt-0 bg-white shadow-lg rounded-lg p-4">
              <div className="text-[24px] font-bold mb-4">Итого</div>
              <div className="flex justify-between mb-4">
                <p>Кол-во товаров:</p>
                <p className="font-semibold text-[20px]">{totalQuantity}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Сумма:</p>
                <p className="font-semibold text-[20px]">
                  {totalPrice.toLocaleString()} UZS
                </p>
              </div>
              <div className="text-lg font-semibold mb-4">Ваши данные</div>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Имя / Фамилия
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Имя / Фамилия"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Ваш номер
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="+998 _ _ _ _ _ _ _"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="address"
                  >
                    Адрес доставки
                  </label>
                  <div className="relative">
                    <input
                      id="address"
                      type="text"
                      placeholder="Область/город/улица/дом"
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0 mt-2 mr-2 text-yellow-500"
                    >
                      <svg
                        className="w-6 h-6 bg-[#FBD029]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="text-lg font-semibold mb-4">Тип оплаты</div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    type="button"
                    onClick={handleOpen}
                    className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                  >
                    <Image src={click} alt="click" className="w-24 h-10"/>
                  </button>
                  <button
                    type="button"
                    className="flex justify-center items-center px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                  >
                    <Image
                      src={payme}
                      alt="payme"
                      className="w-20 h-10"
                    />
                  </button>
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                  >
                    Через карту
                  </button>
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                  >
                    Банковский счёт
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 mt-4 bg-[#FBD029] text-black rounded-lg font-semibold"
                >
                  Купить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

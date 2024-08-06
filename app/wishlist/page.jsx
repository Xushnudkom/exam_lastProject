"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Like from "@/service/like.service";
import Image from "next/image";
import Home from '@/public/ProductsSection/home.svg';
import Arrow from '@/public/ProductsSection/right_arrow.svg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";

const Wishlist = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await Like.get();
      console.log(response);
      const productsWithLikes = response.data.products.map(product => ({
        ...product,
        liked: true,
      }));
      setData(productsWithLikes || []);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLike = async (productId) => {
    try {
      const response = await Like.postLike(productId);
      if (response) {
        const productsWithLikeState = data.map((product) =>
          product.product_id === productId
            ? { ...product, liked: !product.liked }
            : product
        );
        setData(productsWithLikeState);
      }
      window.location.reload()
    } catch (error) {
      console.error('Error liking the product:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-1">
        <div className='flex gap-2 pt-[10px] ml-[25px] sm:ml-0 sm:gap-4 pb-4 items-center'>
          <Image src={Home} alt='Home' className='w-5 h-5' />
          <Link href="/">
            <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
          </Link>
          <Image src={Arrow} alt='Arrow' className='w-5 h-5' />
          <Link href="/shopping">
            <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Корзина</p>
          </Link>
        </div>
        <h1 className="text-[24px] text-[#FBD029] sm:text-black mt-[20px] sm:mt-0 ml-[25px] sm:ml-0">Products you like</h1>
        <div className="flex flex-wrap ml-[10px] md:ml-0 rounded-lg gap-4 md:gap-1 mt-4">
          {data.map((product) => (
            <div key={product.product_id} className="relative m-4">
              <div className="w-[300px] h-[350px] bg-white flex flex-col items-center justify-between relative shadow-md">
              <div className="absolute ml-[270px]">
              <Button
              onClick={(e) => {
                e.stopPropagation();
                handleLike(product.product_id);
              }}
              className="  p-1"
              style={{
                minWidth: "unset",
                padding: "0",
                color: product.liked ? "red" : "white",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              }}
            >
              {product.liked ? (
                <FavoriteIcon style={{ color: "red", fontSize: 24 }} />
              ) : (
                <FavoriteBorderIcon style={{ color: "black", fontSize: 24 }} />
              )}
            </Button>
              </div>
                <div className="w-[200px] h-[194px] grid justify-center items-center z-[999]">
                  <img
                    src={product.image_url[0]}
                    alt={product.product_name}
                    width={150}
                    height={194}
                  />
                </div>
                <div className="px-3 text-center">
                  <h1 className="text-[14px] font-medium sm:text-[16px] md:text-[18px]">
                    {product.product_name}
                  </h1>
                  <p className="text-red-700 font-bold text-[16px] sm:text-[18px] md:text-[20px]">
                    {product.cost} uzs
                  </p>
                </div>
                <Link
                  onClick={() => Cookie.set("product_id", product.product_id)}
                  href={`/${product.product_id}`}
                  className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg text-center text-[14px] sm:text-[16px] md:text-[18px]"
                >
                  Корзина
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'
import Link from "next/link";
import Case from "@/public/mainimg/icon_shopping.svg";
import Heart from '@/public/mainimg/icon_like.svg';
import { getProductApi } from "@/service/products.service";
import likeService from "@/service/like.service";
import { Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/router';
import Basket from "@/service/basket.service";
import {Button} from "@mui/material";

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await getProductApi(1, 4);
      if (response.status === 200) {
        const productsWithLikeState = response.data.products.map((product) => ({
          ...product,
          liked: false,
        }));
        setData(productsWithLikeState);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handleLikeClick = async (productId) => {
    const product = data.find((product) => product.product_id === productId);
    if (!product) return;

    try {
      if (product.liked) {
        await likeService.unLike(productId);
        toast.success("Removed from wishlist");
      } else {
        await likeService.postLike(productId);
        toast.success("Понравившийся товар");
      }

      setData((prevData) =>
        prevData.map((product) =>
          product.product_id === productId ? { ...product, liked: !product.liked } : product
        )
      );
    } catch (error) {
      console.error("Error updating like status:", error);
      toast.error("Error updating wishlist");
    }
  };

  const handleBasket = async (id) => {
    try {
      const product = { productId: id, quantity: 1 };
      const response = await Basket.basketPost(product);
      console.log("Shopping Response:", response);
      if (response.data === true) {
        toast.success("Продукта в корзину добавился.");
        router.push('/shopping');
      } else {
        console.error("Продукта не добавился", response);
      }
    } catch (error) {
      if (error.message === "EOF") {
        console.error("EOF");
      } else {
        toast.error("Продукта не добавился");
      }
    }
  };

  return (
    <section className="mb-6 px-2 md:px-0">
      <ToastContainer />
      <div className="grid lg:grid lg:grid-cols-3 lg:gap-4 gap-6">
        {data.length > 0 ? (
          data.map((product) => (
            <div key={product.product_id} className="w-[290px] sm:w-[265px] bg-white rounded-t-md relative pt-4 mb-4">
              <div className="absolute ml-[240px] mt-[-10px]">
             <Button
              onClick={(e) => {
                e.stopPropagation();
                handleLikeClick(product.product_id);
              }}
              className="p-1"
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
              <div className="flex justify-center">
                <Box 
                  sx={{
                    mt: '15px',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <div className="relative w-[200px] h-[170px]">
                    {product.image_url && product.image_url.length > 0 ? (
                      <Link href={`/product/${product.product_id}`}>
                        <Image
                          src={product.image_url[0]}
                          alt="Product Image"
                          className="object-cover rounded-md transition-transform duration-z group-hover:scale-110"
                          layout="fill"
                        />
                      </Link>
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        No Image
                      </div>
                    )}
                  </div>
                </Box>
              </div>
              <div className="ml-4 mt-2">
                <p className="text-[17px] h-[50px] mb-5 font-sans w-[216px] font-medium">
                  {product.product_name}
                </p>
                <p className="text-[20px] mb-5 text-[#FF1313] font-sans font-bold mt-1">
                  {product.cost} <span className="text-[18px] font-medium">uzs</span>
                </p>
              </div>
              
              <button onClick={() => handleBasket(product.product_id)} className="flex w-full p-4 rounded-b-md bg-[#FBD029] items-center justify-center font-normal hover:bg-[#dcbb4e]">
                <Image src={Case} alt="Shop_Icon" />
                Корзина
              </button>
            </div>
          ))
        ) : (
          <div>No products available</div>
        )}
        {loading && <div className="flex justify-center mt-4">Loading...</div>}
      </div>
    </section>
  );
};

export default Index;

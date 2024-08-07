"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import cart from "@/public/mainimg/icon_shopping.svg";
import share from "@/public/Aboutus/u_share-alt.svg";
import { useParams } from "next/navigation";
import http from "@/api/interseptors";
import Link from "next/link";
import Basket from "@/service/basket.service";
import Comment from "@/service/comment.service";
import avatar from "@/public/proucts/avatar.png";
import Home from '@/public/ProductsSection/home.svg';
import Arrow from '@/public/ProductsSection/right_arrow.svg';
import sliders from '@/public/proucts/sliders.png'
import { Button } from "@mui/material";

const SingleProductPage = () => {
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const { id } = useParams();

  const getData = async () => {
    try {
      const { data } = await http.get(`/product/${id}`);
      setProduct(data);
      if (data.image_url && data.image_url.length > 0) {
        setSelectedImage(data.image_url[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleBasket = async (id) => {
    try {
      const product = { productId: id, quantity: 1 };
      const response = await Basket.basketPost(product);
      console.log("Basket Response:", response);
      if (response.data === true) {
        console.log("Product added to basket successfully.");
      } else {
        console.error("Failed to add product to basket:", response);
      }
    } catch (error) {
      if (error.message === "EOF") {
        console.error(
          "Server returned an empty response. Please try again later."
        );
      } else {
        console.error("Error adding product to basket:", error);
      }
    }
  };

  const getComments = async (id) => {
    try {
      const response = await Comment.get(id);
      console.log(response);
      setComments(response?.Comment);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const commentData = {
        productId: id,
        text: newComment,
      };
      const response = await Comment.post(commentData);
      console.log(response);
      setNewComment("");
      getComments(id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getComments(id);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { product_name, description, made_in, count, cost, image_url } = product;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-7">
      <div className='flex gap-3 items-center mb-1'>
        <Image src={Home} alt='Home' />
        <Link href="/">
          <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
        </Link>
        <Image src={Arrow} alt='Arrow' />
        <Link href="/product">
          <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Продукты</p>
        </Link>
        <Image src={Arrow} alt='Arrow' />
        <p className='text-[#1F1D14] text-sm sm:text-base'>{product_name}</p>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-[40px] rounded-lg">
        <div className="w-full max-w-[600px] h-[530px] flex flex-col justify-center items-center bg-white rounded-xl">
          <div>
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt={product_name}
                width={400}
                height={500}
              />
            ) : (
              <div>
                <Image
                  src="/path/to/fallback/image" // Provide a fallback image path
                  alt="Fallback product image"
                  width={370}
                  height={370}
                />
              </div>
            )}
          </div>
          <div className="flex gap-2 mt-4">
            {image_url && image_url.length > 0 && image_url.map((url, index) => (
              <div
                key={index}
                className="w-20 h-20 bg-white p-2 border-2 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(url)}
              >
                <Image
                  src={url}
                  alt={`Thumbnail ${index}`}
                  className="w-[40px] h-[40px] object-cover"
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-[600px] h-[530px] p-8 bg-white rounded-lg mb-[40px]">
          <h1 className="text-2xl font-bold">{product_name}</h1>
          <p className="mt-2 text-gray-700">{description}</p>
          <p className="mt-2 text-gray-700">В наличии: {count} шт.</p>
          <p className="mt-2 text-gray-700">Страна производитель: {made_in}</p>
          <p className="mt-4 text-2xl font-bold">{cost} UZS / 1 шт.</p>
          <div className="flex gap-4 mt-4">
            <Button
              className="flex items-center gap-[4px] px-4 py-2 bg-[#FBD029] text-black rounded-md"
              onClick={() => handleBasket(product.product_id)}
            >
              <Image src={cart} alt="cart" />
              Корзина
            </Button>
            <button className="flex items-center gap-[4px] px-4 py-2 border-2 border-[#FBD029] text-[#FBD029] rounded-md">
              <Image src={sliders} alt="slider" />
              Сравнить
            </button>
          </div>
          <div className="mt-[30px]">
            <button className="flex items-center gap-[4px] px-4 py-2 border-2 border-gray-300 rounded-md">
              <Image src={share} alt="share" />
              Поделиться
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 container pb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Описание</h2>
          <h4 className="text-lg font-semibold">{product.product_name}</h4>
          <p className="text-base mt-2 mb-6 text-[#FBD029]">
            Oписание: {product.description}
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Цена:</h3>
              <p className="text-lg text-[#FBD029]"> {product.cost} so'm</p>
            </li>
            <li className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Цвета:</h3>
              <p className="text-base text-[#FBD029]">{product.color}</p>
            </li>
            <li className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Возраст:</h3>
              <p className="text-base text-[#FBD029]">
                {product.age_min} - {product.age_max} лет
              </p>
            </li>
            <li className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Производство:</h3>
              <p className="text-base text-[#FBD029]">{product.made_in}</p>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Отзывы</h2>            
            <div className="space-y-4">
              {comments && comments.length > 0 ? (
                comments.map((comment, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Image
                      src={avatar}
                      alt="User avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-bold">{comment.OwnerID}</p>
                      <p className="text-sm text-gray-600">Клиент</p>
                      <p className="mt-1 text-sm text-gray-600">
                        {comment.Message}
                      </p>
                      <div className="flex mt-2 text-[#FBD029]">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span className="text-gray-400">★</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">Нет отзывов.</p>
              )}
            </div>
            <a href="#" className="block mt-4 text-[#FBD029]">
              Все отзывы
            </a>
  
          </div>
          <form className="mt-4" onSubmit={handleCommentSubmit}>
            <label htmlFor="comment" className="block mb-[20px] font-medium text-[25px] text-gray-700">
              Оставить комментарий:
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-[#FBD029]"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 mt-2 text-sm font-medium text-white bg-[#FBD029] rounded-md hover:bg-[#FBD029] focus:outline-none focus:ring focus:ring-yellow-300"
            >
              Добавить
            </button>
          </form>
        </div>
      </div>
    
  );
};

export default SingleProductPage;



// "use client";
// import React, { useCallback, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper/modules";
// import Image from "next/image";
// import Link from "next/link";
// import CaruselProduct from "@/components/main/carusel-prodoct";
// import { useParams } from "next/navigation";
// import { getProductId } from "@/service/products.service"; 
// import avatar from "@/public/proucts/avatar.png";
// import cart from "@/public/mainimg/icon_shopping.svg";
// import sliders from "@/public/proucts/sliders.png";
// import share from "@/public/Aboutus/u_share-alt.svg";
// import Home from '@/public/ProductsSection/home.svg';
// import Arrow from '@/public/ProductsSection/right_arrow.svg';

// const Index = () => {
//   const { id } = useParams();
//   const [products, setProducts] = useState([]);

//   const fetchProduct = useCallback(async () => {
//     try {
//       if (id) {
//         const productId = Array.isArray(id) ? id[0] : id;
//         const response = await getProductId(productId);
//         setProducts(Array.isArray(response) ? response : [response]);
//         console.log('Fetched Products:', Array.isArray(response) ? response : [response]);
//       }
//     } catch (error) {
//       console.error("Error fetching product or comments:", error);
//     }
//   }, [id]);

//   useEffect(() => {
//     fetchProduct();
//   }, [fetchProduct]);

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-7">
//       <div className='flex gap-3 items-center mb-1'>
//         <Image src={Home} alt='Home' />
//         <Link href="/">
//           <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
//         </Link>
//         <Image src={Arrow} alt='Arrow' />
//         <Link href="/product">
//           <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Продукты</p>
//         </Link>
//         <Image src={Arrow} alt='Arrow' />
//         <p className='text-[#1F1D14] text-sm sm:text-base'>Гантель виниловая, 2 x 3 кг</p>
//       </div>
//       <div className="p-4 md:p-6 bg-gray-100">
//         <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-6 rounded-lg bg-white">
//           <div className="w-full md:w-1/2">
//             <Swiper
//               spaceBetween={10}
//               slidesPerView={1}
//               navigation
//               pagination={{ clickable: true }}
//               className="w-full rounded-xl overflow-hidden"
//               modules={[Navigation, Pagination]}
//             >
//               {products.map((item, index) => (
//                 <SwiperSlide key={index} className="flex justify-center py-10">
//                   <div className="w-[713px] h-[441px] relative">
//                     <Image
//                       src={item.image_url[0] || fallbackImage}
//                       alt={`Product image ${index + 1}`}
//                       width={370}
//                       height={370}
//                       className="object-cover"
//                       onError={(e) => {
//                         e.target.src = fallbackImage;
//                         console.error(`Error loading image at ${item.image_url[0]}`, e);
//                       }}
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//             <div className="flex gap-2 mt-4 overflow-x-auto">
//               {products.map((item, index) => (
//                 <div
//                   key={index}
//                   className="w-16 h-16 md:w-20 md:h-20 bg-white p-2 border-2 border-[#FBD029] rounded-lg overflow-hidden"
//                 >
//                   <div className="w-full h-full bg-white border-2 border-yellow-500 rounded-lg overflow-hidden">
//                     <Image
//                       src={item.image_url[0] || fallbackImage}
//                       alt={`Thumbnail image ${index + 1}`}
//                       className="w-full h-full object-cover"
//                       onError={(e) => {
//                         e.target.src = fallbackImage;
//                         console.error(`Error loading image at ${item.image_url[0]}`, e);
//                       }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 p-4 md:p-6 bg-white">
//             <h1 className="text-xl sm:text-2xl font-bold">{product_name}</h1>
//             <p className="mt-2 text-gray-700 text-sm sm:text-base">
//               В составе томатов в большом количестве содержатся сахары, ликопин,
//               пектин, бетакаротин, витамины.
//             </p>
//             <p className="mt-2 text-gray-700 text-sm sm:text-base">В наличии: 2 шт.</p>
//             <p className="mt-2 text-gray-700 text-sm sm:text-base">Страна производитель: Китай</p>
//             <p className="mt-4 text-xl sm:text-2xl font-bold">220 000 UZS / 1 шт.</p>
//             <div className="flex flex-col md:flex-row gap-4 mt-4">
//               <button className="flex items-center gap-2 px-4 py-2 bg-[#FBD029] text-black rounded-md">
//                 <Image src={cart} alt="cart" width={24} height={24} />
//                 Корзина
//               </button>
//               <button className="flex items-center gap-2 px-4 py-2 border-2 border-[#FBD029] text-[#FBD029] rounded-md">
//                 <Image src={sliders} alt="slider" width={24} height={24} />
//                 Сравнить
//               </button>
//             </div>
//             <div className="mt-6">
//               <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-md">
//                 <Image src={share} alt="share" width={24} height={24} />
//                 Поделиться
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="mt-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container">
//             <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
//               <h2 className="text-xl sm:text-2xl font-bold mb-4">Описание</h2>
//               <h4 className="text-lg sm:text-xl font-semibold">
//                 Гантель виниловая, 2 х 3 кг
//               </h4>
//               <p className="mt-2 text-gray-700 text-sm sm:text-base">
//                 В составе томатов в большом количестве содержатся сахары,
//                 клетчатка, пектины, бета-каротин, витамины.
//               </p>
//               <ul className="mt-4 flex flex-wrap gap-4">
//                 <li className="w-full md:w-1/2">
//                   <h3 className="text-lg">Вес гантела:</h3>
//                   <p className="text-gray-700">5кг</p>
//                 </li>
//                 <li className="w-full md:w-1/2">
//                   <h3 className="text-lg">Цвета:</h3>
//                   <p className="text-gray-700">Синий, Красный</p>
//                 </li>
//               </ul>
//             </div>
//             <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
//               <h2 className="text-xl sm:text-2xl font-bold">Отзывы</h2>
//               <div className="mt-4 flex flex-col gap-4">
//                 <div className="flex gap-4">
//                   <div>
//                     <Image
//                       src={avatar}
//                       alt="User avatar"
//                       width={60}
//                       height={60}
//                       className="rounded-full"
//                     />
//                   </div>
//                   <div>
//                     <p className="font-bold">Шахзод Анаров</p>
// <p className="text-gray-700">Клиент</p>
// <p className="text-gray-700 text-sm sm:text-base">
// В составе томатов в большом количестве содержатся сахары,
// ликопин, пектин, бетакаротин, витамины.
// </p>
// <div className="flex mt-1">
// <span className="text-yellow-500">★</span>
// <span className="text-yellow-500">★</span>
// <span className="text-yellow-500">★</span>
// <span className="text-yellow-500">★</span>
// <span className="text-gray-400">★</span>
// </div>
// </div>
// </div>
// </div>
// <a href="#" className="mt-4 text-yellow-400 block">
// Все отзывы
// </a>
// </div>
// </div>
// </div>
// <div className="pt-8">
// <h1 className="text-xl sm:text-2xl md:text-3xl ml-4 md:ml-6 mb-4">Акция</h1>
// <CaruselProduct text="Акция" bg="#FF1C1C" />
// </div>
// </div>
// </div>
// );
// }

// export default Index;

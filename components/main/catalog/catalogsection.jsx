"use client";
import Image from 'next/image';
import Trenajor from '../../../public/catalog/trenajor.svg';
import Myach from '../../../public/catalog/myach.svg';
import Obuv from '../../../public/catalog/obuv.svg';
import Odejda from '../../../public/catalog/odejda.svg';
import VodniySport from '../../../public/catalog/vodniysport.svg';
import GorniySport from '../../../public/catalog/gorniysport.svg';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Index() {
  return (
    <>
      <div className='bg-white'>
        <div className='justify-start w-full items-center container mx-auto px-10 gap-6'>
          <h1 className='text-[#1F1D14] text-[32px] font-semibold'>Каталог</h1>
          <Swiper
            slidesPerView={6}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            loop={true}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide className='catalog_swipper'>
              <div className='bg-[#D3E5F2] pb-[36px] pl-[40px] pr-[40px] rounded-2xl'>
                <button>
                  <h2 className='text-[20px] font-normal pb-[60px] pt-[25px]'>Тренажоры</h2>
                  <Image src={Trenajor} alt='...' />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='catalog_swipper'>
              <div className='bg-[#E2C6BE] pb-[36px] pl-[10px] pr-[10px] rounded-2xl'>
                <button>
                  <h2 className='text-[20px] font-normal pb-[60px] pt-[25px]'>Мячи</h2>
                  <Image src={Myach} alt='...' />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='catalog_swipper'>
              <div className='bg-[#DADBE0] pb-[36px] pl-[10px] pr-[10px] w-[400px] rounded-2xl'>
                <button>
                  <h2 className='text-[20px] font-normal pb-[30px] pt-[25px] justify-start w-full'>Спортивные обуви</h2>
                  <Image src={Obuv} alt='...' />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='catalog_swipper'>
              <div className='bg-[#E2EEC0] pb-[36px] pl-[40px] pr-[40px] rounded-2xl'>
                <button>
                  <h2 className='text-[20px] font-normal pb-[30px] pt-[25px]'>Спортивные одежды</h2>
                  <Image src={Odejda} alt='...' />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='catalog_swipper'>
              <div className='bg-[#C2BCE8] pb-[36px] pl-[40px] pr-[40px] rounded-2xl'>
                <button>
                  <h2 className='text-[20px] font-normal pb-[30px] pt-[25px]'>Водный спорт</h2>
                  <Image src={VodniySport} alt='...' />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='catalog_swipper'>
              <div className='bg-[#ABA520] pb-[36px] pl-[40px] pr-[40px] rounded-2xl'>
                <button>
                  <h2 className='text-[20px] font-normal pb-[30px] pt-[25px]'>Горный спорт</h2>
                  <Image src={GorniySport} alt='...' />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='catalog_swipper'>
              <div className='bg-[#D3E5F2] pb-[36px] pl-[40px] pr-[40px] rounded-2xl'>
                <button>
                  <h2 className='text-[20px] font-normal pb-[60px] pt-[25px]'>Тренажоры</h2>
                  <Image src={Trenajor} alt='...' />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='catalog_swipper'>
              <div className='bg-[#E2C6BE] pb-[36px] pl-[10px] pr-[10px] rounded-2xl'>
                <button>
                  <h2 className='text-[20px] font-normal pb-[60px] pt-[25px]'>Мячи</h2>
                  <Image src={Myach} alt='...' />
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

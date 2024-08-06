import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Home from '@/public/ProductsSection/home.svg';
import Arrow from '@/public/ProductsSection/right_arrow.svg';
import YellowIcon from '@/public/Aboutus/yellow_icon.svg';
import Share from '@/public/Aboutus/u_share-alt.svg';
import Print from '@/public/Aboutus/fi_printer.svg';
import CaruselProduct from "@/components/main/carusel-prodoct";

const Index = () => {
  return (
    <>
      <div className='container mx-auto px-4 sm:px-10 py-7'>
        <div className='flex gap-3 items-center'>
          <Image src={Home} alt='Home' className='w-6 h-6' />
          <Link href="/">
            <p className='text-sm sm:text-[16px] opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
          </Link>
          <Image src={Arrow} alt='Arrow' className='w-4 h-4' />
          <Link href="/product">
            <p className='text-sm sm:text-[16px] opacity-70 hover:text-[#FBD029] hover:opacity-100'>Продукты</p>
          </Link>
          <Image src={Arrow} alt='Arrow' className='w-4 h-4' />
          <p className='text-sm sm:text-[16px] text-[#1F1D14]'>Контакты</p>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 mt-7'>
          <div className='bg-white rounded-md p-4 sm:p-6 w-full sm:w-[187px] h-auto'>
            <div className='flex items-center gap-2'>
              <Image src={YellowIcon} alt='Contacts' className='w-6 h-6' />
              <p className='text-sm sm:text-base'>Контакты</p>
            </div>
            <div className='mt-4'>
              <p className='text-center text-sm sm:text-base'>Аддресс</p>
            </div>
          </div>

          <div className='bg-white rounded-md p-4 sm:p-6 flex-1'>
            <h1 className='text-lg sm:text-[24px] font-semibold mb-4'>Контакты</h1>
            <p className='text-sm sm:text-base mb-4'>+998(90) 565-85-85</p>
            <p className='text-sm sm:text-base mb-6'>info@gmail.com</p>
            <div className='flex gap-4 justify-end'>
              <button className='flex items-center gap-2 text-sm sm:text-base'>
                <p>Поделиться:</p>
                <Image src={Share} alt='Share' className='w-5 h-5' />
              </button>
              <button className='flex items-center gap-2 text-sm sm:text-base'>
                <p>Распечатать:</p>
                <Image src={Print} alt='Print' className='w-5 h-5' />
              </button>
            </div>
          </div>
        </div>

        <div className="pl-12 pt-12 lg:pl-7 lg:pt-28 ">
          <h1 className="text-xl font-medium sm:text-[32px]  ml-4 sm:ml-[-10px] mb-6">Акция</h1>
          <CaruselProduct text="Акция" bg="#FF1C1C" />
        </div>
      </div>
    </>
  );
}

export default Index;

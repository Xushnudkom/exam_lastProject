import React from 'react'
import Useful from './index'
import Image from 'next/image'
import Home from '@/public/ProductsSection/home.svg'
import Arrow from '@/public/ProductsSection/right_arrow.svg'
import CaruselProduct from "@/components/main/carusel-prodoct";
import Link from 'next/link'

const Index = () => {
  return (
    <>
      <div className='container mx-auto px-4 sm:px-6 lg:px-10 py-7'>
        <div className='flex gap-2 sm:gap-3 items-center'>
          <Image src={Home} alt='Home' className='w-5 h-5 sm:w-6 sm:h-6'/>
          <Link href="/">
            <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
          </Link>
          <Image src={Arrow} alt='Arrow' className='w-4 h-4 sm:w-5 sm:h-5'/>
          <p className='text-sm sm:text-base text-[#1F1D14]'>Полезные информации</p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 pt-8'>
          <Useful />
          <Useful />
          <Useful />
          <Useful />
          <Useful />
          <Useful />
          <Useful />
          <Useful />
        </div>
        
        <button className="mt-6 py-3 px-6 text-lg rounded-md border-2 border-[#FBD029] hover:bg-[#FBD029] hover:text-white transition-all">
          Показать ещё
        </button>  

        <div className="pl-12 pt-12 lg:pl-7 lg:pt-28 ">
          <h1 className="text-xl font-medium sm:text-[32px]  ml-4 sm:ml-[-10px] mb-6">Акция</h1>
          <CaruselProduct text="Акция" bg="#FF1C1C" />
        </div>
      </div>
    </>
  )
}

export default Index

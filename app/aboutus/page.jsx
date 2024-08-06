import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Home from '@/public/ProductsSection/home.svg'
import Arrow from '@/public/ProductsSection/right_arrow.svg'
import YellowIcon from '@/public/Aboutus/yellow_icon.svg'
import Share from '@/public/Aboutus/u_share-alt.svg'
import Print from '@/public/Aboutus/fi_printer.svg'
import CaruselProduct from "@/components/main/carusel-prodoct";

const Index = () => {
  return (
    <>
      <div className='container mx-auto px-4 sm:px-6 lg:px-10 py-6'>
        <div className='flex items-center gap-2 md:gap-4 mb-6'>
          <Image src={Home} alt='Home' className='w-5 h-5'/>
          <Link href="/">
            <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
          </Link>
          <Image src={Arrow} alt='Arrow' className='w-5 h-5'/>
          <Link href="/product">
            <p className='text-sm sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Продукты</p>
          </Link>
          <Image src={Arrow} alt='Arrow' className='w-5 h-5'/>
          <p className='text-sm sm:text-base text-[#1F1D14]'>О нас</p>
        </div>
        
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex-shrink-0 bg-white rounded-lg shadow-md  p-4 md:p-6'>
            <div className='flex items-center gap-2 mb-4'>
              <Image src={YellowIcon} alt='Yellow Icon' className='w-5 h-5'/>
              <p className='text-sm sm:text-base'>О нас</p>
            </div>
            <p className='text-center text-sm sm:text-base'>Вканация</p>
          </div>

          <div className='flex-1 bg-white rounded-lg shadow-md p-4 md:p-6'>
            <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4'>7 SPORT MARKET</h1>
            <p className='text-sm sm:text-base mb-4'>
              В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.
            </p>
            <p className='text-sm sm:text-base mb-4'>
              Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.
            </p>
            <p className='text-sm sm:text-base mb-4'>
              В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.
            </p>
            <p className='text-sm sm:text-base mb-6'>
              Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.
            </p>

            <div className='flex gap-4 justify-end'>
              <button className='flex items-center gap-2 text-sm sm:text-base'>
                <p>Поделиться:</p>
                <Image src={Share} alt='Share' className='w-4 h-4'/>
              </button>
              <button className='flex items-center gap-2 text-sm sm:text-base'>
                <p>Распечатать:</p>
                <Image src={Print} alt='Print' className='w-4 h-4'/>
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
  )
}

export default Index

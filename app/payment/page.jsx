import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Home from '@/public/ProductsSection/home.svg'
import Arrow from '@/public/ProductsSection/right_arrow.svg'
import YellowIcon from '@/public/Aboutus/yellow_icon.svg'
import CaruselProduct from "@/components/main/carusel-prodoct";

const Index = () => {
  return (
    <>
      <div className='container mx-auto px-4 sm:px-10 py-7'>
        <div className='flex items-center gap-2 sm:gap-3'>
          <Image src={Home} alt='...' className='w-5 h-5 sm:w-6 sm:h-6'/>
          <Link href="/">
            <p className='text-xs sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
          </Link>
          <Image src={Arrow} alt='...' className='w-4 h-4 sm:w-5 sm:h-5'/>
          <Link href="/product">
            <p className='text-xs sm:text-base opacity-70 hover:text-[#FBD029] hover:opacity-100'>Продукты</p>
          </Link>
          <Image src={Arrow} alt='...' className='w-4 h-4 sm:w-5 sm:h-5'/>
          <p className='text-sm sm:text-base text-[#1F1D14]'>Оплата и Доставка</p>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 mt-4'>
          <div className='bg-white p-4 rounded-md w-full sm:w-[187px]'>
            <div className='flex items-center gap-2'>
              <Image src={YellowIcon} alt='...' className='w-6 h-6'/>
              <p className='text-sm sm:text-base'>Оплата и Доставка</p>
            </div>
          </div>

          <div className='bg-white p-6 rounded-md flex-1'>
            <h1 className='text-lg sm:text-2xl font-semibold mb-4'>Способы оплаты</h1>
            <p className='text-sm sm:text-base mb-4'>Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и выбрать тот товар, который Вы хотите купить.</p>
            <p className='text-sm sm:text-base mb-4'>После перехода в Корзину, откроется список товаров, которые Вы добавили. Далее, нажимаем кнопку «Оформить заказ». В окне появится «Контактная информация» и «Способы доставки», которые Вам необходимо заполнить.</p>
            <p className='text-sm sm:text-base mb-4'>Вы можете выбрать более подходящий для Вас способ оплаты:</p>
            <ul className='list-disc list-inside text-sm sm:text-base mb-4'>
              <li>Оплата на месте;</li>
              <li>Оплата по терминалу;</li>
              <li>Оплата через платёжные системы, такие как CLICK, Payme.</li>
            </ul>
            <p className='text-sm sm:text-base mb-4'>Оплатить покупки можно наличными при получении. Убедительная просьба вначале ознакомиться с товаром, убедиться в отсутствии дефектов в присутствии курьера, после чего оплачивать сумму.</p>

            <h1 className='text-lg sm:text-2xl font-semibold mb-4'>Доставка</h1>
            <p className='text-sm sm:text-base mb-4'>Тарифы на доставку товаров по Ташкенту:</p>
            <ul className='list-disc list-inside text-sm sm:text-base mb-4'>
              <li>20.000 сум для товаров до 150.000 сум</li>
              <li>Бесплатная доставка для всех товаров от 150.000 сум</li>
            </ul>
            <p className='text-sm sm:text-base mb-4'>Тарифы на доставку товаров по всех регионов:</p>
            <ul className='list-disc list-inside text-sm sm:text-base'>
              <li>Платная доставка для всех товаров по согласованной цене</li>
              <li>Бесплатная установка для всех тренажеров</li>
            </ul>
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

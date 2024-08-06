import Next from '@/public/proucts/next_page.svg';
import React from 'react';
import Image from 'next/image';
import Puma from '@/public/proucts/puma.svg';
import Linder from '@/public/proucts/linder.svg';
import Nike from '@/public/proucts/nike.svg';
import Adidas from '@/public/proucts/adidas.svg';
import Reebook from '@/public/proucts/reebook.svg';

const Index = () => {
  return (
    <div className="py-8 bg-gray-100 justify-start w-full items-center container pb-[80px] mx-auto px-4 sm:px-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">O нас</h2>
      <div className="bg-black w-full max-w-[1160px] h-auto sm:h-[367px] gap-1 text-white p-4 sm:p-8 rounded-lg mb-6">
        <p className="mb-4 w-full sm:w-[719px] opacity-80 mt-4 sm:mt-10 ml-0 sm:ml-10 text-white text-base sm:text-xl font-normal leading-7">
          Интернет магазин спортивных товаров 
          <a href="https://www.sportmarket.com/" className="underline hover:text-[#FBD029] transition-all">7MARKETSPORT.UZ</a> 
          предлагает широкий ассортимент продукции с доставкой по Ташкенту, области и другим регионам Узбекистана. 
          Ведется работа как с розничными покупателями, так и с оптовыми клиентами. 
          Разнообразие форм оплаты заметно упрощает процесс приобретения товара. 
          Действует гибкая система скидок. 
        </p>
        <div className="flex justify-end">
          <Image className="cursor-pointer text-4xl hover:opacity-80 w-8 sm:w-[112px] h-6 sm:h-9 relative" src={Next} alt="Next" />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 sm:gap-24 justify-center bg-white p-4 sm:pl-[46px] sm:pr-[46px] sm:pt-[46px] sm:pb-[46px] rounded-xl">
        <Image src={Puma} alt="Puma" className="w-20 h-20 sm:w-auto sm:h-auto" />
        <Image src={Linder} alt="Linder" className="w-20 h-20 sm:w-auto sm:h-auto" />
        <Image src={Nike} alt="Nike" className="w-20 h-20 sm:w-auto sm:h-auto" />
        <Image src={Adidas} alt="Adidas" className="w-20 h-20 mt-[20px] lg:m-0 sm:w-auto sm:h-auto" />
        <Image src={Reebook} alt="Reebook" className="w-20 h-20 mt-[20px] lg:m-0 sm:w-auto sm:h-auto" />
        <Image src={Puma} alt="Puma" className="w-20 h-20 mt-[20px] lg:m-0 sm:w-auto sm:h-auto" />
      </div>
    </div>
  );
};

export default Index;

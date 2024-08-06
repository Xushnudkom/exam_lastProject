"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import LogoIcon from '@/public/headerimg/logo.svg';
import LogoTitle from '@/public/headerimg/logo_title.svg';
import IconPhone from '@/public/headerimg/u_phone-alt.svg';
import IconEmail from '@/public/headerimg/fi_mail.svg';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { path: '/product', title: 'Продукты' },
    { path: '/contacts', title: 'Контакты' },
    { path: '/payment', title: 'Оплата и Доставка' },
    { path: '/news', title: 'Новости' },
    { path: '/aboutus', title: 'О Нас' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[#1F1D14] text-[#FFF]">
        <div className="flex items-center justify-between container mx-auto px-10 py-3">
          <Link href="/" className="flex gap-2 hover:opacity-80">
            <Image src={LogoIcon} alt="logo" />
            <Image src={LogoTitle} alt="logo_title" />
          </Link>
          <button
            onClick={toggleMenu}
            className="block lg:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div className="hidden lg:flex gap-[120px]">
           <div className='flex gap-6'>
           {links.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="text-[16px] font-normal hover:text-[#FBD029] transition-all"
              >
                {item.title}
              </Link>
            ))}
           </div>
            <div className="flex gap-6 items-center">
              <div className="flex gap-2 items-center font-normal hover:text-[#FBD029]">
                <Image src={IconPhone} alt="iconPhone" className="w-5" />
                <p className="text-[16px] font-normal font-sans">
                  <span className="text-[13px] mr-2 opacity-95">+998 (90)</span>
                  565-85-85
                </p>
              </div>
              <div className="flex gap-2 items-center font-normal hover:text-[#FBD029]">
                <Image src={IconEmail} alt="iconPhone" className="w-5" />
                <p className="text-[16px] font-normal font-sans">info@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-[#1F1D14] text-[#FFF] px-10 py-3">
            {links.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="block py-2 text-[16px] font-normal hover:text-[#FBD029] transition-all"
              >
                {item.title}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex gap-2 items-center font-normal hover:text-[#FBD029]">
                <Image src={IconPhone} alt="iconPhone" className="w-5" />
                <p className="text-[16px] font-normal font-sans">
                  <span className="text-[13px] mr-2 opacity-95">+998 (90)</span>
                  565-85-85
                </p>
              </div>
              <div className="flex gap-2 items-center font-normal hover:text-[#FBD029]">
                <Image src={IconEmail} alt="iconPhone" className="w-5" />
                <p className="text-[16px] font-normal font-sans">info@gmail.com</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;

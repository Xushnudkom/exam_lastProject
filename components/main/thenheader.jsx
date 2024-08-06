"use client";
import Image from "next/image"
import React, { useState } from "react";
import IconCatalog from '@/public/mainimg/icon_catalog.svg'
import IconSearch from '@/public/mainimg/icon_search.svg'
import IconUser from '@/public/mainimg/icon_user.svg'
import IconLike from '@/public/mainimg/icon_like.svg'
import IconShopping from '@/public/mainimg/icon_shopping.svg'
import Modal from "@/app/sign-in/page";
import Link from "next/link";
const Index = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Modal
        open={open}
        handleClose={handleClose}
        handleOpen={() => handleOpen(false)}
      />
      {/* <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <AiOutlineClose className="text-white text-2xl" />
              ) : (
                <AiOutlineMenu className="text-white text-2xl" />
              )}
            </button>
          </div> */}
    <div className="pt-[15px] pb-[15px] bg-[#FFF] w-full">
      <div className="container mx-auto px-10">
      <div className="lg:flex justify-between">
      <div className="flex gap-3">
      <div className="hidden lg:flex">
      <button className="bg-[#1F1D14] gap-3 flex items-center text-[20px] font-normal pt-[15px] pb-[15px] pl-[45px] pr-[45px] rounded-xl text-white hover:bg-[#FBD029] transition-all hover:text-[#1F1D14] ">
      <Image src={IconCatalog} alt="icon_catalog"/>
      Каталог
      </button>
      </div>
     <div className="flex w-[280px] mb-[20px] lg:m-0 lg:w-[500px] lg:flex">
     <input type="text" placeholder="Поиск" className="w-[500px] text-[16px] placeholder:text-black pt-[15px] pb-[15px] pl-[20px] pr-[45px] rounded-xl bg-[#F2F2F2] focus:bg-[#FFF] focus:outline-[#FBD029] transition-all"/>
     <Image src={IconSearch} alt="search" className="-ml-[45px]"/>
     </div>
      </div>

      <div className="flex justify-between items-center lg:flex gap-3">
        <button onClick={handleOpen} className="bg-[#F2F2F2] p-4 rounded-md hover:bg-[#FBD029] transition-all">
          <Image src={IconUser} alt="user"/>
        </button>
        <Link href='/wishlist' className="bg-[#F2F2F2] items-center p-4 rounded-md hover:bg-[#FBD029] transition-all">
          <Image src={IconLike} alt="like"/>
        </Link>
        <Link href="/shopping">
        <button className="bg-[#F2F2F2] pt-[13px] pl-[30px] pr-[30px] pb-[13px] rounded-md text-[20px] flex items-center gap-2 text-[#1F1D14] hover:bg-[#FBD029] transition-all">
          <Image src={IconShopping} alt="shopping"/>
          Корзина
        </button>
        </Link>
      </div>
      </div>

      </div>
    </div>
    </>
  )
}

export default Index
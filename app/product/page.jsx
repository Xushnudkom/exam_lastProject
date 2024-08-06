"use client"
import Link from 'next/link';
import Image from 'next/image';
import Home from '@/public/ProductsSection/home.svg';
import Arrow from '@/public/ProductsSection/right_arrow.svg';
import CardIcon from '@/public/ProductsSection/board.svg';
import PrHambur from '@/public/ProductsSection/pr_gambur.svg';
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import ProdCard from '@/app/product/prcard';
import ProdCardFirst from '@/app/product/prcardFirs'
import CaruselProduct from "@/components/main/carusel-prodoct";

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20, 67]);
  const [visibleCount, setVisibleCount] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  // Simulated product data
  const products = new Array(9).fill(<ProdCard />);

  return (
    <>
      <div className='justify-center container mx-auto px-4 sm:px-10 py-7'>
        <div className='flex gap-3'>
          <Image src={Home} alt='...' />
          <Link href="/">
            <p className='text-[12px] sm:text-[16px] opacity-70 hover:text-[#FBD029] hover:opacity-100'>Главная</p>
          </Link>
          <Image src={Arrow} alt='...' />
          <p className='text-[#1F1D14] text-[12px] sm:text-[16px]'>Продукты</p>
        </div>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='left'>
            <div className='bg-white w-full sm:w-[292px] mt-[20px] pl-[18px] pr-[18px] pt-[20px] pb-[38px] rounded-t-lg'>
              <h2 className='text-[16px] mb-[20px]'>Филтрь</h2>
              <p className='mb-[10px] text-[12px]'>Цена</p>
              <div className='bg-[#F2F2F2] w-full sm:w-[255px] pt-[27px] pb-[27px] pl-[27px] pr-[27px] rounded-xl'>
                <Box sx={{ width: '100%' }}>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    sx={{ color: '#ffc107' }}
                  />
                  <div className='flex justify-between'>
                    <p className='font-medium'>{value[0]}uzs</p>
                    <p className='font-medium'>{value[1]}uzs</p>
                  </div>
                </Box>
              </div>
              <div className='mt-[16px]'>
                <p className='mb-[10px] text-[12px]'>Артикул:</p>
                <input type="text" placeholder='аф566' className='w-full sm:w-[256px] rounded-md border-none bg-[#F2F2F2] pt-[10px] pb-[10px] hover:border-[#FBD029] focus:border-[#FBD029] focus:outline-none' />
              </div>
              <div className='mt-[16px]'>
                <label htmlFor="products" className='block text-[12px] mb-[10px] font-normal'>Выберите категорию:</label>
                <select name="pr" id="products" className='w-full sm:w-[256px] text-opacity-65 border-none rounded-md bg-[#F2F2F2]'>
                  <option value="Все">Все</option>
                  <option value="...">...</option>
                </select>
              </div>
              <div className='mt-[16px]'>
                <label htmlFor="products" className='block text-[12px] mb-[10px]'>Новинки:</label>
                <select name="pr" id="products" className='w-full sm:w-[256px] text-opacity-65 border-none rounded-md bg-[#F2F2F2]'>
                  <option value="Все">Все</option>
                  <option value="...">...</option>
                </select>
              </div>
              <div className='mt-[16px]'>
                <label htmlFor="products" className='block text-[12px] mb-[10px]'>Акция:</label>
                <select name="pr" id="products" className='w-full sm:w-[256px] text-opacity-65 border-none rounded-md bg-[#F2F2F2]'>
                  <option value="Все">Все</option>
                  <option value="...">...</option>
                </select>
              </div>
            </div>
            <button className='bg-[#E4E4E4] text-[15px] pt-[21px] pb-[21px] pl-[79px] pr-[80px] w-full sm:w-[292px] rounded-b-lg hover:bg-[#FBD029] hover:transition-all mt-[16px]'>Показать результат</button>
          </div>
          <div className='flex-1'>
            <div className='flex mt-[20px] gap-8 flex-wrap'>
              <select name="sort" className='border-none h-min rounded-md pl-[15px] pr-[15px]'>
                <option value="Сортировать">Сортировать</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
              <select name="sort" className='border-none h-min rounded-md pl-[15px] pr-[15px]'>
                <option value="Все продукты">Все продукты</option>
                <option value="option1">option1</option>
                <option value="option2">option2</option>
              </select>
              <div className='flex h-min  gap-9 ml-[50px] lg:ml-[265px] lg:gap-2 mt-4 sm:mt-0'>
                <div className='flex items-center gap-2 pl-[15px] pr-[30px] bg-white pt-[7px] pb-[7px] rounded-md'>
                  <button className=''>Кард</button>
                  <Image src={CardIcon} alt='...' />
                </div>
                <div className='flex items-center gap-2 pl-[15px] pr-[30px] opacity-40 bg-[#e1e0e0] pt-[7px] pb-[7px] rounded-md'>
                  <button className=''>Лист</button>
                  <Image src={PrHambur} alt='...' />
                </div>
              </div>
            </div>
            <div className='mt-[20px]'>
              <div className='grid-cols-1 ml-[30px] lg:ml-0 sm:grid-cols-2 lg:grid-cols-3 gap-1'>
                <ProdCardFirst   />
              </div>
              {visibleCount < products.length && (
                <button className='text-[20px] w-full mt-[20px] pt-[15px] pb-[15px] bg-white' onClick={handleShowMore}>
                  Показать ещё
                </button>
              )}
            </div>
          </div>
        </div>
        <p className='text-[20px] sm:text-[32px] font-medium mt-[100px] mb-[60px] text-center sm:text-left ml-[1px]'>Рекомендуемые продукты</p>
        <div className='ml-[50px] lg:ml-[30px]'>
         <CaruselProduct />         

        </div>
      </div>
    </>
  );
}

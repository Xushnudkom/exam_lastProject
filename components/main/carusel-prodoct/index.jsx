"use client";
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';

SwiperCore.use([Navigation]);

import { CaruselCard } from '../card';
import './style.css';

const Carusel = ({text , bg}) => {
  return (
    <div className="justify-between flex w-full items-center container mx-auto ml-[-40px] px-4">
            <CaruselCard text={text} bg={bg} />
    </div>
  );
};

Carusel.displayName = 'Carusel';
export default Carusel;

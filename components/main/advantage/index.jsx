import React from 'react';
import Image from 'next/image';
import Car from '@/public/proucts/u_truck.svg';
import Order from '@/public/proucts/u_shield-check.svg';
import Foiz from '@/public/proucts/u_percentage.svg';
import List from '@/public/proucts/u_file-check-alt.svg';

const advantages = [
  {
    icon: Car,
    text: 'Доставка по всему Узбекистану',
  },
  {
    icon: Order,
    text: 'Доставка по всему Узбекистану',
  },
  {
    icon: Foiz,
    text: 'Скидки и акции',
  },
  {
    icon: List,
    text: 'Широкий ассортимент товаров',
  },
];

const Advantages = () => {
  return (
    <div className="py-6 bg-gray-100 justify-start w-full items-center container mx-auto px-4 sm:px-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">Преимущества</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {advantages.map((advantage, index) => (
          <div className="bg-white w-full sm:w-[292px] h-auto sm:h-[289px] flex flex-col items-center hover:scale-105 transition-transform rounded-lg shadow-md p-6 text-center" key={index}>
            <Image className="w-20 h-20 mb-4" src={advantage.icon} alt={advantage.text} />
            <p className="text-base sm:text-lg text-gray-700">{advantage.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;

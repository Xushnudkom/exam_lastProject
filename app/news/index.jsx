import Usefull from "@/public/proucts/useful_img.svg";
import Calendar from '@/public/proucts/u_calender.svg';
import Eye from '@/public/proucts/u_eye.svg';
import Image from "next/image";

const Index = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return (
    <section className="bg-[#F2F2F2] pb-6 lg:pb-8">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 bg-white rounded-lg">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 lg:mb-6">
          Как правильно выбрать эллиптический тренажер?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-4 lg:mb-6">
          Эллиптические тренажёры популярны среди людей любого возраста и с
          разным уровнем физической подготовкb Эллиптические тренажёры
          популярны среди людей любого возраста и с разным уровнем физической
          подготовки...
        </p>
        <div className="flex flex-wrap gap-4 lg:gap-6 mt-4 lg:mt-6">
          <div className="text-[#333333] text-sm lg:text-base flex items-center font-normal font-['Fira Sans']">
            <Image src={Calendar} alt="Calendar" className="w-5 h-5 mr-2" />
            {`${year}-${month}-${day}`}
          </div>
          <div className="text-[#333333] text-sm lg:text-base flex items-center font-normal font-['Fira Sans']">
            <Image src={Eye} alt="Eye" className="w-5 h-5 mr-2" />
            250
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

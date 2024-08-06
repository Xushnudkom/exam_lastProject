import Usefull from "@/public/proucts/useful_img.svg";
import Calendar from '@/public/proucts/u_calender.svg';
import Eye from '@/public/proucts/u_eye.svg';
import Image from "next/image";

const index = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  return (
    <section className="bg-[#F2F2F2] pb-[80px] justify-start w-full items-center container mx-auto px-4 sm:px-10">
      <p className="font-medium text-[24px] sm:text-[32px] mb-[20px] sm:mb-[30px]">Полезное</p>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-1/2 h-auto px-4 sm:px-[35px] py-[20px] sm:py-[38px] bg-white rounded-lg">
          <h2 className="text-[24px] sm:text-[32px] w-full sm:w-[460px] font-medium mb-2">
            Как правильно выбрать эллиптический тренажер?
          </h2>
          <p className="w-full sm:w-[460px] text-[14px] sm:text-[16px]">
            Эллиптические тренажёры популярны среди людей любого возраста и с
            разным уровнем физической подготовкb Эллиптические тренажёры
            популярны среди людей любого возраста и с разным уровнем физической
            подготовки...
          </p>
          <div className="flex flex-col sm:flex-row mt-10 sm:mt-20">
            <div className="text-[#333333] text-sm flex items-center font-normal font-['Fira Sans'] mb-2 sm:mb-0">
              <Image src={Calendar} alt="..." className="mr-2" />
              {`${year}-${month}-${day}`}
            </div>
            <div className="text-[#333333] text-sm flex items-center font-normal font-['Fira Sans'] sm:ml-10">
              <Image src={Eye} alt="..." className="mr-2" />
              250
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="bg-white rounded-lg h-auto sm:h-[350px] px-10 sm:px-[145px] mb-[15px] flex items-center justify-center">
            <Image src={Usefull} alt="image" />
          </div>
          <button className="font-normal w-full bg-white rounded-lg h-[52px] hover:bg-[#FBD029] transition-all flex items-center justify-center">
            Посмотрет все
          </button>
        </div>
      </div>
    </section>
  );
};

export default index;

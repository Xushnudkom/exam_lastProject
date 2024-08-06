import LogoIcon from '@/public/headerimg/logo.svg'
import LogoTitle from '@/public/headerimg/logo_title.svg'
import IconPhone from '@/public/headerimg/u_phone-alt.svg'
import IconEmail from '@/public/headerimg/fi_mail.svg'
import IconLocation from '@/public/headerimg/Location_icon.svg'
import IconInsta from '@/public/footerimg/ic_insta.svg'
import IconFacebook from '@/public/footerimg/ic_facebook.svg'
import IconTelegram from '@/public/footerimg/ic_telegram.svg'
import Link from 'next/link'
import Image from 'next/image'

const Index = () => {
  const links =[
    {path: "/", title: "Privacy Policy"},
    {path: "/", title: "Terms of Use"},
    {path: "/", title: "Sales and Refunds"},
    {path: "/", title: "Legal"},
    {path: "/", title: "Site Map"},
  ]
  
  return (
    <>
      <div className='bg-[#FBD029] w-full h-4'></div>
      <div className='justify-start gap-4 pt-20 pb-[50px] bg-[#1F1D14] text-[#FFF]'>
        <div className='container mx-auto px-4 md:px-10 max-w-1240'>
          <div className='flex  items-center lg:items-start lg:flex flex-col md:flex-row lg:justify-between'>
            <div className='Logo mb-14 md:mb-0'>
              <Link href='/' className='flex gap-2 justify-start hover:opacity-80 w-32'>
                <Image src={LogoIcon} alt='logo'/>
                <Image src={LogoTitle} alt='logo_title'/>
              </Link>
            </div>

            <div className='Address pl-14 lg:pl-0 mb-6 md:mb-0'>
              <div className='ml-0 md:ml-[100px]'>
                <p className='font-semibold mb-5 text-[18px]'>Контакты</p>
                <div className='flex gap-2 ml-[-30px] lg:ml-0 items-center mt-4 font-normal hover:text-[#FBD029] w-[164px]'>
                  <Image src={IconPhone} alt='iconPhone' className='w-5'/>
                  <p className='text-[16px] font-normal font-sans items-center'>
                    <span className='text-[13px] mr-1 items-center opacity-90'>+998 (90)</span>
                    565-85-85
                  </p>
                </div>
                <div className='ml-[-20px] lg:ml-0 flex gap-2 items-center font-normal mt-5 hover:text-[#FBD029] w-[145px]'>
                  <Image src={IconEmail} alt='iconPhone' className='w-5'/>
                  <p className='text-[16px] font-normal font-sans'>
                    info@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className='mb-12 lg:mb-6 md:mb-0'>
              <div className='w-[200px] ml-[20px] text-center items-center flex gap-2 lg:m-0 lg:text-left lg:items-center font-normal lg:w-64 hover:text-[#FBD029]'>
                <Image src={IconLocation} alt='iconPhone' className='w-5'/>
                <p className='text-[16px] font-normal font-sans'>
                  Tashkent Sh. Chilonzor 9 kvartal 12-uy
                </p>
              </div>
            </div>

            <div className='Follow'>
              <div className='text-center lg:text-left mb-[40px]'>
                <p className='text-[18px] font-semibold mb-[20px]'>Подписаться</p>
                <input type="text" placeholder='support@figma.com' className='pr-5 pl-5 w-full p-3 rounded-xl hover:border-0 text-black focus:outline-[#FBD029] transition-all'/>
                <button className='block bg-[#FBD029] text-[#1F1D14] text-[16px] font-normal pr-5 pl-5 pt-3 pb-3 rounded-xl w-full md:w-64 mt-4 hover:bg-black hover:text-[#FBD029] transition-all'>Отправить</button>
              </div>
              <div className='ml-[70px] lg:text-left flex gap-3'>
                <Link href='https://www.instagram.com/' target='_blank'>
                  <Image src={IconInsta} alt='iconinstagram'/>
                </Link>
                <Link href='https://www.facebook.com/' target='_blank'>
                  <Image src={IconFacebook} alt='icondfacebook'/>
                </Link>
                <Link href='https://web.telegram.org/a/' target='_blank'>
                  <Image src={IconTelegram} alt='icontelegram'/>
                </Link>
              </div>
            </div>
          </div>

          <hr className='w-full mt-10 opacity-45'/>

          <div className='flex flex-col md:flex-row justify-between items-center lg:items-center'>
            <p className='font-light text-[12px] mt-4 opacity-85'>
              © 2022 All Rights Reserved
            </p>
            <div className='flex justify-center flex-wrap gap-2 md:gap-9 mt-4 md:mt-0 opacity-70'>
              {links.map((item, index) => (
                <Link href={item.path} key={index} className='text-[14px] font-normal hover:text-[#FBD029] transition-all'>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index

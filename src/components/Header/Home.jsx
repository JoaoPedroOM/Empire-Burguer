import React from 'react'
import bannerHeader from "../../assets/imgs/banner-hero.png"
import bannerMobile from "../../assets/imgs/Banner mobile.png"

const Home = () => {
  return (
    <div id='home'  className='w-full'>
    <div className='absolute mt-28 sm:ml-6 2xl:ml-24 ml-72'>
    <p className="text-[#331c19] text-[22px] font-bold lg:text-[18px] mb-[-20px] supm:mb-0">Uma nova experiência!</p>
        <h1 className="font-lilita text-[#3b200b] text-[77px] lg:text-[53px] uppercase supm:leading-[1]">
          King <span className="text-[#f59a1b]">burger</span>
        </h1>
        <p className="text-[22px] text-[#62493d] lg:text-[16px] mt-[-10px] mb-3 lg:mb-4 supm:mt-0">
          Para quem tem um
          <span className="bg-[#f59a1b] px-2 py-[1px] text-[#60340c] rounded-md font-bold">
            Apetite de um REI!
          </span>
        </p>
      <a
        href="/"
        className="px-5 py-[10px] text-white bg-[#f43127] font-bold rounded-md lg:text-[18px] hover:bg-red-700">
        Comprar Agora
      </a>
    </div>
    <img src={bannerMobile} alt="home" className='hidden w-full h-full lg:block' />
    <img src={bannerHeader} alt="" className='w-full h-full lg:hidden' />
  </div>
  )
}

export default Home

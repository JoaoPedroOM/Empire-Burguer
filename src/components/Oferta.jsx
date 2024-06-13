import React from 'react'
import oferta1 from "../assets/imgs/oferta-1.png"
import oferta2 from "../assets/imgs/oferta-2.png"
import oferta3 from "../assets/imgs/oferta-3.png"

const Oferta = () => {
  return (
    <main className="mt-[90px] lg:mt-[64px] w-full max-w-[1240px] flex flex-col mx-auto items-start px-6" id='promocao'>
    <h2 className='text-[#1D0605E5] text-[32px] font-lilita uppercase'>Ofertas especiais</h2>
    <p className='text-[16px]'>Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque sempre estamos mudando o nosso cardapio.</p>

    <div className="relative grid grid-cols-3 md:grid-cols-1 items-center gap-[10px] mt-4 md:gap-[15px]">

    <div className="relative col-span-2 h-full md:col-span-1">
      <div className="absolute h-full w-full pl-[17px] pt-[12px]">
        <h3 className="text-[25px] font-lilita uppercase lg:text-[21px] sm:leading-[1]">Burger imperial+batata</h3>
        <p className="text-[18px] text-[#FFFFFFB0]">250kg</p>
      </div>
      <img className="h-full object-cover" src={oferta1} alt="Oferta Burger imperial mais batata por apenas 35,99" />

      <div className="absolute bottom-0 right-0 flex h-full w-full flex-col items-end justify-end pb-[15px] pr-[50px] md:pr-[20px] md:pb-[5px]">
        <div className='flex flex-col items-center'>
        <p className="text-[23px] leading-[1] text-[#FFFFFFB0] lg:[18px]">Apenas</p>
        <h3 className="text-[42px] font-lilita uppercase lg:text-[23px] text-white">hoje</h3>
        </div>
      </div>
    </div>

    <div className="col-span-1 flex flex-col h-full w-full md:col-span-1">

      <div className="relative mb-4 h-1/2 md:h-full">
        <div className="absolute h-full w-full pl-[17px] pt-[12px]">
          <h3 className="text-[25px] font-lilita uppercase text-[#1D0605E5] leading-[1]">batata</h3>
          <p className="text-[18px] font-semibold text-[#1D0605B0]">150kg</p>
        </div>
      <img className="h-full object-cover" src={oferta2} alt="Oferta batata por apenas 11,99" />
      </div>

      <div className="relative h-1/2 md:h-full">
        <div className="absolute h-full w-full pl-[17px] pt-[12px]">
          <h3 className="text-[25px] font-lilita uppercase text-[#1D0605E5] leading-[1]">Sorvete</h3>
          <p className="text-[18px] font-semibold text-[#1D0605B0]">50kg</p>
        </div>
      <img className="h-full object-cover" src={oferta3} alt="Oferta Sorvete por apenas 2,50" />
      </div>
    </div>
  </div>
    </main>
  )
}

export default Oferta

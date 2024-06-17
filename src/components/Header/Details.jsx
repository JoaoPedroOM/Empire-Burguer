import React from 'react'
import burger from "../../assets/icons/burger.svg"
import delivery from "../../assets/icons/delivery.svg"
import headset from "../../assets/icons/headset.svg"

const Details = () => {
  return (
    <div className='relative max-w-full lg:w-[355px] lg:h-80 bg-white flex flex-wrap justify-around shadow rounded-lg lg:-mt-30 md:mt-[-100px] inset-x-0 mx-auto z-10 w-[970px] h-28 -mt-14'>

      <div className='flex gap-4 items-center border-b border-yellow-950 border-opacity-10'>
        <div className='my-4 w-16 h-16 bg-orange-100 rounded-full flex justify-center items-center'>
          <img src={burger} alt="hamburguer" className='w-8 h-8' />
        </div>

        <div className='mb-2'>
          <h2 className="text-[#5c4c4b] text-xl font-bold font-lilita uppercase">
            Artesanal
          </h2>
          <p className="w-44 text-[#1D0605B0] leading-tight flex">
            Nossas receitas são feitas com todo cuidado
          </p>
        </div>

        <span className="h-[70%] w-px bg-[#492E1526] lg:hidden"></span>
      </div>

      <div className='flex gap-4 items-center border-b border-yellow-950 border-opacity-10'>
        <div className='my-4 w-16 h-16 bg-orange-100 rounded-full flex justify-center items-center'>
          <img src={headset} alt="hamburguer" className='w-8 h-8' />
        </div>

        <div className='mb-2'>
          <h2 className="text-[#5c4c4b]  text-xl font-bold font-lilita uppercase">
            Atendimento
          </h2>
          <p className="w-44 text-[#1D0605B0] leading-tight flex">
            Totalmente personalizado
          </p>
        </div>

        <span className="h-[70%] w-px bg-[#492E1526] lg:hidden"></span>
      </div>

      <div className='flex gap-4 items-center border-b border-yellow-950 border-opacity-10'>
        <div className='my-4 w-16 h-16 bg-orange-100 rounded-full flex justify-center items-center'>
          <img src={delivery} alt="hamburguer" className='w-8 h-8' />
        </div>

        <div className='mb-2'>
          <h2 className="text-[#5c4c4b]  text-xl font-bold font-lilita uppercase">
            DELIVERY Speed
          </h2>
          <p className="w-44 text-[#1D0605B0] leading-tight flex">
            Entregamos menos de 45 minutos
          </p>
        </div>
      </div>
    </div>
  )
}

export default Details
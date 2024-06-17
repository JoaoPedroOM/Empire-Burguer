import React from 'react'

const Card = ({img, alt, title, text}) => {
  return (
    <div className="entregas__box transition-all bg-red-500 duration-200 ease-in">

      <div className="box__icon">
        <img src={img} alt={alt} className="w-8 h-8" />
      </div>

      <div className='border-l border-[#1D060566] pl-4'>
        <h2 className="text-[#331f1e] text-xl font-lilita uppercase">
        {title}
        </h2>
        <p className="text-[16px] text-[#1D0605B0] leading-tight">
        {text}
        </p>
      </div>

    </div>
  )
}

export default Card

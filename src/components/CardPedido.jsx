import React from "react";
import phone from "../assets/icons/phone.svg";

const CardPedido = () => {
  return (
    <div className="lg:px-[24px] mb-16">
      <div className="bg-[#F43127] max-w-[1240px] w-full mx-auto py-[14px] px-[22px] lg:px-[3px] rounded-md flex justify-between lg:justify-center items-center lg:gap-4 mt-[90px] lg:mt-[64px] lg:flex-col lg:max-h-[320px]">
        <div className="flex lg:flex-col lg:items-center">
          <div className="px-[25px] lg:px-[29px] lg:py-[16px] rounded-full bg-[#1D060533] flex items-center lg:mb-2">
            <img
              src={phone}
              alt="desenho de um telefone"
              className="w-8 h-[55px]"
            />
          </div>
          <div className="border-l border-[#1D060566] mx-4 pl-4 lg:border-t lg:pt-2 lg:border-l-0 lg:text-center">
            <h2 className=" font-lilita uppercase text-[#1D0605B0] text-[25px] md:text-[18px] md:leading-[1]">
              faça o seu pedido agora mesmo!
            </h2>
            <p className="text-[#FFFFFFE5] text-[16px] md:text-[14px] md:hidden">
              Venha saborear a melhor experiência de hamburguenses artesanal
              <br /> do <span className="font-bold">Empires Burger</span>, com
              temática medieval!
            </p>
            <p className="text-[#FFFFFFE5] text-[16px] md:text-[14px] hidden md:block">
              Venha saborear a melhor experiência de hamburguenses artesanal do <span className="font-bold">Empires Burger</span>, com
              temática medieval!
            </p>

          </div>
        </div>

        <div>
          <a className="py-2 px-4 bg-[#FAE4D0] text-[#F43127] cursor-pointer font-bold rounded-md hover:bg-[#d5c0ab] uppercase">
            Solicitar Pedido
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPedido;

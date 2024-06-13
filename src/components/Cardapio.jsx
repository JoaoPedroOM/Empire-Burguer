import React from "react";
import Timer from "../assets/icons/timer.svg";

const Cardapio = () => {
  return (
    <div>
      <section className="mx-auto max-w-[1240px] p-4 mt-16 mb-16 grid gap-8 grid-cols-2 items-center lg:grid-cols-1 lg:gap-16">
        <div className="w-full bg-[#f43127] flex items-center rounded-md py-5 pl-5 pr-4">
          {/* Imagem do card */}
          <div className="my-4 w-16 h-[55px] bg-[#c92820] rounded-full flex justify-center items-center">
            <img src={Timer} alt="relogio" className="w-8 h-8" />
          </div>

          <span className="h-[70px] w-px mx-4 bg-[#B50B04]"></span>

          {/* Texto do card */}
          <div className="w-full">
            <h2 className="text-[#1D0605B0] text-[25px] font-lilita uppercase mb-[4px] lg:text-[18px] lg:leading-[1]">
              Horário de funcionamento
            </h2>
            <p className="text-white text-[16px] block whitespace-normal lg:text-[14px]">
              Segunda-feira a sexta-feira:
              <span className="font-bold ml-[5px] lg:ml-0"> 17h00 - 23h00</span>
            </p>
            <p className="text-white text-[16px] block whitespace-normal lg:text-[14px] ">
              Sabado a Domíngo:
              <span className="font-bold ml-[5px] lg:ml-0">18h30 - 23h00</span>
            </p>
          </div>
        </div>

        {/* Lado direito */}
        <div>
          <p className="text-[#1D0605B0] text-[18px] leading-[1]">
            Não esqueça de marcar a gente no Instagram:
          </p>
          <h2 className="text-[#F43127] text-[28px] font-lilita uppercase">
            #empireburger{" "}
          </h2>
        </div>
      </section>

      <article id="cardapio">
        <img />
        <div className="bg-[#3B200B]">
          <h2 className="text-[32px] font-lilita text-[#F59A1B] mb-4">
            Cardápio imperial | Burger
          </h2>
          <div className="mb-8">
            <h3 className="text-[20px] font-lilita text-[#FAE4D0]">
              Classic burger
              .........................................................................
              R$49,99
            </h3>
            <p className="text-[16px] text-white max-w-[470px] w-full leading-[1]">
              Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
              Tomate, Alface, Servidor do pão de batata
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Cardapio;

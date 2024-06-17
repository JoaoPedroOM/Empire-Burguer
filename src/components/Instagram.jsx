import React from "react";
import insta from "../assets/imgs/InstagramImg.png";
import cardPhone from "../assets/imgs/card-phone.png";
import { BsDot } from "react-icons/bs";
import Card from "../components/Card";
import whats from "../assets/icons/whatsapp.svg";
import delivery from "../assets/icons/delivery.svg";
import iceCream from "../assets/icons/ice-cream.svg";
import ifoodEntregas from "../assets/icons/ifoodEntregas.svg";

const Instagram = () => {
  return (
    <div className="mx-auto flex flex-col justify-center mb-16">
      <div className="text-center md:px-[5px]">
        <h2 className="text-[#1D0605E5] text-[32px] font-lilita uppercase lg:text-[25px] lg:leading-[1]">
          Publicações do instagram
        </h2>
        <p className="text-[16px] text-[#1D0605B0]">
          Todos os nossos clientes são tratados como rei e rainha, com a nossa
          colunaria artesanal.
        </p>
      </div>

      <div className="relative mt-4 min-h-[13.625rem] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${insta})` }}
        />
        <div className="absolute inset-0 before:absolute before:inset-x-0 before:inset-y-0 before:bg-black before:opacity-25 after:absolute after:inset-x-0 after:inset-y-0 after:bg-black after:opacity-25" />
      </div>
      <div className="flex h-[50px] max-w-full flex-row items-center justify-center overflow-x-hidden bg-[#f59a1b] mb-16 lg:mb-9">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="flex animate-loop">
            <h3 className="inline-flex items-center whitespace-nowrap font-lilita text-[1.75rem] uppercase leading-[2.625rem] text-[#1D0605E5] transition-all duration-200 ease-in">
              #empireburger
              <BsDot />
            </h3>
          </div>
        ))}
      </div>

      <div className="max-w-[1240px] mx-auto items-center gap-7 lg:px-2 grid grid-cols-2 md:grid-cols-1 justify-items-start">
        <img
          src={cardPhone}
          alt="Imagem de um hambúrguer saindo da tela de um smartphone com uma coroa no topo, simbolizando a realeza da comida digital."
        />
        <div>
          <h2 className="text-[#1D0605E5] text-[32px] font-lilita uppercase mb-[16px] lg:text-[25px] lg:leading-[1]">
            Nossas entregas
          </h2>

          <Card
            img={whats}
            alt="Logo do whatsApp"
            title="WhatsApp"
            text="Vamos direto ao ponto, sem perder tempo!"
          />
          <Card
            img={delivery}
            alt="Logo do whatsApp"
            title="Entrega"
            text="Entregamos menos de 45 minutos na porta da sua casa!"
          />
          <Card
            img={iceCream}
            alt="Logo do whatsApp"
            title="Sobremesa"
            text="Pedidos assima de 100 reais, ganham brindes."
          />
          <Card
            img={ifoodEntregas}
            alt="Logo do whatsApp"
            title="iFood"
            text="Nossa loja é Top 1 da região!"
          />
        </div>
      </div>
  
    </div>
  );
};

export default Instagram;

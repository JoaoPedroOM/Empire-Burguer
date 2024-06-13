import React, { useState, useEffect } from "react";
import Timer from "../assets/icons/timer.svg";
import useFetch from "../Hooks/useFetch";
import { MENU_GET } from "../Api/api";
import bannerMenu from "../assets/imgs/banner-menu.png";
import bannerMobile from "../assets/imgs/banner-menu-mobile.4eba16a4.png";

const Cardapio = () => {
  const [menu, setMenu] = useState(null);
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = MENU_GET();
    request(url, options);
  }, [request]);

  useEffect(() => {
    if (data) setMenu(data);
  }, [data]);

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

      <article id="cardapio" className="grid grid-cols-2 lg:grid-cols-1">
        <div className="relative flex items-center before:absolute before:h-full before:w-1 before:bg-[#B50B04] before:right-0 before:top-0 md:before:hidden">
          <img
            className="h-full object-cover block ms:hidden"
            src={bannerMenu}
            alt="Oferta Burger imperial mais batata por apenas 35,99"
          />
           <img
            className="h-full object-cover hidden ms:block"
            src={bannerMobile}
            alt="Oferta Burger imperial mais batata por apenas 35,99"
          />
          <div className="absolute right-[100px] p-4 text-left lg:right-0 md:py-6">
            <h2 className="text-[42px] font-lilita uppercase text-[#3B200B] leading-[1] lg:text-[25px]">
              Escolha o seu combo
              <br /> imperial,{" "}
              <span className="bg-[#f59a1b] px-2 py-[1px] rounded-md">
                peça agora!
              </span>
            </h2>
            <p className="text-[16px] text-[#1D0605B0] mb-5 lg:text-[14px]">
              Temos vários tipos de pratos para a nossa realeza, fique <br />{" "}
              esperto porque temos sempre promoção!
            </p>
            <a
              href="/"
              className="px-5 py-[10px] text-white bg-[#f43127] font-bold rounded-md lg:text-[18px] hover:bg-red-700"
            >
              Ver Cardápio Completo
            </a>
          </div>
        </div>
        
        <div className="bg-[#3B200B] col-span-1 py-[70px] pl-8 lg:p-0 lg:px-4 lg:pt-12">
          <h2 className="text-[32px] font-lilita text-[#F59A1B] mb-4 md:leading-[1]">
            Cardápio imperial | Burger
          </h2>
          {error && alert("Erro ao consultar menu")}
          {loading && (
            <p className="text-[20px] font-lilita text-[#FAE4D0]">
              Carregando menu...
            </p>
          )}
          {menu && (
            <div>
              {menu.map((prato) => (
                <div className="mb-8" key={prato.plate}>
                  <h3 className="text-[20px] font-lilita text-[#FAE4D0]">
                    {prato.plate}
                    .................
                    {prato.price}
                  </h3>
                  <p className="text-[16px] text-white max-w-[470px] w-full leading-[1]">
                    {prato.ingredients}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default Cardapio;

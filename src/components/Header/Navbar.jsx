import React from "react";
import logo from "../../assets/imgs/logo.png";
import menuMobile from "../../assets/icons/bars-solid 2.svg";
import whats from "../../assets/icons/whatsapp.svg";
import ifood from "../../assets/icons/ifood.svg";
import insta from "../../assets/icons/instagram.svg";

const Navbar = () => {
  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Promoção",
      link: "#promocao",
    },
    {
      name: "Cardapio",
      link: "#cardapio",
    },
    {
      name: "Comentario",
      link: "#comentario",
    },
    {
      name: "Contato",
      link: "#contato",
    },
  ];
  return (
    <div className="w-full h-16 bg-yellow-950 bg-opacity-5 backdrop-blur-md fixed z-50 flex justify-center items-center lg:justify-between">
      <img src={logo} alt="logo" className="w-64  ml-6" />
      <img src={menuMobile} alt="" className="w-8 h-8 relative bg-stone-950 bg-opacity-20 rounded-[3px] mr-6 cursor-pointer hidden lg:block"/>

      <div className="lg:hidden block mx-[100px]">
        <ul className="flex gap-4">
          {navlinks.map((links) => (
            <li key={links.name}><a href={links.link}>{links.name}</a></li>
          ))}
        </ul>
      </div>

      <div className="lg:hidden flex gap-3 items-center">
        <img src={ifood} alt="" />
        <img src={insta} alt="" />
        <span className="h-6 w-px bg-[#B50B04]"></span>
        <a href="/" className="flex gap-[8px] py-[4px] px-[16px] text-[16px] items-center bg-[#f59a1b] rounded-md font-bold">
          <img src={whats} alt="logo do whats" className="h-6 w-6" />
          Contato
        </a>
      </div>
    </div>
  );
};

export default Navbar;

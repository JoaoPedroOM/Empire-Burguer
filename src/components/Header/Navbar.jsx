import React, { useState } from "react";
import logo from "../../assets/imgs/logo.png";
import whats from "../../assets/icons/whatsapp.svg";
import ifood from "../../assets/icons/ifood.svg";
import insta from "../../assets/icons/instagram.svg";
import { IoMenu, IoClose } from "react-icons/io5";

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

  const [selectedLink, setSelectedLink] = useState("")

  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 bg-yellow-950 bg-opacity-5 backdrop-blur-md fixed z-50 flex justify-center items-center lg:px-[5px] lg:gap-[8px] lg:justify-between">
      <img src={logo} alt="logo" className="w-64  ml-6 lg:ml-[15px]" />

      <div className="lg:block hidden mr-6" onClick={() => setOpen(!open)}>
        <IoMenu
          size={"32px"}
          className="bg-stone-950 bg-opacity-20 rounded-[3px]"
        />
      </div>

      {/* Menu mobile */}
      {open ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : null}

      <div
        className={
          open
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <IoClose
          size={"32px"}
          className="bg-stone-950 bg-opacity-20 rounded-[3px] absolute right-4 top-4 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <img src={logo} alt="logo" className="w-[70%] p-4" />
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {navlinks.map((links) => (
              <li
                key={links.name}
                className="text-xl py-4 flex items-center cursor-pointer"
              >
                <a href={links.link}>{links.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="lg:hidden block mx-[100px]">
        <ul className="flex gap-4 lg:flex-col lg:text-white justify-center items-center w-full py-4">
          {navlinks.map((links) => (
            <li key={links.name} onClick={() => setSelectedLink(links.name)} className={`${selectedLink === links.name ? 'font-bold' : ''}`}>
              <a href={links.link}>{links.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:hidden flex gap-3 items-center">
        <img src={ifood} alt="" />
        <img src={insta} alt="" />
        <span className="h-6 w-px bg-[#B50B04]"></span>
        <a
          href="/"
          className="flex gap-[8px] py-[4px] px-[16px] text-[16px] items-center bg-[#f59a1b] rounded-md font-bold"
        >
          <img src={whats} alt="logo do whats" className="h-6 w-6" />
          Contato
        </a>
      </div>
    </div>
  );
};

export default Navbar;

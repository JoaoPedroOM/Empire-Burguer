import React, { useState } from "react";
import Logo from "../assets/icons/FooterLogo.svg";
import ifood from "../assets/icons/IfoodFooter.svg";
import insta from "../assets/icons/InstaFooter.svg";

const Footer = () => {
  const footerLinks = [
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

  const [selectedLink, setSelectedLink] = useState("");

  return (
    <footer>
      <div className="max-w-[1240px] mx-auto flex items-center justify-between lg:justify-center lg:flex-col lg:px-4">
        <div className="mb-[30px] pt-[25px] lg:pt-0">
          <img src={Logo} alt="Logo da Empire Burger" />
        </div>

        <div className="flex items-center gap-[150px] lg:flex-col-reverse lg:gap-[18px] lg:justify-center lg:w-full">
          <div className="lg:border-t lg:border-[#1D060526] w-full">
            <ul className="text-[#3A210B] flex gap-8 lg:flex-col lg:text-center lg:gap-3 lg:my-3">
              {footerLinks.map((links) => (
                <li
                  key={links.name}
                  onClick={() => setSelectedLink(links.name)}
                  className={`${
                    selectedLink === links.name ? "font-bold" : ""
                  }`}
                >
                  <a href={links.link}>{links.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-[6px] lg:border-t lg:border-[#1D060526] lg:gap-3 lg:justify-center w-full lg:pt-[20px]">
            <a href="#"><img src={ifood} alt="Logo Ifood amarela" /></a>
            <a href="#"><img src={insta} alt="Logo Instagram amarela" /></a>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto text-center lg:px-4">
        <p className="text-[14px] w-full border-t border-[#1D060526] py-[12px] font-Inter">
          <span className="text-black font-bold">2024 © EmpireBurger.</span>{" "}
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

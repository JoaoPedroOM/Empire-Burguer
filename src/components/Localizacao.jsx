import React from "react";

const Localizacao = () => {
  return (
    <section className="mb-[30px]">
      <div className="text-center mb-8">
        <h2 className="text-[#1D0605E5] text-[32px] uppercase font-lilita lg:text-[28px]">
          Onde ficar a nosso castelo
        </h2>
        <p className="text-[#1D0605B0]">
          Estaremos de portas abertas para a nossa realeza.
        </p>
      </div>

        <iframe className="w-full max-h-[207px]"
          src="https://maps.google.com/maps?width=100%25&amp;height=207&amp;hl=en&amp;q=R.%20Joaquim%20T%C3%A1vora,%201403%20-%20Vila%20Mariana,%20S%C3%A3o%20Paulo%20-%20SP,%2004015-003+(Empire%20Burger)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>
    </section>
  );
};

export default Localizacao;

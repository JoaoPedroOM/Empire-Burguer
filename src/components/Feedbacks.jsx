import React, { useState, useEffect } from "react";
import { COMENTARIOS_GET } from "../Api/api";
import useFetch from "../Hooks/useFetch";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";

const Feedbacks = () => {
  const [feedback, setFeedback] = useState(null);
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = COMENTARIOS_GET();
    request(url, options);
  }, [request]);

  useEffect(() => {
    if (data) setFeedback(data);
  }, [data]);

  return (
    <article className="max-w-[1240px] mx-auto mb-36 p-4">
      <div className="mb-4">
        <h2 className="text-[32px] text-[#1D0605E5] font-lilita uppercase">
          Nossa realeza
        </h2>
        <p className="text-[#1D0605B0] text-[16px]">
          A satisfação de nossos clientes em primeiro lugar!
        </p>
      </div>

      {/* Card */}
      {error && alert("Erro ao consultar menu")}
      {loading && (
        <p className="text-[20px] font-lilita text-[#1D0605E5]">
          Carregando comentários...
        </p>
      )}
      {feedback && (
        <Swiper
          spaceBetween={12}
          slidesPerView={1}
        >
          {feedback.map((comentarios) => (
            <SwiperSlide
              key={comentarios.name}
              className="max-w-[370px] md:max-w-[326px] max-h-[178px] h-full md:max-h-[212px] bg-white rounded-md p-4 shadow-lg"
            >
              <p className="text-[16px] text-[#1D0605E5] line-clamp-4 mb-3 md:mb-5">
                {comentarios.testimonial}
              </p>

              <div className="flex gap-2">
                <img
                  src={comentarios.image}
                  alt="foto de perfil do ..."
                  className=" w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <h3 className="text-[18px] text-[#1D0605E5] font-lilita uppercase leading-[1]">
                    {comentarios.name}
                  </h3>
                  <div>
                    <p className="text-[#1D0605B0] text-[12px]">
                      {comentarios.age} Anos • Designer
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </article>
  );
};

export default Feedbacks;

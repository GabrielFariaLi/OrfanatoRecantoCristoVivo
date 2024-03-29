import React from "react";
import "./FundadoresSobreNos.css";
import { fundadoresSobreNos } from "../../data.js";
import { useState, useEffect } from "react";

// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FundadoresSobreNos = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,

    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 7000,
          /*        slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true, */
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 7000,

          /*        slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2, */
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.1,
          autoplay: true,
          autoplaySpeed: 7000,

          /*        slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2, */
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.1,
          autoplay: true,
          autoplaySpeed: 7000,

          /*        slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2, */
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 7000,
          /*           vertical: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,

          touchThreshold: 500,
          swipeToSlide: false, */
        },
      },
    ],
  };
  return (
    <>
      <div className="containerPrincipalFundadoresSobreNos">
        <div className="containerTituloNossosFundadoresSobreNos">
          <p className="tituloNossosFundadoresSobreNos">Nossos fundadores</p>{" "}
          <svg
            style={{ marginTop: "10px", marginLeft: "20px" }}
            width="57"
            height="3"
            viewBox="0 0 57 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.5"
              y1="1.5"
              x2="55.5"
              y2="1.5"
              stroke="#FF284D"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="containerSliderFundadoresSobreNos">
          <Slider
            {...settings}
            className="containerCardNossosFundadoresSobreNos"
          >
            {fundadoresSobreNos.map((item) => (
              <div key={item.id} className="cardNossosFundadoresSobreNos">
                {item.id % 2 ? (
                  <div className="molduraImagemNossosFundadoresSobreNos molduraAzulFundadoresSobreNos">
                    <p className="textoDescImagemNossosFundadoresSobreNos">
                      “{item.depoimento}”
                    </p>
                  </div>
                ) : (
                  <div className="molduraImagemNossosFundadoresSobreNos molduraVermelhoFundadoresSobreNos">
                    <p className="textoDescImagemNossosFundadoresSobreNos">
                      “{item.depoimento}”
                    </p>
                  </div>
                )}
                <img
                  src={item.img}
                  className="imagemNossosFundadoresSobreNos"
                />
                <p className="nomeNossoFundadoresSobreNos">{item.nome}</p>
                <p className="funcaoNossoFundadoresSobreNos">{item.funcao}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FundadoresSobreNos;

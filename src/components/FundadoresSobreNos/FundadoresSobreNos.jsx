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
        breakpoint: 1024,
        settings: {
          /*        slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true, */
        },
      },
      {
        breakpoint: 600,
        settings: {
          /*        slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2, */
        },
      },
      {
        breakpoint: 480,
        settings: {
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
                      “Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam”
                    </p>
                  </div>
                ) : (
                  <div className="molduraImagemNossosFundadoresSobreNos molduraVermelhoFundadoresSobreNos">
                    <p className="textoDescImagemNossosFundadoresSobreNos">
                      “Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam”
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

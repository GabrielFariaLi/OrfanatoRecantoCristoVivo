import React from "react";
import "./ConhecaAlgunsProjetosSobreNos.css";

import { projetosSobreNos } from "../../data.js";

import { useState, useEffect } from "react";

// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const ConhecaAlgunsProjetosSobreNos = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,

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

          /*        slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true, */
        },
      },
      {
        breakpoint: 602,

        settings: {
          slidesToShow: 1,
          /*        slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2, */
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          /*           vertical: false,
          dots: true,
         
          slidesToScroll: 1,

          touchThreshold: 500,
          swipeToSlide: false, */
        },
      },
    ],
  };
  return (
    <>
      <div className="containerPrincipalConhecaAlgunsProjetosSobreNos">
        <div className="containerTituloConhecaAlgunsProjetosSobreNos">
          <p className="primeiroTituloConhecaAlgunsProjetosSobreNos">
            Conheça alguns dos{" "}
          </p>
          <h1 className="segundoTituloConhecaAlgunsProjetosSobreNos">
            nossos projetos
          </h1>
        </div>

        <div className="containerSliderCarouselConhecaAlgunsProjetosSobreNoS">
          <Slider
            {...settings}
            className="containerCarouselConhecaAlgunsProjetosSobreNos"
          >
            {projetosSobreNos.map((item) => (
              <div className="cardConhecaAlgunsProjetosSobreNos">
                <div className="molduraCardConhecaAlgunsProjetosSobreNos">
                  {" "}
                  <div className="primeiroTituloProjetoConhecaAlgunsProjetosSobreNos">
                    {" "}
                    {item.primeiroTitulo}
                  </div>
                  <div className="segundoTituloProjetoConhecaAlgunsProjetosSobreNos">
                    {" "}
                    {item.segundoTitulo}{" "}
                  </div>
                  <div className="buttonDirecionamentoProjetoConhecaAlgunsProjetosSobreNos">
                    <Link to="/detalhesNossosProjetos/1">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="15" cy="15" r="14.5" stroke="#F2F2F2" />
                        <path
                          d="M13.4041 10.5959C13.1809 10.3728 12.8191 10.3728 12.5959 10.5959C12.3728 10.8191 12.3728 11.1809 12.5959 11.4041L13.4041 10.5959ZM17 15L17.4041 15.4041C17.6272 15.1809 17.6272 14.8191 17.4041 14.5959L17 15ZM12.5959 18.5959C12.3728 18.8191 12.3728 19.1809 12.5959 19.4041C12.8191 19.6272 13.1809 19.6272 13.4041 19.4041L12.5959 18.5959ZM12.5959 11.4041L16.5959 15.4041L17.4041 14.5959L13.4041 10.5959L12.5959 11.4041ZM16.5959 14.5959L12.5959 18.5959L13.4041 19.4041L17.4041 15.4041L16.5959 14.5959Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img
                  src={item.img}
                  className="imagemCardConhecaAlgunsProjetosSobreNos"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ConhecaAlgunsProjetosSobreNos;

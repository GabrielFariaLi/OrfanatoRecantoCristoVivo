import React from "react";
import { useState, useEffect } from "react";
import "./NossosProjetosHome.css";

import { nossosProjetosHome } from "../../data";
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NossosProjetosHome = () => {
  const [currentSlide, setcurrentSlide] = useState(-99);

  useEffect(() => {
    if (currentSlide !== -99) {
      let widthAtual = window.innerWidth;
      if (widthAtual > 860) {
        let teste = document.querySelector(".containerCarrouselProjetosHome");

        let testeTrack = teste.querySelector(".slick-track");
        let dIndex = parseInt(currentSlide).toString();
        let dIndexAnterior = parseInt(currentSlide - 1).toString();

        testeTrack
          .querySelector(`[data-index="${dIndex}"]`)
          .classList.add("atualItemRoletaNossosProjetosHome");

        testeTrack
          .querySelector(`[data-index="${dIndexAnterior}"]`)
          .classList.remove("atualItemRoletaNossosProjetosHome");
      } else if (widthAtual < 480) {
      }
    }
  }, [currentSlide]);
  var settings = {
    infinite: true,

    touchThreshold: 100,
    swipeToSlide: true,
    initialSlide: 3,
    autoplay: false,
    autoplaySpeed: 7000,
    slidesToShow: 3,

    centerMode: true,
    arrows: false,
    dots: true,
    variableWidth: true,

    beforeChange: (current, next) => {
      setcurrentSlide(next);
      //console.log(currentSlide);
    },

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          infinite: true,
          centerPadding: "60px",
          touchThreshold: 100,
          swipeToSlide: true,

          autoplay: true,
          autoplaySpeed: 7000,
          slidesToShow: 1,

          centerMode: true,
          arrows: false,
          dots: true,
          variableWidth: true,

          beforeChange: (current, next) => {
            setcurrentSlide(next);
            //console.log(currentSlide);
          },
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          dots: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          dots: true,
          centerPadding: "60px",
        },
      },
    ],
  };
  return (
    <>
      <div>
        {" "}
        <div className="containerPrincipalNossosProjetosHome">
          <div className="flexColumn">
            <div className="tituloCarouselNossosProjetosHome">
              <svg
                style={{ marginTop: "10px", alignSelf: "center" }}
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
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <h1
                className="semibold48"
                style={{ color: "var(--text-black)", alignSelf: "center" }}
              >
                Nossos projetos
              </h1>
            </div>
            <div>
              <Slider {...settings} className="containerCarrouselProjetosHome">
                {nossosProjetosHome.map(
                  (item) =>
                    item.id !== null && (
                      <div
                        key={item.id}
                        className="containerCardNossosProjetosHome"
                      >
                        <div className="fotoNossosProjetosHome">
                          <img
                            src={item.img}
                            className="imagemNossosProjetosHome"
                          />
                        </div>
                        <div className="containerNomeNossosProjetosHome">
                          <div className="faixaAnoProjetoHome">
                            {item.anoProjeto}
                          </div>
                          <div className="tituloNossosProjetosHome">
                            {item.tituloProjeto}
                          </div>
                        </div>
                      </div>
                    )
                )}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NossosProjetosHome;

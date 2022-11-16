import React from "react";
import "./NossaEquipeHome.css";
import { useState, useEffect } from "react";
// Import css files
import Slider from "react-slick";
import { nossaEquipeItems } from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NossaEquipeHome = () => {
  var settings = {
    infinite: true,
    slidesToShow: 5,
    touchThreshold: 100,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          vertical: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,

          touchThreshold: 500,
          swipeToSlide: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="containerPrincipalNossaEquipeHome">
        <div className="flexColumn">
          <div className="tituloCarouselNossaEquipeHome">
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
              style={{
                color: "var(--text-black)",
                alignSelf: "center",
                fontWeight: "600",
              }}
            >
              Nossa Equipe
            </h1>
          </div>
        </div>

        <div className="testeContainer">
          <Slider {...settings} className="sliderNossaEquipeHome">
            {nossaEquipeItems.map(
              (item) =>
                item.id !== null && (
                  <div key={item.id} className="containerCardFuncionarioHome">
                    <div className="fotoFuncionarioHome">
                      <img src={item.img} className="imagemFuncionarioHome" />
                      <span className="faixaCargoFuncionarioHome">
                        {item.cargo}
                      </span>
                    </div>
                    <div className="containerNomeFuncionarioHome">
                      {item.nome}
                    </div>
                  </div>
                )
            )}
          </Slider>
        </div>
        <button className="buttonContainerNossaEquipeHome">
          Conheça nossa equipe
        </button>
      </div>
    </>
  );
};

export default NossaEquipeHome;

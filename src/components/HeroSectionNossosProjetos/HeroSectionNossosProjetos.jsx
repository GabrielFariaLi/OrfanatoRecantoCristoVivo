import React from "react";
import "./HeroSectionNossosProjetos.css";
import $ from "jquery";

import { useState, useEffect } from "react";
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSectionNossosProjetos = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    swipeToSlide: true,

    autoplay: true,
    autoplaySpeed: 7000,

    customPaging: function (i) {
      return (
        <div className="customPagingHeroSectionSobreNos">
          {console.log(i)}
          {i + 1}
          &nbsp;&nbsp;
          {i === 0 && (
            <svg
              className="customPagingDivisoriaHeroSectionSobreNos"
              width="1"
              height="16"
              viewBox="0 0 1 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.25"
                y1="-1.09279e-08"
                x2="0.250001"
                y2="16"
                stroke="#9C9C9C"
                stroke-width="0.5"
              />
            </svg>
          )}
          {i !== 2 && (
            <svg
              className="customPagingDivisoriaHeroSectionSobreNos"
              width="1"
              height="16"
              viewBox="0 0 1 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.25"
                y1="-1.09279e-08"
                x2="0.250001"
                y2="16"
                stroke="#9C9C9C"
                stroke-width="0.5"
              />
            </svg>
          )}
        </div>
      );
    },

    dots: true,
    dotsClass: "slick-dots slick-thumb",
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
      <div className="containerPrincipalHeroSectionNossosProjetos">
        <Slider
          {...settings}
          className="containerSliderImagensHeroSectionNossosProjetos"
        >
          <div className="containerIndividualProjetoHeroSectionNossosProjetos">
            <img
              className="imagemHeroSectionNossosProjetos"
              src="/imgs/heroSectionNossosProjetos1.png"
            />
            <div className="containerInfosHeroSectionNossosProjetos">
              <h2 className="tituloInfoHeroSectionNossosProjetos">
                Nome do projeto
              </h2>
              <button className="buttonVejaMaisHeroSectionNossosProjetos buttonFormaDoarDoacao">
                Veja mais{" "}
                <svg
                  className="setaDoeAgoraDoacao"
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM8 8L8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L8 8ZM0.292893 14.2929C-0.0976311 14.6834 -0.0976311 15.3166 0.292893 15.7071C0.683417 16.0976 1.31658 16.0976 1.70711 15.7071L0.292893 14.2929ZM0.292893 1.70711L7.29289 8.70711L8.70711 7.29289L1.70711 0.292893L0.292893 1.70711ZM7.29289 7.29289L0.292893 14.2929L1.70711 15.7071L8.70711 8.70711L7.29289 7.29289Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="containerIndividualProjetoHeroSectionNossosProjetos">
            <img
              className="imagemHeroSectionNossosProjetos"
              src="/imgs/heroSectionNossosProjetos1.png"
            />
            <div className="containerInfosHeroSectionNossosProjetos">
              <h2 className="tituloInfoHeroSectionNossosProjetos">
                Nome do projeto
              </h2>
              <button className="buttonVejaMaisHeroSectionNossosProjetos buttonFormaDoarDoacao">
                Veja mais{" "}
                <svg
                  className="setaDoeAgoraDoacao"
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM8 8L8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L8 8ZM0.292893 14.2929C-0.0976311 14.6834 -0.0976311 15.3166 0.292893 15.7071C0.683417 16.0976 1.31658 16.0976 1.70711 15.7071L0.292893 14.2929ZM0.292893 1.70711L7.29289 8.70711L8.70711 7.29289L1.70711 0.292893L0.292893 1.70711ZM7.29289 7.29289L0.292893 14.2929L1.70711 15.7071L8.70711 8.70711L7.29289 7.29289Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </button>
            </div>
          </div>{" "}
          <div className="containerIndividualProjetoHeroSectionNossosProjetos">
            <img
              className="imagemHeroSectionNossosProjetos"
              src="/imgs/heroSectionNossosProjetos1.png"
            />
            <div className="containerInfosHeroSectionNossosProjetos">
              <h2 className="tituloInfoHeroSectionNossosProjetos">
                Nome do projeto
              </h2>
              <button className="buttonVejaMaisHeroSectionNossosProjetos buttonFormaDoarDoacao">
                Veja mais{" "}
                <svg
                  className="setaDoeAgoraDoacao"
                  width="9"
                  height="16"
                  viewBox="0 0 9 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM8 8L8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L8 8ZM0.292893 14.2929C-0.0976311 14.6834 -0.0976311 15.3166 0.292893 15.7071C0.683417 16.0976 1.31658 16.0976 1.70711 15.7071L0.292893 14.2929ZM0.292893 1.70711L7.29289 8.70711L8.70711 7.29289L1.70711 0.292893L0.292893 1.70711ZM7.29289 7.29289L0.292893 14.2929L1.70711 15.7071L8.70711 8.70711L7.29289 7.29289Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Slider>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default HeroSectionNossosProjetos;

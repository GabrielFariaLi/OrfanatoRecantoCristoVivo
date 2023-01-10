import React from "react";
import "./JuntosMudamosVidasHome.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// Import css files
import Slider from "react-slick";
import { nomesJuntosMudamosHome } from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JuntosMudamosVidasHome = () => {
  const [currentSlide, setcurrentSlide] = useState(-99);
  const [widthAtual, setWidthAtual] = useState(0);

  useEffect(() => {
    if (currentSlide !== -99) {
      setWidthAtual(window.innerWidth);
      if (widthAtual > 800) {
        if (currentSlide === 8) {
          setcurrentSlide(-1);
        }
        let teste = document.querySelector(".roletaNomesAjudados");
        let testeTrack = teste.querySelector(".slick-track");
        let dIndex = (parseInt(currentSlide) + 3).toString();

        let dIndexAnterior = (parseInt(currentSlide) + 2).toString();
        let dIndexAnterior2 = (parseInt(currentSlide) + 1).toString();

        let dIndexPosterior = (parseInt(currentSlide) + 4).toString();
        let dIndexPosterior2 = (parseInt(currentSlide) + 5).toString();

        testeTrack
          .querySelector(`[data-index="${dIndex}"]`)
          .classList.add("atualItemRoleta");

        testeTrack
          .querySelector(`[data-index="${dIndexAnterior}"]`)
          .classList.remove("atualItemRoleta");

        testeTrack
          .querySelector(`[data-index="${dIndexAnterior}"]`)
          .classList.add("itemUmaUnidadeDistanciaRoleta");

        testeTrack
          .querySelector(`[data-index="${dIndexAnterior - 1}"]`)
          .classList.remove("itemUmaUnidadeDistanciaRoleta");

        testeTrack
          .querySelector(`[data-index="${dIndexPosterior}"]`)
          .classList.add("itemUmaUnidadeDistanciaRoleta");
        testeTrack
          .querySelector(`[data-index="${dIndexPosterior - 1}"]`)
          .classList.remove("itemUmaUnidadeDistanciaRoleta");

        testeTrack
          .querySelector(`[data-index="${dIndexAnterior2}"]`)
          .classList.add("itemDuasUnidadeDistanciaRoleta");
        testeTrack
          .querySelector(`[data-index="${dIndexAnterior2 - 1}"]`)
          .classList.remove("itemDuasUnidadeDistanciaRoleta");

        testeTrack
          .querySelector(`[data-index="${dIndexPosterior2}"]`)
          .classList.add("itemDuasUnidadeDistanciaRoleta");
        testeTrack
          .querySelector(`[data-index="${dIndexPosterior2 - 1}"]`)
          .classList.remove("itemDuasUnidadeDistanciaRoleta");
      } else if (widthAtual <= 799) {
        if (currentSlide === 8) {
          setcurrentSlide(-1);
        }
        console.log("slide atual -> " + currentSlide);
        let teste = document.querySelector(".roletaNomesAjudados");
        let testeTrack = teste.querySelector(".slick-track");
        let dIndex = (parseInt(currentSlide) + 1).toString();
        let dIndexAnterior = parseInt(currentSlide).toString();
        let dIndexAnterior1 = parseInt(currentSlide - 1).toString();
        let dIndexAnterior2 = parseInt(currentSlide - 2).toString();
        let dIndexAnterior3 = parseInt(currentSlide - 3).toString();

        let dIndexPosterior2 = (parseInt(currentSlide) + 2).toString();
        let dIndexPosterior3 = (parseInt(currentSlide) + 4).toString();
        let dIndexPosterior4 = (parseInt(currentSlide) + 5).toString();

        testeTrack
          .querySelector(`[data-index="${dIndex}"]`)
          .classList.add("atualItemRoleta");

        testeTrack
          .querySelector(`[data-index="${dIndexAnterior}"]`)
          .classList.remove("atualItemRoleta");

        testeTrack
          .querySelector(`[data-index="${dIndexPosterior2}"]`)
          .classList.add("itemUmaUnidadeDistanciaRoleta");

        testeTrack
          .querySelector(`[data-index="${dIndexPosterior2 - 1}"]`)
          .classList.remove("itemUmaUnidadeDistanciaRoleta");

        testeTrack
          .querySelector(`[data-index="${dIndexPosterior3}"]`)
          .classList.add("itemDuasUnidadeDistanciaRoleta");
        testeTrack
          .querySelector(`[data-index="${dIndexPosterior3 - 1}"]`)
          .classList.remove("itemDuasUnidadeDistanciaRoleta");

        testeTrack
          .querySelector(`[data-index="${dIndexPosterior4}"]`)
          .classList.add("itemDuasUnidadeDistanciaRoleta");
        testeTrack
          .querySelector(`[data-index="${dIndexPosterior4 - 1}"]`)
          .classList.remove("itemDuasUnidadeDistanciaRoleta");
      }
    }
  }, [currentSlide]);

  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipe: false,
    arrows: false,
    dots: false,
    vertical: true,

    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (current, next) => {
      setcurrentSlide(current);
      //console.log(currentSlide);
    },
    reInit: (current, next) => {
      setcurrentSlide(current);
      //console.log(currentSlide);
    },
    init: (current, next) => {
      setcurrentSlide(current);
      //console.log(currentSlide);
    },
  };

  return (
    <>
      <div className="containerGeralJuntosMudamosVidasHome">
        <div className="containerConteudosJuntosMudamosVidas">
          <div className="tituloJuntoMudamos">
            <p className="juntosP">Juntos {"\u00A0"} </p> mudamos a vida
          </div>
          <Slider {...settings} className="roletaNomesAjudados">
            {nomesJuntosMudamosHome.map((item) => (
              <div key={item.id} className="nomeCriancasAjudadas">
                {item.nome}
              </div>
            ))}
          </Slider>
          <div className="containerButtonNosAjude">
            <button className="buttonNosAjude">
              <Link to="/facaSuaDoacao">
                Nos ajude a transformar mais vidas!
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="footerDivisoriaJuntosMudamosVidaHome">
        <svg
          className="linhaDivisoriaJuntosMudamosVidasHome"
          width="1155"
          height="3"
          viewBox="0 0 1155 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.5"
            y1="1.5"
            x2="1153.5"
            y2="1.5"
            stroke="#E6E6E6"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
};

export default JuntosMudamosVidasHome;

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { opcoesComoDoarMobileHome } from "../../data";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ComoDoarHome.css";

const ComoDoarHome = () => {
  const [hoverDoacaoFlag, sethoverDoacaoFlag] = useState(99);

  /*   useEffect(() => {
    
  }, []); // dependencias */
  var settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    initialSlide: 0,
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
        breakpoint: 668,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          fade: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
  };
  useEffect(() => {
    if (hoverDoacaoFlag === 0) {
      document.querySelector(".imagemDoacoesHome").style.opacity = "1";
      document.querySelector(".imagemDoacoesHome2").style.opacity = "0";
      document.querySelector(".imagemDoacoesHome3").style.opacity = "0";
    }

    if (hoverDoacaoFlag === 1) {
      document.querySelector(".imagemDoacoesHome").style.opacity = "0";
      document.querySelector(".imagemDoacoesHome2").style.opacity = "1";
      document.querySelector(".imagemDoacoesHome3").style.opacity = "0";
    }
    if (hoverDoacaoFlag === 2) {
      document.querySelector(".imagemDoacoesHome").style.opacity = "0";
      document.querySelector(".imagemDoacoesHome2").style.opacity = "0";
      document.querySelector(".imagemDoacoesHome3").style.opacity = "1";
    }
  }, [hoverDoacaoFlag]); // dependencias

  return (
    <>
      <div className="containerComoDoarHome">
        <div className="containerFotosRightComoDoarHome">
          <div className="imagemDoacoesHome"></div>
          <div className="imagemDoacoesHome2"></div>
          <div className="imagemDoacoesHome3"></div>
        </div>
        <div className="containerTextoRightComoDoarHome">
          <div className="tituloContainerComoDoarHome">
            Como doar
            <svg
              style={{ marginTop: "10px", marginLeft: "30px" }}
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
          </div>
          <Link to="/doacaoPorPix">
            <div
              onMouseOver={() => sethoverDoacaoFlag(0)}
              className="opcoesDoacaoHomePage"
            >
              Doe pelo Pix{" "}
              <svg
                className="opcoesDoacaoHomePageSetaIcon"
                width="118"
                height="24"
                viewBox="0 0 118 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M117.061 13.0607C117.646 12.4749 117.646 11.5251 117.061 10.9394L107.515 1.39341C106.929 0.807621 105.979 0.807621 105.393 1.39341C104.808 1.97919 104.808 2.92894 105.393 3.51473L113.879 12L105.393 20.4853C104.808 21.0711 104.808 22.0208 105.393 22.6066C105.979 23.1924 106.929 23.1924 107.515 22.6066L117.061 13.0607ZM-1.31134e-07 13.5L116 13.5L116 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
                  fill="#363636"
                />
              </svg>
            </div>
          </Link>
          <Link to="/doacaoPorCartao">
            <div
              onMouseOver={() => sethoverDoacaoFlag(1)}
              className="opcoesDoacaoHomePage2"
            >
              Doe pelo Cartão{" "}
              <svg
                className="opcoesDoacaoHomePageSetaIcon2 "
                width="57"
                height="24"
                viewBox="0 0 57 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.0607 13.0607C56.6464 12.4749 56.6464 11.5251 56.0607 10.9393L46.5147 1.3934C45.9289 0.807615 44.9792 0.807615 44.3934 1.3934C43.8076 1.97919 43.8076 2.92894 44.3934 3.51472L52.8787 12L44.3934 20.4853C43.8076 21.0711 43.8076 22.0208 44.3934 22.6066C44.9792 23.1924 45.9289 23.1924 46.5147 22.6066L56.0607 13.0607ZM-1.31134e-07 13.5L55 13.5L55 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
                  fill="#363636"
                />
              </svg>
            </div>
          </Link>
          <Link to="/doacaoPorPix">
            <div
              onMouseOver={() => sethoverDoacaoFlag(2)}
              className="opcoesDoacaoHomePage3"
            >
              Doe algum item{" "}
              <svg
                className="opcoesDoacaoHomePageSetaIcon3 "
                width="57"
                height="24"
                viewBox="0 0 57 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.0607 13.0607C56.6464 12.4749 56.6464 11.5251 56.0607 10.9393L46.5147 1.3934C45.9289 0.807615 44.9792 0.807615 44.3934 1.3934C43.8076 1.97919 43.8076 2.92894 44.3934 3.51472L52.8787 12L44.3934 20.4853C43.8076 21.0711 43.8076 22.0208 44.3934 22.6066C44.9792 23.1924 45.9289 23.1924 46.5147 22.6066L56.0607 13.0607ZM-1.31134e-07 13.5L55 13.5L55 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
                  fill="#363636"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className="containerComoDoarHomeMobile">
        <h1
          style={{ color: "var(--text-black)", textAlign: "center" }}
          className="tituloComoDoarMobile"
        >
          <hr style={{ justifySelf: "center" }} className="hrComoDoarMobile" />
          Como ajudar
        </h1>
        <Slider {...settings} className="containerOpcoesDoarMobile">
          {opcoesComoDoarMobileHome.map(
            (item) =>
              item.id !== null && (
                <div key={item.id} className="containerOpcaoDoarMobile">
                  <div className="containerSubTituloComoDoarMobile">
                    <div className="subTituloComoDoarMobile">{item.titulo}</div>
                  </div>

                  <div className="containerImagemOpcaoDoarMobileHome">
                    <img src={item.img} className="imagemOpcaoDoarMobileHome" />
                  </div>

                  <div className="containerDescricaoOpcaoDoarMobileHome">
                    {item.descricao}
                  </div>
                </div>
              )
          )}
        </Slider>
      </div>
    </>
  );
};

export default ComoDoarHome;

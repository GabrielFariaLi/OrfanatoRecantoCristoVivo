import { React, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./../components/NossaEstrutura/NossaEstrutura.css";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DivPrincipalNossaEstrutura = styled.div`
  background: var(--text-white);
`;
const NossaEstrutura = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  var settings = {
    infinite: true,
    slidesToShow: 2.5,

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
    <DivPrincipalNossaEstrutura>
      <Navbar />
      <div className="heroSectionNossaEstruturaContainer">
        <div className="primeiroTituloHeroSectionNossaEstrutura">
          Nossa estrutura
          <svg
            width="84"
            height="2"
            viewBox="0 0 84 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="1"
              x2="83"
              y2="1"
              stroke="#F2F2F2"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="segundoTituloHeroSectionNossaEstrutura">
          Lorem ipsum dolor sit amet consectetor
        </div>
        <div className="descTituloHeroSectionNossaEstrutura">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et
        </div>
      </div>
      <div className="primeiraInfoNossaEstruturaContainer">
        <div className="textoLeftPrimeiraInfoNossaEstrutura">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor.
        </div>
        <div className="textoRightPrimeiraInfoNossaEstrutura">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et.
          <br />
          <br />
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam,
        </div>
      </div>
      <div className="espacosColetivosNossaEstruturaContainer">
        <div className="containerImagemLeftEspacosColetivosNossaEstrutura">
          <img
            src="/imgs/imagemEspacosColetivosNossaEstrutura.png"
            alt=""
            className="imagemLeftEspacosColetivosNossaEstrutura"
          />
        </div>
        <div className="containertextoRightEspacosColetivosNossaEstrutura">
          <div className="primeiroTituloTextoRightEspacosColetivosNossaEstrutura">
            Espaços coletivos
            <svg
              className="linhaVermelhaNossaEstrutura"
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
          <div className="segundoTituloTextoRightEspacosColetivosNossaEstrutura">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit .
          </div>
          <div className="descricaoTituloTextoRightEspacosColetivosNossaEstrutura">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et
          </div>
          <div className="buttonConhecaNossosProjetosEspacosColetivosNossaEstrutura">
            Conheça nossos projetos
          </div>
        </div>
      </div>
      <div className="acomodacoesNossaEstruturaContainer">
        <div className="containertextoLeftAcomodacoesNossaEstrutura">
          <div className="primeiroTituloTextoLeftAcomodacoesNossaEstrutura">
            Acomodações
            <svg
              width="57"
              className="linhaVermelhaNossaEstrutura"
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
          <div className="segundoTituloTextoLeftAcomodacoesNossaEstrutura">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit .
          </div>
          <div className="descricaoTituloTextoLeftAcomodacoesNossaEstrutura">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et
          </div>
        </div>
        <div className="containerImagemRightAcomodacoesNossaEstrutura">
          <img
            src="/imgs/imagemAcomodacoesNossaEstrutura.png"
            alt=""
            className="imagemLeftAcomodacoesNossaEstrutura"
          />
        </div>
      </div>

      <div className="containerDivisoriaVideoDroneNossaEstrutura">
        {" "}
        <video
          className="videoDivisoriaVideoDroneNossaEstrutura"
          src="/videos/landingPageVideocopy.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      <div className="ctaAjudaComDoacoesNossaEstruturaContainer">
        <h1 className="tituloCtaAjudaComDoacoesNossaEstrutura">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit .
        </h1>
        <p className="descricaoCtaAjudaComDoacoesNossaEstrutura">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et
        </p>
        <div className="buttonCtaFacaUmaDoacaoNossaEstruturaAjuda">
          Faça uma doação!
        </div>
      </div>
      <div className="containerSliderImagensGaleriaNossaEstrutura">
        <Slider {...settings} className="sliderImagensGaleriaNossaEstrutura">
          <img
            src="/imgs/imagensGaleriaNossaEstrutura1.jpg"
            alt=""
            className="imagemEfetivaGaleriaNossaEstrutura"
          />
          <img
            src="/imgs/imagensGaleriaNossaEstrutura2.jpg"
            alt=""
            className="imagemEfetivaGaleriaNossaEstrutura"
          />
          <img
            src="/imgs/imagensGaleriaNossaEstrutura3.jpg"
            alt=""
            className="imagemEfetivaGaleriaNossaEstrutura"
          />
        </Slider>
      </div>
      <Footer />
    </DivPrincipalNossaEstrutura>
  );
};

export default NossaEstrutura;

import { React, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../components/DetalhesNossosProjetos/DetalhesNossosProjetos.css";
import styled from "styled-components";

// Import css files
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const DivPrincipalDetalhesNossosProjetos = styled.div`
  margin: 0px;
  background: var(--text-white);
`;
const DetalhesNossosProjetos = () => {
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
    <DivPrincipalDetalhesNossosProjetos>
      <Navbar />
      <div className="heroSectionDetalhesNossosProjetos">
        {/* valor dinamico por projeto */}
        <img
          className="imagemHeroSectionDetalhesNossosProjetos"
          src="/imgs/heroSectionDetalhesNossosProjetos.jpg"
        />
        <div className="containerInfoHeroSectionDetalhesNossosProjetos">
          <h1 className="tituloHeroSectionDetalhesNossosProjetos">
            {/* valor dinamico por projeto */}
            Nome do projeto
          </h1>
          <div className="containerDescaSaibaMaisHeroSectionDetalhesNossosProjetos">
            <svg
              className="setaDescaSaibaMaisHeroSectionDetalhesNossosProjetos"
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L5 11"
                stroke="#F2F2F2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 7L5 11L1 7"
                stroke="#F2F2F2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="subTituloHeroSectionDetalhesNossosProjetos">
              Desça para saber mais
            </p>
          </div>
        </div>
      </div>
      <div className="primeiraInfoCTADetalhesNossosProjetos">
        <div className="containerLeftInfoCTADetalhesNossosProjetos">
          {/* valor dinamico por projeto */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor neque porro quisquam et.
        </div>
        <div className="containerRightInfoCTADetalhesNossosProjetos">
          <div className="descRightInfoCTADetalhesNossosProjetos">
            {/* valor dinamico por projeto */}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et.
            <br />
            <br />
            <div className="segundaDescRightInfoCTADetalhesNossosProjetos">
              {/* valor dinamico por projeto */}
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam,
            </div>
          </div>
          <div className="buttonCTADoacaoRightInfoCTADetalhesNossosProjetos">
            <Link to="/facaSuaDoacao">Faça uma doação!</Link>
          </div>
        </div>
      </div>
      <div className="sectionFotoPrincipalLiderProjetoDetalhesNossosProjetos">
        <div className="containerImagemFotoPrincipalLiderProjetoDetalhesNossosProjetos">
          <img src="/imgs/fotoPrincipalDetalhesNossosProjetos.png" />
        </div>
        <div className="containerTituloFotoPrincipalLiderProjetoDetalhesNossosProjetos">
          <h1 className="tituloFotoPrincipalLiderProjetoDetalhesNossosProjetos">
            “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et.”
          </h1>
          <div className="efeitoLinhaVermelhaTituloFotoPrincipalLiderProjetoDetalhesNossosProjetos">
            <svg
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
          <p className="liderProjetoDetalhesNossosProjetos">
            Nome de quem lidera o projeto
          </p>
          <p className="funcaoLiderProjetoDetalhesNossosProjetos">
            função dentro do recanto
          </p>
        </div>
      </div>
      <div className="containerNossoImpactoDetalhesNossosProjetos">
        <div className="containerLeftNossoImpactoDetalhesNossosProjetos">
          {/* valor dinamico por projeto */}
          <img src="/imgs/imagemNossoImpactoDetalhesNossosProjetos.png" />
        </div>
        <div className="containerRightNossoImpactoDetalhesNossosProjetos">
          <div className="primeiroTituloRightNossoImpactoDetalhesNossosProjetos">
            Nosso impacto
            <svg
              className="linhaVermelhaTituloRightNossoImpactoDetalhesNossosProjetos"
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
          <div className="segundoTituloRightNossoImpactoDetalhesNossosProjetos">
            {/* valor dinamico por projeto */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit .
          </div>
          <div className="descRightNossoImpactoDetalhesNossosProjetos">
            {/* valor dinamico por projeto */}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et{" "}
          </div>
          <div className="buttonCTANossoImpactoDetalhesNossosProjetos">
            <Link to="/facaSuaDoacao">Faça uma doação!</Link>
          </div>
        </div>
      </div>
      <div className="containerPrincipalGridFotosDetalhesNossosProjetos">
        <div className="containerGridFotosDetalhesNossosProjetos">
          <div className="containerImagemIndividualContainerGridFotosDetalhesNossosProjetos1">
            <img
              className="imagemIndividualContainerGridFotosDetalhesNossosProjetos"
              src="/imgs/detalhesProjetos/1/primeiraImagem.png"
            />
          </div>
          <div className="containerImagemIndividualContainerGridFotosDetalhesNossosProjetos2">
            <img
              className="imagemIndividualContainerGridFotosDetalhesNossosProjetos"
              src="/imgs/detalhesProjetos/1/segundaImagem.png"
            />
          </div>
          <div className="containerImagemIndividualContainerGridFotosDetalhesNossosProjetos3">
            <img
              className="imagemIndividualContainerGridFotosDetalhesNossosProjetos"
              src="/imgs/detalhesProjetos/1/terceiraImagem.png"
            />
          </div>
          <div className="containerImagemIndividualContainerGridFotosDetalhesNossosProjetos4">
            <img
              className="imagemIndividualContainerGridFotosDetalhesNossosProjetos"
              src="/imgs/detalhesProjetos/1/quartaImagem.png"
            />
          </div>
          <div className="containerImagemIndividualContainerGridFotosDetalhesNossosProjetos5">
            <img
              className="imagemIndividualContainerGridFotosDetalhesNossosProjetos"
              src="/imgs/detalhesProjetos/1/quintaImagem.png"
            />
          </div>
          <div className="containerImagemIndividualContainerGridFotosDetalhesNossosProjetos6">
            <img
              className="imagemIndividualContainerGridFotosDetalhesNossosProjetos"
              src="/imgs/detalhesProjetos/1/sextaImagem.png"
            />
          </div>
        </div>
      </div>
      <div className="containerOutrosProjetosDetalhesNossosProjetos">
        {/* TODO: Slider */}
        <p className="tituloOutrosProjetosDetalhesNossosProjetos">
          Outros projetos
        </p>
        <Slider
          {...settings}
          className="containerSliderOutrosProjetosDetalhesNossosProjetos"
        >
          <div className="containerIndividualOutroProjetoDetalhesNossosProjetos">
            <img
              className="imagemIndividualOutroProjetoDetalhesNossosProjetos"
              src="/imgs/imagemIndividualOutrosProjetosDetalhesNossosProjetos.jpg"
            />
            <h1 className="tituloIndividualOutroProjetoDetalhesNossosProjetos">
              Nome do projeto
            </h1>
          </div>
          <div className="containerIndividualOutroProjetoDetalhesNossosProjetos">
            <img
              className="imagemIndividualOutroProjetoDetalhesNossosProjetos"
              src="/imgs/imagemIndividualOutrosProjetosDetalhesNossosProjetos.jpg"
            />
            <h1 className="tituloIndividualOutroProjetoDetalhesNossosProjetos">
              Nome do projeto
            </h1>
          </div>
          <div className="containerIndividualOutroProjetoDetalhesNossosProjetos">
            <img
              className="imagemIndividualOutroProjetoDetalhesNossosProjetos"
              src="/imgs/imagemIndividualOutrosProjetosDetalhesNossosProjetos.jpg"
            />
            <h1 className="tituloIndividualOutroProjetoDetalhesNossosProjetos">
              Nome do projeto
            </h1>
          </div>
        </Slider>
      </div>
      <Footer />
    </DivPrincipalDetalhesNossosProjetos>
  );
};

export default DetalhesNossosProjetos;

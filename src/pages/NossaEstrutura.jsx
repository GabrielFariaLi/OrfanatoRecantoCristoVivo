import { React, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./../components/NossaEstrutura/NossaEstrutura.css";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { fotosInfraestruturaFooter } from "../data";
import FooterLocalizacaoOrfanato from "../components/FooterLocalizacaoOrfanato/FooterLocalizacaoOrfanato";

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
          Venha nos visitar e conhecer as nossas instalações
        </div>
        <div className="descTituloHeroSectionNossaEstrutura">
          Veja o local aonde atendemos as nossas crianças para o atendimento de
          suas diferentes necessidades e fornecemos variados tipos de
          assistência social.
        </div>
      </div>
      <div className="primeiraInfoNossaEstruturaContainer">
        <div className="textoLeftPrimeiraInfoNossaEstrutura">
          Nossa Historia
        </div>
        <div className="textoRightPrimeiraInfoNossaEstrutura">
          Desde a fundação desta entidade em 12 de outubro de 1985 o Recanto
          Cristo Vivo está instalado em sua sede propria, na região do entorno
          de brasilia na cidade de valparaiso/GO
          <br />
          <br />
          Começamos esse trabalho de uma forma simples e com todas as
          dificuldades a serem enfrentadas para fornecer uma infraestrutura
          minima que pudesse atender com{" "}
          <span style={{ color: "var(--primary-blue)" }}>dignidade</span>{" "}
          através assitencia social multidisciplinar e alimentação díaria para
          as crianças carentes que vinham das mais variadas regiões do país.
          Atualmente temos uma infraestrutura completa capaz de oferecer
          atendimento não só as crianças mas também as suas familias assistidas.
          Dando cumprimento ao nosso objetivo de dar assistencia a criança no
          seio de sua familia de origem
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
            Nossa estrutura foi desenhada e construida com o objetivo de atender
            diferentes areas de necessidades das crianças
          </div>
          <div className="descricaoTituloTextoRightEspacosColetivosNossaEstrutura">
            Tendo isso em vista, atualmente nos contamos com uma variedade
            grande de espaços funcionais, areas de lazer e refeitorios
          </div>
          <div className="buttonConhecaNossosProjetosEspacosColetivosNossaEstrutura">
            <Link to="/nossosProjetos">Conheça nossos projetos</Link>
          </div>
        </div>
      </div>
      <div className="acomodacoesNossaEstruturaContainer">
        <div className="containertextoLeftAcomodacoesNossaEstrutura">
          <div className="primeiroTituloTextoLeftAcomodacoesNossaEstrutura">
            Espaço cultural e entretenimento
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
            Valorizamos os espaços destinados a prática esportiva e cultural
          </div>
          <div className="descricaoTituloTextoLeftAcomodacoesNossaEstrutura">
            Dentre alguns podemos citar, o centro desportivo com um campo de
            futebol, campo de vólei, piscina, e amplas áreas de lazer
            arborizadas
            <br />
            <br />
            Na área cultural temos uma biblioteca com acervo de 2,500 livros e
            obras literárias devidamente catalogados e organizados.
            <br />
            <br />
            Um centro histórico da entidade com fotos das nossas primeiras
            crianças assistidas, nossos voluntários pioneiros, relatos e
            documentos da época da fundação e dos primeiros anos desse trabalho
            como orfanato
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
          Como você pode ajudar no sustento e na manutenção desta obra social
        </h1>
        <p className="descricaoCtaAjudaComDoacoesNossaEstrutura">
          A maioria das ONGs trabalha com recursos financeiros limitados,
          portanto, a colaboração de voluntários e doações é fundamental para
          seu funcionamento. O Recanto Cristo Vivo é uma entidade sem fins
          lucrativos, reconhecida pelo orgãos governamentais como de útilidade
          pública federal que investe todos os recursos arrecadados e doados
          para a melhoria da condição de vida das crianças assistidas
        </p>
        <div className="buttonCtaFacaUmaDoacaoNossaEstruturaAjuda">
          <Link to="/facaSuaDoacao">Faça uma doação!</Link>
        </div>
      </div>

      <div className="containerSliderImagensGaleriaNossaEstrutura">
        <Slider {...settings} className="sliderImagensGaleriaNossaEstrutura">
          {fotosInfraestruturaFooter.map((item) => {
            return (
              <div className="containerFotosInfraestruturaSlider">
                <img
                  key={item.titulo}
                  src={item.img}
                  alt=""
                  className="imagemEfetivaGaleriaNossaEstrutura"
                />

                <div className="containerInfoGaleriaNossaEstruturaFooter">
                  <div className="tituloInfoGaleriaNossaEstruturaFooter">
                    {item.titulo}
                  </div>
                  <div className="descInfoGaleriaNossaEstruturaFooter">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <FooterLocalizacaoOrfanato />
      <Footer />
    </DivPrincipalNossaEstrutura>
  );
};

export default NossaEstrutura;

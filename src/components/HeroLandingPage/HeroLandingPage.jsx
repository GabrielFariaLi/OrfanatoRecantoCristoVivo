import React from "react";
import styled from "styled-components";
import "./HeroLandingPage.css";
import { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { faTemperature1 } from "@fortawesome/free-solid-svg-icons";

const DivHeroLandingPagePrincipal = styled.div`
  display: flex;
  margin: 0px;
  min-height: 100vh;
  min-width: 100%;
  justify-content: center;
  align-content: center;
`;

const Home = () => {
  // store a reference to the box div
  const boxRef = useRef();

  // store the timeline in a ref.
  const tl = useRef();
  /* GSAP ANIMATIONS AREA */

  /* - FIM - GSAP ANIMATIONS AREA */

  return (
    <DivHeroLandingPagePrincipal
      ref={boxRef}
      className="divPrincipalHeroLanding"
    >
      <div className="containerIntroWebsite">
        <div className="containerTextoPrincipalLoading">
          <h1 className="tituloORCVIntro">O orfanato recanto cristo vivo é:</h1>
        </div>
        <div className="backgroundVermelho"></div>
      </div>
      <img className="videoLandingPage" src="/imgs/fotoPrimeiraPagina.jfif" />
      {/*       <video
        className="videoLandingPage"
        src="/videos/futebolVideo.mp4"
        autoPlay
        loop
        muted
      /> */}
      <div className="containerDescaDescubraMais">
        <img className="descaSaibaMaisRodela" src="/imgs/descaSaibaMais.png" />
        <img
          className="coracaoDescaSaibaMais"
          src="/imgs/coracaoDescaSaibaMais.png"
        />
        <img className="setaDescaMais" src="/imgs/setaDescaMais.png" />
      </div>

      <div className="containerTituloLandingPage">
        <div className="primeiroTituloLandingPage">
          <h1
            id="primeiroTituloLandingPage"
            style={{ fontStyle: "italic" }}
            className="h1TituloLandingPage"
          >
            Confiem
          </h1>
          <p className="paragrafoLandingPageRecanto">
            Recanto Cristo Vivo:{" "}
            <span style={{ fontWeight: "800", color: "var(--primary-red)" }}>
              Amor
            </span>{" "}
            e{" "}
            <span style={{ fontWeight: "800", color: "var(--primary-blue)" }}>
              Dignidade
            </span>{" "}
            á Criança Carente.
          </p>
        </div>
        <div className="segundoTituloLandingPage">
          <h1 id="segundoTituloLandingPage" className="h1TituloLandingPage">
            sempre no
            <br />{" "}
            <b style={{ fontWeight: "700", fontStyle: "italic" }}>senhor</b>,
            pois ele
          </h1>
        </div>
        <h1
          id="terceiroTituloLandingPage"
          style={{
            alignSelf: "center",
          }}
          className="h1TituloLandingPage"
        >
          é o nosso eterno{" "}
          <b style={{ fontWeight: "700", fontStyle: "italic" }}>abrigo</b>.
        </h1>
        <p
          style={{
            fontSize: "16px",
            alignSelf: "center",
            fontStyle: "italic",
            marginTop: "20px",
          }}
        >
          - Isaías 26:4
        </p>
      </div>
    </DivHeroLandingPagePrincipal>
  );
};

export default Home;

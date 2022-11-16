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

  useEffect(() => {
    // -- ANIMATION CODE HERE --
    const isMobile = !window.matchMedia("(min-width: 768px)").matches;

    let ctx = gsap.context(() => {
      console.log("creating timeline HERO");
      gsap.registerPlugin(ScrollTrigger);
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap
        .timeline({
          /*         scrollTrigger: {
            trigger: ".primeiroTituloLandingPage",
            markers: { startColor: "green", endColor: "red", fontSize: "32px" },
            start: "top top",
            end: "bottom bottom",
          }, */
        })

        .fromTo(
          ".tituloORCVIntro",
          {
            y: 1000,
          },
          {
            y: 0,
            ease: 1,
            duration: 1,
          }
        )
        .to(
          ".tituloORCVIntro",

          {
            y: -3000,
            delay: 1,

            duration: 0.5,
          },
          "firstMove"
        )
        .fromTo(
          ".backgroundVermelho",

          {
            y: "100vh",
          },
          {
            y: 150,
            ease: 1,
            delay: 0.9,
            duration: 1,
          },
          "firstMove"
        )
        /* */

        .to(
          ".backgroundVermelho",

          {
            y: "-50vh",
            ease: 2,
            duration: 1,
          },
          "moveBACKGROUNDS"
        )

        .to(
          ".containerIntroWebsite",

          {
            css: { backgroundColor: "transparent" },
          },
          "moveBACKGROUNDS"
        )
        .to(
          ".backgroundVermelho",

          {
            y: "-100vh",

            duration: 2,
          },
          "moveBACKGROUNDS"
        )

        .set(
          ".containerIntroWebsite",

          {
            css: { display: "none" },
          }
        )

        .to(
          ".backgroundVermelho",

          {
            y: "-100vh",

            duration: 2,
          },
          "moveBACKGROUNDS"
        )
        .to(
          "#primeiroTituloLandingPage",

          {
            css: { animation: "2s anim-lineUp ease-out" },
            delay: 0.5,
            duration: 1.5,
          },
          "moveBACKGROUNDS"
        )
        .to(
          "#segundoTituloLandingPage",

          {
            css: { animation: "2s anim-lineUp ease-out" },
            delay: 0.4,
            duration: 1.5,
          },
          "moveBACKGROUNDS"
        )
        .to(
          "#terceiroTituloLandingPage",

          {
            css: { animation: "2s anim-lineUp ease-out" },
            delay: 0.3,
            duration: 1.5,
          },
          "moveBACKGROUNDS"
        );
    }, boxRef);

    return () => {
      // cleanup code (optional)
      ctx.revert();
    };
  }, []); // <- empty dependency Array so it doesn't re-run on every render!

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
      <video
        className="videoLandingPage"
        src="/videos/landingPageVideo.mp4"
        autoPlay
        loop
        muted
      />
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
            Adotar
          </h1>
          <p className="paragrafoLandingPageRecanto">
            Recanto Cristo Vivo: Amor e Dignidade á Criança Carente.
          </p>
        </div>
        <div className="segundoTituloLandingPage">
          <h1 id="segundoTituloLandingPage" className="h1TituloLandingPage">
            uma criança é<br /> dar{" "}
            <b style={{ fontWeight: "700", fontStyle: "italic" }}>luz</b> a uma
          </h1>
        </div>
        <h1
          id="terceiroTituloLandingPage"
          style={{
            alignSelf: "center",
          }}
          className="h1TituloLandingPage"
        >
          esperança.
        </h1>
        <p
          style={{
            fontSize: "16px",
            alignSelf: "center",
            fontStyle: "italic",
            marginTop: "20px",
          }}
        >
          -Aline Ignácio Pacheco
        </p>
      </div>
    </DivHeroLandingPagePrincipal>
  );
};

export default Home;

import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./HeroSectionDoacao.css";

const HeroSectionDoacao = () => {
  return (
    <div className="containerPrincipalHeroSectionDoacao">
      <div className="containerBackgroundHeroSectionDoacao">
        <div className="containerTextoPrincipalHeroSectionDoacao">
          <h5 className="primeiroTituloHeroSectionDoacao">DOE AGORA</h5>
          <svg
            style={{ marginTop: "10p" }}
            width="84"
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
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <h1 className="segundoTituloHeroSectionDoacao">
            Ajude a <i>transformar</i> o<br /> futuro de nossas criança.
          </h1>
          <p className="descHeroSectionDoacao">
            A sua participação é fundamental para o sustento e manutenção desta
            obra social.
          </p>
        </div>
        <div className="containerDescaDescubraMais">
          <img
            className="descaSaibaMaisRodela"
            src="/imgs/descaSaibaMais.png"
          />
          <img
            className="coracaoDescaSaibaMais"
            src="/imgs/coracaoDescaSaibaMais.png"
          />
          <img className="setaDescaMais" src="/imgs/setaDescaMais.png" />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionDoacao;

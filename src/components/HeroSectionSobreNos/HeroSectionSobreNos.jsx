import React from "react";
import "./HeroSectionSobreNos.css";

const HeroSectionSobreNos = () => {
  return (
    <div className="containerPrincipalHeroSectionSobreNos">
      <div className="containerTextoHeroSectionSobreNos">
        <div className="primeiroTituloHeroSectionSobreNos">
          Sobre nós
          <svg
            style={{ marginTop: "10px" }}
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
              stroke="#F2F2F2"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="segundoTituloHeroSectionSobreNos">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.{" "}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSobreNos;

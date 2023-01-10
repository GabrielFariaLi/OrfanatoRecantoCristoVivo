import React from "react";
import { Link } from "react-router-dom";
import "./NossaEstruturaHome.css";

const NossaEstruturaHome = () => {
  return (
    <>
      <div className="containerPrincipalNossaEstruturaHome">
        <div className="containerTextoRightNossaEstruturaHome">
          <div className="tituloNossaEstruturaHome">
            Nossa estrutura
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
          <div className="subTituloContainerSobreNos">
            Instalações diversificadas e funcionais
          </div>
          <div style={{ maxWidth: "405px" }} className="descContainerSobreNos">
            As instalações da entidade foram sendo construídas no decorrer dos
            anos a medida em que conseguíamos recursos suficientes para a
            construção das mesmas.{" "}
            {/* <br />
            <br />
            Cada construção foi levantada com um objetivo específico de atender
            a uma área profissionalizante, acadêmica, artes ou de esportes
            alternativos. */}
          </div>
          <button className="buttonContainerNossaEstruturaHome">
            <Link to="/nossaEstrutura">Conheça nosso espaço</Link>
          </button>
        </div>

        <div className="containerPrincipalGaleriaFotosNossaEstruturaHome">
          <div className="fotoEstruturaHome1"> </div>
          <div className="fotoEstruturaHome2"></div>
          <div className="fotoEstruturaHome3"></div>
        </div>
      </div>
    </>
  );
};

export default NossaEstruturaHome;

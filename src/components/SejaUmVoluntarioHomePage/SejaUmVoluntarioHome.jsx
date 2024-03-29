import React from "react";
import { Link } from "react-router-dom";
import "./SejaUmVoluntarioHome.css";

const SejaUmVoluntarioHome = () => {
  return (
    <>
      <div className="containerSejaVoluntarioHome">
        <div className="containerInfoTextoVoluntarioHome">
          <div className="containerTextoRightSejaVoluntarioHome">
            <div className="tituloContainerComoDoarHome">
              Faça parte
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
              Seja um
              <br /> voluntário do <br /> Recanto Cristo Vivo!
            </div>
            <div className="descContainerSejaVoluntarioHome">
              Os voluntários são fundamentais para o funcionamento das ONGs, já
              que muitas delas dependem de recursos financeiros limitados. Os
              voluntários podem desempenhar muitas funções diferentes, desde
              ajudar na administração da ONG até trabalhar diretamente com as
              crianças.
            </div>
            <button className="buttonContainerSejaVoluntarioHome">
              <Link to="/faleConosco">Faça seu cadastro</Link>
            </button>
          </div>
        </div>
        <div className="containerImagemSejaVoluntarioHome"></div>
      </div>
    </>
  );
};

export default SejaUmVoluntarioHome;

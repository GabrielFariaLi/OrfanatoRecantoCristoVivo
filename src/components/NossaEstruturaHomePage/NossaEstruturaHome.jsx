import React from "react";
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit .
          </div>
          <div style={{ maxWidth: "405px" }} className="descContainerSobreNos">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et
          </div>
          <button className="buttonContainerNossaEstruturaHome">
            Conheça nosso espaço
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

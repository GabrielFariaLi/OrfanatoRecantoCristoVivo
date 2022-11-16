import React from "react";
import "./BreveDescricaoSectionSobreNos.css";
const BreveDescricaoSectionSobreNos = () => {
  return (
    <>
      <div className="containerPrincipalBreveDescricaoSobreNos">
        <div className="containerTextoLeftBreveDescricaoSobreNos">
          Surgimos com a <br /> missão de oferecer{" "}
          <div className="containerTextoImpactoBreveDescricaoSobreNos">
            <p className="italic vermelho">amor</p>
            {"\u00A0"}e{"\u00A0"}
            <p className="italic azul">dignidade</p>
          </div>
          à Criança Carente.
        </div>
        <div className="containerTextoRightBreveDescricaoSobreNos">
          <div className="primeiroParagrafoBreveDescricaoSobreNos">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="segundoParagrafoBreveDescricaoSobreNos">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et.
            <br />
            <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam,{" "}
          </div>
        </div>
        <div className="containerTextoRightBreveDescricaoSobreNosMobile">
          <div className="primeiroParagrafoBreveDescricaoSobreNos">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="segundoParagrafoBreveDescricaoSobreNos">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et.
            <br />
            <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam,{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default BreveDescricaoSectionSobreNos;

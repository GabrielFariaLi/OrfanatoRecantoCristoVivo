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
            Esta obra social (ONG) surgiu como fruto do amor de Deus e da
            preocupação de algumas pessoas com o estado de calamidade em que
            muitas crianças e adolescentes vivem no Brasil, crianças com a sua
            sobrevivencia ameaçada pela falta de comida, educação, segurança e
            uma familia estruturada
          </div>
          <div className="segundoParagrafoBreveDescricaoSobreNos">
            As ONGs (Organizações Não Governamentais) têm como missão principal
            proporcionar apoio e assistência às crianças carentes, visando
            melhorar suas condições de vida. Isso pode incluir fornecer comida,
            abrigo, educação e cuidados médicos, bem como trabalhar para
            prevenir a exploração infantil e promover a igualdade de
            oportunidades.
            <br />
            <br /> Algumas ONGs também trabalham para reunir crianças
            desacompanhadas com suas famílias, enquanto outras se especializam
            em cuidar de crianças com necessidades especiais ou que foram
            vítimas de violência doméstica. Nós trabalhamos com ambos os casos e
            para isso contando apenas e tão somente com o trabalho de
            voluntarios e as ajudas de doações .
            <br />
            <br />
            <span style={{ color: "var(--primary-red)", fontWeight: "800" }}>
              Faça você também parte desse projeto de amor e faça a diferença na
              vida de uma criança carente!
            </span>
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

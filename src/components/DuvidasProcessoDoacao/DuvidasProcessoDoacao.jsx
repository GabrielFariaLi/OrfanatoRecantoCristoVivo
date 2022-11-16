import React from "react";
import "./DuvidasProcessoDoacao.css";

const DuvidasProcessoDoacao = () => {
  return (
    <>
      <div className="containerPrincipalDuvidasProcessoDoacao">
        <div className="containerTextoDuvidasProcessoDoacao">
          <h1 className="tituloDuvidasProcessoDoacao">
            Tem alguma <br />
            dúvida sobre o nosso processo de doação?
          </h1>
          <p className="descDuvidasProcessoDoacao">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et
          </p>
          <div className="buttonDuvidasProcessoDoacao">
            Entre em contato conosco
          </div>
        </div>
        <div className="containerImagemDuvidasProcessoDoacao">
          <img
            src="/imgs/imagemDuvidaProcessoDoacao.png"
            alt="imagem duas maos negociando"
            className="imagemDuvidasProcessoDoacao"
          />
        </div>
      </div>
    </>
  );
};

export default DuvidasProcessoDoacao;

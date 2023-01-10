import React from "react";
import { Link } from "react-router-dom";
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
            Esta entidade é reconhecida pelo governo brasileiro como de
            Utilidade Pública Federal e Municipal. Prestamos contas de todas as
            nossas atividades aos órgãos públicos pertinentes e mantemos sempre
            atualizados os nossos registros contábeis e fiscais de toda e
            qualquer doação feita, seja em espécie ou em objetos. Emitimos
            recibos e declarações para efeitos de declaração de IRPF, conforme
            solicitado.
          </p>
          <div className="buttonDuvidasProcessoDoacao">
            <Link to="/faleConosco">Entre em contato conosco</Link>
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

import React from "react";
import "./OpcoesDoacaoPorPix.css";

const OpcoesDoacaoPorPix = () => {
  return (
    <>
      <div className="containerPrincipalOpcoesDoacaoPorPix">
        <div className="containerOpcaoChavePix">
          <p className="paragrafoOpcoesDoarPix">
            Copie aqui <br /> nossa chave pix (CNPJ)
          </p>
          <div className="buttonChavePixEmail">03603701000103</div>
        </div>
        <div className="containerOUdivisoria">OU</div>
        <div className="containerOpcaoQRCodePix">
          <p className="paragrafoOpcoesDoarPix">
            Escaneie o <br /> QR code ao lado
          </p>
          <img className="pixQRCodeOpcoes" src="/imgs/pixQRCode.png" />
        </div>
      </div>
    </>
  );
};

export default OpcoesDoacaoPorPix;

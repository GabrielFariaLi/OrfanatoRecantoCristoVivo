import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import HeroSectionDoacaoPorCartao from "../components/HeroSectionDoacaoPorCartao/HeroSectionDoacaoPorCartao.jsx";
import OpcoesDoacaoPorCartao from "../components/OpcoesDoacaoPorCartao/OpcoesDoacaoPorCartao";
import DuvidasProcessoDoacao from "../components/DuvidasProcessoDoacao/DuvidasProcessoDoacao";
import OutrasFormasDoacaoPreFooter from "../components/OutrasFormasDoacaoPreFooter/OutrasFormasDoacaoPreFooter";

const ContainerDoacaoPorCartao = styled.div`
  background: linear-gradient(
    100.75deg,
    #e9b3bb -25.82%,
    #e9b3bb -25.81%,
    #c5b3e9 11.53%,
    #08a8de 51.8%,
    #49c7f2 76.41%,
    #a2e7ff 100%
  );
`;

const DoacaoPorCartao = () => {
  return (
    <ContainerDoacaoPorCartao>
      <Navbar />
      <HeroSectionDoacaoPorCartao />
      <OpcoesDoacaoPorCartao />
      <DuvidasProcessoDoacao />
      <OutrasFormasDoacaoPreFooter origem={"Cartão"} />
      <Footer />
    </ContainerDoacaoPorCartao>
  );
};

export default DoacaoPorCartao;

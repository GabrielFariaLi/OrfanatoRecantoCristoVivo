import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import HeroSectionDoacao from "../components/HeroSectionDoacao/HeroSectionDoacao";
import FormasDeDoarDoacao from "../components/FormasDeDoarDoacao/FormasDeDoarDoacao";
import ProjetosAjudadosComDoacao from "../components/ProjetosAjudadosComDoacao/ProjetosAjudadosComDoacao";

const DivHomePrincipal = styled.div`
  margin: 0px;
`;

const FacaSuaDoacao = () => {
  return (
    <DivHomePrincipal>
      <Navbar />
      <HeroSectionDoacao />
      <FormasDeDoarDoacao />
      <ProjetosAjudadosComDoacao />

      <Footer />
    </DivHomePrincipal>
  );
};

export default FacaSuaDoacao;

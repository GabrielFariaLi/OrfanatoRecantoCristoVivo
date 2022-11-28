import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import HeroSectionNossosProjetos from "../components/HeroSectionNossosProjetos/HeroSectionNossosProjetos.jsx";
import GaleriaProjetosNossoProjetos from "../components/GaleriaProjetosNossoProjetos/GaleriaProjetosNossoProjetos";
import JuntosMudamosVidasHome from "../components/JuntosMudamosVidasHome/JuntosMudamosVidasHome";

import Footer from "../components/Footer/Footer";
const DivNossosProjetosPrincipal = styled.div`
  margin: 0px;
  background: var(--text-white);
`;
const NossosProjetos = () => {
  return (
    <DivNossosProjetosPrincipal>
      <Navbar />
      <HeroSectionNossosProjetos />
      <GaleriaProjetosNossoProjetos />

      <JuntosMudamosVidasHome />
      <Footer />
    </DivNossosProjetosPrincipal>
  );
};

export default NossosProjetos;

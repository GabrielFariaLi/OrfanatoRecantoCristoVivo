import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import HeroSectionSobreNos from "../components/HeroSectionSobreNos/HeroSectionSobreNos";
import BreveDescricaoSectionSobreNos from "../components/BreveDescricaoSectionSobreNos/BreveDescricaoSectionSobreNos";
import ConhecaAlgunsProjetosSobreNos from "../components/ConhecaAlgunsProjetosSobreNos/ConhecaAlgunsProjetosSobreNos";
import TitulosOrfanatoSobreNos from "../components/TitulosOrfanatoSobreNos/TitulosOrfanatoSobreNos";
import FundadoresSobreNos from "../components/FundadoresSobreNos/FundadoresSobreNos";
import HeroSectionCTAFacaSuaDoacaoSobreNos from "../components/HeroSectionCTAFacaSuaDoacaoSobreNos/HeroSectionCTAFacaSuaDoacaoSobreNos";
import NossaEquipeHome from "../components/NossaEquipeHomePage/NossaEquipeHome";
import FooterLocalizacaoOrfanato from "../components/FooterLocalizacaoOrfanato/FooterLocalizacaoOrfanato";

import Footer from "../components/Footer/Footer";
const SobreNos = () => {
  return (
    <>
      <Navbar />
      <HeroSectionSobreNos />
      <BreveDescricaoSectionSobreNos />
      <ConhecaAlgunsProjetosSobreNos />
      <TitulosOrfanatoSobreNos />
      <FundadoresSobreNos />
      <HeroSectionCTAFacaSuaDoacaoSobreNos />
      <NossaEquipeHome />
      <FooterLocalizacaoOrfanato />

      <Footer />
    </>
  );
};

export default SobreNos;

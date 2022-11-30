import { React, useEffect } from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import HeroSectionDoacaoPorItem from "../components/HeroSectionDoacaoPorItem/HeroSectionDoacaoPorItem.jsx";
import FormularioDoacaoPorItem from "../components/FormularioDoacaoPorItem/FormularioDoacaoPorItem";
import DuvidasProcessoDoacao from "../components/DuvidasProcessoDoacao/DuvidasProcessoDoacao";
import OutrasFormasDoacaoPreFooter from "../components/OutrasFormasDoacaoPreFooter/OutrasFormasDoacaoPreFooter";

const ContainerDoacaoPorItem = styled.div`
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

const DoacaoPorItem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ContainerDoacaoPorItem>
      <Navbar />
      <HeroSectionDoacaoPorItem />
      <FormularioDoacaoPorItem />
      <DuvidasProcessoDoacao />
      <OutrasFormasDoacaoPreFooter origem={"Item"} />
      <Footer />
    </ContainerDoacaoPorItem>
  );
};

export default DoacaoPorItem;

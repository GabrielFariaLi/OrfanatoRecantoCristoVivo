import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroLandingPage from "../components/HeroLandingPage/HeroLandingPage";
import styled from "styled-components";
import SobreNosHome from "../components/SobreNosHomePage/SobreNosHome";
import ComoDoarHome from "../components/ComoDoarHomePage/ComoDoarHome";
import SejaUmVoluntarioHome from "../components/SejaUmVoluntarioHomePage/SejaUmVoluntarioHome";
import NossosProjetosHome from "../components/NossosProjetosHomePage/NossosProjetosHome";
import NossaEstruturaHome from "../components/NossaEstruturaHomePage/NossaEstruturaHome";
import NossaEquipeHome from "../components/NossaEquipeHomePage/NossaEquipeHome";
import JuntosMudamosVidasHome from "../components/JuntosMudamosVidasHome/JuntosMudamosVidasHome";
import Footer from "../components/Footer/Footer";
const DivHomePrincipal = styled.div`
  margin: 0px;
`;

const Home = () => {
  return (
    <DivHomePrincipal>
      <Navbar />
      <HeroLandingPage />
      <SobreNosHome />
      <ComoDoarHome />
      <SejaUmVoluntarioHome />
      <NossosProjetosHome />
      <NossaEstruturaHome />
      <NossaEquipeHome />
      <JuntosMudamosVidasHome />
      <Footer />
    </DivHomePrincipal>
  );
};

export default Home;

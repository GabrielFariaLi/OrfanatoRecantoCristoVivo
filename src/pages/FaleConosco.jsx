import React from "react";
import FaleConoscoPrincipasInfosSection from "../components/FaleConoscoPrincipasInfosSection/FaleConoscoPrincipasInfosSection";
import FormularioFaleConosco from "../components/FormularioFaleConosco/FormularioFaleConosco";

import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const DivPrincipalFaleConosco = styled.div`
  background: var(--text-white);
`;

const FaleConosco = () => {
  return (
    <DivPrincipalFaleConosco>
      <Navbar />
      <FaleConoscoPrincipasInfosSection />
      <FormularioFaleConosco />
      <Footer />
    </DivPrincipalFaleConosco>
  );
};

export default FaleConosco;

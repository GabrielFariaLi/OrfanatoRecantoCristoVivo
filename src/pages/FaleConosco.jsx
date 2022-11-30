import { React, useEffect } from "react";
import FaleConoscoPrincipasInfosSection from "../components/FaleConoscoPrincipasInfosSection/FaleConoscoPrincipasInfosSection";
import FormularioFaleConosco from "../components/FormularioFaleConosco/FormularioFaleConosco";

import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const DivPrincipalFaleConosco = styled.div`
  background: var(--text-white);
`;

const FaleConosco = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

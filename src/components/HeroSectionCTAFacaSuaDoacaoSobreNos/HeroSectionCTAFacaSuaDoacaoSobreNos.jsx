import React from "react";
import { Link } from "react-router-dom";
import "./HeroSectionCTAFacaSuaDoacaoSobreNos.css";
const HeroSectionCTAFacaSuaDoacaoSobreNos = () => {
  return (
    <>
      <div className="containerPrincipalHeroSectionCTASobreNos">
        <div className="containerTextoHeroSectionCTASobreNos">
          <h2 className="textoTituloCTASobreNos">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </h2>
          <div className="buttonConheçaFormasDoacaoCTASobreNos">
            <Link to="/facaSuaDoacao">Conheça nossas formas de doação</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionCTAFacaSuaDoacaoSobreNos;

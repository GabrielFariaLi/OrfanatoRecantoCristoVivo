import Home from "./pages/Home";
import FacaSuaDoacao from "./pages/FacaSuaDoacao";
import DoacaoPorPix from "./pages/DoacaoPorPix";
import DoacaoPorCartao from "./pages/DoacaoPorCartao";
import DoacaoItem from "./pages/DoacaoItem.jsx";
import SobreNos from "./pages/SobreNos.jsx";
import NossosProjetos from "./pages/NossosProjetos.jsx";
import DetalhesNossosProjetos from "./pages/DetalhesNossosProjetos.jsx";

//import SobreNos from "./pages/SobreNos"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//stripe
import "stripe.js";
import FaleConosco from "./pages/FaleConosco";
import NossaEstrutura from "./pages/NossaEstrutura";

const App = () => {
  // prevenir scroll para o lado
  useEffect(() => {
    var scrollEventHandler = function () {
      window.scroll(0, window.pageYOffset);
    };

    window.addEventListener("scroll", scrollEventHandler, false);
  }, []); // dependencias
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path='/sobreNos' element={<SobreNos/>}/> */}

        <Route exact path="/facaSuaDoacao" element={<FacaSuaDoacao />} />
        <Route exact path="/doacaoPorPix" element={<DoacaoPorPix />} />
        <Route exact path="/doacaoPorCartao" element={<DoacaoPorCartao />} />
        <Route exact path="/doacaoItem" element={<DoacaoItem />} />
        <Route exact path="/sobreNos" element={<SobreNos />} />
        <Route exact path="/nossosProjetos" element={<NossosProjetos />} />
        <Route exact path="/nossaEstrutura" element={<NossaEstrutura />} />
        <Route
          path="/detalhesNossosProjetos/:id"
          element={<DetalhesNossosProjetos />}
        />
        <Route path="/faleConosco" element={<FaleConosco />} />
      </Routes>
    </Router>
  );
};

export default App;

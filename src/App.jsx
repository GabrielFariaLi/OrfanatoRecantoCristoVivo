import Home from "./pages/Home";
import FacaSuaDoacao from "./pages/FacaSuaDoacao";
import DoacaoPorPix from "./pages/DoacaoPorPix";
import DoacaoPorCartao from "./pages/DoacaoPorCartao";
import DoacaoItem from "./pages/DoacaoItem.jsx";
import SobreNos from "./pages/SobreNos.jsx";

//import SobreNos from "./pages/SobreNos"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//stripe
import "stripe.js";

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
      </Routes>
    </Router>
  );
};

export default App;

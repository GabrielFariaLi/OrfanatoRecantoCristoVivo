import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faMinus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [clicouMenuMobile, setClicouMenuMobile] = useState(false);

  const [clicouEmComoAjudar, setClicouEmComoAjudar] = useState(false);
  const alternarVisibilidadeMenuMobile = (e) => {
    setClicouMenuMobile(true);
    if (clicouMenuMobile) setClicouMenuMobile(false);
  };
  const alternarVisibilidadeDropdownComoAjudar = (e) => {
    setClicouEmComoAjudar(true);
    if (clicouEmComoAjudar) setClicouEmComoAjudar(false);
  };

  return (
    <>
      {clicouMenuMobile && (
        <>
          <div className="containerPrincipalMenuMobile">
            <div
              className="containerBotaoFecharMenuMobile"
              onClick={alternarVisibilidadeMenuMobile}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path
                  fill="currentColor"
                  d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"
                />
              </svg>{" "}
            </div>
            <div className="containerMiniMenu">
              <Link to="/sobreNos">
                <h1 className="itemMiniMenuMobile">Sobre nós</h1>
              </Link>
              <Link to="/facaSuaDoacao">
                <h1 className="itemMiniMenuMobile">Faça sua doação</h1>
              </Link>

              <h1 className="itemMiniMenuMobile">Projetos</h1>

              <h1 className="itemMiniMenuMobile">Nossa infraestrutura</h1>

              <h1 className="itemMiniMenuMobile">Fale conosco</h1>
            </div>
          </div>
        </>
      )}

      <nav className="navbar">
        <Link to="/">
          <div className="logoNavBar">
            <h1 style={{ fontSize: "18px" }}>
              Recanto
              <br /> Cristo Vivo
            </h1>
          </div>
        </Link>

        <div className="hamburgerMenu" onClick={alternarVisibilidadeMenuMobile}>
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
            <path
              fill="var(--primary-blue)"
              d="M5 30v-2.792h30V30Zm0-8.625v-2.75h30v2.75Zm0-8.583V10h30v2.792Z"
            />
          </svg>
        </div>
        <div className="navigation">
          <ul className="navMenu">
            <li>
              <Link to="/sobreNos">
                <a href="#">Sobre nós</a>
              </Link>
            </li>
            {/*             <li>
              <div class="dropdown">
                <a>
                  Como ajudar{" "}
                  <FontAwesomeIcon
                    style={{ justifySelf: "center", alignSelf: "center" }}
                    icon={faCaretDown}
                  />
                </a>
                <div class="dropdown-content">
                  <a href="#">Pix</a>
                  <a href="#">Cartão</a>
                  <a href="#">Items</a>
                </div>
              </div>
            </li> */}

            <li>
              <Link to="/facaSuaDoacao">
                <a>Faça sua doação</a>
              </Link>
            </li>

            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Nossa infraestrutura</a>
            </li>

            <button className="ctaNavbar">Fale conosco</button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

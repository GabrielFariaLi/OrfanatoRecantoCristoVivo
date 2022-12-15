import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./GaleriaProjetosNossoProjetos.css";
import { projetosNossosPROJETOS } from "../../data";
const GaleriaProjetosNossoProjetos = () => {
  const [flagFiltrar, setFlagFiltrar] = useState(false);
  const [categoriaFiltro, setCategoriaFiltro] = useState("Nada");

  const handleToggleFiltrar = () => {
    if (flagFiltrar) setFlagFiltrar(false);
    else setFlagFiltrar(true);
  };

  const handleFiltragemProjetos = (categoria) => {
    setCategoriaFiltro(categoria);
  };
  return (
    <>
      <div className="containerPrincipalGaleriaProjetosNossosProjetos">
        <div className="containerInfosGaleriaProjetosNossosProjetos">
          <div className="containerTituloGaleriaProjetosNossosProjetos">
            <h1 className="tituloGaleriaProjetosNossosProjetos">Projetos</h1>
          </div>
          <div className="containerPrincipalFiltroGaleriaProjetosNossosProjetos">
            <div className="containerFiltroLeftGaleriaProjetosNossosProjetos">
              <b
                onClick={() => handleToggleFiltrar()}
                className="filtrarpormaisbutton"
              >
                Filtrar por +
              </b>

              <div
                style={{
                  opacity: !flagFiltrar ? "0" : "1",
                  transition: "ease-in-out .3s",

                  visibility: !flagFiltrar ? "hidden" : "visible",
                }}
                className="containerCategoriasFiltroGaleriaProjetosNossosProjetos"
              >
                <div className="containerLeftCategoriasFiltroGaleria">
                  <p
                    className="categoriaFiltroGaleriaItem"
                    onClick={() => handleFiltragemProjetos("teste")}
                  >
                    Nome de uma categoria
                  </p>
                  <p
                    className="categoriaFiltroGaleriaItem"
                    onClick={() => handleFiltragemProjetos("teste")}
                  >
                    Nome de uma categoria
                  </p>
                  <p
                    className="categoriaFiltroGaleriaItem"
                    onClick={() => handleFiltragemProjetos("teste")}
                  >
                    Nome de uma categoria
                  </p>
                </div>
                <div className="containerRightCategoriasFiltroGaleria">
                  <p
                    className="categoriaFiltroGaleriaItem"
                    onClick={() => handleFiltragemProjetos("teste")}
                  >
                    Nome de uma categoria
                  </p>
                  <p
                    className="categoriaFiltroGaleriaItem"
                    onClick={() => handleFiltragemProjetos("teste")}
                  >
                    Nome de uma categoria
                  </p>
                  <p
                    className="categoriaFiltroGaleriaItem"
                    onClick={() => handleFiltragemProjetos("teste")}
                  >
                    Nome de uma categoria
                  </p>
                </div>
              </div>
            </div>
            <div className="containerSubTituloGaleriaProjetosNossosProjetos">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit .
            </div>
          </div>
        </div>

        <div className="containerGaleriaEfetivaDeProjetosNossosProjetos">
          {projetosNossosPROJETOS.map((item) => (
            <Link to={`/detalhesNossosProjetos/${item.id}`}>
              <div className="cardIndividualProjetoGaleriaNossosProjetos">
                <img
                  src={item.img}
                  className="imagemCardIndividualProjetoGaleriaNossosProjetos"
                />
                <div className="containerTituloCardIndividualProjetoGaleriaNossosProjetos">
                  <div className="containerButtonVejaMaisCardIndividualProjetoGaleriaNossosProjetos">
                    <svg
                      width="46"
                      height="10"
                      viewBox="0 0 46 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L45 5"
                        stroke="#F2F2F2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M41 1L45 5L41 9"
                        stroke="#F2F2F2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h1 className="tituloCardIndividualProjetoGaleriaNossosProjetos">
                    {item.titulo}
                  </h1>
                </div>
                <div className="containerDescCardIndividualProjetoGaleriaNossosProjetos">
                  {item.desc}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      GaleriaProjetosNossoProjetos
    </>
  );
};

export default GaleriaProjetosNossoProjetos;

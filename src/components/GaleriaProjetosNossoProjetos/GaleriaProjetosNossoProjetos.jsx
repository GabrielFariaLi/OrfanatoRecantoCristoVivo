import { React, useEffect, useState } from "react";
import "./GaleriaProjetosNossoProjetos.css";

const GaleriaProjetosNossoProjetos = () => {
  return (
    <>
      <div className="containerPrincipalGaleriaProjetosNossosProjetos">
        <div className="containerInfosGaleriaProjetosNossosProjetos">
          <div className="containerTituloGaleriaProjetosNossosProjetos">
            <h1 className="tituloGaleriaProjetosNossosProjetos">Projetos</h1>
          </div>
          <div className="containerPrincipalFiltroGaleriaProjetosNossosProjetos">
            <div className="containerFiltroLeftGaleriaProjetosNossosProjetos">
              Filtrar por +
              <div className="containerCategoriasFiltroGaleriaProjetosNossosProjetos">
                <div className="containerLeftCategoriasFiltroGaleria">
                  <p className="categoriaFiltroGaleriaItem">
                    Nome de uma categoria
                  </p>
                  <p className="categoriaFiltroGaleriaItem">
                    Nome de uma categoria
                  </p>
                  <p className="categoriaFiltroGaleriaItem">
                    Nome de uma categoria
                  </p>
                </div>
                <div className="containerRightCategoriasFiltroGaleria">
                  <p className="categoriaFiltroGaleriaItem">
                    Nome de uma categoria
                  </p>
                  <p className="categoriaFiltroGaleriaItem">
                    Nome de uma categoria
                  </p>
                  <p className="categoriaFiltroGaleriaItem">
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
          <div className="cardIndividualProjetoGaleriaNossosProjetos">
            <img
              src="/imgs/cardIndividualProjetosGaleria.jpg"
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
                Nome do projeto
              </h1>
            </div>
            <div className="containerDescCardIndividualProjetoGaleriaNossosProjetos">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et.
            </div>
          </div>
          <div className="cardIndividualProjetoGaleriaNossosProjetos">
            <img
              src="/imgs/cardIndividualProjetosGaleria.jpg"
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
                Nome do projeto
              </h1>
            </div>
            <div className="containerDescCardIndividualProjetoGaleriaNossosProjetos">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et.
            </div>
          </div>

          <div className="cardIndividualProjetoGaleriaNossosProjetos">
            <img
              src="/imgs/cardIndividualProjetosGaleria.jpg"
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
                Nome do projeto
              </h1>
            </div>
            <div className="containerDescCardIndividualProjetoGaleriaNossosProjetos">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et.
            </div>
          </div>
          <div className="cardIndividualProjetoGaleriaNossosProjetos">
            <img
              src="/imgs/cardIndividualProjetosGaleria.jpg"
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
                Nome do projeto
              </h1>
            </div>
            <div className="containerDescCardIndividualProjetoGaleriaNossosProjetos">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et.
            </div>
          </div>
        </div>
      </div>
      GaleriaProjetosNossoProjetos
    </>
  );
};

export default GaleriaProjetosNossoProjetos;

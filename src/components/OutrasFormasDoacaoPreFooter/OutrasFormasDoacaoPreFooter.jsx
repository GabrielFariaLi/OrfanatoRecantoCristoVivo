import React from "react";

import { Link } from "react-router-dom";
import "./OutrasFormasDoacaoPreFooter.css";
const OutrasFormasDoacaoPreFooter = ({ origem }) => {
  return (
    <>
      <div className="containerPrincipalOutrasFormasDoacaoPreFooter">
        <div className="containerPrincipalFormasDeDoarDoacao">
          <h5
            style={{
              fontSize: "20px",
              color: "var(--text-black)",
              alignSelf: "center",
              fontWeight: "600",
            }}
          >
            Conheça outras formas de doar
          </h5>
          <svg
            style={{ marginTop: "10px", alignSelf: "center" }}
            width="57"
            height="3"
            viewBox="0 0 57 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.5"
              y1="1.5"
              x2="55.5"
              y2="1.5"
              stroke="#FF284D"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <div className="slickSliderContainerFormasDoar">
            <div className="containerConjuntoDeCardsFormasDeDoacao">
              {origem !== "Pix" && (
                <Link to="/doacaoPorPix">
                  <div className="containerCardFormasDeDoacao">
                    <h3 className="tituloFormaDoarDoacao">Doe pelo PIX</h3>
                    <img
                      className="imagemCardFormaDoarDoacao"
                      src="/imgs/pixCardFormasDoarDoacao.png"
                    ></img>
                    <button className="buttonFormaDoarDoacao">
                      Doe agora{" "}
                      <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        className="setaDoeAgoraDoacao"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM8 8L8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L8 8ZM0.292893 14.2929C-0.0976311 14.6834 -0.0976311 15.3166 0.292893 15.7071C0.683417 16.0976 1.31658 16.0976 1.70711 15.7071L0.292893 14.2929ZM0.292893 1.70711L7.29289 8.70711L8.70711 7.29289L1.70711 0.292893L0.292893 1.70711ZM7.29289 7.29289L0.292893 14.2929L1.70711 15.7071L8.70711 8.70711L7.29289 7.29289Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                    </button>
                  </div>
                </Link>
              )}
              {origem !== "Cartão" && (
                <Link to="/doacaoPorCartao">
                  <div className="cardDoacaoVermelho containerCardFormasDeDoacao">
                    <h3
                      style={{ paddingTop: "26px" }}
                      className="tituloFormaDoarDoacao"
                    >
                      Doe pelo
                      <br /> Cartão de crédito
                    </h3>
                    <img
                      className="imagemCardFormaDoarDoacao"
                      src="/imgs/cartaoCreditoCardFormasDoarDoacao.png"
                    ></img>
                    <button className="buttonFormaDoarDoacao">
                      Doe agora{" "}
                      <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        className="setaDoeAgoraDoacao"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM8 8L8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L8 8ZM0.292893 14.2929C-0.0976311 14.6834 -0.0976311 15.3166 0.292893 15.7071C0.683417 16.0976 1.31658 16.0976 1.70711 15.7071L0.292893 14.2929ZM0.292893 1.70711L7.29289 8.70711L8.70711 7.29289L1.70711 0.292893L0.292893 1.70711ZM7.29289 7.29289L0.292893 14.2929L1.70711 15.7071L8.70711 8.70711L7.29289 7.29289Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                    </button>
                  </div>
                </Link>
              )}
              {origem !== "Item" && (
                <Link to="/doacaoItem">
                  <div className=" containerCardFormasDeDoacao ">
                    <h3 className="tituloFormaDoarDoacao">Doe algum item</h3>
                    <img
                      className="imagemCardFormaDoarDoacao"
                      src="/imgs/doarItemCardFormasDoarDoacao.png"
                    ></img>
                    <button className="buttonFormaDoarDoacao">
                      Doe agora{" "}
                      <svg
                        className="setaDoeAgoraDoacao"
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM8 8L8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L8 8ZM0.292893 14.2929C-0.0976311 14.6834 -0.0976311 15.3166 0.292893 15.7071C0.683417 16.0976 1.31658 16.0976 1.70711 15.7071L0.292893 14.2929ZM0.292893 1.70711L7.29289 8.70711L8.70711 7.29289L1.70711 0.292893L0.292893 1.70711ZM7.29289 7.29289L0.292893 14.2929L1.70711 15.7071L8.70711 8.70711L7.29289 7.29289Z"
                          fill="#F2F2F2"
                        />
                      </svg>
                    </button>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutrasFormasDoacaoPreFooter;

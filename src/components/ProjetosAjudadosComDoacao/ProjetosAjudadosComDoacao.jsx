import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./ProjetosAjudadosComDoacao.css";
import { projetosAjudadosComDoacao } from "../../data";

const ProjetosAjudadosComDoacao = () => {
  const [dropdownProjetoFlag, setdropdownProjetoFlag] = useState({});

  const dropdowProjetoAlternarVisibilidade = (id) => {
    setdropdownProjetoFlag({
      ...dropdownProjetoFlag,
      [id]: !dropdownProjetoFlag[id],
    });
    if (dropdownProjetoFlag[id])
      setdropdownProjetoFlag({
        ...dropdownProjetoFlag,
        [id]: false,
      });
    // if (dropdownProjetoFlag) setdropdownProjetoFlag(false);
  };

  return (
    <>
      <div className="containerPrincipalProjetosAjudadosDoacao">
        <svg
          className="divisoriaProjetosAjudadosComDoacao"
          width="1550"
          height="128"
          viewBox="0 0 1550 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M771.705 37.1527C768.152 37.9346 765.511 40.5966 764.798 44.1142C764.529 45.4384 764.623 47.4668 765.008 48.6544C765.376 49.7909 766.053 51.0879 766.938 52.3514C767.847 53.6505 770.845 56.6569 772.526 57.957C774.995 59.8656 779.676 62.7863 780.466 62.9108C780.843 62.9703 781.501 62.6472 783.762 61.2938C786.779 59.4868 789.688 57.2705 791.796 55.1722C795.318 51.6652 796.896 48.2648 796.508 45.0144C796.352 43.7114 796.07 42.7695 795.511 41.6903C794.446 39.6313 792.778 38.2403 790.378 37.4093C789.365 37.0585 789.29 37.049 787.53 37.049C785.772 37.049 785.695 37.0587 784.683 37.4088C783.401 37.8521 782.396 38.4373 781.349 39.3502L780.548 40.0491L780.343 39.8175C779.864 39.2767 778.468 38.2718 777.638 37.8704C776.351 37.248 775.162 36.9905 773.622 37.0003C772.929 37.0045 772.066 37.0732 771.705 37.1527ZM775.812 39.3994C777.079 39.8222 778.451 40.7817 779.207 41.7724C779.965 42.7665 780.012 42.8065 780.499 42.8719C780.949 42.9322 780.987 42.9142 781.375 42.4579C782.407 41.2441 783.445 40.313 784.212 39.914C785.797 39.0889 787.572 38.8672 789.22 39.2888C792.433 40.1105 794.43 42.6827 794.43 46.0004C794.43 48.4989 793.251 50.6639 790.272 53.6386C788.528 55.3799 787.195 56.4803 785.051 57.9487C783.705 58.8703 780.769 60.6467 780.592 60.6467C780.407 60.6467 778.269 59.3702 776.633 58.2827C774.273 56.714 772.62 55.3793 770.884 53.6399C768.564 51.3169 767.424 49.577 766.923 47.5941C766.489 45.8785 766.801 43.8207 767.727 42.2823C768.529 40.9515 770.211 39.7414 771.893 39.2855C772.955 38.9973 774.765 39.05 775.812 39.3994ZM772.125 41.2691C770.297 41.8486 769.136 43.4882 769.133 45.4973C769.132 46.0661 769.176 46.227 769.415 46.5104C769.651 46.791 769.778 46.8474 770.172 46.8474C770.803 46.8474 771.212 46.3999 771.212 45.7089C771.212 44.8932 771.499 44.1624 771.98 43.7503C772.41 43.3823 773.038 43.1238 773.503 43.1238C773.873 43.1238 774.332 42.8414 774.476 42.5245C774.678 42.0818 774.634 41.7482 774.324 41.3799C774.067 41.0748 773.982 41.0435 773.42 41.049C773.079 41.0524 772.496 41.1514 772.125 41.2691ZM758.922 64.7538C757.913 65.0075 757.117 65.4701 753.47 67.9215C751.573 69.197 749.96 70.2768 749.887 70.3213C749.801 70.3736 749.613 70.1889 749.351 69.7953C748.885 69.0932 748.348 68.8341 747.873 69.0825C747.012 69.5335 740.35 74.0724 740.192 74.3158C740.087 74.4777 740 74.7445 740 74.9086C739.999 75.2527 745.944 84.2678 746.367 84.564C746.81 84.8745 747.406 84.7493 747.8 84.2624C748.234 83.727 748.147 83.5531 745.357 79.363C743.906 77.1847 742.695 75.3383 742.665 75.2599C742.598 75.0852 747.869 71.5353 747.994 71.6712C748.386 72.1001 756.205 84.0194 756.135 84.0831C756.085 84.1289 754.888 84.9349 753.475 85.8742L750.906 87.582L750.564 87.2085C750.155 86.761 749.751 86.6382 749.302 86.8242C748.46 87.1731 748.436 87.8494 749.223 89.0486C749.827 89.9678 750.241 90.2653 750.742 90.1381C751.06 90.0574 758.276 85.2761 758.57 84.9515C758.895 84.5921 758.837 84.007 758.414 83.393C758.214 83.1036 758.074 82.8079 758.103 82.7359C758.201 82.4893 759.383 81.8663 759.85 81.8156C760.223 81.775 761.873 82.2125 768.2 84.0308C775.577 86.1504 776.128 86.2926 776.743 86.2352C777.104 86.2015 777.646 86.0892 777.947 85.9854C778.57 85.7712 797.877 72.9529 798.649 72.2412C800.651 70.3963 800.388 67.0446 798.125 65.5421C797.027 64.8134 795.464 64.5969 794.287 65.0106C793.621 65.2447 784.581 71.2304 784.31 71.6163C784.028 72.0197 784.087 72.5528 784.455 72.9211C785.089 73.5548 785.066 73.5658 790.154 70.1769C793.243 68.1189 794.911 67.0731 795.232 66.9921C796.533 66.6645 797.825 67.6984 797.825 69.0681C797.825 69.7347 797.683 70.132 797.298 70.5443C796.959 70.9064 777.814 83.7075 777.273 83.9337C777.076 84.0161 776.751 84.0835 776.552 84.0835C776.352 84.0835 772.741 83.0904 768.526 81.8768C761.906 79.9704 760.758 79.6692 760.096 79.665C759.166 79.6592 758.43 79.8914 757.526 80.4759C757.158 80.7133 756.835 80.9075 756.807 80.9075C756.779 80.9075 755.453 78.9533 753.861 76.5647L750.965 72.2219L751.916 71.5621C754.726 69.6138 758.632 67.1035 759.11 66.9386C759.451 66.8213 759.99 66.7498 760.534 66.7497C761.379 66.7497 761.708 66.8455 769.774 69.4445C775.534 71.3007 778.249 72.2246 778.497 72.4135C778.947 72.7572 779.316 73.5052 779.316 74.074C779.316 74.6446 778.925 75.393 778.414 75.7995C777.665 76.3952 777.389 76.3621 772.685 75.1138C770.392 74.5055 768.356 74.0079 768.159 74.0079C767.653 74.0079 767.16 74.5143 767.16 75.0337C767.16 75.858 767.224 75.8866 771.929 77.155C775.653 78.1588 776.313 78.3068 777.126 78.3194C778.221 78.3364 778.927 78.1181 779.723 77.5161C780.882 76.6403 781.452 75.4918 781.438 74.0626C781.428 73.0239 781.179 72.294 780.559 71.4811C779.725 70.3868 779.797 70.4158 770.496 67.4174L761.958 64.665L760.753 64.6306C759.961 64.6082 759.334 64.6502 758.922 64.7538Z"
            fill="#015673"
          />
          <circle cx="775" cy="64" r="62" stroke="#18A8D9" strokeWidth="4" />
          <line
            x1="839"
            y1="62"
            x2="1550"
            y2="62"
            stroke="#18A8D9"
            strokeWidth="4"
          />
          <line y1="62" x2="711" y2="62" stroke="#18A8D9" strokeWidth="4" />
        </svg>
        <div className="containerTituloProjetosAjudados">
          <h1 className="tituloPrincipalProjetosAjudados semibold48 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit .
          </h1>
          <p className="descTituloPrincipalProjetosAjudados">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et
          </p>
        </div>
      </div>
      <div className="containerImagemDivisoriaProjetosAjudadosDoacao">
        <img
          className="imagemEfetivaDivisoria"
          src="/imgs/fotoDivisoriaProjetosAjudadosDoacao.jpg"
        ></img>
      </div>
      <div className="containerEfetivosProjetos">
        {projetosAjudadosComDoacao.map((item) => (
          <div
            key={item.id}
            className="containerUnidadeProjetoDoacao"
            onClick={(e) => dropdowProjetoAlternarVisibilidade(item.id)}
          >
            <div className="containerTextoLeftUnidadeProjetoDoacao">
              <div className="containerTituloUnidadeProjetoDoacao">
                <div className="tituloUnidadeProjetoDoacao"> {item.titulo}</div>
                {dropdownProjetoFlag[item.id] === true ? (
                  <div className="linhaProjetoAbertoDoacao"></div>
                ) : null}
              </div>
              {dropdownProjetoFlag[item.id] === true ? (
                <div className="containerDescricaoUnidadeProjetoDoacao">
                  {item.descricao}
                  <svg
                    style={{ marginTop: "32px", marginBottom: "53px" }}
                    width="57"
                    height="24"
                    viewBox="0 0 57 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M56.0607 13.0607C56.6464 12.4749 56.6464 11.5251 56.0607 10.9393L46.5147 1.3934C45.9289 0.807615 44.9792 0.807615 44.3934 1.3934C43.8076 1.97919 43.8076 2.92894 44.3934 3.51472L52.8787 12L44.3934 20.4853C43.8076 21.0711 43.8076 22.0208 44.3934 22.6066C44.9792 23.1924 45.9289 23.1924 46.5147 22.6066L56.0607 13.0607ZM-1.31134e-07 13.5L55 13.5L55 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
                      fill="#363636"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
            {dropdownProjetoFlag[item.id] === true ? (
              <div className="containerImagemRightUnidadeProjetoDoacao">
                <img
                  className="ImagemRightUnidadeProjetoDoacao"
                  src="/imgs/imagemProjetoAjudadosDoacoes.png"
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="containerButtonVejaTodosProjetos">
        <button className="vejaTodosProjetosButton">
          Veja todos os nossos projetos
        </button>
      </div>
    </>
  );
};

export default ProjetosAjudadosComDoacao;

import React from "react";
import { Link } from "react-router-dom";
import "./FaleConoscoPrincipasInfosSection.css";

const FaleConoscoPrincipasInfosSection = () => {
  return (
    <>
      <div className="containerPrincipalInfosFaleConosco">
        <div className="containerLeftPrincipaisInfosFaleConosco">
          <h1 className="tituloPrincipaisInfosFaleConosco">Fale conosco!</h1>
          <p className="enderecoCompletoInfosFaleConosco">
            Rua Amazonas, Quadra 02 Lote 03 Anhanguera C,
            <br />
            Valparaíso de Goiás - GO, Brasil
          </p>
          <p className="cepInfosFaleConosco">Cep 72870-508</p>

          <p className="emailInfosFaleConosco">delvany@hotmail.com</p>
          <p className="telefoneInfosFaleConosco">(61) 99914-6349</p>
          <a href="https://wa.link/o2ph8b">
            <div className="buttonFaleConoscoWhatsapp">
              Fale conosco!
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 21.25C16.1609 21.25 20.75 16.6609 20.75 11C20.75 5.33908 16.1609 0.75 10.5 0.75C4.83908 0.75 0.25 5.33908 0.25 11C0.25 16.6609 4.83908 21.25 10.5 21.25Z"
                  className="whatsappiconPrincipaisInfosFaleConosco"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.8376 16.7026H10.8351C9.815 16.7023 8.81268 16.4463 7.92244 15.9608L4.69141 16.8083L5.55609 13.65C5.02271 12.7256 4.74205 11.6771 4.74251 10.6029C4.74384 7.24239 7.47805 4.50833 10.8375 4.50833C12.468 4.50903 13.9983 5.14377 15.1491 6.29585C16.2998 7.44787 16.9332 8.97918 16.9325 10.6077C16.9312 13.9675 14.1981 16.7013 10.8376 16.7026ZM8.07214 14.8574L8.25713 14.9672C9.03492 15.4287 9.92651 15.6729 10.8355 15.6733H10.8376C13.6298 15.6733 15.9023 13.4007 15.9034 10.6074C15.904 9.25374 15.3775 7.98098 14.4211 7.02342C13.4646 6.06586 12.1927 5.53826 10.8396 5.53779C8.04526 5.53779 5.77268 7.81016 5.77158 10.6033C5.77118 11.5605 6.03901 12.4927 6.54612 13.2993L6.66657 13.4909L6.1548 15.3603L8.07214 14.8574ZM13.6996 11.92C13.8058 11.9713 13.8776 12.006 13.9082 12.0571C13.9463 12.1206 13.9463 12.4255 13.8194 12.7813C13.6925 13.137 13.084 13.4617 12.7914 13.5054C12.5291 13.5446 12.197 13.561 11.8322 13.4451C11.611 13.3749 11.3274 13.2812 10.964 13.1243C9.53631 12.5078 8.57147 11.124 8.38912 10.8625C8.37634 10.8442 8.36741 10.8314 8.36242 10.8247L8.3612 10.8231C8.2806 10.7155 7.74057 9.995 7.74057 9.24929C7.74057 8.54779 8.08516 8.1801 8.24378 8.01085C8.25464 7.99925 8.26464 7.98859 8.27359 7.97881C8.41318 7.82634 8.57818 7.78823 8.6797 7.78823C8.78121 7.78823 8.88285 7.78916 8.97158 7.79362C8.98253 7.79417 8.99392 7.7941 9.00569 7.79403C9.09444 7.79351 9.20508 7.79287 9.31423 8.05505C9.35623 8.15595 9.41767 8.30554 9.48247 8.46331C9.61352 8.78234 9.75831 9.13483 9.78378 9.18584C9.82186 9.26207 9.84723 9.35097 9.79647 9.45266C9.78885 9.4679 9.7818 9.48229 9.77507 9.49604C9.73694 9.57388 9.7089 9.63114 9.64419 9.70669C9.61874 9.7364 9.59244 9.76843 9.56614 9.80046C9.51375 9.86427 9.46136 9.92807 9.41574 9.97351C9.3395 10.0495 9.26014 10.1318 9.34897 10.2843C9.43781 10.4368 9.74345 10.9355 10.1962 11.3393C10.6829 11.7734 11.1058 11.9569 11.3202 12.0499C11.3621 12.068 11.396 12.0827 11.4209 12.0952C11.5731 12.1715 11.662 12.1587 11.7508 12.0571C11.8397 11.9554 12.1315 11.6124 12.233 11.4599C12.3345 11.3075 12.4361 11.3329 12.5757 11.3837C12.7153 11.4346 13.464 11.803 13.6163 11.8792C13.6461 11.8941 13.6739 11.9075 13.6996 11.92Z"
                  fill="#F2F2F2"
                />
              </svg>
            </div>
          </a>
        </div>
        <div className="containerRightPrincipaisInfosFaleConosco">
          <img
            src="/imgs/imagemFaleConoscoPrincipaisInfos.png"
            className="imagemPrincipaisInfosFaleConosco"
          />
        </div>
      </div>
    </>
  );
};

export default FaleConoscoPrincipasInfosSection;

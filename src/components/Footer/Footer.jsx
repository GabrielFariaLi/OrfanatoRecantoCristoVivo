import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";
import { useState, useEffect } from "react";
const Footer = () => {
  const [widthAtual, setWidthAtual] = useState(0);
  useEffect(() => {
    setWidthAtual(window.innerWidth);
  }, []);
  return (
    <>
      <div className="containerGeralFooter">
        <div className="containerConteudosFooter">
          {widthAtual <= 480 && <hr className="divisoriaFooterMiniMenu" />}
          <div className="sobreNosFooter">
            <h1 className="sobreNosTituloFooter">
              Recanto <br /> Cristo Vivo
            </h1>
            <div className="descSobreNosFooter">
              {/*         Somos uma ONG (orgão não governamental), devidamente cadastrada
              nos orgãos publicos federais e municipais, que desde a data de sua
              fundação, 1985, sobrevive graças às ofertas, doações e trabalho
              voluntario de centenas de pessoas que colaboram */}
            </div>
          </div>
          <div className="miniMenuFooter">
            {" "}
            <div className="primeiraParteMiniMenuFooter">
              <p className="itemMiniMenuFooter">
                <Link to="/sobreNos">Sobre nós</Link>
              </p>
              <p className="itemMiniMenuFooter">
                <Link to="/facaSuaDoacao">Faça sua doação</Link>
              </p>
              <p className="itemMiniMenuFooter">
                <Link to="/faleConosco">Seja um voluntário</Link>
              </p>
              <p className="itemMiniMenuFooter">
                <Link to="/nossosProjetos">Projetos</Link>{" "}
              </p>
            </div>
            <div className="segundaParteMiniMenuFooter">
              <p className="itemMiniMenuFooter">
                {" "}
                <Link to="/nossaEstrutura">Nossa infraestrutura</Link>
              </p>
              <p className="itemMiniMenuFooter">
                <Link to="/sobreNos">Nossa equipe</Link>
              </p>
              <p className="itemMiniMenuFooter">
                <Link to="/faleConosco">Fale conosco</Link>
              </p>
            </div>
          </div>
          <div className="contactenosFooter">
            {" "}
            <button className="faleConoscoButtonFooterZap">
              <p style={{ marginRight: "5px" }}>Fale conosco!</p>
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 21.25C16.1609 21.25 20.75 16.6609 20.75 11C20.75 5.33908 16.1609 0.75 10.5 0.75C4.83908 0.75 0.25 5.33908 0.25 11C0.25 16.6609 4.83908 21.25 10.5 21.25Z"
                  className="whatsappiconFooterPath"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8378 16.7026H10.8353C9.81524 16.7023 8.81292 16.4463 7.92268 15.9607L4.69165 16.8083L5.55633 13.65C5.02295 12.7256 4.74229 11.6771 4.74275 10.6029C4.74409 7.24236 7.47829 4.5083 10.8378 4.5083C12.4683 4.509 13.9986 5.14374 15.1493 6.29582C16.3 7.44784 16.9334 8.97915 16.9328 10.6077C16.9314 13.9675 14.1983 16.7012 10.8378 16.7026ZM8.07239 14.8573L8.25737 14.9671C9.03517 15.4287 9.92675 15.6729 10.8358 15.6733H10.8378C13.63 15.6733 15.9026 13.4007 15.9037 10.6073C15.9042 9.25371 15.3778 7.98095 14.4213 7.02339C13.4649 6.06583 12.1929 5.53823 10.8398 5.53776C8.0455 5.53776 5.77293 7.81013 5.77182 10.6032C5.77143 11.5605 6.03926 12.4927 6.54636 13.2992L6.66681 13.4909L6.15504 15.3603L8.07239 14.8573ZM13.6999 11.9199C13.8061 11.9713 13.8778 12.0059 13.9084 12.0571C13.9465 12.1206 13.9465 12.4255 13.8197 12.7813C13.6927 13.137 13.0843 13.4617 12.7917 13.5054C12.5293 13.5446 12.1973 13.561 11.8325 13.445C11.6113 13.3749 11.3276 13.2811 10.9643 13.1242C9.53655 12.5077 8.57171 11.124 8.38936 10.8625C8.37659 10.8441 8.36765 10.8313 8.36267 10.8247L8.36144 10.823C8.28085 10.7155 7.74082 9.99497 7.74082 9.24926C7.74082 8.54776 8.08541 8.18007 8.24402 8.01082C8.25489 7.99922 8.26488 7.98856 8.27383 7.97878C8.41342 7.82631 8.57842 7.7882 8.67994 7.7882C8.78146 7.7882 8.8831 7.78913 8.97183 7.79359C8.98278 7.79414 8.99416 7.79407 9.00594 7.794C9.09469 7.79348 9.20533 7.79283 9.31448 8.05502C9.35647 8.15592 9.41791 8.30551 9.48272 8.46328C9.61376 8.78231 9.75855 9.1348 9.78402 9.1858C9.8221 9.26204 9.84748 9.35094 9.79672 9.45262C9.7891 9.46787 9.78205 9.48226 9.77531 9.49601C9.73719 9.57385 9.70914 9.63111 9.64443 9.70666C9.61898 9.73637 9.59268 9.7684 9.56638 9.80043C9.51399 9.86424 9.4616 9.92804 9.41599 9.97348C9.33975 10.0494 9.26038 10.1318 9.34922 10.2843C9.43805 10.4368 9.74369 10.9354 10.1964 11.3393C10.6831 11.7734 11.1061 11.9568 11.3205 12.0498C11.3624 12.068 11.3963 12.0827 11.4211 12.0952C11.5734 12.1714 11.6622 12.1587 11.7511 12.0571C11.8399 11.9554 12.1318 11.6123 12.2333 11.4599C12.3348 11.3075 12.4364 11.3329 12.5759 11.3837C12.7155 11.4346 13.4643 11.8029 13.6166 11.8792C13.6463 11.894 13.6741 11.9075 13.6999 11.9199Z"
                  className="whatsappiconInsideFooterPath"
                />
              </svg>
            </button>
            <div className="containerRedesSociaisFooter">
              <a href="https://www.instagram.com/recantocristovivo1985/">
                <div className="instagramFooter">
                  <svg
                    className="instagramziniconSVGInsideFooterPath"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                      className="instagramziniconInsideFooterPath"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 11.3698C16.1234 12.2021 15.9813 13.052 15.5938 13.7988C15.2063 14.5456 14.5932 15.1512 13.8416 15.5295C13.0901 15.9077 12.2385 16.0394 11.4078 15.9057C10.5771 15.7721 9.80977 15.3799 9.21485 14.785C8.61993 14.1901 8.22774 13.4227 8.09408 12.592C7.96042 11.7614 8.09208 10.9097 8.47034 10.1582C8.8486 9.40667 9.4542 8.79355 10.201 8.40605C10.9478 8.01856 11.7978 7.8764 12.63 7.99981C13.4789 8.1257 14.2649 8.52128 14.8717 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z"
                      className="instagramziniconInsideFooterPath"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.9946 6.42666C18.01 6.53069 17.9922 6.63694 17.9438 6.73028C17.8954 6.82363 17.8187 6.89933 17.7248 6.94662C17.6309 6.9939 17.5244 7.01036 17.4206 6.99365C17.3167 6.97694 17.2208 6.92792 17.1464 6.85355C17.0721 6.77919 17.0231 6.68327 17.0064 6.57943C16.9896 6.4756 17.0061 6.36915 17.0534 6.27521C17.1007 6.18127 17.1764 6.10463 17.2697 6.05619C17.3631 6.00775 17.4693 5.98998 17.5733 6.00541C17.6795 6.02114 17.7777 6.07059 17.8536 6.14645C17.9294 6.2223 17.9789 6.32054 17.9946 6.42666Z"
                      className="instagramziniconInsideFooterPath"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
              <a href="https://www.youtube.com/@recantocristovivo7385/featured">
                <div className="youtubeFooter">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="youtubeziniconSVGInsideFooterPath"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12002 4 3.40002 4.46C2.92927 4.59318 2.502 4.84824 2.16137 5.19941C1.82074 5.55057 1.57881 5.98541 1.46002 6.46C1.14524 8.20556 0.991258 9.97631 1.00002 11.75C0.988802 13.537 1.14279 15.3213 1.46002 17.08C1.59098 17.5398 1.83833 17.9581 2.17817 18.2945C2.518 18.6308 2.93884 18.8738 3.40002 19C5.12002 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8573 8.1787 22.54 6.42V6.42Z"
                      className="youtubeziniconPATHInsideFooterPath"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.75 15.02L15.5 11.75L9.75 8.47998V15.02Z"
                      className="youtubeziniconPATHInsideFooterPath"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
              <a href="https://www.facebook.com/amoredignidade/">
                <div className="facebookFooter">
                  <svg
                    className="facebookIconSVGInsideFooterPath"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="28px"
                    height="28px"
                  >
                    <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="direitosAutoraisFooter">
              © Todos os direitos reservados - 2022
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import "./FooterLocalizacaoOrfanato.css";
const FooterLocalizacaoOrfanato = () => {
  return (
    <>
      <div className="containerPrincipalFooterLocalizacaoOrfanato">
        <div className="containerTextoLocalizacaoOrfanato">
          <div className="containerTituloTextoLocalizacaoOrfanato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor.
          </div>
          <div className="containerInfosLocalizacaoOrfanato">
            <div className="primeiraColunaInfosLocalizacaoOrfanato">
              <p className="tituloItemInfoLocalizacaoOrfanato textoCimaInfoLocalizacao">
                Telefone
              </p>
              <p className="efetivaInfoLocalizacaoOrfanato textoCimaInfoLocalizacao2">
                (xx) xxxx-xxxx
              </p>

              <p className="tituloItemInfoLocalizacaoOrfanato">Endereço</p>
              <p className="efetivaInfoLocalizacaoOrfanato">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              </p>
            </div>
            <div className="segundaColunaInfosLocalizacaoOrfanato">
              <p className="tituloItemInfoLocalizacaoOrfanato textoCimaInfoLocalizacao">
                Whatsapp
              </p>
              <p className="efetivaInfoLocalizacaoOrfanato textoCimaInfoLocalizacao2">
                (xx) xxxx-xxxx
              </p>

              <p className="tituloItemInfoLocalizacaoOrfanato">E-mail</p>
              <p className="efetivaInfoLocalizacaoOrfanato">
                recantocristovivo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="containerMapaLocalizacaoOrfanato">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="583"
                height="439"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Rua%20Amazonas,%20Quadra%2002%20Lote%2003%20Anhanguera%20C,%20Valpara%C3%ADso%20de%20Goi%C3%A1s%20-%20GO,%2072870-508&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>

              <br />
            </div>
          </div>
        </div>
        <div className="containerMapaLocalizacaoOrfanatoMobile">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="300"
                height="439"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Recanto%20cristo%20vivo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>

              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLocalizacaoOrfanato;

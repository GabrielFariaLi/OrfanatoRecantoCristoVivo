import React from "react";
import "./FooterLocalizacaoOrfanato.css";
const FooterLocalizacaoOrfanato = () => {
  return (
    <>
      <div className="containerPrincipalFooterLocalizacaoOrfanato">
        <div className="containerConteudosFooterLocalizacaoOrfanato">
          <div className="containerTextoLocalizacaoOrfanato">
            <div className="containerTituloTextoLocalizacaoOrfanato">
              Quer visitar pessoalmente o Recanto Cristo Vivo?
            </div>
            <div className="containerInfosLocalizacaoOrfanato">
              <div className="primeiraColunaInfosLocalizacaoOrfanato">
                <p className="tituloItemInfoLocalizacaoOrfanato textoCimaInfoLocalizacao">
                  Telefone
                </p>
                <p className="efetivaInfoLocalizacaoOrfanato textoCimaInfoLocalizacao2">
                  (61) 3629-2896
                </p>

                <p className="tituloItemInfoLocalizacaoOrfanato">Endereço</p>
                <p className="efetivaInfoLocalizacaoOrfanato">
                  BR 040 Km 8 Chácaras Anhanguera 2/3 R Amazonas Quadra 02 Lote
                  03 <br /> Valparaiso De Goiás GO 72870-000
                </p>
              </div>
              <div className="segundaColunaInfosLocalizacaoOrfanato">
                <p className="tituloItemInfoLocalizacaoOrfanato textoCimaInfoLocalizacao">
                  Whatsapp
                </p>
                <p className="efetivaInfoLocalizacaoOrfanato textoCimaInfoLocalizacao2">
                  (61) 99914-6349
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

          <div className="containerMapaLocalizacaoOrfanatoIpadSmaller">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="565"
                  height="565"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=recanto%20cristo%20vivo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <br />
              </div>
            </div>
          </div>
          <div className="containerMapaLocalizacaoOrfanatoIpad">
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="820"
                  height="565"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=recanto%20cristo%20vivo&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
      </div>
    </>
  );
};

export default FooterLocalizacaoOrfanato;

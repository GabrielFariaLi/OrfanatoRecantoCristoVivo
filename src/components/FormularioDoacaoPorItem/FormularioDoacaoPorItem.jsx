import React from "react";
import "./FormularioDoacaoPorItem.css";

const FormularioDoacaoPorItem = () => {
  return (
    <>
      <div className="containerPrincipalFormularioDoacaoItem">
        <div className="tituloFormularioDoacaoItem">
          Lorem ipsum dolor sit amet, consectetur.
        </div>
        <div className="d-flex containerFormularioDoacaoItemFlex">
          <div className="containerInformacoesPessoaisFormulario">
            <label
              for="nomeDoacaoItem"
              className="labelInputFormularioDoacaoItem"
            >
              Seu nome*
            </label>
            <input
              className="inputFormularioInfoPessoaisDoacaoItem"
              type="text"
              placeholder="Escreva seu nome aqui..."
              id="nomeDoacaoItem"
              name="nomeDoacaoItem"
            />
            <label
              for="telefoneDoacaoItem"
              className="labelInputFormularioDoacaoItem"
            >
              Telefone*
            </label>
            <input
              placeholder="Escreva seu telefone aqui..."
              className="inputFormularioInfoPessoaisDoacaoItem"
              type="text"
              id="telefoneDoacaoItem"
              name="telefoneDoacaoItem"
            />
            <label
              for="emailDoacaoItem"
              className="labelInputFormularioDoacaoItem"
            >
              Seu email (opcional){" "}
            </label>
            <input
              placeholder="Escreva seu email aqui..."
              className="inputFormularioInfoPessoaisDoacaoItem"
              type="text"
              id="emailDoacaoItem"
              name="emailDoacaoItem"
            />
          </div>
          <div className="containerOqueGostariaDeDoarFormulario">
            <label
              for="emailDoacaoItem"
              className="labelInputFormularioDoacaoItem"
            >
              O que você gostaria de doar?*
            </label>
            <textarea
              placeholder="Escreva aqui quais itens você quer doar..."
              className="inputFormularioOqueGostariaDeDoarDoacaoItem"
              type="text"
              id="emailDoacaoItem"
              name="emailDoacaoItem"
            />
            <div className="buttonEnviarMensagem">Enviar mensagem</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioDoacaoPorItem;

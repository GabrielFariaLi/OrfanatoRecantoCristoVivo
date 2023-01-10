import React from "react";
import "./FormularioDoacaoPorItem.css";

const FormularioDoacaoPorItem = () => {
  return (
    <>
      <div className="containerPrincipalFormularioDoacaoItem">
        <div className="tituloFormularioDoacaoItem">
          A sua doação pode fazer a diferença para melhor <br />
          na vida de uma criança!
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
            <p style={{ color: "var(--text-black)", marginBottom: "15px" }}>
              Tem disponibilidade para entregar o item até a gente?
            </p>
            <label class="containerCheckBoxDoeQualquerCoisa">
              Sim
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="containerCheckBoxDoeQualquerCoisa">
              Não
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <div className="buttonEnviarMensagem">Enviar mensagem</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioDoacaoPorItem;

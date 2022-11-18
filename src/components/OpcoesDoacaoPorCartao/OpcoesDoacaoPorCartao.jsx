import { React, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { valoresDoacaoCartao } from "../../data.js";
import "./OpcoesDoacaoPorCartao.css";

const KEY = process.env.REACT_APP_STRIPE;

let promessaStripe;
const getStripe = () => {
  if (!promessaStripe) {
    promessaStripe = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return promessaStripe;
};

const OpcoesDoacaoPorCartao = () => {
  const item = {
    price: "price_1M4y6cLrAwTcU0GGi9GATmrO",
    quantity: 1,
  };

  const opcoesCheckout = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/doacaoBemSucedida`,
    cancelUrl: `${window.location.origin}/doacaoCancelada`,
  };

  const redirecionarParaCheckout = async () => {
    console.log("redirecionarParaCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(opcoesCheckout);
    console.log("Stripe checkout error :( ", error);
  };
  return (
    <>
      {" "}
      <div className="containerPrincipalOpcoesDoacaoPorCartao">
        <h5
          style={{
            fontSize: "20px",
            color: "var(--text-black)",
            alignSelf: "center",
            fontWeight: "500",
          }}
        >
          Escolha um valor para doar
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
            stroke="var(--primary-blue)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <div className="containerCaixasOpcoes d-flex ">
          {valoresDoacaoCartao.map((item) => (
            <div key={item.id} className="containerOpcaoValorCartao">
              <p className="paragrafoOpcaoValorCartao"> Quero doar </p>
              <div className="containerValorEmDinheiro">
                {item.valor !== "Um valor personalizado" && (
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "21.17px",
                      color: "var(--text-black)",
                    }}
                  >
                    R$
                  </p>
                )}
                {item.valor}
              </div>
              <div
                onClick={redirecionarParaCheckout}
                className="containerButtonSelecionarValorCartao"
              >
                Selecionar
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OpcoesDoacaoPorCartao;

import React from "react";
import "./SobreNosHome.css";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const SobreNosHome = () => {
  // store a reference to the box div
  const boxRef = useRef();

  // store the timeline in a ref.
  const t2 = useRef();

  /*   // wait until DOM has been rendered
  useEffect(() => {
    console.log("creating timeline");
    gsap.registerPlugin(ScrollTrigger);

    t2.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".containerSobreNosHome",
          start: "top top",
          end: "center top",

          markers: { startColor: "blue", endColor: "red", fontSize: "32px" },
        },
      })
      .fromTo(
        ".imagemFundadores",
        {
          rotation: 0,
        },
        {
          rotation: 45,
        }
      );
  }, []); */
  return (
    <>
      <div ref={boxRef} className="containerSobreNosHome">
        <div className="containerTextoLeftHome">
          <div className="tituloContainerSobreNos">
            Sobre nós
            <svg
              style={{ marginTop: "10px", marginLeft: "30px" }}
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
          </div>
          <div className="subTituloContainerSobreNos">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit .
          </div>
          <div className="descContainerSobreNos">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et
          </div>

          <button className="buttonContainerSobreNos">
            <Link to="/sobreNos">Saiba mais sobre nós!</Link>
          </button>
        </div>
        <div ref={boxRef} className="containerFotosRightHome">
          <div className="containerFotosRightHomeAlign">
            <div className="imagemFundadores"></div>
            <div className="imagemFundadores2"></div>
            <div className="imagemFundadores3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreNosHome;

"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import CustomCursor from "../_components/CustomCursor";
import "../_components/CustomCursor.css";
import "../_components/Citation.css";

const Citation = ({
  text1Ref,
  text2Ref,
  text3Ref,
  text4Ref,
  text5Ref,
  text6Ref,
  text7Ref,
  text8Ref,
  text9Ref,
  text10Ref,
  text11Ref,
  text12Ref,
  text13Ref,
}) => {
  return (
    <div className="citation-container">
      <div className="text text-1" ref={text1Ref}>
        Ne
      </div>
      <div className="text text-2" ref={text2Ref}>
        craignez
      </div>
      <div className="text text-3" ref={text3Ref}>
        pas
      </div>
      <div className="text text-4" ref={text4Ref}>
        la perfection
      </div>
      <div className="text text-5" ref={text5Ref}>
        vous ne l'atteindrez...
      </div>
      <div className="text text-6" ref={text6Ref}>
        pas.
      </div>
      <div className="text text-7" ref={text7Ref}>
        Mais dans cet écart
      </div>
      <div className="text text-8" ref={text8Ref}>
        impossible
      </div>
      <div className="text text-9" ref={text9Ref}>
        se trouve précisément
      </div>
      <div className="text text-10" ref={text10Ref}>
        l'espace où la
      </div>
      <div className="text text-11" ref={text11Ref}>
        créativité
      </div>
      <div className="text text-12" ref={text12Ref}>
        se
      </div>
      <div className="text text-13" ref={text13Ref}>
        déploie
      </div>
    </div>
  );
};
export default Citation;

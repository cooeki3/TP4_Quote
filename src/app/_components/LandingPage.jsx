"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";
import { CustomEase } from "gsap/CustomEase";
import { useRef } from "react";

import "./Fonts.css";
gsap.registerPlugin(useGSAP, SplitText, GSDevTools, CustomEase);

const LandingPage = () => {
  const titleRef = useRef();
  const flex1Ref = useRef();
  const flex2Ref = useRef();

  useGSAP(() => {
    const titleChars = SplitText.create(titleRef.current, {
      type: "chars",
      charsClass: "title-chars",
    });

    const flex1Chars = SplitText.create(flex1Ref.current, {
      type: "chars",
      mask: "chars",
      charsClass: "year-chars",
    });

    const flex2Chars = SplitText.create(flex2Ref.current, {
      type: "chars",
      mask: "chars",
      charsClass: "name-chars",
    });

    const tl = gsap.timeline();

    tl.set(titleChars.chars, {
      y: "100vh",
    });

    tl.set(".load-h1", {
      opacity: 1,
    });

    tl.set([flex1Chars.chars, flex2Chars.chars], {
      y: "100%",
    });

    tl.to(titleChars.chars, {
      y: "110%",
      duration: 1.6,
      ease: "power4.inOut",

      stagger: 0.03,
    });

    tl.to(
      titleChars.chars,
      {
        y: "0%",
        duration: 1.8,
        ease: "power4.inOut",

        stagger: 0.03,
      },
      "-=0.5"
    );

    tl.to(
      ".load-animation",
      {
        y: "100%",
        duration: 1.6,
        ease: "power4.inOut",
      },
      "<"
    );

    tl.to(
      ".flex-container-3",
      {
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.4"
    );
    tl.to(
      flex1Chars.chars,
      {
        y: "0%",
        duration: 1,
        ease: "power4.out",
        delay: 0.2,
      },
      "<"
    );
    tl.to(
      flex2Chars.chars,
      {
        y: "0%",
        duration: 1,
        ease: "power4.out",
        delay: 0.2,
      },
      "<"
    );
  }, []);

  return (
    <div className="landing-page-container">
      <div className="load-animation"></div>
      <h1 className="load-h1" ref={titleRef}>
        PORTFOLIO
      </h1>
      <div className="flex-container-1" ref={flex1Ref}>
        <p className="load-h2-1">Design</p>
        <p className="load-h2-2">Web</p>
      </div>
      <div className="flex-container-2" ref={flex2Ref}>
        <p className="load-name">Fait par Alexandre Gratton</p>
        <p className="load-info">Tous droits réservés</p>
      </div>
    </div>
  );
};

export default LandingPage;

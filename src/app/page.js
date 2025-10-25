"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { useRef, forwardRef } from "react";
import { useGSAP } from "@gsap/react";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import useLenis from "./_hooks/useLenis.jsx";

import Citation from "./_components/Citation.jsx";
import Header from "./_components/Header.jsx";
import LandingPage from "./_components/LandingPage.jsx";
import LightModeToggle from "./_components/LightModeToggle.jsx";
import CustomCursor from "./_components/CustomCursor.jsx";

import "./_components/Citation.css";
import "./_components/Header.css";
import "./_components/LandingPage.css";
import "./_components/LightModeToggle.css";
import "./_components/CustomCursor.css";
import "./_components/Fonts.css";

gsap.registerPlugin(
  useGSAP,
  ScrollTrigger,
  GSDevTools,
  SplitText,
  MotionPathPlugin
);

export default function Home() {
  const played = useRef(false);
  const tl = useRef();

  const text1Ref = useRef();
  const text2Ref = useRef();
  const text3Ref = useRef();
  const text4Ref = useRef();
  const text5Ref = useRef();
  const text6Ref = useRef();
  const text7Ref = useRef();
  const text8Ref = useRef();
  const text9Ref = useRef();
  const text10Ref = useRef();
  const text11Ref = useRef();
  const text12Ref = useRef();
  const text13Ref = useRef();

  useLenis();
  useGSAP(() => {
    const text1Chars = SplitText.create(text1Ref.current, {
      type: "chars",
      mask: "chars",
      charsClass: "mask-chars",
    });

    window.scrollTo(0, 0);
    document.title = "WEB 5 - TP3";
    document.querySelector("link[rel='icon']").href = "/favicon.ico";

    tl.current = gsap.timeline({ paused: true });

    tl.current.to(
      ".load-h1",
      {
        opacity: 0,
        duration: 0,
        delay: 0.2,
      },
      "<"
    );

    tl.current.set(
      ".load-h2-1",
      {
        opacity: 0,
      },
      "<"
    );

    tl.current.set(
      ".load-h2-2",
      {
        scale: 0.8,
        opacity: 0,
      },
      "<"
    );

    tl.current.set(
      ".load-name",
      {
        opacity: 0,
      },
      "<"
    );

    tl.current.set(
      ".load-info",
      {
        opacity: 0,
      },
      "<"
    );

    tl.current.set(
      ".citation-container",
      {
        backgroundColor: "white",
      },
      "<"
    );

    tl.current.set(".text-1", {
      opacity: 1,
    });

    tl.current.set(
      text1Chars.chars,
      {
        y: "100%",
      },
      "<"
    );
    tl.current.to(
      text1Chars.chars,
      {
        y: "0%",
        duration: 0.9,
        ease: "elastic.out(1,0.75)",
        stagger: 0.05,
      },
      "<"
    );

    tl.current.to(
      ".text-1",
      {
        duration: 0.6,
        ease: "power2.inOut",
        scale: 0.5,
      },
      ">-0.8"
    );

    tl.current.to(
      ".citation-wrap",
      {
        duration: 0.7,
        ease: "power2.inOut",
        x: -350,
        delay: 0.35,
      },
      "<"
    );

    tl.current.set(
      ".text-2",
      {
        opacity: 1,
        scale: 0.5,
        x: "43%",
        delay: 0.4,
      },
      "<0.1"
    );

    tl.current.to(
      ".text-2",
      {
        x: "35%",
        duration: 0.6,
        ease: "power2.out",
      },
      "<"
    );

    tl.current.set(
      ".text-3",
      {
        opacity: 1,
        scale: 0.5,
        x: "153%",
      },
      ">-0.3"
    );

    tl.current.to(
      ".text-3",
      {
        x: "145%",
        duration: 0.6,
        ease: "power2.out",
      },
      "<"
    );

    tl.current.to(
      ".citation-wrap",
      {
        x: -500,
        duration: 0.3,
        ease: "power2.in",
      },
      ">-0.3"
    );

    tl.current.set(
      ".text-1, .text-2, .text-3",
      {
        opacity: 0,
      },
      ">"
    );

    tl.current.set(
      ".text-4",
      {
        opacity: 1,
      },
      "<"
    );

    tl.current.set(".citation-wrap", {
      x: 60,
    });

    tl.current.to(".citation-wrap", {
      x: 0,
      ease: "power2.out",
      duration: 0.5,
    });

    tl.current.set(
      ".citation-container",
      {
        backgroundColor: "#7a58f5",
      },
      ">"
    );

    tl.current.set(
      ".text-4",
      {
        fontFamily: "font1",
        scale: 0.4,
        left: "1050px",
      },
      "<"
    );

    tl.current.set(".citation-container", {
      backgroundColor: "#f352b5ff",
      delay: 0.2,
    });

    tl.current.set(
      ".text-4",
      {
        fontFamily: "font3",
        scale: 1.2,
        left: "800px",
      },
      "<"
    );

    tl.current.set(".citation-container", {
      backgroundColor: "#52f39aff",
      delay: 0.2,
    });

    tl.current.set(
      ".text-4",
      {
        fontFamily: "font4",
        scale: 1.6,
        left: "1000px",
      },
      "<"
    );

    tl.current.set(".citation-container", {
      backgroundColor: "#fff",
      delay: 0.2,
    });

    tl.current.set(
      ".text-4",
      {
        fontFamily: "normal",
        scale: 1.4,
        left: "1000px",
      },
      "<"
    );

    tl.current.set(".text-4", {
      opacity: 0,
    });
        tl.current.set(".text-5", {
      opacity: 1,
    });

    GSDevTools.create({ animation: tl.current });

    const onClick = (e) => {
      if (
        e.target.classList &&
        (e.target.classList.contains("lightmode-button") ||
          e.target.classList.contains("lightmode-icon"))
      )
        return;

      if (!played.current) {
        played.current = true;
        tl.current.play();
      }
    };

    window.addEventListener("mousedown", onClick);

    return () => {
      window.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <div className="page">
      <CustomCursor />
      <LightModeToggle />
      <LandingPage />
      <Header />
      <Citation
        text1Ref={text1Ref}
        text2Ref={text2Ref}
        text3Ref={text3Ref}
        text4Ref={text4Ref}
        text5Ref={text5Ref}
        text6Ref={text6Ref}
        text7Ref={text7Ref}
        text8Ref={text8Ref}
        text9Ref={text9Ref}
        text10Ref={text10Ref}
        text11Ref={text11Ref}
        text12Ref={text12Ref}
        text13Ref={text13Ref}
      />
    </div>
  );
}

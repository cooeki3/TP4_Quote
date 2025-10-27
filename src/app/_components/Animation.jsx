"use client";

import gsap from "gsap";
import { CustomEase } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useAudio } from "@/app/_contexts/AudioContext";

import useLenis from "../_hooks/useLenis.jsx";

import Citation from "./Citation.jsx";
import Header from "./Header.jsx";
import LandingPage from "./LandingPage.jsx";
import LightModeToggle from "./LightModeToggle.jsx";
import CustomCursor from "./CustomCursor.jsx";

import "./Citation.css";
import "./Header.css";
import "./LandingPage.css";
import "./LightModeToggle.css";
import "./CustomCursor.css";
import "./Fonts.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, GSDevTools, SplitText, CustomEase);

const Animation = ({ projects }) => {
  const played = useRef(false);
  const { changeSource, play } = useAudio(false);
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
  const img1Ref = useRef();
  const img2Ref = useRef();
  const img3Ref = useRef();
  const img4Ref = useRef();

  useLenis();
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const text1Chars = SplitText.create(text1Ref.current, {
        type: "chars",
        mask: "chars",
        charsClass: "mask-chars",
      });

      const text5Words = SplitText.create(text5Ref.current, {
        type: "words",
        wordsClass: "mask-words",
      });

      const text6Chars = SplitText.create(text6Ref.current, {
        type: "chars",
        mask: "chars",
        charsClass: "mask-chars",
      });
      const text7Words = SplitText.create(text7Ref.current, {
        type: "words",
        wordsClass: "mask-words",
      });
      const text8Words = SplitText.create(text8Ref.current, {
        type: "words",
        wordsClass: "mask-words",
      });

      window.scrollTo(0, 0);
      document.title = "PORTFOLIO ALEXANDRE GRATTON";
      document.querySelector("link[rel='icon']").href = "/favicon.ico";

      tl.current = gsap.timeline({ paused: true });

      tl.current.set(
        ".load-h1",
        {
          opacity: 0,
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
        ".lightmode-button",
        {
          opacity: 0,
        },
        "<"
      );

      tl.current.call(() => {
        changeSource("/audio/projet_quote.wav", true);
      });

      tl.current.set(
        ".citation-container",
        {
          backgroundColor: "var(--color)",
        },
        "<"
      );

      tl.current.set(".text-1", {
        opacity: 1,
      });

      tl.current.set(text7Words.words, {
        left: 3575,
        opacity: 0,
        marginRight: "200px",
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
          x: "-7%",
          delay: 0.4,
        },
        "<0.1"
      );

      tl.current.to(
        ".text-2",
        {
          x: "-15%",
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
        ".text-4",
        {
          left: "1050px",
          fontFamily: "font1",
          scale: 0.8,
          delay: 0.2,
        },
        "<"
      );

      tl.current.set(
        ".text-4",
        {
          left: "950px",
          fontFamily: "font3",
          scale: 1.2,
          delay: 0.2,
        },
        "<"
      );

      tl.current.set(
        ".text-4",
        {
          left: "1000px",
          fontFamily: "font4",
          scale: 1.6,
          delay: 0.2,
        },
        "<"
      );
      tl.current.set(
        ".text-4",
        {
          left: "900px",
          fontFamily: "font5",
          scale: 1.4,
          delay: 0.2,
        },
        "<"
      );

      tl.current.set(
        ".text-4",
        {
          left: "950px",
          fontFamily: "font6",
          scale: 1.4,
          delay: 0.2,
        },
        "<"
      );

      tl.current.set(
        ".text-4",
        {
          left: "1000px",
          fontFamily: "font7",
          scale: 1,
          delay: 0.2,
          color: "var(--color)",
        },
        "<"
      );

      tl.current.set(
        ".citation-container",
        {
          backgroundColor: "var(--background)",
        },
        "<"
      );

      tl.current.set(
        ".text-4",
        {
          opacity: 0,
        },
        ">0.5"
      );

      tl.current.set(".citation-wrap", {
        scale: 0.7,
      });

      tl.current.set(".text-5", {
        opacity: 1,
      });

      tl.current.set(text5Words.words, {
        y: 800,
      });

      tl.current.to(text5Words.words, {
        y: 0,
        ease: "power2.out",
        duration: 1,
        force3D: true,
        stagger: 0.08,
      });

      tl.current.to(
        ".citation-wrap",
        {
          duration: 0.8,
          ease: "power2.inOut",
          scale: 1.5,
        },
        "<0.5"
      );

      tl.current.to(
        ".citation-wrap",
        {
          y: -800,
          ease: "power3.inOut",
          duration: 2.2,
        },
        "<"
      );

      tl.current.set(
        ".text-6",
        {
          opacity: 1,
          y: 500,
        },
        "<0.4"
      );

      tl.current.set(
        ".text-6",
        {
          opacity: 1,
          y: 500,
        },
        "<"
      );

      tl.current.to(
        ".text-6",
        {
          scale: 55,
          rotation: 180,
          duration: 1.5,
          ease: "power4.inOut",
        },
        "<1.1"
      );

      tl.current.set(
        ".text-6",
        {
          opacity: 0,
        },
        ">-0.4"
      );

      tl.current.set(
        ".text-5",
        {
          opacity: 0,
        },
        "<"
      );

      tl.current.set(
        ".citation-wrap",
        {
          x: 0,
          y: 0,
          scale: 1,
        },
        "<"
      );

      tl.current.set(
        text7Words.words,
        {
          scale: 0.6,
        },
        "<"
      );

      tl.current.set(
        ".text-7",
        {
          opacity: 1,
        },
        "<"
      );

      tl.current.set(
        text7Words.words[0],
        {
          opacity: 1,
        },
        "<"
      );

      tl.current.to(
        text7Words.words,
        {
          scale: 1.2,
          duration: 1.2,
          ease: "power4.out",
        },
        "<"
      );

      tl.current.to(
        ".citation-wrap",
        {
          left: -1400,
          duration: 1.2,
          ease: "power4.inOut",
        },
        "<0.1"
      );

      tl.current.set(
        text7Words.words[1],
        {
          opacity: 1,
          x: "20%",
        },
        "<0.6"
      );

      tl.current.to(
        text7Words.words[1],
        {
          x: "0%",
          duration: 1.2,
          ease: "power4.out",
        },
        "<"
      );

      tl.current.to(
        text7Ref.current,
        {
          left: -300,
          duration: 1.2,
          ease: "power4.inOut",
        },
        "<0.1"
      );

      tl.current.set(
        text7Words.words[2],
        {
          opacity: 1,
          x: "20%",
        },
        "<0.6"
      );

      tl.current.to(
        text7Words.words[2],
        {
          x: "0%",
          duration: 1.2,
          ease: "power4.out",
        },
        "<"
      );

      tl.current.to(
        ".citation-wrap",
        {
          left: -2800,
          duration: 1.2,
          ease: "power4.inOut",
        },
        "<0.1"
      );

      tl.current.set(
        text7Words.words[3],
        {
          opacity: 1,
          x: "20%",
        },
        "<0.6"
      );

      tl.current.to(
        text7Words.words[3],
        {
          x: "0%",
          duration: 1.2,
          ease: "power4.out",
        },
        "<"
      );

      tl.current.to(
        text7Ref.current,
        {
          left: -2300,
          duration: 1.4,
          ease: "power3.inOut",
        },
        "<0.1"
      );

      tl.current.set(
        text7Words.words[4],
        {
          opacity: 1,
          x: "20%",
          scale: 0.7,
        },
        "<0.6"
      );

      tl.current.to(
        text7Words.words[4],
        {
          x: "0%",
          duration: 1.5,
          ease: "power4.out",
        },
        "<"
      );

      tl.current.to(
        ".citation-wrap",
        {
          y: -900,
          duration: 1.5,
          ease: "power4.in",
          delay: 0.1,
        },
        "<-0.3"
      );
      tl.current.set(
        ".citation-wrap",
        {
          top: 0,
          left: 0,
          x: 0,
          y: 0,
        },
        ">"
      );

      tl.current.set(
        ".text-7",
        {
          opacity: 0,
        },
        "<"
      );

      tl.current.set(
        ".text-8",
        {
          opacity: 1,
        },
        "<"
      );

      tl.current.set(
        text8Words.words,
        {
          y: 600,
        },
        "<"
      );

      tl.current.to(
        text8Words.words,
        {
          y: 0,
          ease: "power2.out",
          duration: 1,
          stagger: 0.05,
        },
        "<"
      );

      tl.current.set(
        ".text-8",
        {
          opacity: 0,
        },
        ">"
      );
      tl.current.set(
        ".text-9",
        {
          opacity: 1,
        },
        "<"
      );

      tl.current.set(
        ".citation-container",
        {
          backgroundColor: "var(--color)",
        },
        "<"
      );

      tl.current.set(
        ".text-9-2",
        {
          opacity: 0,
        },
        "<"
      );

      tl.current.set(
        ".text-9-3",
        {
          opacity: 0,
        },
        "<"
      );

      tl.current.set(
        ".text-9-1",
        {
          opacity: 1,
          delay: 0.35,
        },
        "<"
      );

      tl.current.set(".text-9-2", {
        opacity: 1,
        delay: 0.35,
      });

      tl.current.set(".text-9-3", {
        opacity: 1,
        delay: 0.35,
      });

      tl.current.set(".text-9", {
        opacity: 0,
        delay: 0.35,
      });

      tl.current.set(
        ".text-10",
        {
          opacity: 1,
        },
        "<"
      );

      tl.current.set(
        ".text-10",
        {
          opacity: 0,
          delay: 0.5,
        },
        "<"
      );

      tl.current.set(
        ".citation-container",
        {
          backgroundColor: "var(--background)",
        },
        "<"
      );

      tl.current.set(
        ".text-11",
        {
          opacity: 1,
          scale: 1,
        },
        "<"
      );

      tl.current.to(
        ".text-11",
        {
          scale: 0.8,
          ease: "power4.in",
          duration: 0.4,
          force3D: true,
          delay: 1,
        },
        "<"
      );

      tl.current.set(
        ".text-11",
        {
          opacity: 0,
        },
        ">"
      );

      tl.current.set(".projects-container", {
        display: "flex",
      });
      tl.current.set(".project-thumbnail", {
        opacity: 1,
      });
      tl.current.set(
        ".project-thumbnail",
        {
          scale: 0,
          opacity: 1,
        },
        "<"
      );

      tl.current.to(
        ".project-thumbnail",
        {
          scale: 1,
          duration: 4,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.048,0.529 0.211,0.664 0.324,0.804 0.479,0.943 0.504,1 1,1 "
          ),
        },
        "<"
      );
      tl.current.to(
        ".project-thumbnail-1",
        {
          x: 600,
          y: -350,
          duration: 3.3,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.048,0.529 0.211,0.664 0.324,0.804 0.479,0.943 0.504,1 1,1 "
          ),
        },
        "<"
      );

      tl.current.to(
        ".project-thumbnail-2",
        {
          x: -250,
          y: 50,

          duration: 4,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.048,0.529 0.211,0.664 0.324,0.804 0.479,0.943 0.504,1 1,1 "
          ),
        },
        "<"
      );

      tl.current.to(
        ".project-thumbnail-3",
        {
          x: -500,
          y: -300,

          duration: 4,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.048,0.529 0.211,0.664 0.324,0.804 0.479,0.943 0.504,1 1,1 "
          ),
        },
        "<"
      );

      tl.current.to(
        ".project-thumbnail-4",
        {
          duration: 4,
          x: 500,
          y: 150,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.048,0.529 0.211,0.664 0.324,0.804 0.479,0.943 0.504,1 1,1 "
          ),
        },
        "<"
      );

      tl.current.set(
        ".citation-container",
        {
          backgroundColor: "transparent",
        },
        "<"
      );

      tl.current.set(
        ".load-h1",
        {
          fontWeight: 800,
          fontFamily: "font7",
        },
        "<"
      );

      tl.current.to(
        ".load-h1",
        {
          opacity: 1,
          delay: 1.3,
        },
        "<"
      );

      tl.current.to(
        ".load-h2-1",
        {
          opacity: 1,
        },
        "<"
      );

      tl.current.to(
        ".load-h2-2",
        {
          opacity: 1,
        },
        "<"
      );

      tl.current.to(
        ".load-name",
        {
          opacity: 1,
        },
        "<"
      );

      tl.current.to(
        ".load-info",
        {
          opacity: 1,
        },
        "<"
      );

      tl.current.to(
        ".lightmode-button",
        {
          opacity: 1,
        },
        "<"
      );

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
    });
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
        img1Ref={img1Ref}
        img2Ref={img2Ref}
        img3Ref={img3Ref}
        img4Ref={img4Ref}
        projects={projects}
      />
    </div>
  );
};

export default Animation;

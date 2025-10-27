"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LightModeToggle = () => {
  var [dark, setdark] = useState(true);
  var buttonRef = useRef();
  var iconRef = useRef();

  useGSAP(
    () => {
      function iconAnimationIn() {
        gsap.to(iconRef.current, {
          rotation: 90,
          duration: 0.6,
          ease: "power3.out",
          overwrite: true,
        });
      }
      function iconAnimationOut() {
        gsap.to(iconRef.current, {
          rotation: 0,
          duration: 0.5,
          ease: "power3.out",
          overwrite: true,
        });
      }

      buttonRef.current.addEventListener("mouseenter", iconAnimationIn);
      buttonRef.current.addEventListener("mouseleave", iconAnimationOut);
    },
    { dependencies: [] }
  );

  useEffect(
    function () {
      var root = document.documentElement;
      root.style.setProperty("--background", dark ? "#000000ff" : "#ffffffff");
      root.style.setProperty("--color", dark ? "#ffffffff" : "#000000ff");
    },
    [dark]
  );

  function onClick() {
    setdark(!dark);
  }

  return (
    <div className="flex-container-3">
      <button
        ref={buttonRef}
        type="button"
        className="lightmode-button button"
        onClick={onClick}
      >
        <span
          ref={iconRef}
          className="material-symbols-outlined lightmode-icon button"
        >
          {dark ? "light_mode" : "dark_mode"}
        </span>
      </button>
    </div>
  );
};

export default LightModeToggle;

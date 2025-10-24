"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
  useGSAP(() => {
    const cursorCircle = document.getElementById("cursorCircle");
    const cursorText = document.getElementById("cursorText");
    const cursorExplosion = document.getElementById("cursorExplosion");

    const cursorCircleX = gsap.quickTo(cursorCircle, "x", {
      duration: 0.65,
      ease: "power4",
    });
    const cursorCircleY = gsap.quickTo(cursorCircle, "y", {
      duration: 0.65,
      ease: "power4",
    });

    const cursorTextX = gsap.quickTo(cursorText, "x", {
      duration: 0.5,
      ease: "power4",
    });
    const cursorTextY = gsap.quickTo(cursorText, "y", {
      duration: 0.5,
      ease: "power4",
    });

    const cursorExplosionX = gsap.quickTo(cursorExplosion, "x", {
      duration: 0.5,
      ease: "power4",
    });
    const cursorExplosionY = gsap.quickTo(cursorExplosion, "y", {
      duration: 0.5,
      ease: "power4",
    });

    var onMove = (e) => {
      cursorCircleX(e.clientX);
      cursorCircleY(e.clientY);
      cursorTextX(e.clientX);
      cursorTextY(e.clientY);
      cursorExplosionX(e.clientX);
      cursorExplosionY(e.clientY);
    };

    window.addEventListener("mousemove", onMove);
  });

  return (
    <div className="cursor-container">
      <div className="cursor cursor-circle" id="cursorCircle"></div>
      <div className="cursor cursor-text" id="cursorText">
        CLICK
      </div>
      <div className="cursor-explosion" id="cursorExplosion"></div>
    </div>
  );
};

export default CustomCursor;

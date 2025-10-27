"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
  useGSAP(() => {
    const cursorCircle = document.getElementById("cursorContainer");
    const cursorText = document.getElementById("cursorText");

    const cursorCircleX = gsap.quickTo(cursorCircle, "x", {
      duration: 0.01,
      ease: "power4",
    });
    const cursorCircleY = gsap.quickTo(cursorCircle, "y", {
      duration: 0.01,
      ease: "power4",
    });

    const updateCursor = (isHovering) => {
      gsap.to(cursorCircle, {
        scale: isHovering ? 1.5 : 1,
        duration: 0.3,
      });
      gsap.to(cursorText, {
        opacity: isHovering ? 1 : 0,
        scale: isHovering ? 1 : 0,
        duration: 0.3,
      });
    };

    var onHover = (e) => {
      const target = e.target;
      if (target.tagName === "A" || target.classList.contains("button")) {
        updateCursor(true);
      }
    };

    const onHoverOut = (e) => {
      const target = e.target;
      if (target.tagName === "A" || target.classList.contains("button")) {
        updateCursor(false);
      }
    };

    document.addEventListener("mouseover", onHover);
    document.addEventListener("mouseout", onHoverOut);
    window.addEventListener("mousemove", (e) => {
      cursorCircleX(e.clientX);
      cursorCircleY(e.clientY);
    });
  }, []);

  return (
    <div className="cursor-container button" id="cursorContainer">
      <div className="cursor cursor-circle button" id="cursorCircle"></div>
      <div className="cursor cursor-text button" id="cursorText">
        CLICK
      </div>
    </div>
  );
};

export default CustomCursor;

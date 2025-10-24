"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";
import { CustomEase } from "gsap/CustomEase";
import { useRef, useState } from "react";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP, SplitText, GSDevTools, CustomEase);

const Header = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    window.addEventListener("click", () => tl.play());
  });

  return <div className="header-container"></div>;
};

export default Header;

"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import CustomCursor from "../../_components/CustomCursor.jsx";
import "./ClientPage.css";
import "../../_components/Fonts.css";
import "../../_components/CustomCursor.css";
import useLenis from "../../_hooks/useLenis.jsx";
import Link from "next/link";
gsap.registerPlugin(useGSAP, SplitText);

const ClientPage = ({ context, approach, category, title, id, slug }) => {
  useLenis();
  if (slug == 4) {
    return (
      <div className="projet-page">
        <CustomCursor />
        <Link href="/">
          <button className="close-button">
            <span className="material-symbols-outlined close-icon">close</span>
          </button>
        </Link>
        <h1 className="page-title">{title}</h1>
        <div className="page-year">2024</div>
        <video
          className="page-img"
          src={"/video/project_" + slug + ".mp4"}
          alt={"Video de " + { title }}
          autoPlay
          muted
          playsInline
          loop
        />
        <p className="page-context">
          <span className="page-sous-titre">Ma tâche</span> {context}
        </p>
        <p className="page-approach">
          <span className="page-sous-titre">Mon approche </span>
          {approach}
        </p>
        <div className="page-category-container">
          {category.map((category, i) => (
            <span className="page-category" key={i}>
              {category}
            </span>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="projet-page">
          <CustomCursor />

          <Link href="/">
            <button className="close-button">
              <span className="material-symbols-outlined close-icon">
                close
              </span>
            </button>
          </Link>
          <h1 className="page-title">{title}</h1>
          <div className="page-year">2024</div>
          <img
            className="page-img"
            src={"/img/project_" + slug + ".jpg"}
            alt={`Photo de ${title}`}
          />
          <p className="page-context">
            <span className="page-sous-titre">Ma tâche</span> {context}
          </p>
          <p className="page-approach">
            <span className="page-sous-titre">Mon approche </span>
            {approach}
          </p>
          <div className="page-category-container">
            {category.map((category, i) => (
              <span className="page-category" key={i}>
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default ClientPage;

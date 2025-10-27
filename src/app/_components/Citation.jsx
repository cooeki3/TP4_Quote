"use client";
import Link from "next/link";
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
  projects,
}) => {
  return (
    <div className="citation-container button">
      <div className="citation-wrap">
        <div className="text text-1" ref={text1Ref}>
          Ne
        </div>
        <div className="text-2-container">
          <div className="text text-2" ref={text2Ref}>
            craignez
          </div>
        </div>
        <div className="text text-3" ref={text3Ref}>
          pas
        </div>
        <div className="text text-4" ref={text4Ref}>
          la perfection
        </div>
        <div className="text text-5" ref={text5Ref}>
          vous ne l'atteindrez
        </div>
        <div className="text text-6" ref={text6Ref}>
          pas
        </div>
        <div className="text text-7" ref={text7Ref}>
          Mais dans cet écart impossible
        </div>
        <div className="text text-8" ref={text8Ref}>
          se trouve précisément
        </div>

        <div className="text-9-wrap">
          <div className="text-9 text-9-1" ref={text9Ref}>
            l'espace
          </div>
          <div className="text-9-container">
            <div className="text-9 text-9-2" ref={text9Ref}>
              où
            </div>
            <div className="text-9 text-9-3" ref={text9Ref}>
              la
            </div>
          </div>
        </div>
        <div className="text text-10" ref={text10Ref}>
          créativité
        </div>

        <div className="text text-11" ref={text11Ref}>
          se déploie
        </div>
        <div className="projects-container">
          {projects.map(({ title, id, slug }) => {
            return (
              <Link href={"/project/" + slug} key={id}>
                <div className="project-thumbnail-wrapper">
                  <div
                    className={"project-thumbnail project-thumbnail-" + slug}
                  >
                    <div className="thumbnail-img-container">
                      <img
                        className={"projects-img-" + slug}
                        src={"/img/project_" + slug + ".jpg"}
                        alt={"Photo de " + slug}
                      />
                    </div>
                    <div className="project-thumbnail-text">{title}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Citation;

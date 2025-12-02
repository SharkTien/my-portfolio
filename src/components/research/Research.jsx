import React from "react";
import "./research.css";

const researchList = [
  {
    id: 1,
    title: "SHREC 2025: Retrieval of Optimal Objects for Multi-modal Enhanced Language and Spatial Assistance (ROOMELSA)",
    venue: "Published, Journal of Visual Communication and Image Representation ",
    year: "2024",
    link: "https://www.sciencedirect.com/science/article/pii/S0097849325002419",
  },
  {
    id: 2,
    title: "Adaptive Agent-Guided Dynamic Programming for Multi-Event Video Retrieval",
    authors: "",
    venue: "SoICT Workshop 2025 - Nha Trang, Vietnam",
    year: "2025",
    link: "",
  },
];

const Research = () => {
  return (
    <section className="research section" id="research">
      <h2 className="section__title">Research</h2>
      <span className="section__subtitle">
        My research interests
      </span>

      <div className="research__container container">
        {researchList.length === 0 ? (
          <p className="research__empty">
            Updating research interests...
          </p>
        ) : (
          <ul className="research__list">
            {researchList.map((paper) => (
              <li key={paper.id} className="research__item">
                <div className="research__top">
                  <div className="research__main">
                    {paper.link ? (
                      <a
                        href={paper.link}
                        className="research__title-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {paper.title}
                        <i className="uil uil-external-link-alt research__title-icon"></i>
                      </a>
                    ) : (
                      <h3 className="research__title">{paper.title}</h3>
                    )}
                    <p className="research__meta">
                      <span className="research__authors">{paper.authors}</span>
                      {" · "}
                      <span className="research__venue">{paper.venue}</span>
                    </p>
                  </div>
                  {paper.year && (
                    <span className="research__year-badge">{paper.year}</span>
                  )}
                </div>

                {paper.link && (
                  <a
                    href={paper.link}
                    className="research__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View paper
                    <i className="uil uil-arrow-up-right research__link-icon"></i>
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Research;



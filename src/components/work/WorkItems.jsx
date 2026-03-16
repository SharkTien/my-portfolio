import React, { useState } from "react";

const WorkItems = ({ item }) => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const descriptionWords = item.description ? item.description.split(" ") : [];
    const isLongDescription = descriptionWords.length > 30;
    const shortDescription = isLongDescription ? descriptionWords.slice(0, 30).join(" ") + "..." : item.description;

    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            {item.description && (
                <div className="work__description-container">
                    <p className="work__description-short">{shortDescription}</p>
                    {isLongDescription && (
                        <span className="work__read-more" onClick={() => toggleTab(1)}>
                            Read more <i className="bx bx-right-arrow-alt" />
                        </span>
                    )}
                </div>
            )}
            {item.techstack && (
                <div className="work__techstack">
                    <span className="work__techstack-label">Techstack:</span> {item.techstack}
                </div>
            )}
            <div className="work__buttons-container">
                <a href={item.link} target="_blank" rel="noreferrer" className="work__button">
                    Link <i className="bx bx-right-arrow-alt work__button-icon" />
                </a>
                {item.github && (
                    <a href={item.github} target="_blank" rel="noreferrer" className="work__button">
                        Github <i className="bx bxl-github work__button-icon" />
                    </a>
                )}
            </div>

            {isLongDescription && (
                <div className={toggleState === 1 ? "work__modal active-modal" : "work__modal"}>
                    <div className="work__modal-content">
                        <i className="bx bx-x work__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="work__modal-title">{item.title}</h3>
                        <p className="work__modal-description">{item.description}</p>
                        {item.techstack && (
                            <p className="work__modal-techstack">
                                <span className="work__techstack-label">Techstack:</span> {item.techstack}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default WorkItems;
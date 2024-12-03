import React from "react";

const WorkItems = ({item}) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt="" className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <a href={item.link} target="_blank" rel="noreferrer" className="work__button">
                Link <i className="bx bx-right-arrow-alt work__button-icon" />
            </a>
        </div>
    )
}

export default WorkItems
import React, { useState, useEffect } from "react";
import "./work.css";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Work = () => {
    const [item, setItem] = useState({name:'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);
    const [showAll, setShowAll] = useState(false);
    const ITEMS_PER_PAGE = 6;

    useEffect(() => {
        if (item.name === "all") {
            // Sort projects in descending order by id
            const sortedProjects = [...projectsData].sort((a, b) => b.id - a.id);
            setProjects(sortedProjects);
        }
        else {
            const newProjects = projectsData
                .filter((project) => {
                    return project.category.map(category => category.toLowerCase()).includes(item.name.toLowerCase());
                })
                .sort((a, b) => b.id - a.id); // Sort filtered projects in descending order
            setProjects(newProjects)
        }
        setShowAll(false);
    }, [item]);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent.toLowerCase()});
        setActive(index);
    }

    const displayedProjects = showAll ? projects : projects.slice(0, ITEMS_PER_PAGE);
    const hasMoreProjects = projects.length > ITEMS_PER_PAGE;

    return (
        <div>
            <section className="work section" id="work">
                <h2 className="section__title">Work</h2>
                <span className="section__subtitle">My experiences</span>

                <div className="work__filters">
                    {projectsNav.map((item, index) => {
                        return <span onClick={(e) => {
                            handleClick(e, index);
                        }} className={`work__item ${active === index ? "active-work" : ""}`} key={index}>{item.name}</span>
                    })}
                </div>
                <div className="work__container container grid">
                    {displayedProjects.map((item) => {
                        return <WorkItems item={item} key={item.id} />
                    })}
                </div>
                {hasMoreProjects && !showAll && (
                    <div className="work__fade-container">
                        <div className="work__fade"></div>
                        <button 
                            className="button button--flex work__more-btn"
                            onClick={() => setShowAll(true)}
                        >
                            View More
                            <i className="uil uil-arrow-right button__icon"></i>
                        </button>
                    </div>
                )}
            </section>
        </div>
    )
}

export default Work  
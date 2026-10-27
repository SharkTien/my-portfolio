import React, { useState, useMemo, useEffect } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import "./work.css";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import { Division } from "../credential/Sections";

// Two columns: an even page, plus the featured entry that spans both when showing all.
const ITEMS_PER_PAGE = 6;
const STATE_KEY = "work-view";

// The filter and "view more" survive a round trip to a project overview.
const readSavedView = () => {
    try {
        return JSON.parse(sessionStorage.getItem(STATE_KEY)) ?? { filter: "all", showAll: false };
    } catch {
        return { filter: "all", showAll: false };
    }
};

const Work = () => {
    const [view, setView] = useState(readSavedView);
    const { filter, showAll } = view;

    useEffect(() => {
        try {
            sessionStorage.setItem(STATE_KEY, JSON.stringify(view));
        } catch {
            /* storage unavailable */
        }
    }, [view]);

    // The hero's audience doors switch the register to their filter.
    useEffect(() => {
        const onFilter = (e) => setView({ filter: e.detail, showAll: false });
        window.addEventListener("work-filter", onFilter);
        return () => window.removeEventListener("work-filter", onFilter);
    }, []);

    const projects = useMemo(() => {
        const sorted = [...projectsData].sort((a, b) => b.id - a.id);
        if (filter === "all") return sorted;
        return sorted.filter((project) =>
            project.category.map((category) => category.toLowerCase()).includes(filter.toLowerCase())
        );
    }, [filter]);

    const pageSize = ITEMS_PER_PAGE + (filter === "all" ? 1 : 0);
    const displayedProjects = showAll ? projects : projects.slice(0, pageSize);
    const hasMoreProjects = projects.length > pageSize;

    return (
        <div>
            <section className="work section container" id="work">
                <Division title="Work" note="Register of works. Each seal opens the entry's overview." />

                <LayoutGroup id="work-filters">
                    <div className="work__filters" role="tablist" aria-label="Filter projects">
                        {projectsNav.map((nav) => {
                            const isActive = filter === nav.name;
                            return (
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    onClick={() => setView({ filter: nav.name, showAll: false })}
                                    className={`work__item ${isActive ? "active-work" : ""}`}
                                    key={nav.name}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="work-filter-pill"
                                            className="work__item-pill"
                                            transition={{ type: "spring", stiffness: 420, damping: 36 }}
                                        />
                                    )}
                                    <span className="work__item-text">{nav.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </LayoutGroup>

                <motion.div layout className="work__register">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {displayedProjects.map((item, index) => (
                            <WorkItems item={item} key={item.id} featured={index === 0 && filter === "all"} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {hasMoreProjects && !showAll && (
                    <div className="work__fade-container">
                        <div className="work__fade"></div>
                        <button
                            className="button button--flex work__more-btn"
                            onClick={() => setView({ filter, showAll: true })}
                        >
                            View {projects.length - pageSize} more
                            <i className="uil uil-arrow-down button__icon"></i>
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Work;

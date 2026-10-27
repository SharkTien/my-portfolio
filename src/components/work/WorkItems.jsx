import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getProjectSlug, splitProjectTitle } from "./Data";
import { withViewTransition, coverTransitionName, rememberWorkScroll } from "../../utils/viewTransition";
import Seal from "../credential/Seal";

// One entry in the register of works: serial in the margin, a thumbnail plate,
// the particulars, and a seal that stamps on arrival and opens the overview.
// forwardRef: AnimatePresence "popLayout" measures each entry through a ref.
const WorkItems = React.forwardRef(({ item, featured = false }, ref) => {
    const navigate = useNavigate();
    const { label, name } = splitProjectTitle(item.title);
    const slug = getProjectSlug(item);
    const stack = item.techstack ? item.techstack.split(",").map((s) => s.trim()).slice(0, 5) : [];
    const serial = String(item.id).padStart(3, "0");

    const openOverview = (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        rememberWorkScroll();
        withViewTransition(() => {
            navigate(`/project/${slug}`);
            window.scrollTo({ top: 0, behavior: "instant" });
        });
    };

    return (
        <motion.article
            ref={ref}
            layout
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`entry${featured ? " entry--featured" : ""}`}
        >
            <div className="entry__margin">
                <span className="entry__serial mono">No. {serial}</span>
                {label && <span className="entry__label field-label">{label}</span>}
            </div>

            <div className="entry__plate" style={{ viewTransitionName: coverTransitionName(item) }}>
                <img src={item.image} alt="" loading="lazy" />
            </div>

            <div className="entry__body">
                <h3 className="entry__title">
                    <a href={`#/project/${slug}`} onClick={openOverview} className="entry__title-link">
                        {name}
                    </a>
                </h3>
                {item.description && <p className="entry__desc">{item.description}</p>}
                {stack.length > 0 && <p className="entry__stack mono">{stack.join(" · ")}</p>}
                <div className="entry__links">
                    {item.link && (
                        <a href={item.link} target="_blank" rel="noreferrer" className="entry__link">
                            <i className="bx bx-link-external" aria-hidden="true" /> Open
                        </a>
                    )}
                    {item.github && (
                        <a href={item.github} target="_blank" rel="noreferrer" className="entry__link">
                            <i className="bx bxl-github" aria-hidden="true" /> GitHub
                        </a>
                    )}
                </div>
            </div>

            <a href={`#/project/${slug}`} onClick={openOverview} className="entry__seal" aria-label={`Read the overview of ${name}`}>
                <Seal ring={`NO ${serial} · ${(label || "WORK").toUpperCase()} · OVERVIEW`} center="OPEN" sub={serial} size={86} tilt={-10} />
            </a>
        </motion.article>
    );
});

WorkItems.displayName = "WorkItems";

export default WorkItems;

import React, { useLayoutEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { projectsData, getProjectSlug, splitProjectTitle } from "../components/work/Data";
import { withViewTransition, coverTransitionName, recallWorkScroll } from "../utils/viewTransition";
import { LessonAssembly, CountUp, BlockTicker, ChapterClip, StepFlow, BentoGallery } from "./overview/Blocks";
import Pipeline from "./overview/Pipeline";
import "./projectOverview.css";

const ease = [0.16, 1, 0.3, 1];
const orderedProjects = [...projectsData].sort((a, b) => b.id - a.id);

// Each word rises out of its own mask; the authored entrance of the page.
const MaskedTitle = ({ text }) => {
    const reduceMotion = useReducedMotion();
    return (
        <h1 className="project__title" aria-label={text}>
            {text.split(" ").map((word, i) => (
                <span className="project__title-mask" key={`${word}-${i}`} aria-hidden="true">
                    <motion.span
                        className="project__title-word"
                        initial={reduceMotion ? { opacity: 0 } : { y: "110%" }}
                        animate={reduceMotion ? { opacity: 1 } : { y: "0%" }}
                        transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.06 }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </h1>
    );
};

const Rise = ({ children, delay = 0, className, as = "div" }) => {
    const reduceMotion = useReducedMotion();
    const Tag = motion[as];
    return (
        <Tag
            className={className}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.7, ease, delay }}
        >
            {children}
        </Tag>
    );
};

// Activity types the builder offers, shown as a moving shelf of blocks.
const TICKER_ROWS = [
    [
        { label: "Multiple choice", icon: "uil-list-ui-alt", tone: "orange" },
        { label: "True / False", icon: "uil-toggle-on", tone: "blue" },
        { label: "Link & Match", icon: "uil-link-alt", tone: "green" },
        { label: "Fill in the blank", icon: "uil-edit-alt", tone: "violet" },
        { label: "Smart sorting", icon: "uil-sort-amount-down", tone: "orange" },
        { label: "Open question", icon: "uil-comment-question", tone: "blue" },
    ],
    [
        { label: "Picture labelling", icon: "uil-image-edit", tone: "violet" },
        { label: "Hotspot", icon: "uil-crosshair", tone: "green" },
        { label: "Timeline checkpoint", icon: "uil-clock-three", tone: "orange" },
        { label: "Flashcards", icon: "uil-layers", tone: "blue" },
        { label: "Reflection", icon: "uil-lightbulb-alt", tone: "violet" },
        { label: "Worksheet export", icon: "uil-file-download-alt", tone: "green" },
    ],
];

const ProjectOverview = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.3 });

    const index = orderedProjects.findIndex((p) => getProjectSlug(p) === slug);
    const project = orderedProjects[index];

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [slug]);

    if (!project) {
        return (
            <main className="project project--missing">
                <h1 className="project__h2">This project could not be found.</h1>
                <Link to="/work" className="project__back">
                    <i className="uil uil-arrow-left" /> Back to all work
                </Link>
            </main>
        );
    }

    const next = orderedProjects[(index + 1) % orderedProjects.length];
    const { label, name } = splitProjectTitle(project.title);
    const nextName = splitProjectTitle(next.title).name;
    const overview = project.overview ?? {};
    const stack = project.techstack ? project.techstack.split(",").map((s) => s.trim()) : [];
    // Label and categories overlap ("AI" vs "AI"); keep the first spelling of each, capitalised.
    const categories = [label, ...project.category]
        .filter(Boolean)
        .filter((c, i, all) => all.findIndex((o) => o.toLowerCase() === c.toLowerCase()) === i)
        .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
        .join(" · ");

    const goBack = (e) => {
        e.preventDefault();
        withViewTransition(() => {
            navigate("/work", { state: { fromProject: true, restoreScroll: recallWorkScroll() } });
        });
    };

    const goNext = (e) => {
        e.preventDefault();
        withViewTransition(() => {
            navigate(`/project/${getProjectSlug(next)}`);
            window.scrollTo({ top: 0, behavior: "instant" });
        });
    };

    return (
        <main className="project" key={slug}>
            <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />

            <nav className="project__bar">
                <a href="#/work" onClick={goBack} className="project__back">
                    <i className="uil uil-arrow-left" /> All work
                </a>
                <span className="project__bar-name">{name}</span>
                <a href={`#/project/${getProjectSlug(next)}`} onClick={goNext} className="project__back">
                    Next <i className="uil uil-arrow-right" />
                </a>
            </nav>

            <header className="project__hero">
                <div className="project__hero-text">
                    <MaskedTitle text={name} />
                    <motion.p
                        className="project__tagline"
                        initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease, delay: 0.45 }}
                    >
                        {overview.tagline ?? project.description}
                    </motion.p>

                    <motion.dl
                        className="project__meta"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease, delay: 0.6 }}
                    >
                        {overview.role && (
                            <div>
                                <dt>Role</dt>
                                <dd>{overview.role}</dd>
                            </div>
                        )}
                        {overview.year && (
                            <div>
                                <dt>Year</dt>
                                <dd>{overview.year}</dd>
                            </div>
                        )}
                        <div>
                            <dt>Type</dt>
                            <dd>{categories}</dd>
                        </div>
                    </motion.dl>

                    {(project.link || project.github) && (
                        <motion.div
                            className="project__actions"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, ease, delay: 0.7 }}
                        >
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noreferrer" className="project__action project__action--primary">
                                    Open project <i className="uil uil-arrow-up-right" />
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noreferrer" className="project__action">
                                    <i className="bx bxl-github" /> Source code
                                </a>
                            )}
                        </motion.div>
                    )}
                </div>

                {overview.assembly ? (
                    <LessonAssembly assembly={overview.assembly} style={{ viewTransitionName: coverTransitionName(project) }} />
                ) : (
                    <figure className="project__cover" style={{ viewTransitionName: coverTransitionName(project) }}>
                        <img src={project.image} alt={`${name} preview`} />
                    </figure>
                )}
            </header>

            {overview.problem ? (
                <section className="project__idea">
                    <Rise>
                        <h2 className="project__h2">The problem</h2>
                        <p className="project__prose">{overview.problem}</p>
                    </Rise>
                    <Rise delay={0.1}>
                        <h2 className="project__h2">The idea</h2>
                        <p className="project__prose">{overview.idea}</p>
                    </Rise>
                </section>
            ) : (
                <section className="project__idea project__idea--single">
                    <Rise>
                        <h2 className="project__h2">About the project</h2>
                        <p className="project__prose">{project.description}</p>
                    </Rise>
                </section>
            )}

            {overview.facts && (
                <section className="project__facts" aria-label="At a glance">
                    {overview.facts.map((fact, i) => (
                        <Rise className="project__fact" key={fact.label} delay={i * 0.06}>
                            <span className="project__fact-value"><CountUp value={fact.value} /></span>
                            <span className="project__fact-label">{fact.label}</span>
                        </Rise>
                    ))}
                </section>
            )}

            {overview.assembly && <BlockTicker rows={TICKER_ROWS} />}

            {overview.pipeline && (
                <section className="chapter" data-tone="green">
                    <div className="chapter__head">
                        <Rise>
                            <h2 className="chapter__title">
                                <em>Pipeline</em> end to end
                            </h2>
                        </Rise>
                        <Rise delay={0.1}>
                            <p className="project__lead">{overview.pipeline.caption}</p>
                        </Rise>
                    </div>
                    <Pipeline pipeline={{ ...overview.pipeline, caption: null }} />
                </section>
            )}

            {overview.flows?.map((flow, i) => {
                const [first, ...rest] = flow.name.split(" ");
                return (
                    <section className="chapter" data-tone={flow.tone} key={flow.name}>
                        <div className="chapter__head">
                            <Rise>
                                <h2 className="chapter__title">
                                    <em>{first}</em> {rest.join(" ")}
                                </h2>
                            </Rise>
                            <Rise delay={0.1}>
                                <p className="project__lead">{flow.summary}</p>
                            </Rise>
                        </div>
                        {flow.clip && <ChapterClip flow={flow} />}
                        <StepFlow flow={flow} key={`steps-${i}`} />
                    </section>
                );
            })}

            {overview.highlights && (
                <section className="project__decisions">
                    <Rise>
                        <h2 className="project__h2">Engineering decisions</h2>
                    </Rise>
                    <div className="project__decision-list">
                        {overview.highlights.map((item, i) => (
                            <Rise className="project__decision" key={item.title} delay={(i % 2) * 0.08}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </Rise>
                        ))}
                    </div>
                </section>
            )}

            {overview.gallery && (
                <section className="project__gallery-wrap">
                    <Rise>
                        <h2 className="project__h2">In the product</h2>
                    </Rise>
                    {overview.gallery.some((shot) => shot.size) ? (
                        <BentoGallery items={overview.gallery} />
                    ) : (
                        <div className="project__gallery" tabIndex={0} aria-label="Screenshots, scroll sideways">
                            {overview.gallery.map((shot) => (
                                <figure className="project__shot" key={shot.caption}>
                                    <img src={shot.image} alt={shot.caption} loading="lazy" />
                                    <figcaption>{shot.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    )}
                </section>
            )}

            {stack.length > 0 && (
                <section className="project__stack">
                    <Rise>
                        <h2 className="project__h2">Built with</h2>
                    </Rise>
                    <ul className="project__chips">
                        {stack.map((tech, i) => (
                            <motion.li
                                key={tech}
                                className="project__chip"
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, ease, delay: Math.min(i * 0.04, 0.4) }}
                            >
                                {tech}
                            </motion.li>
                        ))}
                    </ul>
                </section>
            )}

            <a href={`#/project/${getProjectSlug(next)}`} onClick={goNext} className="project__next">
                <span className="project__next-text">
                    <span className="project__next-hint">Next project</span>
                    <span className="project__next-name">{nextName}</span>
                </span>
                <span className="project__next-thumb">
                    <img src={next.image} alt="" loading="lazy" />
                </span>
                <i className="uil uil-arrow-right project__next-arrow" />
            </a>
        </main>
    );
};

export default ProjectOverview;

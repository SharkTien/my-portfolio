import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import aboutImg from "../../assets/about-face.jpg";
import { educationData, experienceData } from "../qualification/qualification";
import { certificatesData } from "../certificates/Certificates";
import { researchList } from "../research/Research";
import Seal from "./Seal";
import Mrz from "./Mrz";
import nvidiaLogo from "../../assets/logos/nvidia.jpg";

const ease = [0.16, 1, 0.3, 1];

/* A document division: title, note, and the microtext rule ruling in underneath. */
export const Division = ({ title, note, id }) => {
    const reduceMotion = useReducedMotion();
    return (
        <header className="division" id={id}>
            <motion.h2
                className="section__title"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 -10% 0)" }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.8, ease }}
            >
                {title}
            </motion.h2>
            {note && <p className="section__subtitle">{note}</p>}
            <motion.span
                className="microrule division__rule"
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease }}
            >
                {"HUYNHVIETTIEN·FELIK·AIENGINEER·".repeat(12)}
            </motion.span>
        </header>
    );
};

/*=============== HOLDER: ABOUT + SKILLS ===============*/

const HARD_SKILLS = [
    { name: "AI & Data", source: null, items: ["Machine Learning Fundamentals", "PyTorch", "Hugging Face", "MLLM Fine-tuning (LoRA)", "Computer Vision (OCR, Object Detection)", "NLP", "Joint Embeddings", "Vector Databases (Milvus, Faiss)", "MLOps (MLflow)", "RAG & Agentic AI (LangGraph)", "Data Analytics"] },
    { name: "Engineering & Systems", source: null, items: ["Python (Pandas, Scikit-learn)", "SQL", "Git", "C#", "Node.js", ".NET", "React", "FastAPI", "REST APIs", "Docker", "Nginx", "Linux"] },
    { name: "LLM Product Engineering", source: "Wistudi", items: ["TypeScript", "Fastify", "Gemini API & Files API", "Multimodal prompting (video, vision)", "Structured output & schema validation (Zod)", "Self-repair loops", "Tool calling & intent/slot agents", "Grounding & citation checks", "NDJSON streaming", "Model fallback, rate limiting & key pools"] },
    { name: "Enterprise AI Agents", source: "NTC AI", items: ["MCP tool-calling", "Hybrid retrieval (dense + BM25)", "LLM/VLM integration", "NVIDIA NeMo Evaluator", "NVIDIA VSS Blueprint", "PostgreSQL & pgvector", "MinIO", "Redis"] },
    { name: "Robot Learning", source: "NTC Physics Studio", items: ["Reinforcement learning (PPO, RSL-RL)", "NVIDIA Isaac Lab", "ONNX export", "ROS 2", "MuJoCo sim2sim"] },
    { name: "Accelerated Data Science", source: "NVIDIA NCA-ADS", items: ["RAPIDS", "cuDF", "cuML", "cuGraph", "CuPy", "Dask", "GPU-accelerated ETL & ML"] },
    { name: "AI Solutions & Infrastructure", source: "NVIDIA AI Advisor (AI Ignite)", items: ["AI solution advisory", "NVIDIA AI Enterprise", "NVIDIA AI Blueprints", "DGX systems", "AI factory reference architectures", "InfiniBand & Spectrum networking", "GPU inference"] },
];

const SOFT_SKILLS = ["Communication", "English", "UI UX", "Leadership"];

export const Holder = () => (
    <section className="section container holder" id="about">
        <Division title="About the holder" note="Particulars of the holder: where he studies, what he has shipped, how he works." />
        <div className="holder__grid">
            <figure className="holder__photo">
                <img src={aboutImg} alt="Huynh Viet Tien" loading="lazy" />
                <figcaption className="field-label">Additional photograph</figcaption>
            </figure>

            <div className="holder__data">
                <dl className="holder__facts">
                    <div>
                        <dt className="field-label">Education</dt>
                        <dd>HCMUIT - AI</dd>
                    </div>
                    <div>
                        <dt className="field-label">Completed</dt>
                        <dd>20+ Projects</dd>
                    </div>
                    <div>
                        <dt className="field-label">GPA</dt>
                        <dd className="mono">3.5/4.0</dd>
                    </div>
                </dl>

                {/* Skills sit beside the photograph, so the column carries the holder's competencies. */}
                <div className="skills" id="skills">
                    <h3 className="skills__title">Endorsed competencies</h3>
                    <div className="skills__tables">
                        <table className="ledger">
                            <caption className="field-label">Hard skills</caption>
                            <tbody>
                                {HARD_SKILLS.map((s) => (
                                    <tr key={s.name}>
                                        <th scope="row">
                                            {s.name}
                                            {s.source && <span className="ledger__source mono">from {s.source}</span>}
                                        </th>
                                        <td>
                                            <ul className="ledger__chips">
                                                {s.items.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <table className="ledger">
                            <caption className="field-label">Soft skills</caption>
                            <tbody>
                                {SOFT_SKILLS.map((s) => (
                                    <tr key={s}>
                                        <th scope="row">{s}</th>
                                        <td className="mono">Intermediate</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

/*=============== REGISTER: EDUCATION & EXPERIENCE ===============*/
// A date as a sortable month count. Handles "8/2026", "23/3/2023", a bare "2025"
// (treated as mid-year) and "Present" (this month).
const monthKey = (text) => {
    const t = String(text).trim();
    if (/present/i.test(t)) {
        const d = new Date();
        return d.getFullYear() * 12 + d.getMonth();
    }
    const m = t.match(/(\d{1,2})\/(\d{4})$/);
    if (m) return Number(m[2]) * 12 + Number(m[1]) - 1;
    const y = t.match(/(\d{4})/);
    return y ? Number(y[1]) * 12 + 5 : 0;
};

// Newest first: by when an entry ended, then by when it started.
const endOf = (date) => monthKey(String(date).split(" - ").pop());
const startOf = (date) => monthKey(String(date).split(" - ")[0]);

export const Register = () => {
    const [kind, setKind] = useState("all");
    const [showHighSchool, setShowHighSchool] = useState(false);

    const rows = useMemo(() => {
        const all = [
            ...educationData.map((r) => ({ ...r, kind: "Education" })),
            ...experienceData.map((r) => ({ ...r, kind: "Experience" })),
        ]
            .filter((r) => showHighSchool || !r.isHighSchool)
            .filter((r) => kind === "all" || r.kind === kind)
            .sort((a, b) => endOf(b.date) - endOf(a.date) || startOf(b.date) - startOf(a.date));
        return all;
    }, [kind, showHighSchool]);

    return (
        <section className="section container register" id="portfolio">
            <Division title="Education & Experience" note="The holder's register, newest first. Awards carry a seal." />

            <div className="register__controls">
                <div className="tabs" role="tablist" aria-label="Filter entries">
                    {["all", "Education", "Experience"].map((k) => (
                        <button
                            key={k}
                            role="tab"
                            aria-selected={kind === k}
                            className={`tabs__tab ${kind === k ? "is-active" : ""}`}
                            onClick={() => setKind(k)}
                        >
                            {k === "all" ? "All entries" : k}
                        </button>
                    ))}
                </div>
                <label className="check">
                    <input type="checkbox" checked={showHighSchool} onChange={() => setShowHighSchool(!showHighSchool)} />
                    <span className="check__box" aria-hidden="true" />
                    Show High School achievements
                </label>
            </div>

            <ol className="register__list">
                <AnimatePresence initial={false}>
                    {rows.map((r, i) => (
                        <motion.li
                            layout
                            key={`${r.kind}-${r.title}-${r.subtitle}`}
                            className="register__row"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, transition: { duration: 0.15 } }}
                            transition={{ duration: 0.45, ease, delay: Math.min(i * 0.03, 0.3) }}
                        >
                            <span className="register__date mono">{r.date}</span>
                            <div className="register__entry">
                                <h3 className="register__title">
                                    {r.logo && <img className="register__logo" src={r.logo} alt="" />}
                                    {r.title}
                                    {/present/i.test(r.date) && <span className="register__now">Current</span>}
                                </h3>
                                {r.link ? (
                                    <a href={r.link} target="_blank" rel="noreferrer" className="register__issuer is-link">
                                        {r.subtitle} <i className="uil uil-arrow-up-right" aria-hidden="true" />
                                    </a>
                                ) : (
                                    <span className="register__issuer">{r.subtitle}</span>
                                )}
                                {r.projects && (
                                    <ul className="register__projects">
                                        {r.projects.map((p) => (
                                            <li key={p.name}>{p.href ? <a href={p.href}>{p.name}</a> : p.name}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <span className="register__kind">
                                {/^(top|bronze|\d|first-year|2nd|3rd)/i.test(r.title) ? (
                                    <Seal ring="AWARD · HUYNH VIET TIEN" center="AWARD" sub={String(r.date).match(/\d{4}/)?.[0]} size={64} tilt={-8} />
                                ) : (
                                    <span className="field-label">{r.kind}</span>
                                )}
                            </span>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ol>
        </section>
    );
};

/*=============== EVIDENCE: CERTIFICATES AS STAMPS ===============*/
// One perforated stamp per certificate.
const Stamp = ({ c, i, reduceMotion }) => (
    <motion.li
        className="stamp"
        style={{ "--tilt": `${((i * 37) % 7) - 3}deg` }}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.25, y: -20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ type: "spring", stiffness: 380, damping: 24, delay: (i % 4) * 0.07 }}
    >
        <a href={c.link} target="_blank" rel="noreferrer" className="stamp__link">
            <span className="stamp__inner">
                <span className="stamp__img">
                    <img src={c.image} alt="" loading="lazy" />
                </span>
                <span className="stamp__title">{c.title}</span>
                <span className="stamp__issuer">
                    {c.logo && <img src={c.logo} alt="" className="stamp__logo" />}
                    {c.issuer}
                </span>
                <span className="stamp__date mono">{c.date}</span>
            </span>
            <i className="uil uil-external-link-alt stamp__open" aria-hidden="true" />
        </a>
    </motion.li>
);

// The two headline certifications, shown large and overlapping. Hovering or focusing
// one brings it to the front; each slides in from its own side.
const FeaturedPair = ({ certs, reduceMotion }) => {
    const [front, setFront] = useState(0);
    return (
        <div className="feature-pair">
            {certs.slice(0, 2).map((c, i) => (
                <motion.a
                    key={c.id}
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`feature-cert feature-cert--${i} ${front === i ? "is-front" : ""}`}
                    onMouseEnter={() => setFront(i)}
                    onFocus={() => setFront(i)}
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: i === 0 ? -120 : 120, rotate: i === 0 ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0, rotate: i === 0 ? -3 : 4 }}
                    viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                    transition={{ type: "spring", stiffness: 140, damping: 20, delay: i * 0.15 }}
                >
                    <img src={c.image} alt={c.title} />
                    <span className="feature-cert__caption">
                        <span className="feature-cert__title">{c.title}</span>
                        <span className="feature-cert__date mono">
                            {c.date} <i className="uil uil-external-link-alt" aria-hidden="true" />
                        </span>
                    </span>
                </motion.a>
            ))}
        </div>
    );
};

const isNvidia = (c) => /nvidia/i.test(`${c.issuer} ${c.title}`);

// NVIDIA certifications get their own drawer: a folder in NVIDIA green that slides
// open, separate from the general inventory.
export const Evidence = () => {
    const reduceMotion = useReducedMotion();
    const nvidia = certificatesData.filter(isNvidia);
    const others = certificatesData.filter((c) => !isNvidia(c));
    const [drawer, setDrawer] = useState(nvidia.length ? "nvidia" : "all");
    const featured = nvidia.filter((c) => c.featured);
    const shown = drawer === "nvidia" ? nvidia.filter((c) => !c.featured) : others;

    return (
        <section className="section container evidence" id="certificates">
            <Division title="Certificates" note="Certificates inventory: each stamp opens its proof." />

            <div className="drawers" role="tablist" aria-label="Certificate drawers">
                {nvidia.length > 0 && (
                    <button
                        type="button"
                        role="tab"
                        aria-selected={drawer === "nvidia"}
                        className={`drawer-tab drawer-tab--nvidia ${drawer === "nvidia" ? "is-open" : ""}`}
                        onClick={() => setDrawer("nvidia")}
                    >
                        <img src={nvidiaLogo} alt="" className="drawer-tab__logo" />
                        <span className="drawer-tab__name">NVIDIA</span>
                        <span className="drawer-tab__count mono">{nvidia.length}</span>
                    </button>
                )}
                <button
                    type="button"
                    role="tab"
                    aria-selected={drawer === "all"}
                    className={`drawer-tab ${drawer === "all" ? "is-open" : ""}`}
                    onClick={() => setDrawer("all")}
                >
                    <i className="uil uil-folder-open drawer-tab__icon" aria-hidden="true" />
                    <span className="drawer-tab__name">Other certificates</span>
                    <span className="drawer-tab__count mono">{others.length}</span>
                </button>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={drawer}
                    className={`drawer ${drawer === "nvidia" ? "drawer--nvidia" : ""}`}
                    role="tabpanel"
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0 round 1.2rem)" }}
                    animate={reduceMotion ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 0% 0 round 1.2rem)" }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.6, ease }}
                >
                    {drawer === "nvidia" && (
                        <p className="drawer__intro">
                            Courses and certifications issued by NVIDIA and the NVIDIA Deep Learning Institute.
                        </p>
                    )}
                    {drawer === "nvidia" && featured.length > 0 && <FeaturedPair certs={featured} reduceMotion={reduceMotion} />}
                    <ul className="evidence__sheet">
                        {shown.map((c, i) => (
                            <Stamp key={c.id} c={c} i={i} reduceMotion={reduceMotion} />
                        ))}
                    </ul>
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

/*=============== ANNEX: RESEARCH ===============*/
export const Annex = () => (
    <section className="section container annex" id="research">
        <Division title="Research" note="Research annexes attached to this credential." />
        {researchList.length === 0 ? (
            <p className="annex__empty">Updating research interests...</p>
        ) : (
            <ol className="annex__list">
                {researchList.map((paper, i) => (
                    <li key={paper.id} className="annex__item">
                        <span className="annex__no mono">Annex {String.fromCharCode(65 + i)}</span>
                        <div className="annex__body">
                            <h3 className="annex__title">{paper.title}</h3>
                            <p className="annex__venue">
                                {paper.authors && <span>{paper.authors} · </span>}
                                {paper.venue}
                            </p>
                            {paper.link && (
                                <a href={paper.link} target="_blank" rel="noreferrer" className="annex__link">
                                    View paper <i className="uil uil-arrow-up-right" aria-hidden="true" />
                                </a>
                            )}
                        </div>
                        <div className="annex__mark">
                            <span className="annex__year mono">{paper.year}</span>
                            {paper.venue.toLowerCase().includes("published") ? (
                                <Seal ring="PEER REVIEWED · JOURNAL" center="PUBLISHED" size={92} tilt={-12} />
                            ) : (
                                <Seal ring={`${paper.venue.split(" - ")[0].toUpperCase()} · `} center="WORKSHOP" sub={paper.year} size={92} tilt={9} />
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        )}
    </section>
);

/*=============== CONTACT / FOOTER ===============*/
const CONTACTS = [
    { label: "Email", value: "business.tienhv@gmail.com", href: "mailto:business.tienhv@gmail.com", icon: "uil-envelope" },
    { label: "GitHub", value: "github.com/SharkTien", href: "https://github.com/SharkTien", icon: "uil-github-alt" },
    { label: "Facebook", value: "facebook.com/tengzine", href: "https://www.facebook.com/tengzine/", icon: "uil-facebook" },
    {
        label: "Instagram",
        value: "ryukita_1552",
        href: "https://www.instagram.com/ryukita_1552/?fbclid=IwAR1UUg-PKJCjHbARxifAZhic6MQmklJVGkj2x1N3HVXjl1uqqkmT2vAgCZM",
        icon: "uil-instagram",
    },
    { label: "Twitter", value: "@h_tengzi", href: "https://twitter.com/h_tengzi", icon: "uil-twitter" },
];

export const Contact = () => (
    <footer className="contact" id="contact">
        <div className="container contact__inner">
            <Division title="Connect me" note="Hiring for AI work, or need a website built? Write, or ask the CV chatbot first." />
            <div className="contact__grid">
                <ul className="contact__list">
                    {CONTACTS.map((c) => (
                        <li key={c.label}>
                            <a href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="contact__row">
                                <span className="field-label">{c.label}</span>
                                <span className="contact__value">
                                    <i className={`uil ${c.icon}`} aria-hidden="true" /> {c.value}
                                </span>
                                <i className="uil uil-arrow-up-right contact__arrow" aria-hidden="true" />
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="contact__cta">
                    <Link to="/chat" className="cred__primary">
                        <i className="uil uil-comment-alt-dots" aria-hidden="true" /> Chat with my CV
                    </Link>
                    <Seal ring="TIEN HUYNH · SHARKTIEN · HO CHI MINH CITY" center="FELIK" sub="HVT" size={140} tilt={8} />
                </div>
            </div>
            <Mrz className="contact__mrz" lines={["TIEN<HUYNH<<AI<ENGINEER<<SOFTWARE<DEV", "CONNECT<ME<<SHARKTIEN<<ALL<RIGHTS<RESERVED"]} />
            <p className="contact__copy mono">© Sharktien. All rights reserved</p>
        </div>
    </footer>
);

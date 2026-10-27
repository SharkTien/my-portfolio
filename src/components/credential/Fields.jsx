import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { educationData, experienceData } from "../qualification/qualification";
import { certificatesData } from "../certificates/Certificates";
import { researchList } from "../research/Research";
import { projectsData } from "../work/Data";

const clientSites = projectsData.filter((p) => p.title.toLowerCase().startsWith("freelancer")).length;
const aiProjects = projectsData.filter((p) => p.category.some((c) => c.toLowerCase() === "ai")).length;
import { CountUp } from "../../pages/overview/Blocks";
import Seal from "./Seal";

const ease = [0.16, 1, 0.3, 1];

/*=============== COLOUR FIELD ===============*/
// A full-bleed block of one colour that owns its section. Its top edge carries a
// large arch of the same colour that rises out of the previous field as you scroll in.
export const Field = ({ tone = "paper", arch = "center", id, className, children, as: Tag = "section" }) => {
    const ref = useRef(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 35%"] });
    const rise = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), { stiffness: 90, damping: 22 });
    const scale = useTransform(rise, [0, 1], [0.35, 1]);
    const y = useTransform(rise, [0, 1], ["60%", "0%"]);

    return (
        <Tag ref={ref} id={id} className={`field field--${tone} ${className ?? ""}`} data-field={tone}>
            {arch && (
                <motion.span
                    aria-hidden="true"
                    className={`field__arch field__arch--${arch}`}
                    style={reduceMotion ? undefined : { scale, y }}
                />
            )}
            <div className="field__inner">{children}</div>
        </Tag>
    );
};

/*=============== PINNED SCENE: OVERLAPPING CIRCLES ===============*/
const TRAITS = [
    { lead: "Eager to learn", rest: "new technologies and adapt to changes." },
    { lead: "System thinking", rest: "& structured problem solving." },
    { lead: "Effective business communication", rest: "to collaborate transparently." },
];

// Optional photo per role, keyed by title: add an import and an entry here and it fills the circle.
const ROLE_IMAGES = {};

const monthOf = (text) => {
    if (/present/i.test(text)) {
        const now = new Date();
        return (now.getFullYear() - 2023) * 12 + now.getMonth();
    }
    const m = String(text).trim().match(/^(\d{1,2})\/(\d{4})$/);
    return m ? (Number(m[2]) - 2023) * 12 + Number(m[1]) - 1 : null;
};

const shortDate = (text) => text.replace(/\s*-\s*/, " – ");

// Every dated span on the record (Bachelor's degree aside), in the order it began.
const ROLES = [...educationData, ...experienceData]
    .filter((r) => !r.isHighSchool && r.date.includes("-") && !/bachelor/i.test(r.title))
    .map((r) => {
        const [a, b] = r.date.replace(/\(.*\)/, "").split("-").map((s) => monthOf(s));
        return { ...r, start: a, end: b, image: ROLE_IMAGES[r.title], current: /present/i.test(r.date) };
    })
    .filter((r) => r.start !== null && r.end !== null)
    .sort((x, y) => x.start - y.start);

const DEGREE = educationData.find((r) => /bachelor/i.test(r.title));

// Place each circle on the time axis: centre at the middle of its span, size from its
// length. Roles that ran at the same time therefore overlap, by as much as they shared.
const AXIS_FROM = Math.min(...ROLES.map((r) => r.start)) - 4;
const AXIS_TO = Math.max(...ROLES.map((r) => r.end)) + 4;
const toX = (m) => 8 + ((m - AXIS_FROM) / (AXIS_TO - AXIS_FROM)) * 84;
const LAYOUT = ROLES.map((r, i) => {
    const d = Math.min(28, Math.max(13, (toX(r.end + 1) - toX(r.start)) * 1.05));
    return { ...r, x: toX((r.start + r.end + 1) / 2), d, from: i % 2 === 0 ? -1 : 1 };
});

const TONES = ["teal", "seal", "foil", "sage"];

const Circle = ({ role, index, progress, total, reduceMotion }) => {
    // Each circle has its own slice of the scroll; it slides in from its side and settles.
    const start = 0.08 + (index / total) * 0.62;
    const end = start + 0.2;
    const offset = useTransform(progress, [start, end], [role.from * 65, 0]);
    const x = useTransform(offset, (v) => `${v}vw`);
    const opacity = useTransform(progress, [start, start + 0.06], [0, 1]);
    const scale = useTransform(progress, [start, end], [0.7, 1]);
    const small = role.d < 20;

    return (
        <motion.div
            className={`orbit__circle orbit__circle--${TONES[index % TONES.length]} ${small ? "is-small" : ""} ${role.current ? "is-current" : ""} ${role.from < 0 ? "from-left" : ""}`}
            style={{
                left: `${role.x}%`,
                "--d": role.d,
                "--side": role.from,
                ...(reduceMotion ? {} : { x, opacity, scale }),
                ...(role.image ? { backgroundImage: `url(${role.image})` } : {}),
            }}
        >
            <span className="orbit__label">
                {role.logo && <img className="orbit__logo" src={role.logo} alt="" />}
                <span className="orbit__title">{role.title}</span>
                <span className="orbit__org">{role.subtitle}</span>
                <span className="orbit__date mono">{shortDate(role.date)}</span>
            </span>
        </motion.div>
    );
};

// The section pins while circles for each role slide in from alternating sides and
// overlap where the roles ran at the same time, inside the ring of the degree they
// were all done alongside. The heading changes through the holder's traits.
export const ProofScene = () => {
    const ref = useRef(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
    const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });
    const [step, setStep] = useState(0);
    const ring = useTransform(progress, [0, 0.12], [0, 1]);

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        setStep(Math.min(TRAITS.length - 1, Math.floor(v * TRAITS.length * 0.999)));
    });

    return (
        <section className="scene" ref={ref} aria-label="About the holder: roles that ran at the same time">
            <div className="scene__sticky">
                <div className="scene__copy">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={step}
                            className="scene__title"
                            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 50, clipPath: "inset(0 0 100% 0)" }}
                            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 -10% 0)" }}
                            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -40 }}
                            transition={{ duration: 0.55, ease }}
                        >
                            {TRAITS[step].lead}
                        </motion.h2>
                    </AnimatePresence>
                    <div className="scene__meta">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={step}
                                className="scene__lead"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {TRAITS[step].rest}
                            </motion.p>
                        </AnimatePresence>
                        <p className="scene__note mono">Where circles overlap, the roles ran at the same time.</p>
                        <ol className="scene__dots" aria-hidden="true">
                            {TRAITS.map((t, i) => (
                                <li key={t.lead} className={i === step ? "is-on" : ""} />
                            ))}
                        </ol>
                    </div>
                </div>

                <figure className="orbit">
                    <motion.div className="orbit__ring" style={reduceMotion ? undefined : { scaleX: ring, opacity: ring }}>
                        {DEGREE && (
                            <span className="orbit__ring-label">
                                {DEGREE.logo && <img className="orbit__ring-logo" src={DEGREE.logo} alt="" />}
                                {DEGREE.title} <span className="mono">{shortDate(DEGREE.date)}</span>
                            </span>
                        )}
                    </motion.div>
                    {LAYOUT.map((role, i) => (
                        <Circle key={`${role.title}-${role.subtitle}`} role={role} index={i} total={LAYOUT.length} progress={progress} reduceMotion={reduceMotion} />
                    ))}
                </figure>
            </div>
        </section>
    );
};

/*=============== NUMBERS ===============*/
// Huge figures on a full red field; each counts up the first time it is seen.
export const Numbers = () => {
    const items = [
        { value: `${clientSites}`, label: "client websites delivered" },
        { value: `${aiProjects}`, label: "AI projects on record" },
        { value: `${certificatesData.length}`, label: "certificates on file" },
        { value: `${researchList.length}`, label: "research papers" },
    ];
    return (
        <div className="numbers">
            {items.map((n, i) => (
                <motion.div
                    key={n.label}
                    className={`numbers__item ${i === 0 ? "numbers__item--lead" : ""}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    transition={{ duration: 0.8, ease, delay: i * 0.08 }}
                >
                    <span className="numbers__value">
                        <CountUp value={n.value} />
                        {n.unit && <small>{n.unit}</small>}
                    </span>
                    <span className="numbers__label">{n.label}</span>
                </motion.div>
            ))}
            <Seal className="numbers__seal" ring="RECORD CHECKED · HUYNH VIET TIEN" center="ON FILE" sub="HVT" size={150} tilt={-14} />
        </div>
    );
};

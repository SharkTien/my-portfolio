import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import avatar from "../../assets/avatar.jpg";
import { projectsData } from "../work/Data";
import { researchList } from "../research/Research";
import { Rosette } from "./Guilloche";
import Seal from "./Seal";
import Mrz from "./Mrz";

const ease = [0.16, 1, 0.3, 1];

const aiCount = projectsData.filter((p) => p.category.some((c) => c.toLowerCase() === "ai")).length;
const clientCount = projectsData.filter((p) => p.title.toLowerCase().startsWith("freelancer")).length;

// Opens the work register on one audience's filter (Work listens for this event).
export const openWorkFilter = (filter) => {
    try {
        sessionStorage.setItem("work-view", JSON.stringify({ filter, showAll: false }));
    } catch {
        /* storage unavailable: the event alone still switches the filter */
    }
    window.dispatchEvent(new CustomEvent("work-filter", { detail: filter }));
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
};

const Field = ({ label, children, delay, className }) => (
    <motion.div
        className={`cred__field ${className ?? ""}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay }}
    >
        <span className="field-label">{label}</span>
        <div className="cred__value">{children}</div>
    </motion.div>
);

const CredentialHero = () => {
    const reduceMotion = useReducedMotion();
    // The big seal-red disc behind the document rolls out to the right as the page scrolls.
    const { scrollY } = useScroll();
    const sunX = useTransform(scrollY, [0, 700], ["0%", "35%"]);
    const sunScale = useTransform(scrollY, [0, 700], [1, 1.25]);

    // Holographic foil follows the pointer across the photograph.
    const moveFoil = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--fx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
        e.currentTarget.style.setProperty("--fy", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    };

    return (
        <section className="cred section" id="home" aria-label="Huynh Viet Tien, AI Engineer">
            <motion.span
                className="cred__sun"
                aria-hidden="true"
                initial={reduceMotion ? { opacity: 0 } : { scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease, delay: 0.2 }}
                style={reduceMotion ? undefined : { x: sunX, scale: sunScale }}
            />
            <motion.article
                className="cred__doc container"
                initial={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0 round 22px)", y: 40 }}
                animate={reduceMotion ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0 round 22px)", y: 0 }}
                transition={{ duration: 1.1, ease }}
            >
                <Rosette className="cred__rosette" size={420} />
                {/* Printed in UV ink: invisible in daylight, it fluoresces when the UV lamp is on. */}
                <span className="cred__uv-print" aria-hidden="true">
                    <Rosette size={300} strands={10} lobes={7} />
                    <span>FELIK · HVT-2026-0001</span>
                </span>

                <header className="cred__head">
                    <span>Portfolio credential</span>
                    <span className="mono">No. HVT-2026-0001</span>
                    <span>Issued in Ho Chi Minh City</span>
                </header>

                <div className="cred__body">
                    <div className="cred__photo-col">
                        <div className="cred__photo" onPointerMove={moveFoil}>
                            <img src={avatar} alt="Portrait of Huynh Viet Tien" />
                            <span className="cred__foil" aria-hidden="true" />
                            <Rosette className="cred__photo-guilloche" size={200} strands={8} lobes={6} />
                        </div>
                        <Seal
                            className="cred__seal"
                            ring="HUYNH VIET TIEN · AI ENGINEER · HCMC"
                            center="VERIFIED"
                            sub="2026"
                            size={118}
                            delay={1.1}
                            animateOn="load"
                        />
                    </div>

                    <div className="cred__fields">
                        <Field label="Surname / Given names" delay={0.35} className="cred__field--name">
                            <h1 className="cred__name">
                                Huynh <span>Viet Tien</span>
                            </h1>
                        </Field>
                        <Field label="Known as" delay={0.45}>
                            Felik <span className="cred__aside">you can call me Felik</span>
                        </Field>
                        <Field label="Occupation" delay={0.5}>
                            AI Engineer <span className="cred__aside">at NTC AI (NVIDIA elite partner) and TGN Digital</span>
                        </Field>
                        <Field label="Based in" delay={0.55}>
                            Ho Chi Minh City, Vietnam
                        </Field>
                        <Field label="Issued by" delay={0.6}>
                            VNUHCM – University of Information Technology
                        </Field>
                        <Field label="Holder's statement" delay={0.65} className="cred__field--wide">
                            <p className="cred__statement">
                                I'm a developer / AI engineer based in Ho Chi Minh City, Vietnam. I have a strong passion
                                for exploring new challenges and opportunities that push my limits and expand my thinking.
                            </p>
                        </Field>

                        <motion.div
                            className="cred__doors"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease, delay: 0.75 }}
                        >
                            <button type="button" className="cred__door" onClick={() => openWorkFilter("AI")}>
                                <span className="cred__door-title">AI Engineering</span>
                                <span className="cred__door-meta mono">
                                    {aiCount} AI projects · {researchList.length} papers
                                </span>
                                <i className="uil uil-arrow-down-right cred__door-arrow" aria-hidden="true" />
                            </button>
                            <button type="button" className="cred__door" onClick={() => openWorkFilter("web")}>
                                <span className="cred__door-title">Client Websites</span>
                                <span className="cred__door-meta mono">{clientCount} sites delivered</span>
                                <i className="uil uil-arrow-down-right cred__door-arrow" aria-hidden="true" />
                            </button>
                        </motion.div>

                        <motion.div
                            className="cred__actions"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, ease, delay: 0.9 }}
                        >
                            <Link to="/chat" className="cred__primary">
                                <i className="uil uil-comment-alt-dots" aria-hidden="true" /> Chat with my CV
                            </Link>
                            <span className="cred__hint">Analyze my CV easier with AI</span>
                        </motion.div>
                    </div>
                </div>

                <Mrz className="cred__mrz" lines={["PC<HUYNH<<VIET<TIEN<<FELIK", "HVT2026<AI<ENGINEER<SOFTWARE<DEV<HCMC<VNM"]} />
            </motion.article>
        </section>
    );
};

export default CredentialHero;

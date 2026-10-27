import React, { useEffect, useLayoutEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from '../components/header/header';
import CredentialHero from '../components/credential/CredentialHero';
import { Holder, Register, Evidence, Annex, Contact } from '../components/credential/Sections';
import { Band, Fibres } from '../components/credential/Guilloche';
import { Field, ProofScene, Numbers } from '../components/credential/Fields';
import Work from '../components/work/Work';
import '../components/credential/credential.css';

const Portfolio = () => {
    const { pathname, state } = useLocation();
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.3 });

    // Coming back from a project overview: land exactly where the visitor left,
    // synchronously, so the cover image can morph back into its entry.
    useLayoutEffect(() => {
        if (typeof state?.restoreScroll === 'number') {
            window.scrollTo({ top: state.restoreScroll, behavior: 'instant' });
        }
    }, [state]);

    useEffect(() => {
        if (typeof state?.restoreScroll === 'number') return;
        // Handle scrolling to section based on pathname (for HashRouter anchors)
        const sectionId = pathname.substring(1);
        if (sectionId) {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pathname, state]);

    return (
        <>
            <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
            {/* Security paper: engraved bands and embedded fibres behind the whole document. */}
            <div className="ground" aria-hidden="true">
                <Band className="ground__band ground__band--top" />
                <Band className="ground__band ground__band--bottom" lines={14} />
                <Fibres className="ground__fibres" />
            </div>
            <Header />
            <main className="main">
                <CredentialHero />
                <ProofScene />
                <Field tone="sand" arch="right" as="div">
                    <Holder />
                </Field>
                <Field tone="red" arch="left" as="div">
                    <Numbers />
                </Field>
                <Field tone="paper" arch="center" as="div">
                    <Work />
                </Field>
                <Field tone="teal" arch="right" as="div">
                    <Annex />
                </Field>
                <Field tone="paper" arch="left" as="div">
                    <Register />
                </Field>
                <Field tone="sage" arch="center" as="div">
                    <Evidence />
                </Field>
            </main>
            <Field tone="ink" arch="right" as="div" className="field--footer">
                <Contact />
            </Field>
        </>
    );
};

export default Portfolio;

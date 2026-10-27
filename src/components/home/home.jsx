import React from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import "./home.css";
import Data from "./data";

const Home = () => {
    const reduceMotion = useReducedMotion();
    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const x = useSpring(useTransform(px, [-1, 1], [-14, 14]), { stiffness: 80, damping: 20 });
    const y = useSpring(useTransform(py, [-1, 1], [-14, 14]), { stiffness: 80, damping: 20 });

    // The portrait drifts gently toward the cursor.
    const handlePointer = (e) => {
        if (reduceMotion) return;
        const rect = e.currentTarget.getBoundingClientRect();
        px.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
        py.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid" onPointerMove={handlePointer}>
                    <motion.div
                        className="home__img"
                        style={{ x, y }}
                        initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    />
                    <Data />
                </div>
            </div>
        </section>
    )
}

export default Home
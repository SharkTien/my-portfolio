import React, { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";

// A round ink seal. It stamps down once when it enters the viewport:
// lands slightly oversized and tilted, presses flat, the ink spreads.
const Seal = ({ ring, center, sub, size = 120, tilt = -8, className, delay = 0, animateOn = "view" }) => {
    const id = useId().replace(/:/g, "");
    const reduceMotion = useReducedMotion();
    const ringText = `${ring} · `.repeat(Math.ceil(60 / (ring.length + 3)));

    const from = reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.6, rotate: tilt - 14, filter: "blur(3px)" };
    const to = { opacity: 0.92, scale: 1, rotate: tilt, filter: "blur(0px)" };
    const motionProps =
        animateOn === "view"
            ? { initial: from, whileInView: to, viewport: { once: true, margin: "0px 0px -15% 0px" } }
            : { initial: from, animate: to };

    return (
        <motion.svg
            viewBox="0 0 120 120"
            width={size}
            height={size}
            className={`seal ${className ?? ""}`}
            role="img"
            aria-label={`${center}${sub ? ` ${sub}` : ""}`}
            transition={{ type: "spring", stiffness: 420, damping: 22, delay }}
            {...motionProps}
        >
            <defs>
                <path id={`ring-${id}`} d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
                {/* Ink impression: a roughened edge plus uneven density, like a rubber stamp on paper. */}
                <filter id={`ink-${id}`} x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={size} result="grain" />
                    <feDisplacementMap in="SourceGraphic" in2="grain" scale="2.2" result="rough" />
                    <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed={size + 7} result="blotch" />
                    <feColorMatrix in="blotch" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.2 2.1" result="density" />
                    <feComposite in="rough" in2="density" operator="in" />
                </filter>
            </defs>
            <g filter={`url(#ink-${id})`}>
            <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="3" />
            <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="60" cy="60" r="33" fill="none" stroke="currentColor" strokeWidth="1" />
            <text className="seal__ring" fill="currentColor">
                <textPath href={`#ring-${id}`} startOffset="0">
                    {ringText}
                </textPath>
            </text>
            <text x="60" y={sub ? 59 : 64} textAnchor="middle" className="seal__center" fill="currentColor">
                {center}
            </text>
            {sub && (
                <text x="60" y="72" textAnchor="middle" className="seal__sub" fill="currentColor">
                    {sub}
                </text>
            )}
            </g>
        </motion.svg>
    );
};

export default Seal;

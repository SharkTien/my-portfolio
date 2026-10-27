import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const WIDTH = 44;

// Machine-readable zone: fixed-width uppercase, spaces become "<", padded with fillers.
export const toMrz = (text) => {
    const clean = text
        .toUpperCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/Đ/g, "D")
        .replace(/[^A-Z0-9<]+/g, "<");
    return clean.slice(0, WIDTH).padEnd(WIDTH, "<");
};

// Types itself out, character by character, the first time it is seen.
const Mrz = ({ lines, className }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const reduceMotion = useReducedMotion();
    const full = lines.map(toMrz);
    const total = WIDTH * full.length;
    const [shown, setShown] = useState(reduceMotion ? total : 0);

    useEffect(() => {
        if (!inView || reduceMotion) return;
        let frame;
        const start = performance.now();
        const tick = (now) => {
            const n = Math.min(total, Math.floor((now - start) / 9));
            setShown(n);
            if (n < total) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, reduceMotion, total]);

    return (
        <div ref={ref} className={`mrz ${className ?? ""}`} aria-label={lines.join(". ")}>
            {full.map((line, i) => {
                const visible = Math.max(0, Math.min(WIDTH, shown - i * WIDTH));
                return (
                    <span className="mrz__line" key={i} aria-hidden="true">
                        {line.slice(0, visible)}
                        <span className="mrz__ghost">{line.slice(visible)}</span>
                    </span>
                );
            })}
        </div>
    );
};

export default Mrz;

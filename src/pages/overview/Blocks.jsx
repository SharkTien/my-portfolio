import React, { useEffect, useRef, useState } from "react";
import {
    AnimatePresence,
    animate,
    motion,
    useInView,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import "./overview.css";

const ease = [0.16, 1, 0.3, 1];

/*=============== HERO: LESSON ASSEMBLY ===============*/

// Where each block starts before it snaps into the lesson: scattered, tilted, off-axis.
const SCATTER = [
    { x: -140, y: -60, rotate: -14 },
    { x: 160, y: 40, rotate: 12 },
    { x: -120, y: 120, rotate: 9 },
    { x: 150, y: 160, rotate: -10 },
];
const DEPTH = [0.6, 1.1, 0.8, 1.3];

const BlockBody = ({ block }) => {
    if (block.image) {
        return (
            <>
                <img src={block.image} alt="" className="asm__block-img" />
                <p className="asm__block-text asm__block-text--small">{block.text}</p>
            </>
        );
    }
    if (block.pairs) {
        return (
            <div className="asm__pair">
                <span>{block.pairs[0]}</span>
                <svg viewBox="0 0 60 12" aria-hidden="true" className="asm__pair-line">
                    <path d="M2 6 C 20 -2, 40 14, 58 6" />
                </svg>
                <span>{block.pairs[1]}</span>
            </div>
        );
    }
    return (
        <>
            <p className="asm__block-text">{block.text}</p>
            {block.options && (
                <ul className="asm__options">
                    {block.options.map((option, i) => (
                        <li key={option} className={i === 0 ? "is-correct" : ""}>
                            <span className="asm__option-letter">{String.fromCharCode(65 + i)}</span>
                            {option}
                            {i === 0 && <i className="uil uil-check asm__option-check" />}
                        </li>
                    ))}
                </ul>
            )}
            {block.kind === "True / False" && (
                <div className="asm__tf">
                    <span>True</span>
                    <span className="is-correct">False</span>
                </div>
            )}
        </>
    );
};

// Activity blocks fly in from a scatter and snap into a lesson under the video,
// whose checkpoints drop onto the timeline first. As the hero scrolls away the
// blocks drift apart again, as if the lesson were being taken back apart.
export const LessonAssembly = ({ assembly, style }) => {
    const reduceMotion = useReducedMotion();
    const ref = useRef(null);
    const px = useMotionValue(0);
    const py = useMotionValue(0);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const spread = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), { stiffness: 90, damping: 24 });

    const handlePointer = (e) => {
        if (reduceMotion) return;
        const rect = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - rect.left) / rect.width - 0.5);
        py.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const resetPointer = () => {
        px.set(0);
        py.set(0);
    };

    const { video, blocks } = assembly;
    const pinsStart = 0.5;
    // Blocks start landing while the last pins are still dropping, so the stage is never idle.
    const blocksStart = pinsStart + 0.25;

    return (
        <div className="asm" ref={ref} style={style} onPointerMove={handlePointer} onPointerLeave={resetPointer}>
            <motion.div
                className="asm__video"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.25 }}
            >
                <div className="asm__screen">
                    <img src={video.image} alt={`${video.title} video`} />
                    <span className="asm__video-title">{video.title}</span>
                </div>
                <div className="asm__timeline">
                    <span className="asm__time">0:00</span>
                    <div className="asm__track">
                        <motion.span
                            className="asm__track-fill"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.6, ease: "linear", delay: 0.6 }}
                        />
                        {video.pins.map((pin, i) => (
                            <motion.span
                                key={pin.label}
                                className="asm__pin"
                                style={{ left: `${pin.at * 100}%` }}
                                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -26, scale: 0.4 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 520, damping: 18, delay: pinsStart + i * 0.18 }}
                            >
                                <span className="asm__pin-head"><span>{i + 1}</span></span>
                                <span className="asm__pin-label">{pin.label}</span>
                            </motion.span>
                        ))}
                    </div>
                    <span className="asm__time">{video.duration}</span>
                </div>
            </motion.div>

            {blocks.map((block, i) => (
                <AssemblyBlock
                    key={block.kind}
                    block={block}
                    index={i}
                    delay={blocksStart + i * 0.14}
                    px={px}
                    py={py}
                    spread={spread}
                    reduceMotion={reduceMotion}
                />
            ))}
        </div>
    );
};

const AssemblyBlock = ({ block, index, delay, px, py, spread, reduceMotion }) => {
    const scatter = SCATTER[index % SCATTER.length];
    const depth = DEPTH[index % DEPTH.length];
    // Pointer parallax by depth, plus the scroll-driven drift apart.
    const x = useTransform([px, spread], ([p, s]) => p * 18 * depth + s * scatter.x * 0.5);
    const y = useTransform([py, spread], ([p, s]) => p * 14 * depth + s * scatter.y * 0.4);
    const rotate = useTransform(spread, [0, 1], [0, scatter.rotate * 0.6]);

    return (
        <motion.div className={`asm__slot asm__slot--${index}`} style={reduceMotion ? undefined : { x, y, rotate }}>
            <motion.article
                className="asm__block"
                data-tone={block.tone}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, ...scatter, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 210, damping: 22, mass: 0.9, delay }}
                whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.25 } }}
            >
                <header className="asm__block-head">
                    <i className="uil uil-draggabledots asm__grip" aria-hidden="true" />
                    <span className="asm__kind">{block.kind}</span>
                </header>
                <BlockBody block={block} />
                <motion.span
                    className="asm__snap"
                    aria-hidden="true"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.7, delay: delay + 0.35 }}
                />
            </motion.article>
        </motion.div>
    );
};

/*=============== COUNT UP ===============*/

// "~17.5k" → prefix "~", number 17.5, suffix "k"; counts up once when visible.
export const CountUp = ({ value }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
    const reduceMotion = useReducedMotion();
    const match = String(value).match(/^([^\d]*)([\d.]+)(.*)$/);
    const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);

    useEffect(() => {
        if (!match || !inView) return;
        const [, prefix, num, suffix] = match;
        const target = parseFloat(num);
        const decimals = num.includes(".") ? num.split(".")[1].length : 0;
        if (reduceMotion) {
            setDisplay(value);
            return;
        }
        const controls = animate(0, target, {
            duration: 1.4,
            ease,
            onUpdate: (v) => setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`),
        });
        return () => controls.stop();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    return (
        <span ref={ref} aria-label={value}>
            {display}
        </span>
    );
};

/*=============== BLOCK TICKER ===============*/

export const BlockTicker = ({ rows }) => (
    <div className="ticker" aria-hidden="true">
        {rows.map((row, r) => (
            <div className={`ticker__row ${r % 2 ? "ticker__row--reverse" : ""}`} key={r}>
                {[0, 1].map((copy) => (
                    <div className="ticker__set" key={copy}>
                        {row.map((item) => (
                            <span className="ticker__block" data-tone={item.tone} key={`${copy}-${item.label}`}>
                                <i className={`uil ${item.icon}`} />
                                {item.label}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        ))}
    </div>
);

/*=============== CHAPTER CLIP ===============*/

// The recording opens from a small framed block to full width as it scrolls in,
// and only plays while it is on screen.
export const ChapterClip = ({ flow }) => {
    const frameRef = useRef(null);
    const videoRef = useRef(null);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "center center"] });
    const inset = useTransform(scrollYProgress, [0, 1], [14, 0]);
    const radius = useTransform(scrollYProgress, [0, 1], [40, 20]);
    const clipPath = useTransform([inset, radius], ([i, r]) => `inset(${i}% ${i * 1.2}% ${i}% ${i * 1.2}% round ${r}px)`);
    const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
    const inView = useInView(frameRef, { margin: "-20% 0px -20% 0px" });

    useEffect(() => {
        const video = videoRef.current;
        if (!video || reduceMotion) return;
        if (inView) video.play().catch(() => {});
        else video.pause();
    }, [inView, reduceMotion]);

    return (
        <figure className="clip" data-tone={flow.tone}>
            <motion.div className="clip__frame" ref={frameRef} style={reduceMotion ? undefined : { clipPath }}>
                <motion.video
                    ref={videoRef}
                    className="clip__video"
                    style={reduceMotion ? undefined : { scale }}
                    src={flow.clip}
                    poster={flow.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={reduceMotion}
                    aria-label={flow.clipCaption}
                />
            </motion.div>
            <figcaption className="clip__caption">
                <span className="clip__badge">
                    <span className="clip__dot" /> Live recording
                </span>
                {flow.clipCaption}
            </figcaption>
        </figure>
    );
};

/*=============== STEP FLOW ===============*/

// Steps on the left; the pinned frame on the right swaps to the screenshot of
// whichever step sits in the middle of the viewport.
export const StepFlow = ({ flow }) => {
    const ref = useRef(null);
    const stepRefs = useRef([]);
    const [active, setActive] = useState(0);
    const reduceMotion = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 55%"] });
    const spine = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
                });
            },
            { rootMargin: "-45% 0px -45% 0px" }
        );
        stepRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const shots = flow.steps.map((step) => step.image ?? flow.image).filter(Boolean);
    const current = flow.steps[active].image ?? flow.image;

    return (
        <div className="steps" ref={ref} data-tone={flow.tone}>
            <ol className="steps__list">
                <motion.span className="steps__spine" style={{ scaleY: spine }} aria-hidden="true" />
                {flow.steps.map((step, i) => (
                    <li
                        key={step.title}
                        ref={(el) => (stepRefs.current[i] = el)}
                        data-index={i}
                        className={`steps__item ${i === active ? "is-active" : ""} ${i < active ? "is-done" : ""}`}
                    >
                        <span className="steps__dot">{i + 1}</span>
                        <h3 className="steps__title">{step.title}</h3>
                        <p className="steps__text">{step.text}</p>
                    </li>
                ))}
            </ol>

            {shots.length > 0 && (
                <div className="steps__stage">
                    <div className="steps__frame">
                        <AnimatePresence initial={false} mode="popLayout">
                            <motion.img
                                key={current}
                                src={current}
                                alt={`${flow.name}: ${flow.steps[active].title}`}
                                className="steps__shot"
                                initial={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)", scale: 1.06 }}
                                animate={reduceMotion ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)", scale: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                                transition={{ duration: 0.7, ease }}
                            />
                        </AnimatePresence>
                        <span className="steps__counter">
                            <motion.span key={active} initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.4, ease }}>
                                {String(active + 1).padStart(2, "0")}
                            </motion.span>
                            <span>/ {String(flow.steps.length).padStart(2, "0")}</span>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

/*=============== BENTO GALLERY ===============*/

// Tiles drop in like blocks settling onto a page; a tile opens full size.
export const BentoGallery = ({ items }) => {
    const [open, setOpen] = useState(null);
    const reduceMotion = useReducedMotion();
    const closeRef = useRef(null);

    useEffect(() => {
        if (open === null) return;
        const onKey = (e) => e.key === "Escape" && setOpen(null);
        window.addEventListener("keydown", onKey);
        closeRef.current?.focus();
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <>
            <div className="bento">
                {items.map((item, i) => (
                    <motion.button
                        type="button"
                        key={item.caption}
                        className={`bento__tile ${item.size ? `bento__tile--${item.size}` : ""}`}
                        onClick={() => setOpen(i)}
                        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 60, rotate: i % 2 ? 3 : -3, scale: 0.92 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                        transition={{ type: "spring", stiffness: 160, damping: 20, delay: (i % 4) * 0.08 }}
                    >
                        <motion.img layoutId={`bento-${i}`} src={item.image} alt={item.caption} loading="lazy" />
                        <span className="bento__caption">{item.caption}</span>
                    </motion.button>
                ))}
            </div>

            <AnimatePresence>
                {open !== null && (
                    <motion.div
                        className="lightbox"
                        role="dialog"
                        aria-modal="true"
                        aria-label={items[open].caption}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(null)}
                    >
                        <motion.img layoutId={`bento-${open}`} src={items[open].image} alt={items[open].caption} className="lightbox__img" />
                        <p className="lightbox__caption">{items[open].caption}</p>
                        <button type="button" ref={closeRef} className="lightbox__close" onClick={() => setOpen(null)} aria-label="Close">
                            <i className="uil uil-times" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

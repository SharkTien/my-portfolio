import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import "./pipeline.css";

const ease = [0.16, 1, 0.3, 1];

// A pipeline drawn from data: input lanes on the left converge into a chain of
// stages, which fans out into outputs. Connectors are measured from the laid-out
// nodes, draw themselves in when the diagram is seen, and carry a travelling pulse.
//
// pipeline = {
//   inputs:  [{ id, title, steps: [string], tone }],
//   stages:  [{ id, title, detail, guard? }],
//   outputs: [{ id, title, detail }],
// }
const Pipeline = ({ pipeline, tone = "green" }) => {
    const wrapRef = useRef(null);
    const nodeRefs = useRef({});
    const [paths, setPaths] = useState([]);
    const [size, setSize] = useState({ w: 0, h: 0 });
    const inView = useInView(wrapRef, { once: true, margin: "0px 0px -20% 0px" });
    const reduceMotion = useReducedMotion();
    const { inputs, stages, outputs } = pipeline;

    useLayoutEffect(() => {
        const wrap = wrapRef.current;
        if (!wrap) return;

        const measure = () => {
            const base = wrap.getBoundingClientRect();
            const box = (id) => {
                const el = nodeRefs.current[id];
                if (!el) return null;
                const r = el.getBoundingClientRect();
                return { l: r.left - base.left, r: r.right - base.left, t: r.top - base.top, b: r.bottom - base.top };
            };
            // Stacked (narrow) layouts connect bottom to top; wide layouts connect right to left.
            const stacked = getComputedStyle(wrap).gridTemplateColumns.split(" ").length === 1;
            const link = (from, to) => {
                const a = box(from);
                const b = box(to);
                if (!a || !b) return null;
                // Nodes stacked in one column (the core stages) connect bottom to top.
                const sameColumn = Math.abs(a.l - b.l) < 4;
                if (stacked || sameColumn) {
                    const x1 = (a.l + a.r) / 2, y1 = a.b, x2 = (b.l + b.r) / 2, y2 = b.t;
                    const my = (y1 + y2) / 2;
                    return `M${x1} ${y1} C${x1} ${my} ${x2} ${my} ${x2} ${y2}`;
                }
                const x1 = a.r, y1 = (a.t + a.b) / 2, x2 = b.l, y2 = (b.t + b.b) / 2;
                const mx = (x1 + x2) / 2;
                return `M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`;
            };

            const list = [];
            inputs.forEach((i) => list.push(link(i.id, stages[0].id)));
            for (let s = 0; s < stages.length - 1; s++) list.push(link(stages[s].id, stages[s + 1].id));
            outputs.forEach((o) => list.push(link(stages[stages.length - 1].id, o.id)));
            setPaths(list.filter(Boolean));
            setSize({ w: wrap.clientWidth, h: wrap.clientHeight });
        };

        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(wrap);
        return () => observer.disconnect();
    }, [inputs, stages, outputs]);

    const setRef = (id) => (el) => {
        nodeRefs.current[id] = el;
    };

    const reveal = (i) => ({
        initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.96 },
        animate: inView ? { opacity: 1, y: 0, scale: 1 } : undefined,
        transition: { duration: 0.6, ease, delay: 0.1 + i * 0.09 },
    });

    return (
        <figure className="pipe" data-tone={tone}>
            <div className="pipe__board" ref={wrapRef}>
                <svg className="pipe__wires" width={size.w} height={size.h} aria-hidden="true">
                    {paths.map((d, i) => (
                        <g key={i}>
                            <motion.path
                                d={d}
                                className="pipe__wire"
                                initial={{ pathLength: 0 }}
                                animate={inView ? { pathLength: 1 } : undefined}
                                transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.06 }}
                            />
                            {!reduceMotion && inView && (
                                <circle r="4" className="pipe__pulse">
                                    <animateMotion dur={`${2.6 + (i % 3) * 0.4}s`} begin={`${1.2 + i * 0.15}s`} repeatCount="indefinite" path={d} />
                                </circle>
                            )}
                        </g>
                    ))}
                </svg>

                <div className="pipe__col pipe__col--in">
                    {inputs.map((n, i) => (
                        <motion.div key={n.id} ref={setRef(n.id)} className="pipe__node pipe__node--in" {...reveal(i)}>
                            <span className="pipe__kind">{n.kind ?? "Input"}</span>
                            <h4>{n.title}</h4>
                            <ol className="pipe__steps">
                                {n.steps.map((s) => (
                                    <li key={s}>{s}</li>
                                ))}
                            </ol>
                        </motion.div>
                    ))}
                </div>

                <div className="pipe__col pipe__col--core">
                    {stages.map((n, i) => (
                        <motion.div key={n.id} ref={setRef(n.id)} className="pipe__node pipe__node--stage" {...reveal(inputs.length + i)}>
                            <span className="pipe__index">{i + 1}</span>
                            <div>
                                <h4>{n.title}</h4>
                                <p>{n.detail}</p>
                                {n.guard && <p className="pipe__guard">{n.guard}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="pipe__col pipe__col--out">
                    {outputs.map((n, i) => (
                        <motion.div key={n.id} ref={setRef(n.id)} className="pipe__node pipe__node--out" {...reveal(inputs.length + stages.length + i)}>
                            <h4>{n.title}</h4>
                            <p>{n.detail}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            {pipeline.caption && <figcaption className="pipe__caption">{pipeline.caption}</figcaption>}
        </figure>
    );
};

export default Pipeline;

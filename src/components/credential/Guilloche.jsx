import React, { useMemo } from "react";

// Engraved security line work, computed rather than drawn: a rosette is several
// phase-shifted polar curves interleaving, a band is a stack of modulated sine waves.

const toPath = (points) =>
    points.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(2)} ${y.toFixed(2)}`).join("") + "Z";

export const Rosette = ({ size = 320, strands = 14, lobes = 9, className, style }) => {
    const paths = useMemo(() => {
        const c = size / 2;
        const list = [];
        for (let s = 0; s < strands; s++) {
            const phase = (s / strands) * Math.PI * 2;
            const pts = [];
            for (let i = 0; i <= 720; i++) {
                const t = (i / 720) * Math.PI * 2;
                const r =
                    c * 0.62 +
                    c * 0.2 * Math.cos(lobes * t + phase) +
                    c * 0.12 * Math.cos((lobes * 3 + 1) * t - phase * 2);
                pts.push([c + r * Math.cos(t), c + r * Math.sin(t)]);
            }
            list.push(toPath(pts));
        }
        return list;
    }, [size, strands, lobes]);

    return (
        <svg viewBox={`0 0 ${size} ${size}`} className={className} style={style} aria-hidden="true" focusable="false">
            {paths.map((d, i) => (
                <path key={i} d={d} fill="none" stroke="currentColor" strokeWidth={0.6} />
            ))}
        </svg>
    );
};

export const Band = ({ width = 1440, height = 180, lines = 18, className, style }) => {
    const paths = useMemo(() => {
        const list = [];
        for (let l = 0; l < lines; l++) {
            const phase = (l / lines) * Math.PI;
            const pts = [];
            for (let x = 0; x <= width; x += 6) {
                const u = x / width;
                const y =
                    height / 2 +
                    (height * 0.38) * Math.sin(u * Math.PI * 6 + phase) * Math.cos(u * Math.PI * 1.5 - phase * 0.5);
                pts.push(`${x ? "L" : "M"}${x} ${y.toFixed(2)}`);
            }
            list.push(pts.join(""));
        }
        return list;
    }, [width, height, lines]);

    return (
        <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className={className} style={style} aria-hidden="true" focusable="false">
            {paths.map((d, i) => (
                <path key={i} d={d} fill="none" stroke="currentColor" strokeWidth={0.7} vectorEffect="non-scaling-stroke" />
            ))}
        </svg>
    );
};

// Deterministic scatter of short curved fibres embedded in the paper; they glow under UV.
const rand = (seed) => () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
};

export const Fibres = ({ count = 70, className }) => {
    const fibres = useMemo(() => {
        const r = rand(1552);
        return Array.from({ length: count }, () => {
            const x = r() * 100;
            const y = r() * 100;
            const len = 0.8 + r() * 1.6;
            const angle = r() * Math.PI;
            const bend = (r() - 0.5) * 1.2;
            const x2 = x + Math.cos(angle) * len;
            const y2 = y + Math.sin(angle) * len * 1.6;
            const cx = (x + x2) / 2 + bend;
            const cy = (y + y2) / 2 - bend;
            return { d: `M${x} ${y}Q${cx} ${cy} ${x2} ${y2}`, hue: r() > 0.5 };
        });
    }, [count]);

    return (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={className} aria-hidden="true" focusable="false">
            {fibres.map((f, i) => (
                <path
                    key={i}
                    d={f.d}
                    fill="none"
                    className={f.hue ? "fibre fibre--a" : "fibre fibre--b"}
                    strokeWidth={0.14}
                    strokeLinecap="round"
                />
            ))}
        </svg>
    );
};

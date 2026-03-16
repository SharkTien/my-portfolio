import React from "react";
import "./marquee.css";

const Marquee = () => {
    const textItems = [
        "HUYNH VIET TIEN",
        "AI ENGINEER",
        "SOFTWARE DEV",
        "CONNECT ME"
    ];

    return (
        <section className="marquee">
            <div className="marquee__content">
                {textItems.map((text, index) => (
                    <React.Fragment key={`set1-${index}`}>
                        <span className="marquee__item">{text}</span>
                        <span className="marquee__star">✦</span>
                    </React.Fragment>
                ))}
                {textItems.map((text, index) => (
                    <React.Fragment key={`set2-${index}`}>
                        <span className="marquee__item">{text}</span>
                        <span className="marquee__star">✦</span>
                    </React.Fragment>
                ))}
                {textItems.map((text, index) => (
                    <React.Fragment key={`set3-${index}`}>
                        <span className="marquee__item">{text}</span>
                        <span className="marquee__star">✦</span>
                    </React.Fragment>
                ))}
                {textItems.map((text, index) => (
                    <React.Fragment key={`set4-${index}`}>
                        <span className="marquee__item">{text}</span>
                        <span className="marquee__star">✦</span>
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Marquee;

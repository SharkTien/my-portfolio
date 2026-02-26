import React from "react";
import "./marquee.css";

const Marquee = () => {
    // The content to be repeated
    const textItems = [
        "HUYNH VIET TIEN",
        "AI ENGINEER",
        "SOFTWARE DEV",
        "CONNECT ME"
    ];

    // We render the content twice to create a seamless infinite loop
    return (
        <section className="marquee">
            <div className="marquee__content">
                {/* First set of items */}
                {textItems.map((text, index) => (
                    <React.Fragment key={`set1-${index}`}>
                        <span className="marquee__item">{text}</span>
                        <span className="marquee__star">✦</span>
                    </React.Fragment>
                ))}
                {/* Second set of items (duplicate for seamless loop) */}
                {textItems.map((text, index) => (
                    <React.Fragment key={`set2-${index}`}>
                        <span className="marquee__item">{text}</span>
                        <span className="marquee__star">✦</span>
                    </React.Fragment>
                ))}
                {/* Third set to ensure it fills wide screens */}
                {textItems.map((text, index) => (
                    <React.Fragment key={`set3-${index}`}>
                        <span className="marquee__item">{text}</span>
                        <span className="marquee__star">✦</span>
                    </React.Fragment>
                ))}
                {/* Fourth set */}
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

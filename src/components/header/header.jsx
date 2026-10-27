import React, { useEffect, useState } from "react";
import "./header.css";

const LINKS = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#research", label: "Research" },
    { href: "#portfolio", label: "E&E" },
    { href: "#contact", label: "Contact" },
];

// The document's top band: holder name, serial, and the divisions as tabs.
const Header = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });

        // The tab whose division is crossing the upper third of the screen is active.
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-30% 0px -65% 0px" }
        );
        LINKS.forEach((l) => {
            const el = document.getElementById(l.href.slice(1));
            if (el) observer.observe(el);
        });
        return () => {
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
            <nav className="nav container" aria-label="Sections">
                <a href="#home" className="nav__logo">
                    Tien Huynh <span className="nav__serial mono">HVT-2026-0001</span>
                </a>

                <ul className={`nav__list ${open ? "is-open" : ""}`}>
                    {LINKS.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className={`nav__link ${active === l.href.slice(1) ? "is-active" : ""}`}
                                aria-current={active === l.href.slice(1) ? "true" : undefined}
                                onClick={() => setOpen(false)}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className="nav__toggle"
                    aria-expanded={open}
                    aria-label={open ? "Close menu" : "Open menu"}
                    onClick={() => setOpen(!open)}
                >
                    <i className={`uil ${open ? "uil-times" : "uil-bars"}`} />
                </button>
            </nav>
        </header>
    );
};

export default Header;

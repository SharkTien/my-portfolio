import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header/header';
import Home from '../components/home/home';
import About from '../components/about/about';
import Skills from '../components/skills/Skills';
import Qualification from '../components/qualification/qualification';
import Research from '../components/research/Research';
import Footer from '../components/footer/footer';
import ScrollUp from '../components/scrollup/scrollup';
import Marquee from '../components/marquee/Marquee';
import Work from '../components/work/Work';
import Certificates from '../components/certificates/Certificates';

const Portfolio = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Handle scrolling to section based on pathname (for HashRouter anchors)
        const sectionId = pathname.substring(1); // Remove leading slash
        if (sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pathname]);

    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <Marquee />
                <About />
                <Skills />
                <Qualification />
                <Research />
                <Work />
            </main>
            <Footer />
            <ScrollUp />
        </>
    );
};

export default Portfolio;

import React from 'react';
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

const Portfolio = () => {
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

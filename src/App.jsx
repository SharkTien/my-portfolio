import { useState, useEffect } from 'react'
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/qualification';
import Research from './components/research/Research';
import Footer from './components/footer/footer';
import ScrollUp from './components/scrollup/scrollup';
import Work from './components/work/Work';
import { ToggleDarkmode } from './components/darkmode/Toggle';
import lightModeTexture from './assets/lightmode.png';
import darkModeTexture from './assets/darkmode.png';
import Marquee from './components/marquee/Marquee';

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const appElement = document.querySelector('.App');
    if (appElement) {
      if (isDark) {
        appElement.style.setProperty('--bg-texture', `url(${darkModeTexture})`);
      } else {
        appElement.style.setProperty('--bg-texture', `url(${lightModeTexture})`);
      }
    }
  }, [isDark]);

  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <ToggleDarkmode
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />
        <Header />
        <main class="main">
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
      </div>
    </>
  )
}

export default App

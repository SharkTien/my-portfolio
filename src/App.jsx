import { useState } from 'react'
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/qualification';
import Footer from './components/footer/footer';
import ScrollUp from './components/scrollup/scrollup';
import Work from './components/work/work';
import { ToggleDarkmode }  from './components/darkmode/Toggle';

function App() {
  const [isDark, setIsDark] = useState(false)   

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
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Work />
        </main>
        <Footer />
        <ScrollUp />
    </div>
    </>
  )
}

export default App

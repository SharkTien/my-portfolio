import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

import Portfolio from './pages/Portfolio';
import ChatbotPage from './pages/ChatbotPage';
import { ToggleDarkmode } from './components/darkmode/Toggle';
import lightModeTexture from './assets/lightmode.png';
import darkModeTexture from './assets/darkmode.png';

const AnimatedRoutes = ({ isDark, setIsDark }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="page-transition-wrapper"
          >
            <Portfolio />
          </motion.div>
        } />
        <Route path="/chat" element={
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="page-transition-wrapper"
            style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
          >
            <ChatbotPage theme={isDark ? "dark" : "light"} toggleTheme={() => setIsDark(!isDark)} />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

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
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      {/* Toggle dark mode button on all pages */}
      <ToggleDarkmode
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <AnimatedRoutes isDark={isDark} setIsDark={setIsDark} />

      {/* Floating Chat Button */}
      {location.pathname !== '/chat' && (
        <Link to="/chat" className="floating-chat-btn">
          <i className="uil uil-comment-alt-lines"></i>
        </Link>
      )}
    </div>
  )
}

export default function AppWrapper() {
  return (
    <Router basename="/my-portfolio">
      <App />
    </Router>
  )
}

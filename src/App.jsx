import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

import Portfolio from './pages/Portfolio';
import ChatbotPage from './pages/ChatbotPage';
import ProjectOverview from './pages/ProjectOverview';
import { ToggleDarkmode } from './components/darkmode/Toggle';

const AnimatedRoutes = ({ isDark, toggleTheme }) => {
  const location = useLocation();
  // Group all paths except /chat together for transitions to prevent glitches on anchors.
  // Project overviews share the key too: their navigation is animated by View Transitions,
  // which need the next page mounted immediately rather than after an exit animation.
  const transitionKey = location.pathname === '/chat' ? '/chat' : 'home';
  const fromProject = Boolean(location.state?.fromProject);
  const portfolioEnter = fromProject ? false : { opacity: 0, y: 30 };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={transitionKey}>
        <Route path="/" element={
          <motion.div
            initial={portfolioEnter}
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
            <ChatbotPage theme={isDark ? "dark" : "light"} toggleTheme={toggleTheme} />
          </motion.div>
        } />
        <Route path="/project/:slug" element={<ProjectOverview />} />
        {/* Catch-all route for hash-based anchors (e.g., #skills becoming /skills) */}
        <Route path="*" element={
          <motion.div
            initial={portfolioEnter}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="page-transition-wrapper"
          >
            <Portfolio />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    } catch {
      /* storage unavailable: fall back to the system preference */
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      /* storage unavailable */
    }
  }, [isDark]);

  // The floating chat seal steps aside while the visitor scrolls down, so it never sits on what they are reading.
  const [chatHidden, setChatHidden] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setChatHidden(y > last && y > 200);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Switching on the UV lamp re-lights the page as a circle spreading from the switch.
  const toggleTheme = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduceMotion) {
      setIsDark((d) => !d);
      return;
    }
    const root = document.documentElement;
    root.classList.add('theme-switching');
    const transition = document.startViewTransition(() => flushSync(() => setIsDark((d) => !d)));
    transition.finished.finally(() => root.classList.remove('theme-switching'));
  };
  const location = useLocation();


  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      {/* Toggle dark mode button on all pages */}
      <ToggleDarkmode
        isChecked={isDark}
        handleChange={toggleTheme}
      />
      <AnimatedRoutes isDark={isDark} toggleTheme={toggleTheme} />

      {/* Floating Chat Button */}
      {location.pathname !== '/chat' && (
        <Link to="/chat" className={`floating-chat-btn ${chatHidden ? "is-hidden" : ""}`} aria-label="Chat with my CV">
          <i className="uil uil-comment-alt-lines"></i>
        </Link>
      )}
    </div>
  )
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  )
}

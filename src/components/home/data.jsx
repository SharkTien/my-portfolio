import React from "react"
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Social from "./social";

const ease = [0.16, 1, 0.3, 1];

// The name assembles letter by letter, each rising out of its own mask.
const NameReveal = ({ text }) => {
  const reduceMotion = useReducedMotion();
  return (
    <h1 className="home__title" aria-label={text}>
      {text.split(" ").map((word, w) => (
        <span className="home__title-word" key={word} aria-hidden="true">
          {[...word].map((char, c) => (
            <motion.span
              key={c}
              className="home__title-char"
              initial={reduceMotion ? { opacity: 0 } : { y: "105%", rotate: 8 }}
              animate={reduceMotion ? { opacity: 1 } : { y: "0%", rotate: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.2 + (w * 5 + c) * 0.035 }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
};

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

const Data = () => {
  return (
    <div className="home__data">
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'stretch' }}>
        <motion.h2
          initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="home__subtitle" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', margin: 0, textAlign: 'center', whiteSpace: 'nowrap' }}>
          You can call me Felik
        </motion.h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <NameReveal text="Huynh Viet Tien" />
          <motion.p className="home__description" style={{ margin: 0 }} {...fadeUp(0.75)}>
            I'm a developer/ AI engineer based in Ho Chi Minh City, Vietnam. I have a strong passion for exploring new challenges
            and opportunities that push my limits and expand my thinking. <br />
          </motion.p>
          <motion.div {...fadeUp(0.9)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/chat" className="home__chat-btn">
              <i className="uil uil-comment-alt-dots"></i>
              Chat with me
            </Link>
            <span className="home__chat-hint">✦ Analyze my CV easier with AI</span>
          </motion.div>
          <motion.div {...fadeUp(1.05)}>
            <Social />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Data
import React from "react"
import { Link } from "react-router-dom";
import Social from "./social";

const Data = () => {
  return (
    <div className="home__data">
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'stretch' }}>
        <h2 className="home__subtitle" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', margin: 0, textAlign: 'center', whiteSpace: 'nowrap' }}>
          You can call me Felik
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h1 className="home__title">Huynh Viet Tien</h1>
          <p className="home__description" style={{ margin: 0 }}>
            I'm a developer/ AI engineer based in Ho Chi Minh City, Vietnam. I have a strong passion for exploring new challenges
            and opportunities that push my limits and expand my thinking. <br />
          </p>
          <Link to="/chat" className="home__chat-btn">
            <i className="uil uil-comment-alt-dots"></i>
            Chat with me
          </Link>
          <span className="home__chat-hint">✦ Analyze my CV easier with AI</span>
          <Social />
        </div>
      </div>
    </div>
  )
}

export default Data
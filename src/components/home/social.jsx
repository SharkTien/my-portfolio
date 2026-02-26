import React from "react";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/ryukita_1552/?fbclid=IwAR1UUg-PKJCjHbARxifAZhic6MQmklJVGkj2x1N3HVXjl1uqqkmT2vAgCZM"
                className="home__social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-instagram"></i> <span>business.tienhv@gmail.com</span>
            </a>

            <a href="https://www.facebook.com/tengzine/"
                className="home__social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-facebook"></i> <span>facebook.com/tengzine</span>
            </a>

            <a href="https://github.com/SharkTien"
                className="home__social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-github-alt"></i> <span>github.com/SharkTien</span>
            </a>
        </div>
    )
}

export default Social
import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">4 Years Programming</span>
            </div>

            <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">10+ Projects</span>
            </div>

            <div className="about__box">
            <i className="bx bx-support about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online (+7) <p>8:00 - 23:00</p></span>
            </div>

        </div>
    )
}

export default Info
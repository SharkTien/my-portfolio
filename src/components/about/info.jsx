import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">5+ Years Programming</span>
            </div>

            <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">20+ Projects</span>
            </div>

            <div className="about__box">
                <i className="bx bx-graduation about__icon"></i>
                <h3 className="about__title">GPA</h3>
                <span className="about__subtitle"><p>3.3/4.0</p></span>
            </div>

        </div>
    )
}

export default Info
import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
        const [toggleState, setToggleState] = useState(1);
        const toggleTab = (index) => {
            setToggleState(index);
        }
    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification & Awards</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>

                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">IELTS 6.5</h3>
                                <span className="qualification__subtitle">Vietnam - Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    23/3/2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Bronze Prize - Vietnam National Informatics Olympiad</h3>
                                <span className="qualification__subtitle">VAIP & Ministry of Education and Training</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2021
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Silver Prize - Youth Creativity Competition</h3>
                                <span className="qualification__subtitle">Thua Thien Hue Province - Ho Chi Minh Communist Youth Union</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Top 2 - TEMPO RUN: Signboard Detection Challenge</h3>
                                <span className="qualification__subtitle">UIT AI Club</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2025
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Top 4 - ROOMELSA</h3>
                                <a href="https://aichallenge.hcmus.edu.vn/shrec-2025/smart3droom" className="qualification__subtitle">Vietnam National University, VNUHCM-US</a>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Top 24 / 797 teams “Potential Award”</h3>
                                <span className="qualification__subtitle">AI Challenge – Ho Chi Minh City 2025</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2025
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UI/UX Designer</h3>
                                <span className="qualification__subtitle">High School Team</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2020 - 2021
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Fullstack Developer - Senior Dev</h3>
                                <span className="qualification__subtitle">Digital TGN</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2024 - now
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web developer</h3>
                                <span className="qualification__subtitle">University Team</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2024 - now
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">International Relations & Matching Team</h3>
                                <span className="qualification__subtitle">AIESEC in Vietnam (HCME branch)</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    3/2024 - 1/2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">National Marketing Manager of Data & Automation – AIESEC in Vietnam </h3>
                                <span className="qualification__subtitle">AIESEC in Vietnam</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2025 - now
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">AvePoint Trainee Program 2025 — Developer Track</h3>
                                <span className="qualification__subtitle">AvePoint</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"> </i>
                                    2025 - now
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
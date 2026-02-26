import React, { useState } from "react";
import "./qualification.css";

const educationData = [
    {
        title: "3rd Prize -Science and Technology Competition",
        subtitle: "Ministry of Education and Training",
        date: "2021",
        isHighSchool: true
    },
    {
        title: "Bronze Prize - Vietnam National Informatics Olympiad",
        subtitle: "VAIP & Ministry of Education and Training",
        date: "2021",
        isHighSchool: true
    },
    {
        title: "2nd Prize - Youth Creativity Competition",
        subtitle: "Thua Thien Hue Province - Ho Chi Minh Communist Youth Union",
        date: "2021",
        isHighSchool: true
    },
    {
        title: "IELTS 6.5",
        subtitle: "Vietnam - Institute",
        date: "23/3/2023",
        isHighSchool: false
    },
    {
        title: "Bachelor of Artificial Intelligence",
        subtitle: "VNUHCM - University of Information Technology | GPA: 3.31/4.0",
        date: "2023 - 2027",
        isHighSchool: false
    },
    {
        title: "Top 2 - TEMPO RUN: Signboard Detection Challenge",
        subtitle: "UIT AI Club",
        date: "2024",
        isHighSchool: false
    },
    {
        title: "Top 4 - ROOMELSA",
        subtitle: "Vietnam National University, VNUHCM-US",
        link: "https://aichallenge.hcmus.edu.vn/shrec-2025/smart3droom",
        date: "2025",
        isHighSchool: false
    },
    {
        title: "Top 24 / 797 teams “Potential Award”",
        subtitle: "AI Challenge – Ho Chi Minh City 2025",
        date: "2025",
        isHighSchool: false
    }
];

const experienceData = [
    {
        title: "Frontend Dev",
        subtitle: "Mentor at High School Science and Technology Club",
        date: "2021 - 2022",
        isHighSchool: true
    },
    {
        title: "Dev Freelancer",
        subtitle: "Digital TGN",
        date: "10/2024 - 10/2025",
        isHighSchool: false
    },
    {
        title: "International Relations & Matching Team",
        subtitle: "AIESEC in Vietnam",
        date: "3/2024 - 1/2025",
        isHighSchool: false
    },
    {
        title: "National Marketing Manager of Data & Automation",
        subtitle: "AIESEC in Vietnam",
        date: "7/2025 - 1/2026",
        isHighSchool: false
    },
    {
        title: "Developer Trainee",
        subtitle: "AvePoint",
        date: "11/2025 - 2/2026",
        isHighSchool: false
    }
];

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const [showHighSchool, setShowHighSchool] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const renderData = (dataList) => {
        const filteredList = dataList.filter(item => showHighSchool || !item.isHighSchool);

        return filteredList.map((item, index) => {
            const isLeft = index % 2 === 0;
            const content = (
                <>
                    <h3 className="qualification__title">{item.title}</h3>
                    {item.link ? (
                        <a href={item.link} className="qualification__subtitle" target="_blank" rel="noreferrer">{item.subtitle}</a>
                    ) : (
                        <span className="qualification__subtitle">{item.subtitle}</span>
                    )}
                    <div className="qualification__calender">
                        <i className="uil uil-calendar-alt"> </i>
                        {item.date}
                    </div>
                </>
            );

            return (
                <div className="qualification__data" key={index}>
                    {isLeft ? (
                        <>
                            <div>{content}</div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>{content}</div>
                        </>
                    )}
                </div>
            );
        });
    };

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Education & Experience</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '8px', fontSize: 'var(--small-font-size)', color: 'var(--text-color)' }}>
                        <input
                            type="checkbox"
                            checked={showHighSchool}
                            onChange={() => setShowHighSchool(!showHighSchool)}
                            style={{ cursor: 'pointer', accentColor: 'var(--title-color)', overflow: 'hidden' }}
                        />
                        Show High School achievements
                    </label>
                </div>

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
                        {renderData(educationData)}
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {renderData(experienceData)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
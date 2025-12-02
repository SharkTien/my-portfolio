import React from "react";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Hard Skills</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">FastAPI, Flask</span>
                    </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Github, Gitlab, GitActions</span>
                    </div>
                    </div>
                    
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Web development</h3>
                        <span className="skills__level">HTML, CSS, Javascript, React</span>
                    </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">AI</h3>
                        <span className="skills__level">NLP, Computer Vision, Machine Learning</span>
                    </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Wordpress, Laravel</span>
                    </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Database</h3>
                        <span className="skills__level">MySQL, PostgreSQL, Vector Database</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend
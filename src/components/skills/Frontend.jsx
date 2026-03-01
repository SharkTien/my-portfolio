import React from "react";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Hard Skills</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-check-shield"></i>
                        <div>
                            <h3 className="skills__name">Scripting</h3>
                            <span className="skills__level">Python, C#,<br />SQL, JS</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-check-shield"></i>
                        <div>
                            <h3 className="skills__name">Tools &<br />Systems</h3>
                            <span className="skills__level">Docker, Git,<br />Linux,<br />VectorDB</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-check-shield"></i>
                        <div>
                            <h3 className="skills__name">Web<br />development</h3>
                            <span className="skills__level">React,<br />FastAPI</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-check-shield"></i>
                        <div>
                            <h3 className="skills__name">AI</h3>
                            <span className="skills__level">CV, Vision-<br />Language<br />Models,<br />NLP, Data<br />Analytics,<br />PyTorch,<br />Scikit-<br />Learn</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend
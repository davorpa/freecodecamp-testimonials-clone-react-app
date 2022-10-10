import React from "react";
import "./Testimonial.css";

function Testimonial() {
    return (
        <div className="testimonial">
            <div className="testimonial-header">
                <img
                    className="testimonial-picture"
                    src={require("../images/testimonial-emma.png")}
                    alt="Emma Bostian"
                />
            </div>
            <div className="testimonial-footer">
                <div className="testimonial-meta">
                    <p className="testimonial-who">
                        <span className="testimonial-who-name">
                            Emma Bostian
                        </span>{" "}
                        en{" "}
                        <span className="testimonial-who-location">Suecia</span>
                    </p>
                    <p className="testimonial-job">
                        <span className="testimonial-job-position">
                            Ingeniera de software
                        </span>{" "}
                        en{" "}
                        <span className="testimonial-job-company">Spotify</span>
                    </p>
                </div>
                <div className="testimonial-quot">
                    "Siempre he tenido problemas para aprender JavaScript. He
                    tomado muchos cursos, pero el curso de freeCodeCamp fue el
                    que se quedó. Estudiar JavaScript, así como estructuras de
                    datos y algoritmos en{" "}
                    <strong>freeCodeCamp me dio las habilidades</strong> y la
                    confianza que necesitaba para conseguir el trabajo de mis
                    sueños como ingeniero de software en Spotify."
                </div>
            </div>
        </div>
    );
}

export default Testimonial;

import React from "react";
import "./Testimonial.css";

function Testimonial(props) {
    const { name, country, position, company, children: quote } = props;
    return (
        <div className="testimonial">
            <div className="testimonial-header">
                <img
                    className="testimonial-picture"
                    src={require("../images/testimonial-emma.png")}
                    alt={name}
                />
            </div>
            <div className="testimonial-footer">
                <div className="testimonial-meta">
                    <p className="testimonial-who">
                        <span className="testimonial-who-name">{name}</span> en{" "}
                        <span className="testimonial-who-location">
                            {country}
                        </span>
                    </p>
                    <p className="testimonial-job">
                        <span className="testimonial-job-position">
                            {position}
                        </span>{" "}
                        en{" "}
                        <span className="testimonial-job-company">
                            {company}
                        </span>
                    </p>
                </div>
                <div className="testimonial-quot">"{quote}"</div>
            </div>
        </div>
    );
}

export default Testimonial;

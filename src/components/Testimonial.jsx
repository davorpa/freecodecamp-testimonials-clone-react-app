import React from "react";
import "./Testimonial.css";

function Testimonial(props) {
    const { name, image, country, position, company, children: quote } = props;
    return (
        <div className="testimonial">
            <div className="testimonial-header">
                <img
                    className="testimonial-picture"
                    src={loadImage(image)}
                    alt={name}
                />
            </div>
            <div className="testimonial-footer">
                <div className="testimonial-meta">
                    <p className="testimonial-who">
                        <strong className="testimonial-who-name">{name}</strong>{" "}
                        en{" "}
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

function loadImage(id) {
    try {
        return require(`../images/testimonial-${id}.png`);
    } catch (e) {
        return require(`../images/testimonial.png`);
    }
}

export default Testimonial;

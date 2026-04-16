import React from "react";
import "./qual.css";

const Qualification = () => {
  return (
    <section className="qualification section" id="Qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button qualification__active "
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active ">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Master Science</h3>
                <span className="qualification__subtitle">
                  Cumberland University
                </span>
                <span>
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> January 2024 - Present
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
                <h3 className="qualification__title">B. Tech</h3>
                <span className="qualification__subtitle">
                  Mewar University, Rajasthan
                </span>
                <span>
                  Percentage: 52
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> July 2015 - March 2019
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">
                Chaitanya Junior College
                </span>
                <span>
                  Percentage: 54
                </span>
                <div className="qualification__calander">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2015
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
  );
};

export default Qualification;

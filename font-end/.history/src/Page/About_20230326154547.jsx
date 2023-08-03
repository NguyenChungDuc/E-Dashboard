import React from "react";
import about_1 from "../Assets/about-1.avif";
import "../Style/About.css";

function About() {
  return (
    <div className="about">
      <div className="form">
        <h4 className="title">About Chungduc_ Restaurent</h4>
        <p id="about-us">
          Our mission is to be the smartest and most helpful food platform in
          existence.
        </p>
        <p id="about-us_secon">
          We're fulfilling this mission by improving life in the kitchen for
          millions of home cooks around the world.
        </p>
      </div>
      <div className="rate">
        <div className="form-rate">
          <img src={about_1} alt="" />
          <div className="rate-form"></div>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";

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
        <div className="rate">
          <div className="rate_about">
            <h1>4.5+</h1>
            <p>App Rating</p>
          </div>
          <div className="rate_about">
            <h1>2M+</h1>
            <p>Recipes</p>
          </div>
          <div className="rate_about">
            <h1>22M</h1>
            <p>Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

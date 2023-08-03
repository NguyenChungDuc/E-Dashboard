import React from "react";
import about_1 from "../Assets/about-1.avif";
import about_2 from "../Assets/about-2.avif";
import about_3 from "../Assets/about-3.avif";
import about_4 from "../Assets/about-4.avif";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PeopleIcon from "@mui/icons-material/People";
import RestaurantIcon from "@mui/icons-material/Restaurant";

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
      <div className="category">
        <div className="form-category">
          <img src={about_1} alt="" />
          <div className="rate">
            <StorefrontIcon className="icon" />
            <div className="form-rate">
              <h1>8+</h1>
              <p>Store</p>
            </div>
          </div>
        </div>
        <div className="form-category">
          <img src={about_2} alt="" />
          <div className="rate">
            <SupportAgentIcon className="icon" />
            <div className="form-rate">
              <h1>200</h1>
              <p>Staff</p>
            </div>
          </div>
        </div>
        <div className="form-category">
          <img src={about_3} alt="" />
          <div className="rate">
            <PeopleIcon className="icon" />
            <div className="form-rate">
              <h1>5000+</h1>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="form-category">
          <img src={about_4} alt="" />
          <div className="rate">
            <RestaurantIcon className="icon" />
            <div className="form-rate">
              <h1>40</h1>
              <p>Dish</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import { Helmet } from "react-helmet";
import image1 from "../Assets/home1.avif";
import image2 from "../Assets/home2.avif";
import image3 from "../Assets/home3.avif";
import image4 from "../Assets/home4.avif";
import image5 from "../Assets/home5.avif";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className="headerContainer">
        <h1>Chungduc_ Restaurent</h1>
        <h3>Always bring customers the best quality food</h3>
        <h3 id="type-js"></h3>
        <div className="image"></div>
        <Link to="/product">
          <button>Oder Now</button>
        </Link>
      </div>
      <div className="scroll">
        <KeyboardArrowDownIcon className="scroll-btn"></KeyboardArrowDownIcon>
      </div>
      <div className="bodyContainer">
        <div className="aboutBodyContainer">
          <div className="form-about">
            <div className="infomation">
              <h1> drinks</h1>
              <p>
                Beverage or beverage is a type of liquid that is specially
                processed for human consumption, which has the effect of cooling
                and refreshing. Drinks play an important role in human culture.
                Popular drinks include water, milk, coffee, tea, hot chocolate,
                smoothies and soft drinks. In addition, alcoholic beverages such
                as wine, beer and distilled spirits containing ethanol have been
                part of human culture for over 8,000 years. Non-alcoholic
                beverages may refer to beverages that contain alcohol, such as
                beer and wine, but these contain less than 5% alcohol by volume.
                Non-alcoholic beverages also include beverages that have
                undergone alcohol removal such as non-alcoholic beer and
                de-alcoholic wine......
              </p>
              <button>oder now</button>
            </div>
            <div className="infomation">
              <h1> drinks</h1>
              <p>
                Beverage or beverage is a type of liquid that is specially
                processed for human consumption, which has the effect of cooling
                and refreshing. Drinks play an important role in human culture.
                Popular drinks include water, milk, coffee, tea, hot chocolate,
                smoothies and soft drinks. In addition, alcoholic beverages such
                as wine, beer and distilled spirits containing ethanol have been
                part of human culture for over 8,000 years. Non-alcoholic
                beverages may refer to beverages that contain alcohol, such as
                beer and wine, but these contain less than 5% alcohol by volume.
                Non-alcoholic beverages also include beverages that have
                undergone alcohol removal such as non-alcoholic beer and
                de-alcoholic wine......
              </p>
              <button>oder now</button>
            </div>
            <div className="form-image">
              <div className="image">
                <div className="item">
                  <img src={image1} alt="" />
                </div>
                <div className="item">
                  <img src={image2} alt="" />
                </div>
                <div className="item">
                  <img src={image3} alt="" />
                </div>
                <div className="item">
                  <img src={image4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

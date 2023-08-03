import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import { Helmet } from "react-helmet";
import drink1 from "../Assets/drink1.avif";
import drink2 from "../Assets/drink2.avif";
import drink3 from "../Assets/drink3.avif";
import drink4 from "../Assets/drink4.avif";
import drink5 from "../Assets/drink5.avif";
import Dessert1 from "../Assets/Dessert1.avif";
import Dessert2 from "../Assets/Dessert2.avif";
import Dessert3 from "../Assets/Dessert3.avif";
import Dessert4 from "../Assets/Dessert4.avif";
import Dessert5 from "../Assets/Dessert5.avif";
import chef from "../Assets/chef.png";

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
      <div className="chef">
        <div className="infomation_chef">
          <h1>Chef</h1>
          <h3>Gordon James Ramsay</h3>
        </div>
        <img src={chef} alt="" />
      </div>
      <div className="bodyContainer">
        <div className="aboutBodyContainer">
          <div className="form-about-drink">
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
                  <img src={drink1} alt="" />
                </div>
                <div className="item">
                  <img src={drink2} alt="" />
                </div>
                <div className="item">
                  <img src={drink3} alt="" />
                </div>
                <div className="item">
                  <img src={drink4} alt="" />
                </div>
                <div className="item">
                  <img src={drink5} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-about-desserts">
            <div className="form-image">
              <div className="image">
                <div className="item">
                  <img src={Dessert1} alt="" />
                </div>
                <div className="item">
                  <img src={Dessert2} alt="" />
                </div>
                <div className="item">
                  <img src={Dessert3} alt="" />
                </div>
                <div className="item">
                  <img src={Dessert4} alt="" />
                </div>
                <div className="item">
                  <img src={Dessert5} alt="" />
                </div>
              </div>
            </div>
            <div className="infomation">
              <h1>desserts</h1>
              <p>
                Dessert is a snack (maybe a confectionery) served at the end of
                a main meal. Portions are small but beautifully presented. This
                dish usually includes sweet foods, and can be drinks such as
                dessert wines or liqueurs, but can include coffee, cheese, nuts,
                or other treats. In some parts of the world, such as much of
                Central and West Africa, and most parts of China, there is no
                tradition of eating a dessert to end a meal. The word "dessert"
                can apply to confectionery, such as cakes, tarts, cookies,
                gelatin, ice cream, pie, pudding, custard and sweet soup. Fruit
                is also commonly found in desserts because of its sweetness.
                Some cultures have sweetened popular favorite foods to create
                new desserts...
              </p>
              <button>oder now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

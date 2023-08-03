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
              <h1>drinks</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dolorem odio nostrum hic fugit iusto autem molestias aperiam
                natus, eligendi consequuntur reiciendis, corporis tempore
                excepturi, similique corrupti veniam ex. Vel!
              </p>
            </div>
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
  );
}

export default Home;

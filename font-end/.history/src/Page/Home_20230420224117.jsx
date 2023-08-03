import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import { Helmet } from "react-helmet";
import image1 from "../Assets/home1.avif";

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
      <div className="bodyContainer">
        <div className="image">
          <div className="item">
            <img src="" alt="" />
          </div>
          <div className="item">
            <img src="" alt="" />
          </div>
          <div className="item">
            <img src="" alt="" />
          </div>
          <div className="item">
            <img src="" alt="" />
          </div>
          <div className="item">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

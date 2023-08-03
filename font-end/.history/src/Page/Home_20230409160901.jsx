import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import { Helmet } from "react-helmet";

function Home() {
  // let letter = 0;
  // const text = "Always bring customers delicious food";
  // function typeText() {
  //   if (letter < text.length) {
  //     document.getElementsByClassName("type-js").innerHTML +=
  //       text.charAt(letter);
  //     letter++;
  //     let speed = Math.floor(Math.random() * 150) + 50;
  //     setTimeout(typeText, speed);
  //   }
  // }
  return (
    <div className="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className="headerContainer">
        <h1>Chungduc_ Restaurent</h1>
        <h3 className="type-js">Always bring customers delicious food</h3>
        <div className="image"></div>
        <Link to="/product">
          <button>Oder Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

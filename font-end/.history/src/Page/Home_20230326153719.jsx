import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Chungduc_ Restaurent</h1>
        <h3>Always bring customers delicious food</h3>
        <div className="image"></div>
        <Link to="/product">
          <button>Oder Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

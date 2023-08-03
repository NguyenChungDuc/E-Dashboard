import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Navbar.css";
import logo from "../Assets/logo.png";

function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Menu</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Log Out <span>[{JSON.parse(auth).name}]</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className=" nav-log">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;

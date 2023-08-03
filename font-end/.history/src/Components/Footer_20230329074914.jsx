import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";
import "../Style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="firstColum">
        <h3>Useful Link</h3>
        <div className="itemColum">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">ShopLink </Link>
          <Link to="/">Blog</Link>
        </div>
      </div>
      <div className="seconColum">
        <h3>New Sletter</h3>
        <input type="gmail" placeholder="Your Email Address" />
        <button>Subcribe Now</button>
      </div>
      <div className="threeColum">
        <h3>Contact</h3>
        <a href="https://goo.gl/maps/jQrPkzsVToBZDQcj6">
          566 Núi Thành , Hòa Cường Nam ,<br /> Hải Châu , Đà Nẵng
        </a>
        <div className="iconFooter">
          <Link
            target={"blank"}
            to={"https://www.facebook.com/chungduc.nguyen.353/"}
          >
            <FacebookIcon className="iconStyle" />
          </Link>
          <Link target={"blank"} to={"https://twitter.com/?lang=vi"}>
            <TwitterIcon className="iconStyle" />
          </Link>
          <Link target={"blank"} to={"https://www.instagram.com/chungduc_/"}>
            <InstagramIcon className="iconStyle" />
          </Link>
          <Link>
            <LocalPhoneIcon className="iconStyle" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

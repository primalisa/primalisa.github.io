import React from "react";
import "./Footer.css";
import logo from "./Logo.png";

import facebook from "./followusicons/facebook.png";
import google from "./followusicons/google-plus.png";
import icons from "./followusicons/Icons.png";
import insta from "./followusicons/instagram.png";
import pintrest from "./followusicons/pinterest.png";
import twitter from "./followusicons/twitter.png";




const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="a">
          <img className="logo" src={logo} alt="" />
          <p style={{textAlign:'justify'}}>
            Every festival or occasion in India brings a lot of joy and
            happiness for everyone. For Some, it's the season of gifts.
          </p>
        </div>
        <div className="a">
          <p>About Us</p>
          <p>FAQ</p>
          <p>Terms of Use</p>
        </div>
        <div className="a">
          <p>Privacy Policy</p>
          <p>Refund & Cancellation Policy</p>
          <p>Grievance</p>
        </div>
        <div className="a">
          <p>Follow Us on</p>
          <div>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={icons} alt="" />
            <img src={google} alt="" />
            <img src={insta} alt="" />
            <img src={pintrest} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

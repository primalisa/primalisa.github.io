import React from "react";
import fb from "./images/facebook (1).jpg";
import twitter from "./images/twitter (1).jpg";
import insta from "./images/instagram (1).jpg";
import google from "./images/google-plus (1).jpg";
import pinterest from "./images/pinterest (2).jpg";
import linkedin from "./images/linkedin (1).jpg";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div className="SocialMediamain">
      <h1 className="heading"
        style={{
          textAlign: "center",
          marginTop: "71px",
          marginBottom: "109px",
          

        }}
      >
        Social Media
      </h1>
      <div className="sideBySide" style={{ marginBottom: "189px" }}>
        <img
          
          style={{ width: "6%", height: "6%"}}
          src={ fb }
          alt="Hola"
        />

        <img
          
          style={{ width: "6%", height: "6%" }}
          src={twitter} alt="Hola"
        />

        <img
          
          style={{ width: "6%", height: "6%" }}
          src={linkedin} alt="Hola"
        />

        <img
          
          style={{ width: "6%", height: "6%" }}
          src={google} alt="Hola"
        />

        <img
          
          style={{ width: "6%", height: "6%" }}
          src={insta} alt="Hola"
        />

        <img
          
          style={{ width: "6%", height: "6%" }}
          src={pinterest} alt="Hola"
        />
      </div>
    </div>
  );
}

export default SocialMedia;

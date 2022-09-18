import React from "react";
import Button from "@mui/material/Button";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signUp">
      <h1 className="head"
        color="#ffffff"
        style={{
          width: "80%",
          height: "194px",
          textAlign: "center",
          font: "normal normal medium 71px/94px Poppins",
        }}
      >
        A few clicks away from <br /> Login into your <span className="span">Yellowmetals Account</span>
      </h1>
      <br />
      <Button className="SignUpButton"
        variant="contained"
        sx={{
          textTransform: "capitalize",
          width: "20%",
          height: "87px",
          fontSize: "3rem",
          backgroundColor:"#0D51D2"
        }}
      >
        sign Up
      </Button>
    </div>
  );
}

export default SignUp;

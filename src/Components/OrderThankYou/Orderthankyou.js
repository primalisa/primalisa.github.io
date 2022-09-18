import React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";

import thankyou from "./thankyou.png"

const OrderThankYou = () => {
  return (
    <div style={{ width: "100%", height: "100%"}}>
      <div style={{ padding: "100px", height: "100%" }}>
        <Grid
        
          container
          direction="column"
          justifyContent="center"
          style={{ height:'100%',gridGap: "30px" }}
          alignItems="center"
        >
          <img src={thankyou} alt="" />
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "4.5rem",
              letterSpacing: "-1.26px",
              color: "#000000",
              opacity: "0.99",
              fontWeight: "bold",
            }}
            variant="h4"
          >
            Thank you for your order
          </Typography>
          <Typography  style={{
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              letterSpacing: "-0.7px",
              color: "#000000",
              opacity: "0.99",
              fontWeight:'600'
           
            }} variant="h4">Order Number is : 3086543</Typography>

          <Typography style={{
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              letterSpacing: "-0.7px",
              color: "#000000",
              opacity: "0.99",
              fontWeight:'600'
           
            }} variant="h4">You will be receiving a mail from yellowmetals shortly</Typography>

          <Typography style={{
              fontFamily: "Poppins",
              fontSize: "2.5rem",
              letterSpacing: "-0.7px",
              color: "#000000",
              opacity: "0.99",
              fontWeight:'600'
           
            }} variant="h4">Contact Us on : 9656789098</Typography>
        </Grid>
      </div>
    </div>
  );
};

export default OrderThankYou;

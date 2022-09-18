import React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import thankyou from "../thankyou.png";
const track = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ padding: "60px", height: "100%" }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          style={{ height: "100%", gridGap: "30px" }}
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
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "3rem",
              letterSpacing: "-0.7px",
              color: "#000000",
              opacity: "0.99",
             
            }}
            variant="h4"
          >
            Order Number is : 3086543
          </Typography>

          <fieldset
            style={{ padding: "20px", borderRadius: "10px", width: "30%",border:'1px solid #707070'}}
          >
            <legend
              style={{
                fontFamily: "Poppins",
                fontSize: "2.6rem",
                letterSpacing: "-0.59px",
                color: "#000000",
                opacity: "0.99",
                padding:"10px"
              }}
            >
              Delivery Address
            </legend>
            <Typography
              style={{
                fontFamily: "Open Sans",
                fontSize: '3rem',
                padding:'20px',
               
                color: "#000000",
                opacity: "0.99",
               
              }}
              variant="h4"
            >
              State CAMPUS BOX 1704 WEEKSVILLE ROAD ELIZABETH CITY,NC 27909{" "}
            </Typography>
          </fieldset>

          <Button
            variant="outlined"
            style={{
              width: "30%",
              textTransform: "capitalize",
              borderRadius: "10px",
            }}
          >
            {" "}
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "3.3rem",
                letterSpacing: "-0.92px",
                color: "#000000",
                opacity: "0.99",
                fontWeight: "500",
                color: "#4562DB",
                padding: "10px",
              }}
              variant="h4"
            >
              Track your order Order
            </Typography>
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default track;

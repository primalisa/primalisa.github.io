import { defaultListboxReducer } from "@mui/base";
import React from "react";

import "./Platinumcoin.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";

import platinumcoin from "../images/PlatinumCoin.png";
import offer from "../images/30%off.png";
import wishlist from "../images/wishlist.png";
import addicon from "../images/addicon.png";

import { borderRadius } from "@mui/system";

const PlatinumCoin = () => {
  return (
    <Grid
      className="Coin"
      container
      direction="column"
      sx={{
        height: "764px",
        width: "100%",
        width: "23%",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${platinumcoin})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "494px",
          width: "100%",
        }}
      >
        <Grid container justifyContent="space-between">
          <img style={{ margin: "20px" }} src={offer} alt="" />
          <img style={{ margin: "20px" }} src={wishlist} alt="" />
        </Grid>
      </Box>
      <Box sx={{ width: "100%", height: "270px" }}>
        <Grid
         className="seconditem"
          style={{ gridGap: "15px" }}
          direction="column"
          container
          sx={{ height: "100%", paddingLeft:'20px',paddingRight:'20px',paddingTop:'10px',paddingBottom:'10px'}}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            item
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="h1"
              className="productprice"
              style={{
                fontSize: "2.5rem",

                fontWeight: "bold",
              }}
            >
              Starting from
            </Typography>

            <Typography
              variant="h1"
              className="productprice"
              style={{
                fontSize: "2.5rem",

                fontWeight: "bold",
              }}
            >
              Min Quantity
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ height: "40px" }}
          >
          <Typography
              variant="h1"
              className="productprice"
              style={{color:'#4764DB'}}
            >
              &#8377;1,09,179{" "}

              <Typography
              variant="p"
              style={{fontSize:'2rem'}}
             
              
            >
              Per Unit
            </Typography>

            </Typography>

            <Typography variant="h1" className="productprice" s>
              100
            </Typography>
          </Grid>

          <Grid item justifyContent="center" alignSelf="flex-start">
            <Typography className="tworem" variant="h3" style={{ fontWeight: "bold" }}>
              20g, 24Kt Lord Balaji Platinum Coin{" "}
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ height: "50px" }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#4562DB",
                height: "80%",
                borderRadius: "10px",
                textTransform: "capitalize",
              }}
            >
              <Typography variant="h5">Purity 916</Typography>
            </Button>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#4562DB",
                height: "80%",
                borderRadius: "10px",
                textTransform: "capitalize",
              }}
            >
              <Typography variant="h5">24k Carat</Typography>
            </Button>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#4562DB",
                height: "80%",
                borderRadius: "10px",
                textTransform: "capitalize",
              }}
            >
              <Typography variant="h5">Approx.Weight - 20 g</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default PlatinumCoin;

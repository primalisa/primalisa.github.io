import { defaultListboxReducer } from "@mui/base";
import React from "react";

import "./Silvercoin.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";

import silvercoin from "../images/SilverCoin.png";
import offer from "../images/30%off.png";
import wishlist from "../images/wishlist.png";
import addicon from "../images/addicon.png";

import { borderRadius } from "@mui/system";

const SilverCoin = () => {
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
          backgroundImage: `url(${silvercoin})`,
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
          style={{gridGap:'15px'}}
          direction="column"
          container
          sx={{ height: "100%", padding: "40px"}}
          justifyContent="space-between"
          alignItems="center"
        >
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
              sx={{ height: "100%" }}
            >
              &#8377;1,09,179{" "}
            </Typography>
            <Button
              className="button"
              sx={{
                height: "100%",
                textTransform: "capitalize",
                color: "#4562DB",
                fontSize: "2.5rem",
                backgroundColor: "#EAF2FF",
                borderRadius: "30px",
                fontWeight: "bold",
              }}
              variant="contained"
              endIcon={<img src={addicon} />}
            >
              <Typography variant="h3" sx={{ height: "100%" }}>
                Add{" "}
              </Typography>
            </Button>
          </Grid>

          <Grid item
          justifyContent="center"
          alignSelf="flex-start"><Typography variant="h3" className="tworem" style={{fontWeight:"bold"}} >20g, 24Kt Lord Balaji Silver Coin </Typography></Grid>

          <Grid 
          item
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "50px" }}
          >
            <Button variant="contained" style={{backgroundColor:'#4562DB',height:'80%',borderRadius:'10px',textTransform: "capitalize",} }>
              <Typography variant="h5">
              Purity 916
              </Typography>

            </Button>

            <Button variant="contained" style={{backgroundColor:'#4562DB',height:'80%',borderRadius:'10px',textTransform: "capitalize",} }>
              <Typography variant="h5">
              24k Carat 
              </Typography>

            </Button>

            <Button variant="contained" style={{backgroundColor:'#4562DB',height:'80%',borderRadius:'10px',textTransform: "capitalize",} }>
              <Typography variant="h5">
                  Approx.Weight - 20 g
              </Typography>

            </Button>
        
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default SilverCoin;

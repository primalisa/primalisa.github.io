import React from "react";

import "./categorizeproducts.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";


const Categorizeproducts = () => {
  return (
    <Box className="container1" sx={{ backgroundColor: "#EAF2FF" }} lg>
      <Grid
        gap={2}
        xs
        container
        className="categorizeproducts"
        justifyContent="space-between"
        alignContent="center"
      >
        <Grid
          item
          container
          gap={3}
          xl={3}
          justifyContent="center"
          alignContent="center"
        >
          <Typography className="buttonnames" variant="h5">
            Products
          </Typography>
          "
          <Button
            className="categorizeproductbuttons"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "white",
              height: "80px",
              width:"100px"
             
            }}
            size="large"
            variant="contained"
          >
            <Typography className="buttonnames" variant="h5">
              YM
            </Typography>
          </Button>
          <Button
            className="categorizeproductbuttons"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "white",
              height: "80px",
            }}
            size="large"
            variant="contained"
          >
            <Typography className="buttonnames" variant="h5">
              Non-YM
            </Typography>
          </Button>
        </Grid>

        <Grid
          item
          container
          gap={2}
          xl={6}
          justifyContent="center"
          alignContent="center"
        >
          <Typography className="buttonnames" variant="h5">
            Shapes
          </Typography>
          "
          <Button
            className="categorizeproductbuttons"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "white",
              height: "80px",
            }}
            size="large"
            variant="contained"
          >
            <Typography className="buttonnames" variant="h5">
              Square
            </Typography>
          </Button>
          <Button
            className="categorizeproductbuttons"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "white",
              height: "80px",
            }}
            size="large"
            variant="contained"
          >
            <Typography className="buttonnames" variant="h5">
              Rectangular
            </Typography>
          </Button>
          <Button
            className="categorizeproductbuttons"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "white",
              height: "80px",
            }}
            size="large"
            variant="contained"
          >
            <Typography className="buttonnames" variant="h5">
              Round
            </Typography>
          </Button>
          <Button
            className="categorizeproductbuttons"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "white",
              height: "80px",
            }}
            size="large"
            variant="contained"
          >
            <Typography className="buttonnames" variant="h5">
              Others
            </Typography>
          </Button>
        </Grid>

        <Grid
          item
          container
          xl={2}
          justifyContent="center"
          alignContent="center"
        >
          <Button
            className="categorizeproductbuttons"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "white",
              height: "80px",
              width:"300px"
            }}
            size="large"
            variant="contained"
          >
            <Typography className="buttonnames" variant="h5">
              Sort By Size
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Categorizeproducts;

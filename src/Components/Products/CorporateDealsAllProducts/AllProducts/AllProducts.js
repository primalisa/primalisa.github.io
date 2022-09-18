import React from "react";

import "./AllProducts.css"

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";

import SilverCoin from "../SilverCoin/SilverCoin";
import GoldCoin from "../GoldCoin/GoldCoin";
import PlatinumCoin from "../PlatinumCoin/PlatinumCoin";

const AllProducts =() =>
{

  return(
 <Box className="AllProducts">
   <Box className="container">
     <Grid container sx={{gridGap:'10px'}} justifyContent="space-between"
  alignItems="center">

     <GoldCoin/>
     <SilverCoin/>
     <GoldCoin/>
     <PlatinumCoin/>
     <GoldCoin/>
     <SilverCoin/>
     <GoldCoin/>
     <PlatinumCoin/>
     <GoldCoin/>
     <SilverCoin/>
     <GoldCoin/>
     <PlatinumCoin/>
     <GoldCoin/>
     <SilverCoin/>
     <GoldCoin/>
     <PlatinumCoin/>


     </Grid>
   </Box>
 </Box>


  )
}

export default AllProducts


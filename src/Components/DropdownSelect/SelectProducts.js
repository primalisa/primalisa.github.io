import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";

import "./selectproducts.css";

import menuicon from "./images/menuicon.png";
import products from "./images/products.png";
import carat from "./images/carat.png"
import purity from "./images/purity.png"
import denominations from "./images/weights.png"
import design from "./images/design.png"
import event from "./images/event.png"
import pricerange from"./images/price-range.png"


export default function SelectLabels() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    // setAge(event.target.value);
  };

  return (
   <div className="dropdown">
    <Box className="container1">

     <Grid
      justifyContent="center"
      xl={12}
      lg={12}
     
      xs={12}
   
      alignItems="center"
      container
      className="DropdownSelect"
    >
      <Grid item justifyContent="flex-start" xs={1} xl={1} md={2} container>
        <Grid>
          <img className="menuicon" src={menuicon} alt="" />
        </Grid>
      </Grid>

      <Grid item justifyContent="center" container  xl={2} lg={3} md={4}>
        <Box sx={{ width: "100%", height: "80px" }}>
          <FormControl
            className="Buttons"
            sx={{ width: "100%", height: "80px" }}
          >
            <InputLabel sx={{ width: "80%" }} id="demo-simple-select-label">
              {" "}
              <Button
                sx={{
                  width: "100%",

                  textTransform: "capitalize",
                }}
                variant="text"
                startIcon={<img src={products} alt="" />}
              >
                <Typography className="buttonnames" variant="h5">
                  Products
                </Typography>
              </Button>{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={}
              onChange={handleChange}
              displayEmpty
              // inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="Gold"
              >
                Gold
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="Silver"
              >
                Silver
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="Platinum"
              >
                Platinum
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>

      <Grid item justifyContent="center" container xl={2} lg={3} md={4}>
        <Box sx={{ width: "100%", height: "80px" }}>
          <FormControl
            className="Buttons"
            sx={{ width: "100%", height: "80px" }}
          >
            <InputLabel sx={{ width: "80%" }} id="demo-simple-select-label">
              {" "}
              <Button
                sx={{
                  width: "100%",

                  textTransform: "capitalize",
                }}
                variant="text"
                startIcon={<img src={carat} alt="" />}
              >
                <Typography className="buttonnames" variant="h5">
                Carat
                </Typography>
              </Button>{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={}
              onChange={handleChange}
              displayEmpty
              // inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="22k"
              >
               22k
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="24k"
              >
               24k
              </MenuItem>
            
            </Select>
          </FormControl>
        </Box>
      </Grid>

      <Grid item justifyContent="center" container xl={2} lg={3} md={4}>
        <Box sx={{ width: "100%", height: "80px" }}>
          <FormControl
            className="Buttons"
            sx={{ width: "100%", height: "80px" }}
          >
            <InputLabel sx={{ width: "80%" }} id="demo-simple-select-label">
              {" "}
              <Button
                sx={{
                  width: "100%",

                  textTransform: "capitalize",
                }}
                variant="text"
                startIcon={<img src={purity} alt="" />}
              >
                <Typography className="buttonnames" variant="h5">
               Purity
                </Typography>
              </Button>{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={}
              onChange={handleChange}
              displayEmpty
              // inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="999"
              >
               999
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="995"
              >
               995
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="995"
              >
               950
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="995"
              >
               916
              </MenuItem>
            
            </Select>
          </FormControl>
        </Box>
      </Grid>


      <Grid item justifyContent="center" container xl={2} lg={3} md={4}>
        <Box sx={{ width: "100%", height: "80px" }}>
          <FormControl
            className="Buttons"
            sx={{ width: "100%", height: "80px" }}
          >
            <InputLabel sx={{ width: "80%" }} id="demo-simple-select-label">
              {" "}
              <Button
                sx={{
                  width: "100%",

                  textTransform: "capitalize",
                }}
                variant="text"
                startIcon={<img src={denominations} alt="" />}
              >
                <Typography className="buttonnames" variant="h5">
                Denominations
                </Typography>
              </Button>{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={}
              onChange={handleChange}
              displayEmpty
              // inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="2 Gram"
              >
               2 Gram
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="1 Gram"
              >
               1 Gram
              </MenuItem>

              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="10 Gram"
              >
               10 Gram
              </MenuItem>

              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="5 Gram"
              >
               5 Gram
              </MenuItem>

              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="0.5 Gram"
              >
               0.5 Gram
              </MenuItem>
            
            </Select>
          </FormControl>
        </Box>
      </Grid>

      <Grid item justifyContent="center" container xl={2} lg={3} md={4}>
        <Box sx={{ width: "100%", height: "80px" }}>
          <FormControl
            className="Buttons"
            sx={{ width: "100%", height: "80px" }}
          >
            <InputLabel sx={{ width: "80%" }} id="demo-simple-select-label">
              {" "}
              <Button
                sx={{
                  width: "100%",

                  textTransform: "capitalize",
                }}
                variant="text"
                startIcon={<img src={design} alt="" />}
              >
                <Typography className="buttonnames" variant="h5">
                Design
                </Typography>
              </Button>{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={}
              onChange={handleChange}
              displayEmpty
              // inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="Rose"
              >
              Rose
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="Laxmi"
              >
               Laxmi
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="Ganesha"
              >
              Ganesha
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="Others"
              >
              Others
              </MenuItem>
            
            </Select>
          </FormControl>
        </Box>
      </Grid>

      <Grid item justifyContent="center" container xl={2} lg={3} md={4}>
        <Box sx={{ width: "100%", height: "80px" }}>
          <FormControl
            className="Buttons"
            sx={{ width: "100%", height: "80px" }}
          >
            <InputLabel sx={{ width: "80%" }} id="demo-simple-select-label">
              {" "}
              <Button
                sx={{
                  width: "100%",

                  textTransform: "capitalize",
                }}
                variant="text"
                startIcon={<img src={event} alt="" />}
              >
                <Typography className="buttonnames" variant="h5">
                Events
                </Typography>
              </Button>{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={}
              onChange={handleChange}
              displayEmpty
              // inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="22k"
              >
               22k
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="24k"
              >
               24k
              </MenuItem>
            
            </Select>
          </FormControl>
        </Box>
      </Grid>


      <Grid item justifyContent="center" container xl={2} lg={3} md={4}>
        <Box sx={{ width: "100%", height: "80px" }}>
          <FormControl
            className="Buttons"
            sx={{ width: "100%", height: "80px" }}
          >
            <InputLabel sx={{ width: "80%" }} id="demo-simple-select-label">
              {" "}
              <Button
                sx={{
                  width: "100%",

                  textTransform: "capitalize",
                }}
                variant="text"
                startIcon={<img src={pricerange} alt="" />}
              >
                <Typography className="buttonnames" variant="h5">
               Price Range
                </Typography>
              </Button>{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={}
              onChange={handleChange}
              displayEmpty
              // inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="22k"
              >
               22k
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "3.0rem", fontWeight: "bold" }}
                value="24k"
              >
               24k
              </MenuItem>
            
            </Select>
          </FormControl>
        </Box>
      </Grid>

      </Grid>
      </Box>
      </div>

   
  );
}

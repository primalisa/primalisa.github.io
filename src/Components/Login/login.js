import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";

import "./login.css";
import Modal from '@mui/material/Modal';
import loginaccount from "./Images/loginaccount.png";
import close from "./Images/close.png";
import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

import Loginotp from "./LoginOtp/loginotp";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const Login = (props) => {
  const [openotplogin, setOpenotplogin] = React.useState(false);
  const handleOpenotp = () => setOpenotplogin(true);
  const handleCloseotp = () => setOpenotplogin(false);
  const [phonevalue, setPhonevalue] = useState("");

  function test()
  {
  console.log("ji")
  }

  // const handleChange = (newValue) => {
  //   setPhonevalue(newValue)
  // }
  const [value, setValue] = useState();
  return (
    <Grid
      className="Login"
      container
      direction="column"
      justifyContent="space-around"
      alignItems="flex-start"
      style={{ gridGap: "20px", height: "100%" }}
    >
      <Grid
        item
        container
        alignItems="center"
        direction="row"
        style={{ gridGap: "20px" }}
      >
        <img
          style={{
            width: "60px",
            height: "60px",
          }}
          src={loginaccount}
          alt=""
        />

        <Typography
          style={{
            fontFamily: "Open Sans",
            fontWeight: "600",
            fontSize: "5.5rem",
            letterSpacing: "-1.91px",
            color: "#000000",
            opacity: 1,
          }}
          variant="h1"
        >
          Login
        </Typography>
        <Button onClick={() => props.handleClose()} style={{ marginLeft: "auto" }}>
          <img
            src={close}
            alt=""
            style={{ width: "45px", height: "45px"}}
          />
        </Button>
      </Grid>

      <Grid item>
        <Typography
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "2.5rem",
            letterSpacing: "-0.47px",
            color: "#42526E",
            opacity: 1,
          }}
          variant="h4"
        >
          Mobile No
        </Typography>
      </Grid>

      <Grid item container style={{ gridGap: "20px" }}>
        <FormControl
          className="form"
          style={{ width: "100px", height: "80px" }}
        >
          <InputLabel
            style={{
              justifySelf: "center",
              alignSelf: "center",
              fontFamily: "Poppins",
              fontSize: "2.8rem",
              fontWeight: "bold",
            }}
            id="demo-simple-select-label"
          >
            +91
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            displayEmpty
            label="Age"
          ></Select>
        </FormControl>

        <input
          placeholder="Enter Mobile No"
          className="phoneinput"
          type="tel"
        />
      </Grid>
      <Modal
        open={openotplogin}
        onClose={handleCloseotp}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="loginmodal"sx={{
           position: 'absolute',
           top: '40%',
           left: '50%',
           transform: 'translate(-50%, -50%)',
           width: '863px',
           height: '569px',
           backgroundColor:'white',
           borderRadius:'20px',
           p: 4,
           opacity:2,
        }}>
         <Loginotp handleCloseotp={handleCloseotp}/>
        </Box>
      </Modal>


      <Button
      onClick={()=>{
        handleOpenotp() 
        // props.handleClose();
         
        
        
        
      }}
        variant="contained"
        style={{
          width: "100%",
          height: "78px",
          background: "#4562DB 0% 0% no-repeat padding-box",
          borderRadius: "7px",
          opacity: "1",
          textTransform: "capitalize",
        }}
      >
      
        <Typography
          style={{
            font: "normal normal 600 31px/43px Open Sans",
            letterSpacing: "0px",
            color: "#FFFFFF",
            opacity: "0.94",
          }}
          variant="h3"
        >
          Proceed
        </Typography>
      </Button>

      

      <FormGroup>
        <span style={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel control={<Checkbox />} />
          <Typography
            style={{
              font: "normal normal 500 3rem Open Sans",
              letterSpacing: "0px",
              color: "#4D5052",
            }}
            variant="h3"
          >
            {" "}
            By proceeding you agree to our{" "}
            <span style={{ color: "#4562DB" }}>
              {" "}
              Terms and Conditions{" "}
            </span>{" "}
          </Typography>
        </span>
      </FormGroup>
    </Grid>
  );
};

export default Login;

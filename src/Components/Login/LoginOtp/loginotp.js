import React  from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import close from "../Images/close.png";
import Button from "@mui/material/Button";
import loginaccount from "../Images/loginaccount.png";
import TextField from '@mui/material/TextField';
const loginotp =(props)=>
{
return(
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
        <Button onClick={() => props.handleCloseotp()} style={{ marginLeft: "auto" }}>
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
          OTP
        </Typography>
      </Grid>
      <Grid item style={{width:'100%'}}>
        <input className="otpinput" type="number" placeholder="Enter OTP" />
      </Grid>


      <Grid item container justifyContent="space-between" style={{width:'90%'}}
  alignItems="center">
        <Typography style={{

          fontFamily:'Open Sans',
          fontSize:'2.6rem',
          letterSpacing: '0px',
color:'#4D5052',
opacity: '0.94'
        }} variant="h4">Resend OTP</Typography>
        <Typography style={{

fontFamily:'Open Sans',
fontSize:'2.6rem',
letterSpacing: '0px',
color:'#4D5052',
opacity: '0.94'
}} variant="h4">170</Typography>

      </Grid>

      <Button
    
        variant="contained"
        style={{
          width: "90%",
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
</Grid>


)

}

export default loginotp;
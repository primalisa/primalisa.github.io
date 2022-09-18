import React from "react"
import Popover from '@mui/material/Popover';
import "./Commonheader.css"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import Modal from '@mui/material/Modal';

import Logo from "../images/Logo.png";
import Coin from "../images/coin.png";
import Copporatedeals from "../images/corporate.png";
import Customized from "../images/Customixed-coins.png";
import Digitalgold from "../images/DigitalGold.png";
import aboutus from "../images/about-us.png";
import Contactus from "../images/Contact-us.png";
import Cart from "../images/cart.png";
import Bookmark from "../images/bookmark.png";


import Login from "../../Login/login";
import
{
  Link
} from 'react-router-dom';


import Button from "@mui/material/Button";


const CommonHeader =() =>
{
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickaboutus = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseaboutus = () => {
    setAnchorEl(null);
  };

  const openaboutus = Boolean(anchorEl);
  const id = openaboutus ? 'simple-popover' : undefined;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return(
    <Box className="CommonHeader">
    <Box  className="container">
    <Grid  justifyContent="center"
    alignItems="center" container spacing={2}>
    <Grid item xl={2}>
    <div className="logo">
         
          <img src={Logo} alt="" />
        </div>
    </Grid>
    <Grid item container justifyContent="space-between" xl>
      <Link to="/BuyCoins">
      <Button
            sx={{
              backgroundColor: "white",
              height: "54px",
              padding: "10px",
              textTransform: "capitalize",
            }}
            className="button"
            variant="text"
            startIcon={<img src={Coin} alt="" />}
          >
            <Typography variant="h5" className="buttonnames secondarycolor">
              Buy coins
            </Typography>
          </Button></Link>
      
          <Button
            sx={{
              backgroundColor: "white",
              color: "#FF9100",
              height: "54px",
              padding: "10px",
              textTransform: "capitalize",
            }}
            className="button"
            variant="text"
            startIcon={<img src={Customized} alt="" />}
          >
            <Typography variant="h5" className="buttonnames">
              Customized Coins
            </Typography>
          </Button>
    <Link to="/CorporateDeals">
  
          <Button
            sx={{
              backgroundColor: "white",
              color: "#FF9100",
              height: "54px",
              padding: "10px",
              textTransform: "capitalize",
            }}
            className="button"
            variant="text"
            startIcon={<img src={Copporatedeals} alt="" />}
          >
            <Typography variant="h5" className="buttonnames">
              Corporate Deals
            </Typography>
          </Button></Link>

          <Button
            sx={{
              backgroundColor: "white",
              color: "#FF9100",
              height: "54px",
              padding: "10px",
              textTransform: "capitalize",
            }}
            className="button"
            variant="text"
            startIcon={<img src={Digitalgold} alt="" />}
          >
            <Typography variant="h5" className="buttonnames">
              Digital gold
            </Typography>
          </Button>

          <Button
            aria-describedby={id}
            sx={{
              backgroundColor: "white",
              color: "#FF9100",
              height: "54px",
              padding: "10px",
              textTransform: "capitalize",
            }}
            onClick={handleClickaboutus}
            className="button"
            variant="text"
            startIcon={<img src={aboutus} alt="" />}
          >
            <Typography variant="h5" className="buttonnames">
              About Us
            </Typography>
          </Button>

          

          <Popover
       id={id}
       open={openaboutus}
       anchorEl={anchorEl}
       onClose={handleCloseaboutus}
       anchorOrigin={{
         vertical: 'bottom',
         horizontal: 'left',
       }}

       
      >
        <div style={{width:'253px',height:'151px'}}>
          <Grid 
          style={{padding:'20px',height:'100%'}}container direction="column"  justifyContent="space-around"
          alignItems="flex-start">
            <Grid item>
            <Link to="/CustomerService"><Typography style={{
                fontFamily:'Open Sans',
                
                fontSize:'3rem',
                letterSpacing:'-0.7px',
color:'#343434',
opacity:'0.99'


              }} variant="h4">Customer Service</Typography></Link>

            </Grid>

            <Grid item>
              <Typography style={{
                fontFamily:'Open Sans',
                
                fontSize:'3rem',
                letterSpacing:'-0.7px',
color:'#343434',
opacity:'0.99'


              }} variant="h4">About Us</Typography>

            </Grid>


          </Grid>
        </div>
      </Popover>

          <Button
            sx={{
              backgroundColor: "white",
              color: "#FF9100",
              height: "54px",
              padding: "10px",
              textTransform: "capitalize",
            }}
            className="button"
            variant="text"
            startIcon={<img src={Contactus} alt="" />}
          >
            <Typography variant="h5" className="buttonnames">
              Contact Us
            </Typography>
          </Button>

          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{
              backgroundColor: "#FF5C53",
              width: "200px",
              height: "60px",
              textTransform: "capitalize",
            }}
            className="button loginbtn"
          >
            <Typography variant="h5" className="buttonnames loginbtncolor">
              Login
            </Typography>
          </Button>

      <Modal
        open={open}
        onClose={handleClose}
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
          <Login handleClose={handleClose}/>
        </Box>
      </Modal>
    </Grid>
   
  </Grid>
  </Box>
  </Box>
  )
}


export default CommonHeader;



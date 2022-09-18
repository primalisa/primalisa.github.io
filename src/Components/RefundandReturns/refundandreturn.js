import React from "react";

import "./refundandreturn.css";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import message from "./images/message.png"

const chatstyle = {
  position: "absolute",
  zIndex:'50000',
  top: "60%",
  left: "85%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 646,
  overflow: "scroll",

  bgcolor: "#FFFFFF",
  borderRadius: "10px",
};


const Refundandreturns = () => {
  const [openchat, setOpenchat] = React.useState(false);
  const handleOpenchat = () => setOpenchat(true);
  const handleClosechat = () => setOpenchat(false);
  return (
    <div>
    <img onClick={handleOpenchat} style={{top:'60%',float:'right',position:'sticky'}} src={message} alt="" />
    <div className="refundandreturns">
      <div className="container">
        <Grid
          container
          direction="column"
          alignContent="flex-start"
          justifyContent="space-between"
          style={{ gridGap: "150px" }}
        >
          <Grid
            item
            container
            direction="column"
            alignContent="flex-start"
            justifyContent="space-between"
            style={{ gridGap: "40px" }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "Poppins",
                fontSize: "5.2rem",
                fontWeight: "bold",
                letterSpacing: "-1.46px",
                color: "#000000",
                opacity: "0.99",
              }}
            >
              Returns Policy
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Poppins",
                fontSize: "3.5rem",
                letterSpacing: "-0.73px",
                color: "#1A1A1B",
                opacity: "0.99",
              }}
            >
              Returns not allowed for Gold and Silver coins/bars once sold to
              customer.
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction="column"
            alignContent="flex-start"
            justifyContent="space-between"
            style={{ gridGap: "40px" }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "Poppins",
                fontSize: "5.2rem",
                fontWeight: "bold",
                letterSpacing: "-1.46px",
                color: "#000000",
                opacity: "0.99",
              }}
            >
              Cancellations
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Poppins",
                fontSize: "3.5rem",
                letterSpacing: "-0.73px",
                color: "#1A1A1B",
                opacity: "0.99",
              }}
            >
              Prepaid orders can not be cancel by customers through their online
              login account, In case of any concern about ordered product,
              customer can raise ticket under support or help module by login
              account in online platform or contact at our customer care or drop
              us the mail at - cc@yellowmetals​.in For COD deliveries, customer
              can cancel the order at any moment by login into his/her online
              account before shipment dispatched for delivery. Once shipment
              dispatched, order can not be cancelled.
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction="column"
            alignContent="flex-start"
            justifyContent="space-between"
            style={{ gridGap: "40px" }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "Poppins",
                fontSize: "5.2rem",
                fontWeight: "bold",
                letterSpacing: "-1.46px",
                color: "#000000",
                opacity: "0.99",
              }}
            >
              Replacement
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Poppins",
                fontSize: "3.5rem",
                letterSpacing: "-0.73px",
                color: "#1A1A1B",
                opacity: "0.99",
              }}
            >
              Replacement will be allowed only if received product is defective
              or damaged or of wrong denominations. Pickup and Shipping will be
              free of cost for replacement of product. Secure your original
              packaging material with you & call to the customer care
              immediately and mail at - cc@yellowmetals​.in
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction="column"
            alignContent="flex-start"
            justifyContent="space-between"
            style={{ gridGap: "40px" }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "Poppins",
                fontSize: "5.2rem",
                fontWeight: "bold",
                letterSpacing: "-1.46px",
                color: "#000000",
                opacity: "0.99",
              }}
            >
              Buyback
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Poppins",
                fontSize: "3.5rem",
                letterSpacing: "-0.73px",
                color: "#1A1A1B",
                opacity: "0.99",
              }}
            >
              Lifetime buyback options available with customer with deduction of
              10% of value for Gold coins and bars and 20% of value for Silver
              coins and bars at prevailing market rate decided by us, subject to
              a minimum deduction of Rs.1000/- for Gold coins and bars and
              Rs.2000/- for Silver coins and bars. Buyback of product shall not
              be applicable once certicard used to pack the gold/silver coins
              and bars is opened.
            </Typography>

            <Typography
              variant="h5"
              style={{
                fontFamily: "Poppins",
                fontSize: "3.5rem",
                letterSpacing: "-0.73px",
                color: "#1A1A1B",
                opacity: "0.99",
              }}
            >
              Received product will be send for lab testing, funds will be
              transferred to the customer’s account directly within 10-15 days
              once positive lab testing report received for that product.<br></br>
              Contact our customer service desk or mail at -
              cc@yellowmetals​.in​ for buyback intimation
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction="column"
            alignContent="flex-start"
            justifyContent="space-between"
            style={{ gridGap: "40px" }}
          >
            <Typography
              variant="h3"
              style={{
                fontFamily: "Poppins",
                fontSize: "5.2rem",
                fontWeight: "bold",
                letterSpacing: "-1.46px",
                color: "#000000",
                opacity: "0.99",
              }}
            >
              Transit Insurance
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Poppins",
                fontSize: "3.5rem",
                letterSpacing: "-0.73px",
                color: "#1A1A1B",
                opacity: "0.99",
              }}
            >
              In Transit insurance is covered for each shipment during delivery
              to protect our customers.
            </Typography>
          </Grid>

          <Modal
        open={openchat}
        onClose={handleClosechat}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={chatstyle} className="modalscroll">
          <Grid container direction="column" style={{ gridGap: "20px" }}>
            <Grid
              item
              container
              style={{
                backgroundColor: "#4562DB",
                height: "76px",

                alignContent: "center",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Typography
                style={{
                  fontStyle: "Poppins",
                  fontSize: "2.5rem",

                  letterSpacing: "-0.56px",
                  color: "#FFFFFF",
                  opacity: "0.99",
                }}
              >
                Chat with our support team
              </Typography>
            </Grid>

            <Grid
              item
              style={{
                border: "1px solid #7070704D",
                borderRadius: "10px",
                padding: "40px 20px",
                margin: "0 20px",
              }}
            >
              <Typography
                style={{
                  fontStyle: "Poppins",
                  fontSize: "2.8rem",

                  letterSpacing: "-0.56px",

                  opacity: "0.99",
                }}
              >
                Welcome to our yellowmetals live chat to start the chat please
                fill the details below
              </Typography>
            </Grid>

            <Grid
              item
              container
              direction="column"
              style={{
                padding: "40px 20px",
                gridGap: "20px",
              }}
            >
              <Grid item>
                <Typography
                  style={{
                    fontStyle: "Poppins",
                    fontSize: "2.2rem",
                    fontWeight: "bold",

                    letterSpacing: "-0.56px",
                    color: "#000000",
                    opacity: "0.99",
                  }}
                >
                  Name
                </Typography>
              </Grid>

              <TextField
                id="outlined-multiline-flexible"
                label=""
                placeholder="Enter Your name"
                className="chat"
                InputLabelProps={{
                  style: { fontSize: "2.5rem", color: "#7070709E" },
                }}
                style={{
                  width: "100%",
                }}
              ></TextField>

              <Grid item>
                <Typography
                  style={{
                    fontStyle: "Poppins",
                    fontSize: "2.2rem",
                    fontWeight: "bold",

                    letterSpacing: "-0.56px",
                    color: "#000000",
                    opacity: "0.99",
                  }}
                >
                  Contact Number
                </Typography>
              </Grid>

              <TextField
                id="outlined-multiline-flexible"
                label=""
                placeholder="Enter Your contact number"
                className="chat"
                InputLabelProps={{
                  style: { fontSize: "2.5rem", color: "#7070709E" },
                }}
                style={{
                  width: "100%",
                }}
              ></TextField>

              <Grid item>
                <Typography
                  style={{
                    fontStyle: "Poppins",
                    fontSize: "2.2rem",
                    fontWeight: "bold",

                    letterSpacing: "-0.56px",
                    color: "#000000",
                    opacity: "0.99",
                  }}
                >
                  Email ID
                </Typography>
              </Grid>

              <TextField
                id="outlined-multiline-flexible"
                label=""
                placeholder="Enter Your Email ID"
                className="chat"
                InputLabelProps={{
                  style: { fontSize: "2.5rem", color: "#7070709E" },
                }}
                style={{
                  width: "100%",
                }}
              ></TextField>

              <Grid item>
                <Typography
                  style={{
                    fontStyle: "Poppins",
                    fontSize: "2.2rem",
                    fontWeight: "bold",

                    letterSpacing: "-0.56px",
                    color: "#000000",
                    opacity: "0.99",
                  }}
                >
                  Choose a issue
                </Typography>
              </Grid>

              <TextField
                id="outlined-textarea"
                select
                placeholder="Select issue"
                label="Select issue"
                InputLabelProps={{
                  style: { fontSize: "2.5rem", color: "#7070709E" },
                }}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              ></TextField>

              <Grid item>
                <Typography
                  style={{
                    fontStyle: "Poppins",
                    fontSize: "2.2rem",
                    fontWeight: "bold",

                    letterSpacing: "-0.56px",
                    color: "#000000",
                    opacity: "0.99",
                  }}
                >
                  Description
                </Typography>
              </Grid>

              <TextField
                id="outlined-multiline-flexible"
                multiline
                label=""
                placeholder="Enter your issue with order"
                className="chat"
                InputLabelProps={{
                  style: { fontSize: "2.5rem", color: "#7070709E" },
                }}
                style={{
                  width: "100%",
                }}
              ></TextField>

              <Button
                item
                variant="contained"
                style={{
                  fontStyle: "Poppins",
                  fontSize: "2.5rem",
                  textTransform: "capitalize",
                  borderRadius: "10px",
                  backgroundColor: "#4562DB",
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
        </Grid>
      </div>
    </div>
    </div>
  );
};

export default Refundandreturns;

import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import yourorders from "./images/YourOrders.png";
import returnandrefunds from "./images/ReturnandRefunds.png";
import chatwithus from "./images/chatwithus.png";

import "./customerservice.css";
import { Link } from "react-router-dom";

const chatstyle = {
  position: "absolute",
  top: "60%",
  left: "85%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 646,
  overflow: "scroll",

  bgcolor: "#FFFFFF",
  borderRadius: "10px",
};

const Customerservice = () => {
  const [openchat, setOpenchat] = React.useState(false);
  const handleOpenchat = () => setOpenchat(true);
  const handleClosechat = () => setOpenchat(false);
  return (
    <Grid
      container
      style={{
        height: "800px",
        width: "100%",
        padding: "100px",
        gridGap: "30px",
      }}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid
        item
        style={{
          padding: "30px",

          border: "1px solid #70707042",
          borderRadius: "10px",
          width: "23%",
          gridGap: "30px",
        }}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <img src={yourorders} alt="" />
        <Grid
          item
          container
          style={{ width: "60%", height: "100%", gridGap: "10px" }}
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Link to="/OrderList">
            <Typography
              style={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: "3.8rem",

                color: "#1A1A1B",
                opacity: "0.99",
              }}
              variant="h2"
            >
              Your Orders
            </Typography>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "2.4rem",

                color: "#1A1A1B",
                opacity: "0.99",
              }}
              variant="h4"
            >
              Track packages edit or cancel orders
            </Typography>{" "}
          </Link>
        </Grid>
      </Grid>

      <Grid
        item
        style={{
          padding: "30px",
          border: "1px solid #70707042",
          borderRadius: "10px",
          width: "25%",
          gridGap: "30px",
        }}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <img src={returnandrefunds} alt="" />
        <Grid
          item
          container
          style={{ width: "65%", height: "100%", gridGap: "10px" }}
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Link to="/RefundandReturns">
            <Typography
              style={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: "3.8rem",

                color: "#1A1A1B",
                opacity: "0.99",
              }}
              variant="h2"
            >
              Refunds & Returns
            </Typography>
            <Typography
              style={{
                fontFamily: "Poppins",
                fontSize: "2.4rem",

                color: "#1A1A1B",
                opacity: "0.99",
              }}
              variant="h4"
            >
              Check out our return ,refund and replacement policies{" "}
            </Typography>
          </Link>
        </Grid>
      </Grid>

      <Grid
      onClick={handleOpenchat}
        item
        style={{
          padding: "30px",
          border: "1px solid #70707042",
          borderRadius: "10px",
          width: "25%",
          gridGap: "30px",
        }}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <img src={chatwithus} alt="" />
        <Grid
          item
          container
          style={{ width: "60%", height: "100%", gridGap: "10px" }}
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography
            
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: "3.8rem",

              color: "#1A1A1B",
              opacity: "0.99",
            }}
            variant="h2"
          >
            Chat With Us
          </Typography>
          <Typography
            style={{
              fontFamily: "Poppins",
              fontSize: "2.4rem",

              color: "#1A1A1B",
              opacity: "0.99",
            }}
            variant="h4"
          >
            Let Us Help You with your orders Chat With Us{" "}
          </Typography>
        </Grid>
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
  );
};

export default Customerservice;

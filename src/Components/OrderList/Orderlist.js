import React from "react";
import Divider from "@mui/material/Divider";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import elipse from "./images/elipse.png";
import coin from "./images/coin.png";
import shoppinglist from "./images/shopping-list.png";
import message from "./images/message.png"
import "./orderlist.css";

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

const Orderlist = () => {
  const [openchat, setOpenchat] = React.useState(false);
  const handleOpenchat = () => setOpenchat(true);
  const handleClosechat = () => setOpenchat(false);
  return (
    <div>
    <img onClick={handleOpenchat}  style={{top:'70%',float:'right',position:'sticky'}} src={message} alt="" />

    <div
      style={{ height: "100%", width: "70%", margin: "auto" }}
      className="orderlist"
    >

      <Grid container direction="column" style={{ gridGap: "20px" }}>
        <div className="container">
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: "3.4rem",
              letterSpacing: "-0.95",
              width: "25%",
              color: "#1A1A1B",
              opacity: "0.99",
              alignSelf: "center",
            }}
            variant="h2"
          >
            Ongoing Orders
          </Typography>
          <Divider
            variant="inset"
            style={{
              width: "75%",
              alignSelf: "center",
              margin: "0",
              border: "none",
              height: "1px",
              /* Set the hr color */
              color: "#70707078" /* old IE */,
              backgroundColor: "#70707078",
            }}
          />
        </div>

        <div className="container" style={{ gridGap: "20px" }}>
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignContent="center"
            style={{ width: "5%", gridGap: "20px" }}
          >
            <img
              src={elipse}
              alt=""
              style={{ width: "48px", height: "48px" }}
            />
            <Divider
              orientation="vertical"
              style={{
                height: "200px",
                alignSelf: "center",
                borderRight: "4px dashed",
                backgroundColor: "none",
                color: "#70707078",
              }}
              flexItem
            />
            <img
              src={elipse}
              alt=""
              style={{ width: "48px", height: "48px" }}
            />
          </Grid>

          <Grid
            item
            container
            direction="column"
            justifyContent="space-around"
            alignContent="flex-start"
            style={{ width: "50%", gridGap: "20px" }}
          >
            <Grid item container direction="column" alignContent="flex-start">
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  fontSize: "3.3rem",
                  letterSpacing: "-0.92px",
                  color: "#1A1A1B",
                  opacity: "0.99",
                }}
              >
                Dispatched on 12-12-22
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "2.5rem",
                  letterSpacing: "-0.5px",
                  color: "#1A1A1B",
                  opacity: "0.99",
                }}
              >
                Your order number of 0987654345 is been dispatched from yellow
                metals
              </Typography>
            </Grid>

            <Grid item container direction="column" alignContent="flex-start">
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  fontSize: "3.3rem",
                  letterSpacing: "-0.92px",
                  color: "#1A1A1B",
                  opacity: "0.99",
                }}
              >
                Arriving on 18-12-22
              </Typography>
              <Typography
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  fontSize: "2.5rem",
                  letterSpacing: "-0.5px",
                  color: "#1A1A1B",
                  opacity: "0.99",
                }}
              >
                Your order number of 0987654345 will arrive on 18-12-22 friday
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            direction="column"
            style={{
              padding: "20px",
              width: "100%",
              height: "100%",
              border: "1px solid #70707078",
              borderRadius: "10px",
              gridGap: "20px",
            }}
          >
            <Grid
            className="part3"
              item
              container
              justifyContent="flex-start"
              alignContent="center"
              style={{ gridGap: "50px" }}
            >
              <img item src={coin} alt="" />
              <div
                item
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "flex-start",
                  justifyContent: "space-around",
                  gridGap: "10px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "2.5rem",

                    letterSpacing: "-0.56px",
                    color: "#030303",
                    opacity: "0.99",
                  }}
                >
                  Order Number : 0987654345
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "3.4rem",
                    fontWeight: "bolder",
                    letterSpacing: "-0.95px",
                    color: "#000000",
                    opacity: "0.99",
                  }}
                >
                  20g, 24Kt Lord Balaji Gold Coin
                </Typography>
                <div
                  style={{
                    display: "flex",

                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "2.5rem",
                      letterSpacing: "-0.56px",
                      color: "#030303",
                      opacity: "0.99",
                    }}
                  >
                    SKU: YMGSH0010
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "2.5rem",
                      letterSpacing: "-0.73px",
                      color: "#030303",
                      opacity: "0.99",
                    }}
                  >
                    Qty : 1
                  </Typography>
                </div>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "3.7rem",
                    letterSpacing: "-1.04px",
                    color: "#4562DB",
                    opacity: "0.99",
                  }}
                >
                  ₹1,09,179
                </Typography>
              </div>
            </Grid>

            <fieldset
              style={{
                padding: "20px",
                borderRadius: "10px",
                border: "1px solid #70707078",
              }}
            >
              <legend
                style={{
                  fontFamily: "Poppins",
                  fontSize: "2.6rem",
                  letterSpacing: "-0.59px",
                  color: "#000000",
                  opacity: "0.99",
                  padding: "10px",
                }}
              >
                Delivery Address
              </legend>
              <Typography
                style={{
                  fontFamily: "Open Sans",
                  fontSize: "3rem",
                  padding: "20px",

                  color: "#000000",
                  opacity: "0.99",
                }}
                variant="h4"
              >
                State CAMPUS BOX 1704 WEEKSVILLE ROAD ELIZABETH CITY,NC 27909{" "}
              </Typography>
            </fieldset>
          </Grid>
        </div>

        <div className="container">
          <Typography
            style={{
              fontFamily: "Poppins",
              fontWeight: "bold",
              fontSize: "3.4rem",
              letterSpacing: "-0.95",
              width: "25%",
              color: "#1A1A1B",
              opacity: "0.99",
              alignSelf: "center",
            }}
            variant="h2"
          >
            Recent Orders
          </Typography>
          <Divider
            variant="inset"
            style={{
              width: "75%",
              alignSelf: "center",
              margin: "0",
              border: "none",
              height: "1px",
              /* Set the hr color */
              color: "#70707078" /* old IE */,
              backgroundColor: "#70707078",
            }}
          />
        </div>


        <div className="container">
          <Grid
            item
            container
            justifyContent="space-between"
            style={{
              padding: "30px",
              paddingRight: "70px",
              width: "100%",
              height: "100%",
              border: "1px solid #70707078",
              borderRadius: "10px",
              gridGap: "50px",
            }}
          >
            <img src={coin} alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "space-between",
                gridGap: "10px",
              }}
            >
              <div>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "3.4rem",
                    fontWeight: "bolder",
                    letterSpacing: "-0.95px",
                    color: "#000000",
                    opacity: "0.99",
                  }}
                >
                  20g, 24Kt Lord Balaji Gold Coin
                </Typography>
                <Typography
                  style={{
                    paddingTop: "10px",
                    fontFamily: "Poppins",
                    fontSize: "2.9rem",
                    letterSpacing: "-0.56px",
                    color: "#030303",
                    opacity: "0.99",
                  }}
                >
                  SKU: YMGSH0010
                </Typography>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",

                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "2.8rem",
                      letterSpacing: "-0.56px",
                      color: "#4562DB",
                      opacity: "0.99",
                    }}
                  >
                    Delivery Date : 19-01-22
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "2.8rem",
                      letterSpacing: "-0.73px",
                      color: "#030303",
                      opacity: "0.99",
                    }}
                  >
                    Qty : 1
                  </Typography>
                </div>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "3.7rem",
                    letterSpacing: "-1.04px",
                    color: "#4562DB",
                    fontWeight: "bold",
                    opacity: "0.99",
                  }}
                >
                  ₹1,09,179
                </Typography>
              </div>
            </div>

            <div
            className="OrderDamage"
              style={{
                width: "25%",

                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Button
                startIcon={<img src={shoppinglist} alt="" />}
                variant="contained"
                style={{
                  padding: "20px 40px 20px 40px",
                  backgroundColor: "#4562DB",
                  textTransform: "capitalize",
                  height: "73px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "2.8rem",
                    letterSpacing: "-0.56px",
                    color: "#FFFFFF",
                    opacity: "0.99",
                  }}
                >
                  View Order Details
                </Typography>
              </Button>

              <Button
                startIcon={<img src={shoppinglist} alt="" />}
                variant="contained"
                style={{
                  padding: "20px 40px 20px 40px",
                  backgroundColor: "#4562DB",
                  textTransform: "capitalize",
                  height: "73px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "2.8rem",
                    letterSpacing: "-0.56px",
                    color: "#FFFFFF",
                    opacity: "0.99",
                  }}
                >
                  Damage Support
                </Typography>
              </Button>

              <div style={{ width: "100%" }}>
                <Typography
                  style={{
                    display: "inline",

                    font: "normal normal 500 3rem Open Sans",
                    letterSpacing: "0px",
                    color: "#4D5052",
                  }}
                  variant="h3"
                >
                  Problem with this order?
                  <span style={{ color: "#4562DB" }}>
                    {" "}
                    Let us help you Chat With Us.{" "}
                  </span>{" "}
                </Typography>
              </div>
            </div>
          </Grid>
        </div>


        <div className="container">
          <Grid
            item
            container
            justifyContent="space-between"
            style={{
              padding: "30px",
              paddingRight: "70px",
              width: "100%",
              height: "100%",
              border: "1px solid #70707078",
              borderRadius: "10px",
              gridGap: "50px",
            }}
          >
            <img src={coin} alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "space-between",
                gridGap: "10px",
              }}
            >
              <div>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "3.4rem",
                    fontWeight: "bolder",
                    letterSpacing: "-0.95px",
                    color: "#000000",
                    opacity: "0.99",
                  }}
                >
                  20g, 24Kt Lord Balaji Gold Coin
                </Typography>
                <Typography
                  style={{
                    paddingTop: "10px",
                    fontFamily: "Poppins",
                    fontSize: "2.9rem",
                    letterSpacing: "-0.56px",
                    color: "#030303",
                    opacity: "0.99",
                  }}
                >
                  SKU: YMGSH0010
                </Typography>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",

                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "2.8rem",
                      letterSpacing: "-0.56px",
                      color: "#4562DB",
                      opacity: "0.99",
                    }}
                  >
                    Delivery Date : 19-01-22
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "2.8rem",
                      letterSpacing: "-0.73px",
                      color: "#030303",
                      opacity: "0.99",
                    }}
                  >
                    Qty : 1
                  </Typography>
                </div>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "3.7rem",
                    letterSpacing: "-1.04px",
                    color: "#4562DB",
                    fontWeight: "bold",
                    opacity: "0.99",
                  }}
                >
                  ₹1,09,179
                </Typography>
              </div>
            </div>

            <div
            className="OrderDamage"
              style={{
                width: "25%",

                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Button
                startIcon={<img src={shoppinglist} alt="" />}
                variant="contained"
                style={{
                  padding: "20px 40px 20px 40px",
                  backgroundColor: "#4562DB",
                  textTransform: "capitalize",
                  height: "73px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "2.8rem",
                    letterSpacing: "-0.56px",
                    color: "#FFFFFF",
                    opacity: "0.99",
                  }}
                >
                  View Order Details
                </Typography>
              </Button>

              

              <div style={{ width: "100%" }}>
                <Typography
                  style={{
                    display: "inline",

                    font: "normal normal 500 3rem Open Sans",
                    letterSpacing: "0px",
                    color: "#4D5052",
                  }}
                  variant="h3"
                >
                  Problem with this order?
                  <span style={{ color: "#4562DB" }}>
                    {" "}
                    Let us help you Chat With Us.{" "}
                  </span>{" "}
                </Typography>
              </div>
            </div>
          </Grid>
        </div>

        <div className="container">
          <Grid
            item
            container
            justifyContent="space-between"
            style={{
              padding: "30px",
              paddingRight: "70px",
              width: "100%",
              height: "100%",
              border: "1px solid #70707078",
              borderRadius: "10px",
              gridGap: "50px",
            }}
          >
            <img src={coin} alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "space-between",
                gridGap: "10px",
              }}
            >
              <div>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "3.4rem",
                    fontWeight: "bolder",
                    letterSpacing: "-0.95px",
                    color: "#000000",
                    opacity: "0.99",
                  }}
                >
                  20g, 24Kt Lord Balaji Gold Coin
                </Typography>
                <Typography
                  style={{
                    paddingTop: "10px",
                    fontFamily: "Poppins",
                    fontSize: "2.9rem",
                    letterSpacing: "-0.56px",
                    color: "#030303",
                    opacity: "0.99",
                  }}
                >
                  SKU: YMGSH0010
                </Typography>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",

                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "2.8rem",
                      letterSpacing: "-0.56px",
                      color: "#4562DB",
                      opacity: "0.99",
                    }}
                  >
                    Delivery Date : 19-01-22
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "2.8rem",
                      letterSpacing: "-0.73px",
                      color: "#030303",
                      opacity: "0.99",
                    }}
                  >
                    Qty : 1
                  </Typography>
                </div>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "3.7rem",
                    letterSpacing: "-1.04px",
                    color: "#4562DB",
                    fontWeight: "bold",
                    opacity: "0.99",
                  }}
                >
                  ₹1,09,179
                </Typography>
              </div>
            </div>

            <div
             className="OrderDamage"
              style={{
               
                width: "25%",

                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Button
                startIcon={<img src={shoppinglist} alt="" />}
                variant="contained"
                style={{
                  padding: "20px 40px 20px 40px",
                  backgroundColor: "#4562DB",
                  textTransform: "capitalize",
                  height: "73px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "2.8rem",
                    letterSpacing: "-0.56px",
                    color: "#FFFFFF",
                    opacity: "0.99",
                  }}
                >
                  View Order Details
                </Typography>
              </Button>

              

              <div style={{ width: "100%" }}>
                <Typography
                  style={{
                    display: "inline",

                    font: "normal normal 500 3rem Open Sans",
                    letterSpacing: "0px",
                    color: "#4D5052",
                  }}
                  variant="h3"
                >
                  Problem with this order?
                  <span style={{ color: "#4562DB" }}>
                    {" "}
                    Let us help you Chat With Us.{" "}
                  </span>{" "}
                </Typography>
              </div>
            </div>
          </Grid>
        </div>


        <div className="container">
          <Grid
            item
            container
            justifyContent="space-between"
            style={{
              padding: "30px",
              paddingRight: "70px",
              width: "100%",
              height: "100%",
              border: "1px solid #70707078",
              borderRadius: "10px",
              gridGap: "50px",
            }}
          >
            <img src={coin} alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "space-between",
                gridGap: "10px",
              }}
            >
              <div>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "3.4rem",
                    fontWeight: "bolder",
                    letterSpacing: "-0.95px",
                    color: "#000000",
                    opacity: "0.99",
                  }}
                >
                  20g, 24Kt Lord Balaji Gold Coin
                </Typography>
                <Typography
                  style={{
                    paddingTop: "10px",
                    fontFamily: "Poppins",
                    fontSize: "2.9rem",
                    letterSpacing: "-0.56px",
                    color: "#030303",
                    opacity: "0.99",
                  }}
                >
                  SKU: YMGSH0010
                </Typography>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",

                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "2.8rem",
                      letterSpacing: "-0.56px",
                      color: "#4562DB",
                      opacity: "0.99",
                    }}
                  >
                    Delivery Date : 19-01-22
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "2.8rem",
                      letterSpacing: "-0.73px",
                      color: "#030303",
                      opacity: "0.99",
                    }}
                  >
                    Qty : 1
                  </Typography>
                </div>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "3.7rem",
                    letterSpacing: "-1.04px",
                    color: "#4562DB",
                    fontWeight: "bold",
                    opacity: "0.99",
                  }}
                >
                  ₹1,09,179
                </Typography>
              </div>
            </div>

            <div
            className="OrderDamage"
              style={{
                width: "25%",

                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Button
                startIcon={<img src={shoppinglist} alt="" />}
                variant="contained"
                style={{
                  padding: "20px 40px 20px 40px",
                  backgroundColor: "#4562DB",
                  textTransform: "capitalize",
                  height: "73px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "2.8rem",
                    letterSpacing: "-0.56px",
                    color: "#FFFFFF",
                    opacity: "0.99",
                  }}
                >
                  View Order Details
                </Typography>
              </Button>

              

              <div style={{ width: "100%" }}>
                <Typography
                  style={{
                    display: "inline",

                    font: "normal normal 500 3rem Open Sans",
                    letterSpacing: "0px",
                    color: "#4D5052",
                  }}
                  variant="h3"
                >
                  Problem with this order?
                  <span style={{ color: "#4562DB" }}>
                    {" "}
                    Let us help you Chat With Us.{" "}
                  </span>{" "}
                </Typography>
              </div>
            </div>
          </Grid>
        </div>

        <div className="container">
          <Grid
            item
            container
            justifyContent="space-between"
            style={{
              padding: "30px",
              paddingRight: "70px",
              width: "100%",
              height: "100%",
              border: "1px solid #70707078",
              borderRadius: "10px",
              gridGap: "50px",
            }}
          >
            <img src={coin} alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "space-between",
                gridGap: "10px",
              }}
            >
              <div>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "3.4rem",
                    fontWeight: "bolder",
                    letterSpacing: "-0.95px",
                    color: "#000000",
                    opacity: "0.99",
                  }}
                >
                  20g, 24Kt Lord Balaji Gold Coin
                </Typography>
                <Typography
                  style={{
                    paddingTop: "10px",
                    fontFamily: "Poppins",
                    fontSize: "2.9rem",
                    letterSpacing: "-0.56px",
                    color: "#030303",
                    opacity: "0.99",
                  }}
                >
                  SKU: YMGSH0010
                </Typography>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",

                    alignContent: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "2.8rem",
                      letterSpacing: "-0.56px",
                      color: "#4562DB",
                      opacity: "0.99",
                    }}
                  >
                    Delivery Date : 19-01-22
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "2.8rem",
                      letterSpacing: "-0.73px",
                      color: "#030303",
                      opacity: "0.99",
                    }}
                  >
                    Qty : 1
                  </Typography>
                </div>
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "3.7rem",
                    letterSpacing: "-1.04px",
                    color: "#4562DB",
                    fontWeight: "bold",
                    opacity: "0.99",
                  }}
                >
                  ₹1,09,179
                </Typography>
              </div>
            </div>

            <div
            className="OrderDamage"
              style={{
                width: "25%",

                display: "flex",
                flexDirection: "column",
                alignContent: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Button
                startIcon={<img src={shoppinglist} alt="" />}
                variant="contained"
                style={{
                  padding: "20px 40px 20px 40px",
                  backgroundColor: "#4562DB",
                  textTransform: "capitalize",
                  height: "73px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "2.8rem",
                    letterSpacing: "-0.56px",
                    color: "#FFFFFF",
                    opacity: "0.99",
                  }}
                >
                  View Order Details
                </Typography>
              </Button>

              

              <div style={{ width: "100%" }}>
                <Typography
                  style={{
                    display: "inline",

                    font: "normal normal 500 3rem Open Sans",
                    letterSpacing: "0px",
                    color: "#4D5052",
                  }}
                  variant="h3"
                >
                  Problem with this order?
                  <span style={{ color: "#4562DB" }}>
                    {" "}
                    Let us help you Chat With Us.{" "}
                  </span>{" "}
                </Typography>
              </div>
            </div>
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
      </Grid>


    </div>
    </div>

    

  );
};

export default Orderlist;

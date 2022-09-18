import React from "react";
import "./MainCard.css";

import Button from "@mui/material/Button";
const Maincard = () => {
  return (
    <div>
      <div className="maincardCorporateDeals">
        <div className="container">
          <h2 className="maincardheading">
          Corporate Deals
          </h2>

          <h4 className="maincardparagraph">Let us help you pick them.</h4>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            className="ViewProductsbtn"
          >
            View Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Maincard;

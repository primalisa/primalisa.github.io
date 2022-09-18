import React from "react";

import CommonHeader from "../Components/Header/CommomHeader/CommonHeader";
import Footer from '../Components/Footer/Footer';
import Track from "../Components/OrderThankYou/track/trackyourorder";
const trackYourOrder=() =>
{

  return(
    <div>

    <CommonHeader />
    <Track/>
    
    <Footer />
   

    </div>


  )
}

export default trackYourOrder;
import React from "react";
import Header from "../Components/Header/Header";
import Footer from '../Components/Footer/Footer';
import MaincardCorporateDeals from "../Components/MainCard/MainCardCorporateDeals/MainCard";
import SelectLabels from "../Components/DropdownSelect/SelectProducts";
import Categorizeproducts from "../Components/CategorizeProducts/Categorizeproducts";
import AllProductsCorporateDeals from "../Components/Products/CorporateDealsAllProducts/AllProducts/AllProducts";


import Art from "../Components/Article/Article";
import SocialMedia from "../Components/SocialMedia/SocialMedia";
import PriceAlert from "../Components/PriceAlert/PriceAlert";
import SignUp from "../Components/SignUp/SignUp";
const CorporateDeals=() =>
{

  return(
    <div>

    <Header></Header>
    < MaincardCorporateDeals></ MaincardCorporateDeals>
    <SelectLabels/>
    <Categorizeproducts/>
    <AllProductsCorporateDeals/>
    <PriceAlert />
    <Art />
    <SocialMedia />
    <SignUp />
    <Footer></Footer>
   

  </div>


  )
}

export default CorporateDeals;
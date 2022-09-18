import React from "react";
import Header from "../Components/Header/Header";
import Footer from '../Components/Footer/Footer';
import MaincardBuyCoins from "../Components/MainCard/MainCardBuyCoins/MainCard";
import SelectLabels from "../Components/DropdownSelect/SelectProducts";
import Categorizeproducts from "../Components/CategorizeProducts/Categorizeproducts";
import AllProductsBuyCoins from "../Components/Products/BuyCoinsAllProducts/AllProducts/AllProducts";
import Art from "../Components/Article/Article";
import SocialMedia from "../Components/SocialMedia/SocialMedia";
import PriceAlert from "../Components/PriceAlert/PriceAlert";
import SignUp from "../Components/SignUp/SignUp";
const BuyCoins=() =>
{

  return(
    <div>

    <Header></Header>
    <MaincardBuyCoins></MaincardBuyCoins>
    <SelectLabels/>
    <Categorizeproducts/>
    <AllProductsBuyCoins/>
    <PriceAlert />
    <Art />
    <SocialMedia />
    <SignUp />
    <Footer></Footer>
   

  </div>


  )
}

export default BuyCoins;
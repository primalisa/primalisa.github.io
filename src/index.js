import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import  {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import BuyCoins from "./Pages/BuyCoins";
import StartingPage from "./Pages/StartingPage";
import CorporateDeals from './Pages/CorporateDeals';
import OrderThankYou from './Pages/OrderThankYou'
import TrackYourOrder from './Pages/TrackYourOrder';
import CustomerService from './Pages/CustomerService';
import OrderList from './Pages/OrderList';
import RefundandReturns from './Pages/RefundandReturn';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route  exact path="/"  element={<BuyCoins/>}></Route>
        <Route  exact path="/BuyCoins"  element={<BuyCoins/>}></Route>
        <Route  exact path="/CorporateDeals"  element={<CorporateDeals/>}></Route>
        <Route  exact path="/OrderThankYou"  element={<OrderThankYou/>}></Route>
        <Route  exact path="/TrackYourOrder"  element={<TrackYourOrder/>}></Route>
        <Route  exact path="/CustomerService"  element={<CustomerService/>}></Route>
        <Route  exact path="/OrderList"  element={<OrderList/>}></Route>
        <Route  exact path="/RefundandReturns"  element={<RefundandReturns/>}></Route>



      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

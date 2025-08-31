import React, { useContext } from "react";
import "./css/Shipping.css"
import wallet from "../../../assets/hager-images/wallet.svg";
import visa from "../../../assets/hager-images/Old_Visa_Logo.svg 1.svg";
import { Link } from "react-router-dom";

export default function Shipping()
{



return <div className="Shipping">
        <h3>Shipping Delivery</h3>


    <div className="payment-option " >
        <input type="radio" name="payment-method" id="credit-card-radio" defaultChecked />
        <img className="icon" src={visa} alt="Credit Card Icon" />
        <div className="payment-info">
            <span className="title">Credit Card</span>
            <span className="price">IDR 39.000</span>
        </div>
    </div>

    <div className="payment-option" >
        <input type="radio" name="payment-method" id="electronic-wallets-radio" />
        <img className="icon" src={wallet} alt="Electronic Wallets Icon" />
        <div className="payment-info">
            <span className="title">Electronic wallets</span>
            <span className="price">IDR 58.000</span>
        </div>
    
    </div>
   

     <div className="submit-checkout">

  <Link to={"/checkout/confirmation"}   className=" btn ">Continue to Payment</Link>
  </div>



        
    </div>
}
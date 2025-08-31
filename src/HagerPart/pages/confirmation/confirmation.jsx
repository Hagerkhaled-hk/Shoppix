import React from "react";
import "./css/Confirmation.css"
import { Link } from "react-router-dom";

export default function Confirmation()
{


    return <div className="Confirmation">
  <div className="order-header">
        <div className="order-info">
            <h5>Order Number</h5>
            <p>12345ASDFGHJ</p>
        </div>
        <div className="status-tag">
            Waiting For Payment
        </div>
    </div>

    <div className="payment-info-box">
        <h4>Payment Information</h4>
        <p>
            Upon completing a purchase, you will receive a payment confirmation email. This email will contain essential information about the items you have purchased and the total amount that needs to be paid.
        </p>
    </div>

      <div className="submit-checkout">

  <Link to={"/success-payment"}   className=" btn ">I Already Pay</Link>
  </div>


    </div>
}
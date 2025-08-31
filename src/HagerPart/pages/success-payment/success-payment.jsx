import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
 import "./css/success-payment.css"
 

export default function SuccessPayment()
{


    return <div className="SuccessPayment">
   {/* Start of Logo */}
        <div className="text-3xl font-bold logo">
          <span className="text-[#8B4513]">Sh</span>
          oppix
          <span className="text-[#8B4513]">.</span>
        </div>
        {/* End of Logo */}

        <main>
        <div class="icon"><FaCheckCircle/></div>
        <h1>PAYMENT SUCCESS!</h1>
        <p>Lean back and relax, knowing our team is hard at work preparing and shipping your package swiftly. Feel free to browse our diverse product selection during this time – you might discover another item you’d like to add to your collection!</p>

            <div className="submit-checkout">

  <Link to={"/"}   className=" btn ">Back to Home</Link>
  </div>
        </main>


    </div>
}
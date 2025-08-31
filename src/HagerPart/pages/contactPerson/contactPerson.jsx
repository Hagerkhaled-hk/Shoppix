import React from "react";
import "./css/ContactPerson.css"
import { Link } from "react-router-dom";


export default function ContactPerson()
{


    return <div className="ContactPerson">
      <h3>Contact Person</h3>
<div className="form-container">
  <div className="form-section">
    <label for="name">NAME</label>
    <input type="text" id="name" name="name" placeholder="Eg: John Doe"/>
  </div>

  <div className="form-section phone-input">
    <label for="phone">PHONE NUMBER</label>
    <div className="phone-group">
      <div className="country-code-dropdown">
        <select defaultValue={"+20"}>
          <option value="+1">(+1)</option>
          <option value="+44">(+44)</option>
          <option value="+62" >(+62)</option>
          <option value="+81">(+81)</option>
          <option value="+20"  >(+20)</option>
        </select>
      </div>
      <input type="tel" id="phone" name="phone" placeholder="111-2222-3333"/>
    </div>
  </div>

  <div className="form-section">
    <label for="email">EMAIL</label>
    <input type="email" id="email" name="email" placeholder="Eg: example@example.com"/>
  </div>

  <h4>ADDRESS DETAIL</h4>

  <div className="form-section">
    <label for="address">ADDRESS</label>
    <input type="text" id="address" name="address" placeholder="Eg: ABC Street 12A, West Java, Indonesia"/>
  </div>

  <div className="form-section">
    <label for="country">COUNTRY</label>
    <select id="country" name="country">
      <option value="" disabled selected>--Choose Country--</option>
      <option value="ID">Indonesia</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
    </select>
  </div>

  <div className="form-row">
    <div className="form-section">
      <label for="state">STATE/PROVINCE</label>
      <select id="state" name="state">
        <option value="" disabled selected>--Choose Province--</option>
        <option value="west-java">West Java</option>
        <option value="jakarta">Jakarta</option>
        <option value="bali">Bali</option>
      </select>
    </div>

    <div className="form-section">
      <label for="zipcode">ZIP CODE</label>
      <select id="zipcode" name="zipcode">
        <option value="" disabled selected>--Choose ZIP Code--</option>
        <option value="40000">40000</option>
        <option value="12000">12000</option>
        <option value="80361">80361</option>
      </select>
    </div>
  </div>
  <div className="submit-checkout">

  <Link to={"/checkout/shipping"}   className=" btn ">Continue to Shipping</Link>
  </div>


</div>
    </div>
}
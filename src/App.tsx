import "./App.css";

import { Routes, Route } from "react-router-dom";
import SignupSection from "./pages/SignUp.tsx";

import "./index.css";
import Home from "./pages/Home";

import Login from "./pages/LogIn.tsx";

//Hager-part
import Layout from "./pages/Layout.tsx";
import ProductDetails from "./HagerPart/pages/product-Details/product-Details.jsx"
import Cart from "./HagerPart/pages/cart/cart.jsx"
import Checkout from "./HagerPart/common/checkout/checkout.jsx";
import ContactPerson from "./HagerPart/pages/contactPerson/contactPerson.jsx"
import Shipping from "./HagerPart/pages/shipping/shipping.jsx"
import Confirmation from "./HagerPart/pages/confirmation/confirmation.jsx"
import SuccessPayment from "./HagerPart/pages/success-payment/success-payment.jsx"
import ProductList from "./pages/ProductList.tsx";


function App() {
  return (
    <div>
      <Routes>

                        {/*Hager's edits  */}
        <Route  element={<Layout/>} >

             <Route path="/" element={<Home/>} />

                {/*Hager part */}
             <Route path="productDetails" element={<ProductDetails/>} />
             <Route path="cart" element={<Cart/>} />
  
       </Route>

           <Route path="/checkout" element={<Checkout/>}>
      <Route path=""  element={<ContactPerson/>} />
      <Route path="shipping"  element={<Shipping/>} />
      <Route path="confirmation" element={<Confirmation/>} />
           </Route>

           <Route path="/success-payment" element={<SuccessPayment/>}/>


       
       
       {/*Amira part*/}
        <Route path="/signup" element={<SignupSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<ProductList/>} />
        {/* Add more routes as needed */}




      </Routes>
      
    </div>
  );
}

export default App;

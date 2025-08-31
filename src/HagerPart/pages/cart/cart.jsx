import React,{useContext, useEffect} from "react";
import "./css/Cart.css"
import ProductSummary from "../../common/product-summary/product-summary";
//Imports  image temporarily
import  image_2 from  "../../../assets/hager-images/image 2.jpg"
import  Rectangle_1 from  "../../../assets/hager-images/Rectangle 1.jpg"
import  Rectangle_2 from  "../../../assets/hager-images/Rectangle 2.jpg"
import  Rectangle_3 from  "../../../assets/hager-images/Rectangle 3.jpg"
import  Rectangle_4 from  "../../../assets/hager-images/Rectangle 4.jpg"
import  Rectangle_5 from  "../../../assets/hager-images/Rectangle 5.jpg"

// import icons
import Alert from "../../common/alert/alert";
import { Link } from "react-router-dom";
import { LightContext } from "../../../context/lightContext/lightContext";

export default function Cart()
{
 const { setIsLightSection} =useContext(LightContext);

 useEffect(()=>{
  setIsLightSection(true);
 })

  // Customized product temporarily
  const Product = {
  "id": "product-12345",
  "name": "White Casual T-shirt",
  "oldPrice": 200000,
  "currentPrice": 100000,
    "sale":50,
  "currency": "IDR",
  "stockQuantity": 50,
    "images": [
      {
        "url": image_2,
        "altText": "Front view of the white casual t-shirt"
      },
      {
        "url": Rectangle_1,
        "altText": "Close-up of the t-shirt fabric"
      },
      {
        "url": Rectangle_2,
        "altText": "Model wearing the white t-shirt"
      },
      {
        "url":Rectangle_3,
        "altText": "T-shirt displayed on a hanger"
      },
      {
        "url": Rectangle_4,
        "altText": "T-shirt folded neatly on a surface"
      },
      {
        "url": Rectangle_5,
        "altText": "Side profile of the t-shirt"
      }
   
    ]

}

    return( 
    
/*     Start of Cart
 */    <div className="Cart">
    
{/*     Start of left  (left Side)
 */}

 
    {/*     Start of   header  
 */}



 <div className=" header">

<h2>Cart</h2>
    </div>
        {/*     End of   header 
 */}

<div className="cart-InnerContainer">

 <div className="left">


    {/*     Start of   bottom  (    products-container )
 */}
    <div className="cards">

  {/*     Start of   product-container  (   single product-container)
 */}
 {
    Array.from({length:20}).map((_,index)=>{
return <ProductSummary key={index} Product={Product}/>
    })
 

 }

  {/*     End of   product-container  (   single product-container)
 */}
    </div>
    
  {/*     End of   bottom  (   product-container)
 */}


</div>
{/*     End of left  (left Side)
 */}


 {/*     Start of right  (right Side)
 */}
<div className="right">
<div className="top header">
  <p>Shopping Info</p>
</div>
<div className="bottom shopping-info">

 <Alert/>

  <div className="total" >
    <p><span>Subtotal</span>
    <span>IDR 300000</span>
    </p>
    <p><span>Total</span>
    <span>IDR 250000</span>
    </p>
  </div>
<Link  to={"/checkout"}  className="btn toCheckout">
  Proceed to checkout
</Link>

</div>




</div>
{/*     End of right  (right Side)
 */}
    </div>
    </div>
/*     End of Cart
 */

)
}
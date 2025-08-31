import React, { useContext, useEffect, useRef } from "react";
import { Outlet,  useResolvedPath } from "react-router-dom";
import "./css/Checkout.css"

import { LightContext } from "../../../context/lightContext/lightContext";
import Alert from "../alert/alert";
import ProductSummary from "../product-summary/product-summary";

//icons
import { IoPerson } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { IoIosCard } from "react-icons/io";

//Imports  image temporarily
import  image_2 from  "../../../assets/hager-images/image 2.jpg"
import  Rectangle_1 from  "../../../assets/hager-images/Rectangle 1.jpg"
import  Rectangle_2 from  "../../../assets/hager-images/Rectangle 2.jpg"
import  Rectangle_3 from  "../../../assets/hager-images/Rectangle 3.jpg"
import  Rectangle_4 from  "../../../assets/hager-images/Rectangle 4.jpg"
import  Rectangle_5 from  "../../../assets/hager-images/Rectangle 5.jpg"
export default function Checkout()
{
   const { setIsLightSection} =useContext(LightContext);
   const keysRef=useRef([]);
      const path=useResolvedPath();

   useEffect(()=>{
    setIsLightSection(true);

   },[])

   useEffect(()=>{
     updateSteps();

   },[path.pathname])


  



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
     const steps=   [
           {
            icon:<IoPerson/>
           ,text:"Personal Info",
           path:"/checkout",
          
          
           },
           {
            icon:<FaTruck/>
           ,text:"Shipping Delivery"   ,
           path:"/checkout/shipping",
                  
                  
   
           },
           
           {
            icon:<IoIosCard/>
           ,text:"Confirmation",
           path:"/checkout/confirmation"   ,
                  
                  
   
           }
           
       ]
   
    

        function updateSteps()
   {
let keys= steps.findIndex((step)=>{return step.path==path.pathname }); 

for(let i=0; i<steps.length;i++){
  if (i<keys){keysRef.current[i].classList.add("done"); } ;
  if (i==keys)keysRef.current[i].classList.add("active");
}

   }



    return <div className="Checkout">
{/* Start of left 
 */} <div className="left">
          <div className="">
        {/* Start of Logo */}
        <div className="text-3xl font-bold">
          <span className="text-[#8B4513]">Sh</span>
          oppix
          <span className="text-[#8B4513]">.</span>
        </div>
        {/* End of Logo */}
        </div>


<div className="header">
    <h2>Checkout Form</h2>
</div>
<div className="steps">

    {
        steps.map((step,key)=>{
           
            return (  
<div  key={key}  ref={(s)=>keysRef.current[key]=s} className={`step ${step.done?"done":""} ${(step.path==path.pathname)?"active":""}`}>

  
                <div className="icon">

     {step.icon}
                </div>

    <p>Step {key+1}</p>
    <p> {step.text}</p>
</div>
)
        })
    }


</div>



<div className="children">
  <Outlet/>
</div>


         </div>
{/* End of left 
 */} 


 {/* Start of right 
 */} 
<div className="right">

<p className="header" >Order summary</p>
<Alert/>

<div className="orders">

   {
    Array.from({length:10}).map((_,index)=>{

        return<ProductSummary  key={index} Product={Product} chekoutForm={true} />
    })
       
    
   } 
</div>

<div className="recipt">
    <p>SubTotal <span>{Product.currency}  300000 </span></p>
    <p className="voucher">Voucher(50K DISCOUNT) <span>{Product.currency}  50000</span></p>
    <p>Shipping <span>{Product.currency}  -</span></p>
    <p className="total">Total <span>{Product.currency}  250000</span></p>
</div>

</div>
        {/* End of left 
 */} 
            </div>
   
}
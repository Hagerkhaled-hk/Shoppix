import React, { useContext, useState ,useEffect} from "react";
import "./css/Product-Details.css"

//Imports  image temporarily
import  image_2 from  "../../../assets/hager-images/image 2.jpg"
import  Rectangle_1 from  "../../../assets/hager-images/Rectangle 1.jpg"
import  Rectangle_2 from  "../../../assets/hager-images/Rectangle 2.jpg"
import  Rectangle_3 from  "../../../assets/hager-images/Rectangle 3.jpg"
import  Rectangle_4 from  "../../../assets/hager-images/Rectangle 4.jpg"
import  Rectangle_5 from  "../../../assets/hager-images/Rectangle 5.jpg"

// For swiping  Alternative images 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// imports icons
import { FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import QuantityButton from "../../common/quantity-button/quantity-button";
import { LightContext } from "../../../context/lightContext/lightContext";


export default function ProductDetails()
{

   const { setIsLightSection} =useContext(LightContext);
  
   useEffect(()=>{
    setIsLightSection(true);
   })

  // Customized product temporarily
  const Product = {
  "id": "product-12345",
  "name": "White Casual T-shirt",
  "category": "Men's T-shirt",
  "oldPrice": 200000,
  "currentPrice": 100000,
  "sale":50,
  "currency": "IDR",
  "rating": 4.95,
  "description": ["Lorem ipsum dolor sit amet consectetur. Metus nibh dictum vel enim sollicitudin. Metus nibh a leo orci aliquam diam. Metus pretium purus augue malesuada metus. Nec suspendisse proin aliquam dolor ipsum. Quis id enim viverra et."
    ,
     "Lorem ipsum dolor sit amet consectetur. Metus nibh dictum vel enim sollicitudin. Metus nibh a leo orci aliquam diam. Metus pretium purus augue malesuada metus. Nec suspendisse proin aliquam dolor ipsum. Quis id enim viverra et. Lorem ipsum dolor sit amet consectetur. Metus nibh dictum vel enim sollicitudin. Metus nibh a leo orci aliquam diam. Metus pretium purus augue malesuada metus. Nec suspendisse proin aliquam dolor ipsum. Quis id enim viverra et."],
  "availableSizes": [
    "XXS",
    "XS",
    "S",
    "L",
    "XL",
    "XXL"
  ],
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

const [currentImage,setCurrentImage]=useState(Product.images[0].url);
const [currentSize,setCurrentSize]=useState(Product.availableSizes[0]);



  return( 
  // Start of ProductDetails
  <div className="ProductDetails ">

{/*    Start of main container  
 */}
 

  <div className="images">

{/* Start of Show current image
 */} 
  <div className="show">

    <img src={currentImage}  alt=""/>
  </div>
{/* End of Show current image
 */} 

{/*  Start of Alt images container 
 */}  
<div className="alt container">
<Swiper 
navigation={true} modules={[Navigation]} className="mySwiper"
      slidesPerView={4}
             spaceBetween={25}

        breakpoints={{

  200:{
 slidesPerView:2,
       spaceBetween:45

        },
  416:{
 slidesPerView:3,
       spaceBetween:15

        },
      888:{
 slidesPerView:2,
       spaceBetween:60

        }, 
     936:{
 slidesPerView:3,
       spaceBetween:25

        },
   
        1114:{
 slidesPerView:3,
       spaceBetween:50

        },
        1200:{
 slidesPerView:4,
       spaceBetween:25

        },
   
      }}
    
      
  >


  {
    Product?.images.map((image,index)=>{

      return(
        <SwiperSlide key={index}  
      
        >
      <div className={`container-altImg  ${currentImage==image.url?"active":""} `}
      onClick={()=>{setCurrentImage(image.url)}}
      >
        <img src={image.url} key={index}  alt=""/>
      </div>
      </SwiperSlide>
            
          )

    })
  }

  </Swiper>

</div>
{/*  End of Alt images container 
 */}

  </div>
    
  {/* End of Images container
 */} 




{/*  Start of Text container part
 */}
  <div className="text">

{/*     Start of catg-rate    (Category and rate)
 */}
 <div className="catg-rate">
  <p>{Product.category}</p>
  <p> <span><FaStar/> </span>{Product.rating}</p>
</div>

{/*     End of catg-rate    (Category and rate)
 */}


{/* Start of name (product name) 
 */}
 <div className="name">

<h2>{Product.name}</h2>
</div>


{/* End of name (product name) 
 */}


{/* Start of price (product price) 
 */}
<div className="price">
  <p> <span>{Product.currency }  {Product.oldPrice}</span>  <span>{Product.sale}%</span></p>
  <p>{Product.currency } {Product.currentPrice}</p>
</div>
{/* End of name (product price) 
 */}



{/* Start of description (product description) 
 */}
<div className="description">
{Product?.description.map((item,index)=>{
return(<p key={index}>{item}</p>);

})}

</div>

{/* End of description (product description) 
 */}



{/* Start of sizes (product sizes) 
 */}

<div className="sizes">
  {
    Product?.availableSizes.map((size,index)=>{
      return(<p  className={size==currentSize?"active":""}  onClick={()=>setCurrentSize(size)} key={index}>{size}</p>)
    })
  }
</div>


{/* End of sizes (product sizes) 
 */}



 
{/* Start of buttons (quantity , add to cart) 
 */}

<div className="buttons">

<div className="quantity">
<div className="top">
<p>Quantity</p>
</div>

<div className="bottom">
<QuantityButton/>
</div>
</div>

<div className="addToCart">
  <button className="btn"> Add to cart <span><HiOutlineShoppingCart/></span></button>
</div>
{/* End of buttons (quantity , add to cart) 
 */}


</div>
</div>



{/*  End of Text container part
 */}





    </div>
    // End of ProductDetails
  
  )
}
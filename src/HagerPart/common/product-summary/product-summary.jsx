import React from "react";
import "./css/Product-summary.css"
import QuantityButton from "../quantity-button/quantity-button";
import { GoTrash } from "react-icons/go";




export default function ProductSummary({index,Product,chekoutForm=false})
{


    return( !Product?<p>Product Summary Loading</p> :
     <div key={index} className={`ProductSummary ${chekoutForm?'checkoutForm':""} `}>

{/*     Start of   card  
 */}
<div className="card">

{/*     Start of  image  (  image - single product-container)
 */}


  <div className="image">
    <img  src={Product?.images[0]?.url} alt={Product?.name} />
    </div>  
    {/*     End of  image  (  image - single product-container)
 */}


 {/*     Start of  text  (  text - single product-container)
 */}

<div className="text">

    <p className="name">{Product?.name}</p>   

    {
chekoutForm?
<>
<div className="count-price ">
    <p>1 x {Product?.currency} {Product?.currentPrice}</p>
</div>
<div className="check-quote">
    <p>Please recheck the size before send to me.</p>
</div>
</>
:

<>
  <div className="price">
  <p> <span>{Product?.currency }  {Product?.oldPrice}</span>  <span>{Product?.sale}%</span></p>
  <p>{Product?.currency } {Product?.currentPrice}</p>
</div>

{/*          Start of  buttons  ( quantity ,delete)
 */} 
    <div className="buttons">
        
<QuantityButton/>

<div className="delete">
    <a href="#"> <span><GoTrash/></span> Delete</a>
</div>
    </div>
    </>

        }


         {/*     End of  buttons  ( quantity ,delete)
 */}

</div>

 {/*     End of  text  (  text - single product-container)
 */}

    </div>
    {/*     End of   card  
 */}

 {/*     Start of   note  
 */}
 {
!chekoutForm &&
<div className="note">
    <p>Notes</p>
    <input type="text"  placeholder="Eg:Please double check before packing." />
</div>
}
 {/*     End of   note  
 */}




 
    </div>    )
}
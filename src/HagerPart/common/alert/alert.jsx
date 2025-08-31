import React, { useRef } from "react";
import "./css/Alert.css"

import { RxCross1 } from "react-icons/rx";

export default function Alert()
{
const alertRef=useRef();
    function DeleteAlert()
    {
alertRef.current.style.display="none";        
    }

    return <div  ref={alertRef} className="Alert">
    <p>Hooray!You have promo code! <a href="#">Use promo code</a></p>

    <RxCross1  className="exit" onClick={()=>DeleteAlert()}/>

   </div>
}
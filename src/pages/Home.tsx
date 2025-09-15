import  BestDressSection from '../components/BestDressSection'
import FashionLanding from '../components/CollectionSection'
import HeroSection from '../components/Hero'
import ServiceFeatures from '../components/ServiceFeatures'
import GenerateToken from "../APIs/generateToken.js";
/* import FetchProducts from "../APIs/fetchProducts.js";
 */import { useEffect, useState } from 'react';

const Home = () => {

  const [userData,setUserData]=useState([]);


  /* async function get()
  {
    let products = await FetchProducts();
console.log(products);
  } */
useEffect(()=>{
/* get();
 */

if(localStorage.getItem("token")!=undefined || localStorage.getItem("token")!=null )
{
let token =localStorage.getItem("token");
console.log(token);

(async ()=>{
  

let res = await GenerateToken({token});
console.log(res);
setUserData(res);

let {data} =res;
console.log(data[0]);

})()
}

},[])


  return (
    <div>
     
      <HeroSection />
      <FashionLanding />
      <BestDressSection />
      <ServiceFeatures/>
    </div>
  )
}

export default Home

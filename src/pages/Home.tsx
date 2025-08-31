import  BestDressSection from '../components/BestDressSection'
import FashionLanding from '../components/CollectionSection'
import HeroSection from '../components/Hero'
import ServiceFeatures from '../components/ServiceFeatures'
import GenerateToken from "../APIs/generateToken.js";
import { useEffect, useState } from 'react';

const Home = () => {

  const [userData,setUserData]=useState([]);
useEffect(()=>{

if(localStorage.getItem("token")!=undefined || localStorage.getItem("token")!=null )
{
let token =localStorage.getItem("token");
(async ()=>{
let res = await GenerateToken({"token":`${token}`});
console.log(res);
setUserData(res);

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

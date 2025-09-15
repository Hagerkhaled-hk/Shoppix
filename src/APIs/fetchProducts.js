

import FetchApi_Function from "./commonFunctions/fetchFunction";


export default async function FetchProducts()
{ 
     let res =await FetchApi_Function(import.meta.env.VITE_ALLPRODUCTS_API);
     return res;

}




import React ,{createContext,useState}from "react";


export const LightContext=createContext();

export default function LightContextProvider({children})
{
   const [isLightSection, setIsLightSection] = useState(false);


    return  <LightContext.Provider value={{isLightSection,setIsLightSection}}>
{children}
    </LightContext.Provider>
}
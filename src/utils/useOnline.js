import {useState,useEffect} from "react";
const useOnline=()=>
{
  const[isonline,setisonline]=useState(true);

  useEffect(()=>{
    
    const handleonline=()=>{
        setisonline(true)}

     const handleoffline=  ()=>{
        setisonline(false) }

    window.addEventListener("online",handleonline)

    window.addEventListener("online",handleoffline)


   return ()=>{
    window.removeEventListener("online",handleonline)
    window.removeEventListener("offline",handleoffline)
   }

  }
  
  
  ,[]);


    

    return isonline;
}

export default useOnline;
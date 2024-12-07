import {useState,useEffect} from "react";
const useLogin=()=>{
   const [islogin,setislogin]=useState(true);

   useEffect(()=>{
     
    setislogin(false)

   },[]); 

    return islogin
       
    

    

}
export default useLogin;
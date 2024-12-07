import Profilej from "./Profilej";
import {Outlet} from "react-router-dom";
import Profileclass from "./Profileclass"
const About=()=>{
    return(
        <>

   <div> About us page </div>
   <p>
        
         This is the namste react live roter lecture
   </p>
   <Profilej  name={"Akshay"}/>
   <Profileclass name={"Amit"} class={"xyz"}/> 
   </>

    )

}

export default About;
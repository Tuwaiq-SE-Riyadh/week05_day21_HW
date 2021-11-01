import { useContext } from "react";
import { State } from "../App";

function AboutUs(){
    const state = useContext(State);

    return(
        <div>
          {/* <p id="user">{state.username}</p> */}
        <h1>About Us</h1>  
        </div>
    )
}

export default AboutUs;
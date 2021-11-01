import {  useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

function Home(){
    const history = useHistory();
    const Click=()=>{
      
       history.goBack();
       

    }
    return(
        <div>
            <h1> Welcome to the home page </h1>
            <button  className="click" onClick={Click}> Go Back  </button>
           
        </div>
    )
}
export default Home;
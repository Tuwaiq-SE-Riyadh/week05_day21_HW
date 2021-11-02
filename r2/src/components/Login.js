import { useContext } from "react";
import {UserContext} from "../App"
import { Link, Route, useParams, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
   
    return (
      <div className="App">
        
        <form onSubmit={(e)=>e.preventDefault()}>
          <lable>login </lable> 
          <input type="text" />
          <input type="passowrd" />
          <button onClick={()=>{history.push("/")}}>Login</button>
          </form>

        
         
      </div>
    );
  }
  
  export default  Login
    
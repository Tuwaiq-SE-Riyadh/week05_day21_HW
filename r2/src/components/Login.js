import { useContext } from "react";
import {UserContext} from "../App.css"
import { Link, Route, useParams, useHistory } from "react-router-dom";

function Login() {
  const userContext = useContext(UserContext)
  const history = useHistory();
  const goToHome = () => {
    
    history.push("/Home");
  };
    return (
      <div className="App">
        <p>{userContext.setLogser("logged in sucsses")}</p>
        <form>
          <lable>login </lable> 
          <input type="text" />
          <input type="passowrd" />
          <button onclick={goToHome}></button>
          </form>

        
         
      </div>
    );
  }
  
  export default  Login
    
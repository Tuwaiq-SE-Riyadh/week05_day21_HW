import { useContext } from "react";
// import the UserContext
import { UserContext } from "../App";
import { useHistory } from "react-router";


function Login(){
    const userContext = useContext(UserContext)
   
   
    let history = useHistory(); //freind helped me with the History code 
    const loginClick = () => {
        userContext.setUser("loged in");
    
        history.push("/")
      }

    return(
    <div>
    
    <h1>Log in page</h1>

    <button onClick={loginClick}> click to log in</button>
    </div>
        
    )
    
    }
    export default Login;
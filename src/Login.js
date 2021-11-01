import { Link, Route, useParams, useHistory } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { UserContext } from "./App";


    function Login(){   

        const history = useHistory();
        const userContext = useContext(UserContext);
        console.log(userContext.login)
    
        const login = ()=>{

            userContext.setlogin("Logged successfully")
            // history.push("/");
        }

return (
       <div>
       
<h1>Login Form</h1>
<label><b>Username</b></label>


    <input type="text" placeholder="Enter Username"  />
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" />  
    <button type="submit" onClick={login}>Login</button>
    <h1>{userContext.login}</h1>

    
    </div>
    )
    
}
export default Login; 
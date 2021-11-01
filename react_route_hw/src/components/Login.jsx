import { Link, Route, useParams, useHistory ,Redirect} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import Home from "./Home";
function Login (){
    const userContext = useContext(UserContext)
    const changeUser = (e) => {
        
        userContext.setUserValue(e.target.value);
      };

      const updateUser = () => {
        userContext.setUser(userContext.userValue);
        alert("Login with user name : "+userContext.userValue)
        
      };
    return (
       <div>
       
<h2>Login Form</h2>
<label><b>Username</b></label>
    <input type="text" placeholder="Enter Username" onChange={changeUser} />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" />
        
    <button type="submit" onClick={updateUser}>Login</button>
    

    
    </div>
    )
    
}
export default Login;

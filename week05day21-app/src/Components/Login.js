import { useContext, useState } from "react";
import {useHistory} from "react-router-dom";
import { UserContext } from "../App";
function Login(){
    const userContext = useContext(UserContext)
    const history = useHistory();
    const [logged,setLogged]=useState();
const goToHome=()=>{
    
history.push("/Home");
}
    return(   

    <div className="login">
        <h1>Login</h1>
        <input type="text"></input>
        <input type="password"></input>
        <button onClick={goToHome}>Login</button>
    </div>
 )
}
export default Login;
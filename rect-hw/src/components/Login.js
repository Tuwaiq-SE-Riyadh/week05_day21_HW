import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";
function Login(){
    const history = useHistory();
    const userContext = useContext(UserContext);

    const login = ()=>{
        userContext.setlogin("Logged successfully")
        history.push("/Home");
    }
    
    return(
        <>
        <h1>Login Form</h1>

        <div className="login">
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="password"></input>
            <button onClick={login}>Login</button>
        </div>
        </>
    );
}

export default Login;
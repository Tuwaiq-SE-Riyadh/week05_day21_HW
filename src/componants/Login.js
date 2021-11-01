import { useContext ,useState} from "react";
import { State } from "../App";
import { useHistory } from "react-router-dom";

function Login(){
    const state = useContext(State);
    const history = useHistory();
    

    function ChangeState(){
        state.setSt(true);
        state.setUsername(document.getElementById("userName").value);
        console.log(state.username);
        history.push("/");
        state.setLog("Log Out");
     
    }
    return(
        <div>
            <h1 id="log">Log In</h1>
            <input id="userName"/>
            <input id="password"/>
            <button onClick={ChangeState}>Log In</button>
        </div>
    )
}

export default Login;
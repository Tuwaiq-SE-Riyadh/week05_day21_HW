import { useContext } from "react";
import { State } from "../App";

function Login(){
    const state = useContext(State);

    function ChangeState(){
        state.setSt(true);
        state.setUsername(document.getElementById("userName").value);
        console.log(state.username);
        

    }
    return(
        <div>
            <h1>Log In</h1>
            <input id="userName"/>
            <input id="password"/>
            <button onClick={ChangeState}>Log In</button>
        </div>
    )
}

export default Login;
import { useState } from "react";
import { useHistory } from "react-router";
import { useContext } from "react";
import { MyContext } from "../App";

function Login() {
  const userContext = useContext(MyContext)
    let history = useHistory();
    const[password,setpassword] = useState("")
    const[userValue, setUserValue] = useState("")

    const getUserName = (e) => {
        setUserValue(e.target.value)
    }
    const getPassword= (e) => {
        setpassword(e.target.value)
    }

    const loginClick = () => {
      userContext.setUser(userValue);
      userContext.setToggle(true);
      history.push("/")
    }

    return (
            <div>
            <label>User Name</label>
              <input onChange={getUserName} type="text"/> 
              <br/>
              <label>Password</label>
              <input onChange={getPassword} type="password"/>
              <br/>
              <button onClick={loginClick}>Login</button>
            </div>              
    );
  }
  
  export default Login;
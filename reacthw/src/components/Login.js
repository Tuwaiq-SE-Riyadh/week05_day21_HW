import { useState } from "react";
import { Link, Route, useParams, useHistory } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../App";


function Login() {
    const userContext = useContext(UserContext)
    const [userName,setUserName] = useState("");
    // const [user,setUser] = useState("");
    const history = useHistory()
    const goToHome = () => {
        // history.push will switch the current path with the passed one
        history.push("/");
      };
    const goBack = () => {
      // will go back to the previous path
      userContext.setUser(userName)
      history.goBack();
    };
    const changeuserName = (e) => {
        // will go back to the previous path
        setUserName(e.target.value)
      };
  
    return (
      <div className="LoginPage">
          {/* // * In the login form when the user press login it should take him to the home page and change the state of the user 
          (whether he is logged in or not) in the navbar. */}

          <h1>Log in</h1>
          <h3>Enter UserName:</h3>
          <input type="text" onChange={changeuserName}/>
          <h3>Enter Password:</h3>
          <input type="password" />
          <button onClick={goBack}>Log in</button>
      </div>
    );
  }
  
  export default Login;
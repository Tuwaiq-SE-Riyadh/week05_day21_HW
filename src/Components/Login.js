import { useContext } from "react";
import { useHistory } from "react-router-dom";

import App from "../App";
import "../App.css";
import { UserContext } from "../App";

// import "./App.css";

function Login() {
  const history = useHistory();
  const UserContext3 = useContext(UserContext);
  const login = (e) => {
    UserContext3.setState("LOGGED");
    history.push("/Home");
  };
  return (
    <>
      <h1>Login page</h1>

      <div className="login">
        <input type="text" placeholder="Enter your Username"></input>
        <input type="text" placeholder="Enter your password"></input>
        <button onClick={login}>Login</button>
      </div>
    </>
  );
}
export default Login;

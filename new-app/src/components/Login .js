import "../index.css"
import { useContext } from "react";
import { UserContext } from "../App";
import {  useState } from "react";
import { useHistory } from "react-router-dom";

function Login () {

  const {user, setUser } = useContext(UserContext)
  const [ nameInput, setName ] = useState("not");
  const history = useHistory();

  const login = () => {
      
    setUser(nameInput);
    history.push("/");
    
};
const InputName = (e) =>{
  setName(e.target.value)
}

    return (
    
    <div className="login">
      <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text"onChange={InputName}/>
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password"/>
          <label>Password</label>
        </div>
        <a onClick={() => login()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </a>
      </form>
    </div> 
    </div>
    
    
    );
  }

  export default Login 
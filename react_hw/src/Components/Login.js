import '../App.css';
import { useContext } from "react";
import { UserName } from "../App";
import {useState } from "react";
import { useHistory } from "react-router-dom";



function Login() {

    const h = useHistory();
    const homeurl = () => {
        h.push("/");
      };

    const [userChange, setUser] = useState();

    const changeUser = (e) => {
        setUser(e.target.value);
    };

    const User = useContext(UserName)
  return (

    <div className="dlog">
  <div className="mb-3">
    <label  className="form-label">UserName</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changeUser}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>

  <button type="submit" className="btn btn-primary" onClick={ () => {User.setUser("@"+userChange); homeurl();    } }>
  Submit</button>

    </div>
  );
}

export default Login;

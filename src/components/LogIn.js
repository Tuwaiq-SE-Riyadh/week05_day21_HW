import { useContext } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { UserContext } from "../App";
function LogIn() {
  const history = useHistory();
  const userContext = useContext(UserContext);
let user;
const getUser=(e)=>{
    user=e.target.value
    console.log(user)
}

  const LogIn = (e) => {
    userContext.setLog(user);
    history.push("/Home");
  };

  return (
    <>
      <h1>Log In </h1>
      <h2>Enter you UserName and password</h2>

      <div className="LogIn">
        <input type="text" onChange={getUser} placeholder="Username"></input>
        <input type="password" placeholder="password"></input>
        <button onClick={LogIn}>LogIn</button>
      </div>
    </>
  );

}
export default LogIn;
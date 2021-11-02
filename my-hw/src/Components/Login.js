import { useContext } from "react";
// import the UserContext
import { UserContext } from "../App";

import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const userContext = useContext(UserContext);

  const goHome = () => {
    history.push("/");
    <h2>{userContext.setUser("Successfully logged in")}</h2>;
  };
  return (
    <div>
      <h1>welcome :</h1>

      <p>To log in, enter your email and password:</p>
      <input type="text" placeholder="Email" />
      <br></br>
      <input type="text" placeholder="Password" />
      <br></br>
      <button onClick={goHome}>LOG IN</button>
    </div>
  );
}
export default Login;

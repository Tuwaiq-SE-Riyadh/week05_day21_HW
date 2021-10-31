import { useContext } from "react";
import { Link, Route, useParams, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import "../App.css";

function Nav() {
  // console.log(UserContext);
  const UserContext2 = useContext(UserContext);
  return (
    <>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/AboutUS">About</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li >
         <p > {UserContext2.state}</p>
        </li>
      </ul>
    </>
  );
}
export default Nav;

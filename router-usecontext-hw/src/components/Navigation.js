import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";

function Navigation() {
  const userContext = useContext(MyContext)
    return (
        <nav className="my-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          {userContext.toggle && <li>{"Welcome " + userContext.user}</li>}
        </ul>
      </nav>
    );
  }
  
  export default Navigation;
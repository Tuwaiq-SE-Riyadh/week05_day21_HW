import { Link, Route, useParams, useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./App";

function Navbar(){

    const userContext = useContext(UserContext)

    // const show = () => {
       
    //     userContext.log

    // }

    return (
        <div className="links">
            
          <Link to="/about">About Us</Link>

          <Link to="/">Home</Link>

          <Link to="/login">Login</Link>
          
        </div>
      );
}

export default Navbar;
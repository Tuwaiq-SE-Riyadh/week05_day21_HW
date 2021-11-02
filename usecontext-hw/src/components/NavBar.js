import { useContext } from "react";
// import the UserContext
import { UserContext } from "../App";

import { Link } from "react-router-dom";
function NavBar() {

  const userContext = useContext(UserContext) 
    return (
      <div className="links">
        {/* link is used to switch the path, same as anchor tag in html <a></a> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">login</Link>
        <h4> State: {userContext.user} </h4>
        
      </div>
    );
  }
  
export default NavBar;
  
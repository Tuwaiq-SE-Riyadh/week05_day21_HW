import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../App";
function Navbar() {
  const Conte = useContext(UserContext);
  return (
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Login">Login</Link>
      <h5>{Conte.user}</h5>
    </div>
  );
}
export default Navbar;

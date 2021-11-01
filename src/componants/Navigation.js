import { Link } from "react-router-dom";
import './compo.css';
import { useContext } from "react";
import { State } from "../App";

function Navigation() {
  const state = useContext(State);
    return (
      <div className="links">
        <Link to="/"><p>Home</p></Link>
        <Link to="/AboutUs"><p>About Us</p></Link>
        <Link to="/Login"><p>{state.log}</p></Link>
        <p id="user">{state.username}</p>
        
      </div>
    );
  }

  export default Navigation;
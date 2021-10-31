import '../App.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserName } from "../App";

function Navbar() {
  const User = useContext(UserName)

  return (
    <div>



<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className ="nav-link active" to="/">Home</Link>
        </li>
          <li className="nav-item">
            <Link className ="nav-link active" to="/About">About us</Link>
          </li>

          <li className="nav-item">
         { User.User === 'Login' ? <Link className ="nav-link active" to="/Login">{User.User}</Link>: 
         <Link className ="nav-link active" to="/">{User.User}</Link>}
          </li>

        </ul>

      </div>
    </div>
  </nav>

    </div>
  );
}

export default Navbar;

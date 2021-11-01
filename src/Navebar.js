import { Link, Route, useParams, useHistory } from "react-router-dom";


function Navebar() {

    return (
      <div className="links">
        {/* link is used to switch the path, same as anchor tag in html <a></a> */}
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Login">Login</Link>
      </div>
    );
  }


  
   export default Navebar; 
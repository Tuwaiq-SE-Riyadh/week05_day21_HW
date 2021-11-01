import './style.css';
import { Link, Route, useParams, useHistory } from "react-router-dom";

function Navigation() {
  let i=20;
    return (

        <div class="topnav">
            <a ><Link to="/Home">Home</Link></a>
            <a ><Link to="/Login">Login</Link></a>
            <a ><Link to="/Abuot">Abuot us</Link></a>
            <a ><Link to={"/Test/"+i}>Test</Link></a>
  
          </div>
    );
  }
//   <Link to="/Home">Home</Link>
//   <Link to="/Contactus">ContactUS</Link>
export default Navigation;

  
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Login from "./Login";
function Navbar() {
    function Nav() {
        return (
          <div>
            <div className="Nav">
                <h1>Homework</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Aboutus">Aboutus</Link>
            </div>
          </div>
        );
      }
    return (
      <div>
        {/* // * The navbar will allow the user to navigate between About us and Home components (using Router). */}
        <Nav/>
        <Route exact path="/" component={Home} />
        <Route exact path="/Aboutus" component={Aboutus} />
        <Login/>
      </div>
    );
  }
  
  export default Navbar;
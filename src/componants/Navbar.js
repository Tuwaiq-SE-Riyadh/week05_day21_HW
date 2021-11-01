import Navigation from "./Navigation";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Login from "./Login";
import {Route} from "react-router-dom";




function Navbar() {
  
  return(
    <div>
      <Navigation/>
  <Route exact path="/" component={Home} />
  <Route path="/AboutUs" component={AboutUs} />
  <Route path="/Login" component={Login} />
    </div>
  
  );
  
}


export default Navbar;

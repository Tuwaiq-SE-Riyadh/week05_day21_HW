import {  Route,BrowserRouter as Router,Link} from "react-router-dom";
 import {useContext}from "react"
 import {UserContext} from "../App.css"
function Navbar() {
   const userContex = useContext(UserContext)
    return (
      <div className="nav">
        

      
        <ul>
         <Link to="/">Home </Link>
        
          <Link to="/Aboutus">Aboutus</Link>

          <Link to="/login">Login </Link>
         <p> {userContex.loguser}</p>
          
         </ul>
       
      </div>
      
    );
    
  }
  export default Navbar;
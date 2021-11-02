import { Link} from "react-router-dom";
function NavBar(){
    return(
        <div className="navbar">
          
            <Link to="/Home">Home </Link>
            <Link to="/Login">Login </Link>
            <Link to="/Aboutus">Aboutus </Link>
         
        </div>
    )
}
export default NavBar;
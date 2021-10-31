import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
function Navbar(){

    const userContext2 = useContext(UserContext);
    return(
        <div className='nav'>
        <Link to="/Home">Home</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/Login">Login</Link>  
        <p>{userContext2.login}</p>      
        </div>
    );
}

export default Navbar;
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
function Navigation(){
    const {user, setUser} = useContext(UserContext)

    return(
        <div className="Navigation">
     <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      { user === true ? <Link className ="nav-link active" to="/Login"> Login Successfully</Link>: <Link to="/Login">Login</Link> }
     
        </div>
    )
}
export default  Navigation;
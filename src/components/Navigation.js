import { useContext } from "react";
import { Link, Route, useParams, useHistory } from "react-router-dom";
import { UserContext } from "../App";
function Navigation() {
    const Context = useContext(UserContext);
    return (
        <>
        <div className="nav">
            <Link to='/'>Home</Link>
            <Link to='/About'>About Us</Link>
            <Link to='/LogIn'>LogIn</Link>
            {Context.Log}

        </div>
        </>
    )
}

export default Navigation
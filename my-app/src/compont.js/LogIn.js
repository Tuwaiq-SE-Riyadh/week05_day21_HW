import {  useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

function LogIn(){
    const {user, setUser} = useContext(UserContext)
    const history = useHistory();
    const log=()=>{
        setUser(true)
        history.push('/Home')
    }
    // const log=()=>{
    //    setUser(true)}
    //     history.push('/ Home')
    // }
    return(
        <div className="main" >
           <from className="Login">
               <input type="text" placeholder="User Name" /> 
               <input type= "password" placeholder="Password" />
               <button  className="click"   onClick={log}> LogIn </button>
             
           </from>
        </div>
    )
}
export default LogIn;
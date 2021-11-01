import './style.css';
//1 
import { createContext, useState } from "react";
import Home from './Home';
import { Link, Route, useParams, useHistory } from "react-router-dom";

// 2
export const UserContext = createContext();

function Login() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [pass, setPass] = useState(0);


  function chngename(e){
    let newname=e.target.value
    setName(newname)
   
  }
  function chngepas(e){
    let newpass=e.target.value
    setPass(newpass)
  }
  function go(e){
    history.push("/Home");
  }

  
  return (
   <>
       <div className="cont">
      
              
                <label  ><b>Username</b></label>
                <input onChange={chngename} type="text" placeholder="Enter Username" name="uname" />
            
                <label for="psw"><b>Password</b></label>
                <input onChange={chngepas} type="password" placeholder="Enter Password" name="psw" required/>    
                <button onClick={go} >Login</button>
  
                  <input type="checkbox" checked="checked" name="remember"/> Remember me
    </div>
    
    <UserContext.Provider value={{name: name, setName: setName }}>
    <Home/>
    
    </UserContext.Provider>
   
   
    </>
  );
}

export default Login;
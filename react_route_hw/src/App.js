import { Link, Route, useParams, useHistory,Redirect } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import './App.css';
import Home from './components/Home'
import About from "./components/About";
import Login from './components/Login'

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState();
  const [userValue, setUserValue] = useState();

  return (
    <UserContext.Provider value={{ user: user,setUser:setUser,userValue:userValue,setUserValue:setUserValue}}> 
    <div className="App">
    <Navigation/>
    <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route  path="/login" component={Login} />
    </div>
    </UserContext.Provider>
  );
}

function Navigation() {
  const userContext = useContext(UserContext)
  return (
    
    <div className="links">
      {/* link is used to switch the path, same as anchor tag in html <a></a> */}
      
      <ul className="topnav">
    <li><a className="active"  >TV Shows</a></li>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li className="right"><Link to="/">{userContext.user}</Link></li>
    
  </ul>

    </div>
    
  );
}

export default App;

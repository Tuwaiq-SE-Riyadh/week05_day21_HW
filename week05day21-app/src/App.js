import { Route } from 'react-router';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Login from './Components/Login';
import {createContext, useState} from "react";
export const UserContext = createContext();
function App() {  
  
  
  return (
    <div className="App">
{/* <UserContext.Provider value={{looged ,setLogged}}> */}
      <NavBar/>
      <Route  path="/Home" component={Home}/>
      <Route  path="/Aboutus" component={Aboutus}/>
      <Route  path="/Login" component={Login}/>
      
     {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;

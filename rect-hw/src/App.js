import './App.css';
import React, { createContext, useState } from "react";
import Home from './components/Home'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Aboutus from './components/Aboutus';
import {Route} from "react-router-dom";

export const UserContext = createContext();
function App() {
  const [login, setlogin] = useState("Guest");
  

  return (
    <div className="App">

    <UserContext.Provider value={{ login, setlogin }}>
      <Navbar/>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route path="/aboutus" component={Aboutus} />
    </UserContext.Provider>
    </div>
  );
}


export default App;

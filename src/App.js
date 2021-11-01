import "./App.css";
import { Link, Route, useParams, useHistory } from "react-router-dom";
import React, { createContext, useState } from "react";
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import LogIn from './components/LogIn';

export const UserContext = createContext();

function App() {
  const [Log, setLog] = useState("LogIn");

  return (
<div className="App">
      <UserContext.Provider value={{ Log, setLog }}>    
      <Navigation />
      <div className='#'>
      <Route exact path='/' component={Home}  />
      <Route exact path='/AboutUs' component={AboutUs}/>
      <Route exact path ='/LogIn'component={LogIn}/>
    
     
    </div>
    </UserContext.Provider>
    </div>
  );
}

export default App;
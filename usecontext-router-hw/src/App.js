import './App.css';
import { Link, Route, useParams, useHistory } from "react-router-dom";
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Home from './Home';
import LogIn from './LogIn';
import React, {createContext, useState} from "react";

export const UserContext = createContext();

function App() {

  const [login, setLogin] = useState("Successful");


  return (
    <div className="App">
      <UserContext.Provider value={{login, setLogin}}>
            <Navbar />
      <Route path="/about" component={AboutUs}/>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LogIn} />
     </UserContext.Provider>
    </div>
  );
}

export default App;

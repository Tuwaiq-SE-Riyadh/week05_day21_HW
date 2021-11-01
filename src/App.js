import { Link, Route, useParams, useHistory } from "react-router-dom";
import "./App.css";
import Navebar from "./Navebar"
import Home from "./Home";
import Aboutus from "./Aboutus";
import Login from "./Login";
import React, { createContext, useState } from "react";


export const UserContext = createContext();


function App() {

  const [login, setlogin] = useState("");


  return (
    <div className="App">
      <UserContext.Provider value={{ login, setlogin }}>
      <Navebar/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={Aboutus} />
      <Route exact path="/Login" component={Login} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
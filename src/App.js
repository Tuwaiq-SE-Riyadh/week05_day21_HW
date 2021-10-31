import logo from "./logo.svg";
import "./App.css";
import { Link, Route, useParams, useHistory } from "react-router-dom";
import React, { createContext, useState } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import AboutUS from "./Components/AboutUS";
import Login from "./Components/Login";

export const UserContext = createContext();
function App() {
  const [state, setState] = useState("Not login");

  return (
    <div className="App">
      <UserContext.Provider value={{ state, setState }}>
        <Nav />
        <header className="App-header">
          {/* <Route path="/" component={App} /> */}
          <Route path="/Home" component={Home} />
          <Route path="/Aboutus" component={AboutUS} />
          <Route path="/Login" component={Login} />
        </header>
      </UserContext.Provider>
    </div>
  );
}

export default App;

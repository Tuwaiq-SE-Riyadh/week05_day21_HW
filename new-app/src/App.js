import {  Route } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Login  from "./components/Login ";
import About from "./components/About";
import Home from "./components/Home";

export const UserContext = createContext();


function App() {

  const [user, setUser] = useState("");

  return (
    <UserContext.Provider  value={{user, setUser}}>
    <div className="App">
      <Navigation />
      {user.length > 0 &&
       <h1>user: {user}</h1>
       
      }
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About}/>
      <Route exact path="/Login " component={Login} />
    </div>
   </UserContext.Provider>
  );
}

export default App;

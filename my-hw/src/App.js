import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { createContext, useState } from "react";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <div>
        <NavBar />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
      </div>
    </UserContext.Provider>
  );
}

export default App;

import { createContext, useState } from "react";
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

export const MyContext = createContext();


function App() {

  const[user,setUser] = useState("")
  const[toggle,setToggle] = useState(false)
  return (
    <>
    <div className="App">
    <MyContext.Provider value={{user: user, setUser: setUser, toggle: toggle, setToggle: setToggle}}>
      <Navigation/>
      <Route exact path="/Login" component={Login} />
      <Route exact path="/" component={Home} />
    </MyContext.Provider>
      <Route exact path="/about" component={About} />
    </div>
    </>
  );
}

export default App;

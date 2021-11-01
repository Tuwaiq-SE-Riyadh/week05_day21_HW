import logo from './logo.svg';
import { Link, Route, useParams, useHistory } from "react-router-dom";
import './style.css';
import Home from './Home';
import Login from './Login';
import Navigation from './Navigation';
import Abuot from './Abuot';
import Test from './Test';
import { createContext, useState } from "react";

export const UserContext = createContext();



function App() {

  const [name, setName] = useState("Guest");
  return (
   <>
      <Navigation />
      =
       <div className="App">
       <UserContext.Provider  value={{name: name, setName: setName }}>
      <Route exact path="/Home" component={Home} />
      <Route exact  path="/Login" component={Login} />
      <Route exact  path="/Abuot" component={Abuot} />
      <Route exact  path="/Test/:id" component={Test} />
      </UserContext.Provider>
    </div>
    </>
  );
}


export default App;

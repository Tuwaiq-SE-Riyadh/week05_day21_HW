import {  Route,BrowserRouter as Router,Link} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Aboutus from './components/Aboutus';
 import Navbar from './components/Navbar';

import { createContext, useState } from "react";


export const UserContext = createContext();

function App() {
  const [loguser, setLoguser] = useState("successful");

  return (

    <Router>
      < UserContext.Provider value={{loguser,setLoguser}}>
        <div className="App">
          

          <Navbar />
        
          <Route exact path="/" component={Home} />
          <Route  path="/Aboutus" component={Aboutus} />
          <Route exact path="/Login" component={Login} />
    
          
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;

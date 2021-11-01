import { Route} from "react-router-dom";
import './App.css';
import Navigation from './compont.js/Navigation'
import Home from "./compont.js/Home";
import About from './compont.js/About'
import LogIn from "./compont.js/LogIn"
import { createContext, useState } from "react";

// export the context
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(false);
  
  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
    <div className="App">
     <Navigation />

     <Route exact path="/" component={Home} />
     <Route path="/About" component={About} />
     <Route path="/LogIn" component={LogIn} />

    </div>
    </UserContext.Provider>
  );
}

export default App;

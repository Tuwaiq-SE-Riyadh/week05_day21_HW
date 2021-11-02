import Home from "./components/Home"
import About from "./components/About"
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import { Link, Route, useParams, useHistory } from "react-router-dom";
import './App.css';
import { createContext, useState } from "react";

export const UserContext = createContext( );

function App() {
  const [user, setUser] = useState("Not logged in");
  const [state, setState] = useState(false);

  

  const updateUser = () => {
    setUser();
  };

  
  return (    
      
    
<UserContext.Provider value={{ user: user, setUser: setUser }}>
    <div className="App">
      <NavBar />
      {/* Route renders a component depending on the current path in the url */}
      <Route exact path="/" component={Home} />
      {/* render takes a function that returns JSX (another component), can be used to pass props*/}
      <Route path="/about" render={() => <About name="John" />} />
      {/* using the keyword exact will result in only rendering the component when the path matches exactly something like /products/1 will not match anymore */}
      <Route path="/login" component={Login} />
 
    </div>
    </UserContext.Provider>
  );
}


export default App;
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About_us from './Components/About_us';
import Home from './Components/Home';
import Login from './Components/Login';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { createContext, useState } from "react";
export const UserName = createContext();




function App() {

  const [User, setUser] = useState('Login')


 
  return (
    <UserName.Provider value={{User : User , setUser:setUser}}>
    <div>
      <Navbar />
      
    <div className="d0">

    <Switch>

    <Route exact path='/' component={Home} />
    <Route  path='/About' component={About_us} />
    <Route  path='/Login' component={Login} />

  
    </Switch>

      </div>
  
      <Footer />
    </div>
</UserName.Provider>

  );
}


export default App;

import { useState, createContext } from "react";
import './App.css';
import Navbar from "./componants/Navbar";
export const State = createContext();

function App() {
const [st, setSt] = useState(false);
const [username,setUsername]=useState(" ");

  
  return(
    <State.Provider value={{st , setSt,username,setUsername}}>
    <div>
      
      <Navbar/>
  
    </div>
    </State.Provider>
  );
  
}


export default App;


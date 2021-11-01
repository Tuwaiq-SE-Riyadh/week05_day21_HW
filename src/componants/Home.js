import { useContext } from "react";
import { State } from "../App";

function Home(){
    const state = useContext(State);
    
    return(
        <div>
          <p id="user">{state.username}</p>
        <h1>Home</h1>
        </div>
    );
}

export default Home;
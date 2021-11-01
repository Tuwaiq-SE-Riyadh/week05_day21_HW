import { useContext } from "react";
import { UserContext } from "./App";

function Home(){

    const userContext = useContext(UserContext)

    return (
        <div>
          
          <h2>Welcome to home page</h2>
          <h1>{userContext.login}</h1>

        </div>
      );

}

export default Home;
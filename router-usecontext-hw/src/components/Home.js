// import the hook useContext to get the value of the context
import { useContext } from "react";
// import the UserContext
import { MyContext } from "../App";

function Home() {

    const userContext = useContext(MyContext)
    return (
        <>
          <h1>Home page</h1>

          {userContext.toggle && <h1>Welcome {userContext.user}</h1>}

        </>
    );
  }
  
  export default Home;
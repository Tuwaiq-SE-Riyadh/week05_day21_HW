import { useContext } from "react";
import { UserContext } from "./Login";

function Home() {
  const userContext = useContext(UserContext)
  console.log("I am in home")
  console.log(userContext.name)
  let val=userContext.name;
  return (
   <>
       <div >

           <h1> Welcome {val} , you are logged in</h1>
    </div>
    </>
  );
}

export default Home;
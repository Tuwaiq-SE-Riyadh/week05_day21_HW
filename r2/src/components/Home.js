import {useContext} from 'react'
import { UserContext } from '../App';


function Home() {
    const userLog = useContext(UserContext)
    return (
      <div className="home">
        <h3>
          Home
        </h3> 
        <p>{userLog.loguser}</p>
      </div>
    );
  }
  
  export default Home;
  
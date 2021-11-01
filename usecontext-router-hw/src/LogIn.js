import { Link, Route, useParams, useHistory } from "react-router-dom";

function AboutUs(){

    const history = useHistory();

    return (
        <div>

           <h3>Enter your user name</h3> 
           <input type="text"/>
           <h3>Enter your user password</h3>
            <input type="text"/>
            <h3></h3>

          <button onClick={()=>{history.push("/")}}>Log in</button>

        </div>
      );

}

export default AboutUs;
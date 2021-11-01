import {  useHistory } from "react-router-dom";
function About(){
    const history = useHistory();
    const Click=()=>{
      
       history.goBack();
       

    }
    return(
        <div>
            <h1> About Me </h1>
            <button className="click" onClick={Click}>  Go Back   </button>
        </div>
    )
}
export default About;
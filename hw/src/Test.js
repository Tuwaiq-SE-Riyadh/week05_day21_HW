import { Link, Route, useParams, useHistory } from "react-router-dom";
function Test() {
    const { id } = useParams();
    return (
     <>
         <div >
             <h1>Test</h1>
          <h1>Test the extra concept {id}</h1>;
      </div>
      </>
    );
  }
  
  export default Test;
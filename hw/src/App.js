import logo from './logo.svg';
import { Link, Route, useParams, useHistory } from "react-router-dom";
import './style.css';
import Home from './Home';
import Login from './Login';
import Navigation from './Navigation';
import Abuot from './Abuot';
import Test from './Test';



function App() {
  return (
   <>
      <Navigation />
       <div className="App">
      <Route exact path="/Home" component={Home} />
      <Route exact  path="/Login" component={Login} />
      <Route exact  path="/Abuot" component={Abuot} />
      <Route exact  path="/Test/:id" component={Test} />
  
    </div>
    </>
  );
}


export default App;

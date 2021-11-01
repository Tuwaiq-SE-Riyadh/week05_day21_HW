import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


// # Router and useContex HW

// * Create a login page which contains navbar component, About us component, Login component and Home component. DONE
// * The navbar will be always rendered.
// * The navbar will allow the user to navigate between About us and Home components (using Router).
// * In the login form when the user press login it should take him to the home page and change the state of the user (whether he is logged in or not) in the navbar. 
// * In the home page you should show that the user had logged in. 
// * Using `useContext` send the state of the user to the nav, and Home component. 

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;

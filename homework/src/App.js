// import "./App.css";
// import Login from "./components/Login/Login";
// import NavBar from "./components/NavBar/NavBar";
// import { Route, Switch } from "react-router";
// import Router from "./Router";
// import Home from "./components/Home/Home";
// import AboutUs from "./components/AboutUs/AboutUs";
// import { createContext, useContext } from "react";
// import { UserAuth } from "./context/UserAuth";
// function App() {
//   return (
//     <div className="App">
//       <UserAuth>
//         <>
//           <Login />
//           <NavBar />
//           <Home />
//           <AboutUs />
//         </>
//       </UserAuth>
//     </div>
//   );
// }

// export default App;
// import "./App.css";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import { Route, Switch } from "react-router";
import Router, { AllRouter } from "./AllRouter";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import { createContext, useContext } from "react";
import { UserAuth } from "./context/UserAuth";
import Rooutes from "./AllRouter";
import { BrowserRouter } from "react-router-dom";

function App()
{
  return (
    <>
      <UserAuth>
        <NavBar />
        <AllRouter />

      </UserAuth>
    </>
  );
}

export default App;

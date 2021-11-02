import { Route, Switch } from "react-router";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";

export const AllRouter = () =>
{
  const user = localStorage.getItem('user');

  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />

      </Switch>
    </>
  );
};

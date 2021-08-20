import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./components/user/Login";
import { Home } from "./components/home/Home";
import { Register } from "./components/user/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/login"} exact>
          <Login />
        </Route>
        <Route path={"/register"} exact>
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

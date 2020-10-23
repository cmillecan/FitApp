import React, { useEffect, useState } from "react";
import Navbarr from "./components/Navbarr";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Plan from "./components/pages/Plan";
import History from "./components/pages/History";
import Account from "./components/pages/Account";
import client from "./backend-client";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    client
        .getUser()
        .then((res) => res.json())
        .then((data) => {
          data && setUser(data);
        })
        .catch((e) => {
          console.error("getUser failed: ", e);
        });
  }, []);

  return (
      <>
        <Router>
          <Navbarr user={user} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/plan" component={Plan} />
            <Route path="/history" component={History} />
            <Route path="/account" component={Account} />
          </Switch>
        </Router>
      </>
  );
}

export default App;
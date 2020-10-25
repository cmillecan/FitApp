import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Plan from "./components/pages/Plan";
import History from "./components/pages/History";
import Account from "./components/pages/Account";
import client from "./backend-client";
import Footer from "./components/Footer";

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
        <Router>
          <Navbar user={user} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/plan" render={(props) => <Plan {...props} userId={user.id} />} />
            <Route path="/history" render={(props) => <History {...props} userId={user.id} />} />
            <Route path="/account" render={(props) => <Account {...props} user={user} setUser={setUser} />} />
          </Switch>
            <Footer />
        </Router>
  );
}

export default App;
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

  const userId = user ? user.id : "";

  return (
    <Router>
      <Navbar user={user} />
      <div className="page-content">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <Home {...props} user={user} />}
          />
          <Route
            path="/plan"
            render={(props) => <Plan {...props} userId={userId} />}
          />
          <Route
            path="/history"
            render={(props) => <History {...props} userId={userId} />}
          />
          <Route
            path="/account"
            render={(props) => (
              <Account {...props} user={user} setUser={setUser} />
            )}
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

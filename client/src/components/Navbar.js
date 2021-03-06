import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import KB from "../KB.svg";

function Navbar({ user }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const auth = user ? (
      <div>{user.name}</div>
  ) : (
      <a href="/api/auth/google" className="nav-links">
        Sign-in
      </a>
  );

  const navUser = user ? (
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            FitApp{" "}
            <div className="KB">
              <img src={KB} alt="kettlebell" />
            </div>
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                  activeClassName="is-active"
                  to="/plan"
                  className="nav-links"
                  onClick={closeMobileMenu}
              >
                Plan
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                  activeClassName="is-active"
                  to="/history"
                  className="nav-links"
                  onClick={closeMobileMenu}
              >
                History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                  activeClassName="is-active"
                  to="/account"
                  className="nav-links"
                  onClick={closeMobileMenu}
              >
                Account
              </NavLink>
            </li>
            <li className="nav-item">
                <li className="user">{auth}</li>
            </li>
          </ul>
        </div>
      </nav>
  ) : (
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            FitApp{" "}
            <div className="KB">
              <img src={KB} alt="kettlebell" />
            </div>
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="user">{auth}</li>
          </ul>
        </div>
      </nav>
  );

  return (
      <div>{navUser}</div>
  );
}

export default Navbar;

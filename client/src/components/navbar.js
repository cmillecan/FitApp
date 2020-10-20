import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
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

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FitApp <i className="far fa-calendar-alt"></i>
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                activeClassName='is-active'
                to='/plan'
                className='nav-links'
                onClick={closeMobileMenu}>
                Plan
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='is-active'
                to='/history'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                History
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                activeClassName='is-active'
                to='/account'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Account
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                  activeClassName='is-active'
                  to='/api/auth/google'
                  className='nav-links'
                  onClick={closeMobileMenu}
              >
                Sign-in
              </NavLink>
            </li>
            <li>
              <div
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
              </div>
            </li>
          </ul>
          {/*{button && <Button buttonStyle='btn--outline'>LOG IN</Button>}*/}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
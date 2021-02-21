import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import path from '../../routers/index.js';
import logo from '../../assets/images/img_logoC.svg';

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav id="NavBar" className="navbar navbar-light bg-light sticky-top" style={pathname === path.loginCustomer || pathname===path.loginArtist || pathname === path.registerCustomer || pathname === path.registerArtist ? { display: 'none' } : { display: 'block' }}>
      <div className="container-fluid" style={{ paddingRight: 64, paddingLeft: 64 }}>
        <div className="navbar-brand">
          <Link to={path.home} >
            <img src={logo} alt="logo" height="30" />
          </Link>
        </div>
        <form style={{ flex: 3 }}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '100%' }} />
        </form>
        <div className="d-flex">
          <Link to={path.loginCustomer}>
            <button className="btn btn-link" type="button" style={{ marginLeft: 16, marginRight: 16, textDecoration: 'none', fontWeight: 500 }}>Login</button>
          </Link>
          <Link to={path.registerCustomer}>
            <button className="btn btn-primary" type="button">Get Started</button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
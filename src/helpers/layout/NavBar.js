import React from 'react';
import logo from '../../assets/images/bootstrap-logo.svg'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light mb-5 ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-top"/>
            ngeBoot seterap
          </a>
          <form className="d-flex">
            <input className="form-control me-1 m-2 w-40-rem" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary m-2" type="submit">Login</button>
            <button className="btn btn-outline-success m-2" type="submit">Register</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default NavBar
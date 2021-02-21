import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import path from '../../routers/index.js';

import '../../styles/auth.css';

const RegisterCustomer = _ => {
  const { pathname } = useLocation();
  const [user, setUser] = useState({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confPassword: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!user.email) return console.log('MASUKAN EMAIL');
    if (!user.username) return console.log('MASUKAN USERNAME');
    if (!user.firstName) return console.log('MASUKAN FIRSTNAME');
    if (!user.lastName) return console.log('MASUKAN LASTNAME');
    if (!user.password) return console.log('MASUKAN PASSWORD');
    if (!user.confPassword) return console.log('KONFIRMASI PASSWORD');
    if (user.password !== user.confPassword) return console.log('PASSWORD TIDAK SAMA!');
  };

  return (
    <div id="RegisterCustomer">
      <div className="container-fluid">
        <div className="row justify-content-center" style={{ height: '100vh' }}>
          <div className="col align-self-center" style={{ padding: 0, width: '100vh' }}>
            <div className="auth-card shadow">
              <h4 style={{ fontSize: '2.6em', fontWeight: 400, letterSpacing: 3, marginBottom: -4 }}>REGISTER</h4>
              <h5 style={{ fontWeight: 400 }}>as customer.</h5>
              <form action="">
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" id="email" onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <div style={{ paddingRight: 6 }}>
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" name="username" className="form-control" id="username" onChange={handleChange} />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-6" style={{ paddingRight: 6 }}>
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="firstName" name="firstName" className="form-control" id="firstName" onChange={handleChange} />
                  </div>
                  <div className="col-6" style={{ paddingLeft: 6 }}>
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="lastName" name="lastName" className="form-control" id="lastName" onChange={handleChange} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6" style={{ paddingRight: 6 }}>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" onChange={handleChange} />
                  </div>
                  <div className="col-6" style={{ paddingLeft: 6 }}>
                    <label htmlFor="confPassword" className="form-label">Confirm Password</label>
                    <input type="password" name="confPassword" className="form-control" id="confPassword" onChange={handleChange} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={e => handleSubmit(e)}>Submit</button>
              </form>
              <p style={{ marginTop: 16, marginBottom: 0 }} className="text-muted">Already have account? <Link to={path.loginCustomer} style={{ textDecoration: 'none', fontWeight: 500 }}>Login!</Link></p>
              <p className="text-muted" style={pathname === path.registerCustomer ? { display: 'block' } : { display: 'none' }}>Are you an Artist? <Link to={path.registerArtist} style={{ textDecoration: 'none', fontWeight: 500 }}>Register Here!</Link></p>
              <p className="text-muted" style={pathname === path.registerArtist ? { display: 'block' } : { display: 'none' }}>Are you a Customer? <Link to={path.registerCustomer} style={{ textDecoration: 'none', fontWeight: 500 }}>Register Here!</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default RegisterCustomer;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import path from '../../routers/index.js';
import { useDispatch } from 'react-redux';

import { loginArtist, loginCustomer } from '../../utils/store/actions/userAction.js';

import '../../styles/auth.css';

const Login = _ => {
  const dispatch = useDispatch()
  const { pathname } = useLocation();
  const [passwordType, setPasswordType] = useState('password');
  const [passwordChecked, setPasswordChecked] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleShowPass = _ => {
    if (!passwordChecked) {
      setPasswordType('text');
      return setPasswordChecked(true);
    };
    setPasswordType('password');
    return setPasswordChecked(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      email: user.email,
      password: user.password
    };
    if (!user.email) return console.log('MASUKAN EMAIL');
    if (!user.password) return console.log('MASUKAN PASSWORD');
    return pathname === path.loginArtist ? dispatch(loginArtist(payload)) : dispatch(loginCustomer(payload));
  };

  return (
    <div id="Login">
      <div className="container-fluid">
        <div className="row justify-content-center" style={{ height: '100vh' }}>
          <div className="col align-self-center" style={{ padding: 0, width: '100vh' }}>
            <div className="auth-card shadow">
              <h4 style={{ fontSize: '2.6em', fontWeight: 400, letterSpacing: 3, marginBottom: -4 }}>LOGIN</h4>
              <h5 style={pathname === path.loginCustomer ? { fontWeight: 400 } : { display: 'none' }}>as customer.</h5>
              <h5 style={pathname === path.loginArtist ? { fontWeight: 400 } : { display: 'none' }}>as artist.</h5>
              <form action="">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email / Username</label>
                  <input type="email" name="email" className="form-control" id="email" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type={passwordType} name="password" className="form-control" id="password" onChange={handleChange} />
                </div>
                <div className="mb-3 form-check">
                  <input onClick={() => handleShowPass()} type="checkbox" className="form-check-input" id="showPass" defaultChecked={passwordChecked} />
                  <label className="form-check-label" htmlFor="showPass">Show Password</label>
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={e => handleSubmit(e)}>Submit</button>
              </form>
              <p style={{ marginTop: 16, marginBottom: 0 }} className="text-muted">Don't have any account? <Link to={path.registerCustomer} style={{ textDecoration: 'none', fontWeight: 500 }}>Register!</Link></p>
              <p className="text-muted" style={pathname === path.loginCustomer ? { display: 'block' } : { display: 'none' }}>Are you an Artist? <Link to={path.loginArtist} style={{ textDecoration: 'none', fontWeight: 500 }}>Login as Artist!</Link></p>
              <p className="text-muted" style={pathname === path.loginArtist ? { display: 'block' } : { display: 'none' }}>Are you a Customer? <Link to={path.loginCustomer} style={{ textDecoration: 'none', fontWeight: 500 }}>Login as Customer!</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

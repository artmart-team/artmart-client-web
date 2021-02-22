import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { VscChevronLeft } from 'react-icons/vsc';

import path from '../../routers/index.js';
import { loginArtist, loginCustomer } from '../../utils/store/actions/userAction.js';

import '../../styles/auth.css';

const Login = _ => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const [passwordType, setPasswordType] = useState('password');
  const [passwordChecked, setPasswordChecked] = useState(false);
  const { access_token, isLoading, errors } = useSelector(state => state.user);

  useEffect(() => {
    if (access_token || localStorage.getItem('access_token')) {
      console.log('LOGIN SUCCESS');
      return history.push(path.home);
    };
  }, [access_token]);

  const handleShowPass = _ => {
    if (!passwordChecked) {
      setPasswordType('text');
      return setPasswordChecked(true);
    };
    setPasswordType('password');
    return setPasswordChecked(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      email: e.target?.email.value,
      password: e.target?.password.value
    };

    return pathname === path.loginArtist ? dispatch(loginArtist(payload)) : dispatch(loginCustomer(payload));
  };

  return (
    <div id="Login">
      <div className="container-fluid">
        <div className="row justify-content-center" style={{ height: '100vh' }}>
          <div className="col align-self-center" style={{ padding: 0, width: '100vh' }}>
            <div className="auth-card shadow">
              <div className="d-flex justify-content-between">
                <Link to={path.home} style={{ textDecoration: 0, marginBottom: 0 }} className="align-self-center">
                  <h5 style={{ fontWeight: 400, letterSpacing: 3, marginBottom: -4 }} ><VscChevronLeft />BACK</h5>
                </Link>
                <h4 style={{ fontSize: '2.6em', fontWeight: 400, letterSpacing: 3, marginBottom: -4 }}>LOGIN</h4>
              </div>
              <h5 style={pathname === path.loginCustomer ? { fontWeight: 400, textAlign: 'right' } : { display: 'none' }}>as customer.</h5>
              <h5 style={pathname === path.loginArtist ? { fontWeight: 400, textAlign: 'right' } : { display: 'none' }}>as artist.</h5>
              <form action="" onSubmit={e => handleSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type={passwordType} name="password" className="form-control" id="password" />
                </div>
                <div className="mb-3 form-check">
                  <input onClick={() => handleShowPass()} type="checkbox" className="form-check-input" id="showPass" defaultChecked={passwordChecked} />
                  <label className="form-check-label" htmlFor="showPass">Show Password</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
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
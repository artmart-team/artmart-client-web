import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';

import path from '../../routers/index.js';
import { loginArtist, loginCustomer, resetError } from '../../utils/store/actions/userAction.js';
import illustration from '../../assets/images/img_loginIllust.svg'

import '../../styles/auth.css';
import './styles/Login.css';

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
    <div id="Login" style={{ display: 'flex' }}>
      <div className="container-fluid align-self-center" style={{ marginLeft: 32, marginRight: 32 }}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="login-form">
              <h4 style={{ fontSize: '2.6em', fontWeight: 400, letterSpacing: 1, marginBottom: 8 }}>Welcome back,<br />{pathname === path.loginCustomer ? 'Customer!' : 'Artist!'}</h4>
              <p className="text-muted" style={pathname === path.loginCustomer ? { display: 'block' } : { display: 'none' }}>Not a customer? <Link to={path.loginArtist} onClick={() => dispatch(resetError())} style={{ textDecoration: 'none', fontWeight: 500 }}>Login as Artist!</Link></p>
              <p className="text-muted" style={pathname === path.loginArtist ? { display: 'block' } : { display: 'none' }}>Not an Artist? <Link to={path.loginCustomer} onClick={() => dispatch(resetError())} style={{ textDecoration: 'none', fontWeight: 500 }}>Login as Customer!</Link></p>

              {errors ? <div className="alert alert-danger alert-dismissible fade show" role="alert" style={{ borderRadius: 16 }}>
                {errors}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => dispatch(resetError())}></button>
              </div> :
                <div></div>}

              <form action="" onSubmit={e => handleSubmit(e)}>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" style={{ borderRadius: 16 }} />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type={passwordType} className="form-control" id="password" name="password" placeholder="・・・" style={{ borderRadius: 16 }} />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="mb-3 form-check">
                  <input onClick={() => handleShowPass()} type="checkbox" className="form-check-input" id="showPass" defaultChecked={passwordChecked} />
                  <label className="form-check-label" htmlFor="showPass">Show Password</label>
                </div>
                {isLoading ?
                  <button type="submit" className="btn btn-primary w-100" style={{ borderRadius: 16 }} disabled>
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button> :
                  <button type="submit" className="btn btn-primary w-100" style={{ borderRadius: 16, height: 49 }}>Login</button>}
              </form>
              <p style={{ marginTop: 16, marginBottom: 0 }} className="text-muted">Don't have any account? <Link to={pathname === path.loginCustomer ? path.registerCustomer : path.registerArtist} style={{ textDecoration: 'none', fontWeight: 500 }} onClick={() => dispatch(resetError())}>Register!</Link></p>
            </div>
          </div>
          <div className="col-12 col-md-6 illust-responsive align-self-center" >
            <img src={illustration} style={{ width: '95%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
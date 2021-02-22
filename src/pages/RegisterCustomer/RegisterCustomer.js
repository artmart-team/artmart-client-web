import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { VscChevronLeft } from 'react-icons/vsc';

import path from '../../routers/index.js';
import { registerCustomer, reset } from '../../utils/store/actions/userAction.js';

import '../../styles/auth.css';

const RegisterCustomer = _ => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const { user, isLoading, errors } = useSelector(state => state.user);

  useEffect(_ => {
    if (user) {
      console.log('REGISTER SUCCESS');
      dispatch(reset());
      return history.push(path.loginCustomer);
    };
  }, [user]);

  const handleSubmit = e => {
    e.preventDefault();
    let payload = {
      email: e.target?.email.value,
      username: e.target?.username.value,
      firstName: e.target?.firstName.value,
      lastName: e.target?.lastName.value,
      password: e.target?.password.value
    };

    if (e.target?.password.value !== e.target?.confPassword.value) return console.log('Password isn\'t match!');
    dispatch(registerCustomer(payload));
  };

  // HANDLE LOADING => WITH SWAL
  // HANDLE ERROR => WITH SWAL

  return (
    <div id="RegisterCustomer">
      <div className="container-fluid">
        <div className="row justify-content-center" style={{ height: '100vh' }}>
          <div className="col align-self-center" style={{ padding: 0, width: '100vh' }}>
            <div className="auth-card shadow">
              <div className="d-flex justify-content-between">
                <Link to={path.home} style={{ textDecoration: 0, marginBottom: 0 }} className="align-self-center">
                  <h5 style={{ fontWeight: 400, letterSpacing: 3, marginBottom: -4 }} ><VscChevronLeft />BACK</h5>
                </Link>
                <h4 style={{ fontSize: '2.6em', fontWeight: 400, letterSpacing: 3, marginBottom: -4 }}>REGIST.</h4>
              </div>
              <h5 style={{ fontWeight: 400, textAlign: 'right' }}>as customer.</h5>
              <form action="" onSubmit={e => handleSubmit(e)}>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" id="email" />
                </div>
                <div className="mb-2">
                  <div style={{ paddingRight: 6 }}>
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="text" name="username" className="form-control" id="username" />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-6" style={{ paddingRight: 6 }}>
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="firstName" name="firstName" className="form-control" id="firstName" />
                  </div>
                  <div className="col-6" style={{ paddingLeft: 6 }}>
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="lastName" name="lastName" className="form-control" id="lastName" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6" style={{ paddingRight: 6 }}>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" />
                  </div>
                  <div className="col-6" style={{ paddingLeft: 6 }}>
                    <label htmlFor="confPassword" className="form-label">Confirm Password</label>
                    <input type="password" name="confPassword" className="form-control" id="confPassword" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100" >Submit</button>
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
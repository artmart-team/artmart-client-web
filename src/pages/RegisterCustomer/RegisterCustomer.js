import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';

import path from '../../routers/index.js';
import { registerCustomer, reset, resetError, setError } from '../../utils/store/actions/userAction.js';
import illustration from '../../assets/images/img_registerIllust.svg';

import '../../styles/auth.css';
import './styles/RegisterCustomer.css';

const RegisterCustomer = _ => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const { user, isLoading, errors } = useSelector(state => state.user);

  useEffect(_ => {
    if (user) {
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

    if (e.target?.password.value !== e.target?.confPassword.value) return dispatch(setError('Password isn\'t match!'));
    dispatch(registerCustomer(payload));
  };

  return (
    <div id="RegisterCustomer" style={{ display: 'flex' }}>
      <div className="container-fluid align-self-center" style={{ marginLeft: 32, marginRight: 32 }}>
        <div className="row">
          <div className="col-12 col-md-6 illust-responsive align-self-center" >
            <img src={illustration} style={{ width: '95%' }} />
          </div>
          <div className="col-12 col-md-6">
            <div className="register-form">
              <h4 style={{ fontSize: '2.6em', fontWeight: 400, letterSpacing: 1, marginBottom: 8 }}>Welcome,<br />New Customer!</h4>
              <p className="text-muted" >Not a customer? <Link to={path.registerArtist} onClick={() => dispatch(resetError())} style={{ textDecoration: 'none', fontWeight: 500 }}>register as artist!</Link></p>

              {errors ? <div className="alert alert-danger alert-dismissible fade show" role="alert" style={{ borderRadius: 16 }}>
                {errors[0]}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => dispatch(resetError())}></button>
              </div> :
                <div></div>}

              <form action="" onSubmit={e => handleSubmit(e)}>
                <div className="row mb-3">

                  <div className="form-floating col-6">
                    <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" style={{ borderRadius: 16 }} />
                    <label htmlFor="email" style={{ paddingLeft: 24 }}>Email</label>
                  </div>

                  <div className="form-floating col-6">
                    <input type="text" className="form-control" id="username" name="username" placeholder="username" style={{ borderRadius: 16 }} />
                    <label htmlFor="username" style={{ paddingLeft: 24 }}>User Name</label>
                  </div>

                </div>
                <div className="row mb-3">

                  <div className="form-floating col-6">
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="John" style={{ borderRadius: 16 }} />
                    <label htmlFor="firstName" style={{ paddingLeft: 24 }}>First Name</label>
                  </div>

                  <div className="form-floating col-6">
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Doe" style={{ borderRadius: 16 }} />
                    <label htmlFor="lastName" style={{ paddingLeft: 24 }}>Last Name</label>
                  </div>

                </div>
                <div className="row mb-3">

                  <div className="form-floating col-6">
                    <input type="password" className="form-control" id="password" name="password" placeholder="pass" style={{ borderRadius: 16 }} />
                    <label htmlFor="password" style={{ paddingLeft: 24 }}>Password</label>
                  </div>

                  <div className="form-floating col-6">
                    <input type="password" className="form-control" id="confPassword" name="confPassword" placeholder="pass" style={{ borderRadius: 16 }} />
                    <label htmlFor="confPassword" style={{ paddingLeft: 24 }}>Confirm Password</label>
                  </div>

                </div>
                {isLoading ?
                  <button type="submit" className="btn btn-primary w-100" style={{ borderRadius: 16 }} disabled>
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button> :
                  <button type="submit" className="btn btn-primary w-100" style={{ borderRadius: 16, height: 49 }}>Register</button>}
              </form>

              <p style={{ marginTop: 16, marginBottom: 0 }} className="text-muted">Already have one? <Link to={path.loginCustomer} style={{ textDecoration: 'none', fontWeight: 500 }} onClick={() => dispatch(resetError())}>Login!</Link></p>

            </div>
          </div>

        </div>
      </div>
    </div >
  );
};

export default RegisterCustomer;
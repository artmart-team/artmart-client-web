import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import path from '../../routers/index.js';

import '../../styles/auth.css';

const Register = _ => {
  const [user, setUser] = useState({
    email: ''
  })

  return (
    <div id="Register">
      <div className="container-fluid">
        <div className="row justify-content-center" style={{ height: '100vh' }}>
          <div className="col align-self-center" style={{ padding: 0, width: '100vh' }}>
            <div className="auth-card shadow">
              <h3 style={{ fontSize: '2.6em', fontWeight: 400, letterSpacing: 3 }}>REGISTER</h3>
              <form action="">
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" id="email" />
                </div>
                <div className="row mb-2">
                  <div className="col-6" style={{ paddingRight: 6 }}>
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="username" name="username" className="form-control" id="username" />
                  </div>
                  <div className="col-6" style={{ paddingLeft: 6 }}>
                    <label htmlFor="role" className="form-label">What are you?</label>
                    <select className="form-select" aria-label="role">
                      <option value="">Pick a role</option>
                      <option value="1">A customer</option>
                      <option value="2">An artist</option>
                    </select>
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
                    <label htmlFor="confirmPass" className="form-label">Confirm Password</label>
                    <input type="confirmPass" name="confirmPass" className="form-control" id="confirmPass" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100" >Submit</button>
              </form>
              <p style={{ marginTop: 16 }} className="text-muted">Already have account? <Link to={path.login} style={{ textDecoration: 'none', fontWeight: 500 }}>Login!</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

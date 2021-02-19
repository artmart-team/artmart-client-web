import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import path from '../../routers/index.js';

import '../../styles/auth.css';

const Login = _ => {
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
    if (!user.email) return console.log('MASUKAN EMAIL');
    if (!user.password) return console.log('MASUKAN PASSWORD');
    return console.log(user)
  };

  return (
    <div id="Login">
      <div className="container-fluid">
        <div className="row justify-content-center" style={{ height: '100vh' }}>
          <div className="col align-self-center" style={{ padding: 0, width: '100vh' }}>
            <div className="auth-card shadow">
              <h4 style={{ fontSize: '2.6em', fontWeight: 400, letterSpacing: 3 }}>LOGIN</h4>
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
              <p style={{ marginTop: 16 }} className="text-muted">Don't have any account? <Link to={path.register} style={{ textDecoration: 'none', fontWeight: 500 }}>Register!</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

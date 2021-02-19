import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import path from '../../routers/index.js';

import '../../styles/auth.css';

const Register = _ => {
  const [user, setUser] = useState({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    role: '',
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
    if (!user.role) return console.log('PILIH ROLE!');
    if (!user.firstName) return console.log('MASUKAN FIRSTNAME');
    if (!user.lastName) return console.log('MASUKAN LASTNAME');
    if (!user.password) return console.log('MASUKAN PASSWORD');
    if (!user.confPassword) return console.log('KONFIRMASI PASSWORD');
    if (user.password !== user.confPassword) return console.log('PASSWORD TIDAK SAMA!');
    if (user.role === 'user') return console.log(user, '<<< USER');
    if (user.role === 'artist') return console.log(user, '>>> ARTIST');
  };

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
                  <input type="email" name="email" className="form-control" id="email" onChange={handleChange} />
                </div>
                <div className="row mb-2">
                  <div className="col-6" style={{ paddingRight: 6 }}>
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="username" name="username" className="form-control" id="username" onChange={handleChange} />
                  </div>
                  <div className="col-6" style={{ paddingLeft: 6 }}>
                    <label htmlFor="role" className="form-label">What are you?</label>
                    <select className="form-select" name="role" aria-label="role" onChange={handleChange}>
                      <option value="">Pick a role</option>
                      <option value="user">A customer</option>
                      <option value="artist">An artist</option>
                    </select>
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
              <p style={{ marginTop: 16 }} className="text-muted">Already have account? <Link to={path.login} style={{ textDecoration: 'none', fontWeight: 500 }}>Login!</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import path from '../../routers/index.js';
import { useDispatch } from 'react-redux';
import { VscChevronLeft } from 'react-icons/vsc';

import { registerArtist } from '../../utils/store/actions/userAction.js';

import '../../styles/auth.css';

const RegisterArtist = _ => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const [artist, setArtist] = useState({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confPassword: '',
    bankAccount: 0,
    completeDuration: '',
    defaultPrice: 0
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setArtist({ ...artist, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let payload = {
      email: artist.email,
      username: artist.username,
      firstName: artist.firstName,
      lastName: artist.lastName,
      password: artist.password,
      bankAccount: Number(artist.bankAccount),
      completeDuration: Number(artist.bankAccount),
      defaultPrice: Number(artist.defaultPrice)
    }
    // if (!artist.email) return console.log('MASUKAN EMAIL');
    // if (!artist.username) return console.log('MASUKAN USERNAME');
    // if (!artist.firstName) return console.log('MASUKAN FIRSTNAME');
    // if (!artist.lastName) return console.log('MASUKAN LASTNAME');
    // if (!artist.password) return console.log('MASUKAN PASSWORD');
    // if (!artist.confPassword) return console.log('KONFIRMASI PASSWORD');
    // if (!artist.bankAccount) return console.log('MASUKAN BANK ACCOUNT');
    // if (!artist.completeDuration) return console.log('MASUKAN COMPLETE DURATION');
    if (artist.password !== artist.confPassword) return console.log('PASSWORD TIDAK SAMA!');
    dispatch(registerArtist(payload));
  };

  return (
    <div id="RegisterArtist">
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
              <h5 style={{ fontWeight: 400, textAlign: 'right' }} >as artist.</h5>
              <form action="">
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" id="email" onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <div style={{ paddingRight: 6 }}>
                    <label htmlFor="username" className="form-label">User Name</label>
                    <input type="username" name="username" className="form-control" id="username" onChange={handleChange} />
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
                <div className="row mb-2">
                  <div className="col-6" style={{ paddingRight: 6 }}>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" onChange={handleChange} />
                  </div>
                  <div className="col-6" style={{ paddingLeft: 6 }}>
                    <label htmlFor="confPassword" className="form-label">Confirm Password</label>
                    <input type="password" name="confPassword" className="form-control" id="confPassword" onChange={handleChange} />
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="bankAccount" className="form-label">Bank Account</label>
                  <input type="text" name="bankAccount" className="form-control" id="bankAccount" onChange={handleChange} />
                </div>
                <div className="mb-2">
                  <div style={{ paddingRight: 6 }}>
                    <label htmlFor="completeDuration" className="form-label">Complete Duration Day</label>
                    <input type="number" name="completeDuration" className="form-control" id="completeDuration" onChange={handleChange} />
                  </div>
                </div>
                <div className="mb-3">
                  <div style={{ paddingRight: 6 }}>
                    <label htmlFor="defaultPrice" className="form-label">Default Price for your Arts</label>
                    <input type="number" name="defaultPrice" className="form-control" id="defaultPrice" onChange={handleChange} />
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

export default RegisterArtist;
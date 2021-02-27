import React from 'react'
import { Link } from 'react-router-dom';
import path from '../../routers/index.js';

import logo from '../../assets/images/img_logoC.svg';

import '../../styles/footer.css';

const Footer = () => {
  return (
    <div className="cont-fluid pb-0 mb-0 justify-content-center text-light ">
      <footer>
        <div className="row my-5 justify-content-center py-5">
          <div className="col-11">
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <img src={logo} alt="logo" height="108" className="mb-md-0 mb-5" />
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
                <ul className="list-unstyled">
                  <Link to={path.home} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <li>Home</li>
                  </Link>
                  <div style={localStorage.getItem('access_token') ? { display: 'none' } : { display: 'block' }}>
                    <Link to={path.registerArtist} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <li>Join as Artist</li>
                    </Link>
                    <Link to={path.loginArtist} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <li>Login as Artist</li>
                    </Link>
                    <Link to={path.registerCustomer} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <li>Join as Customer</li>
                    </Link>
                    <Link to={path.loginCustomer} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <li>Login as Customer</li>
                    </Link>
                  </div>
                  <div style={localStorage.getItem('role') === 'artist' ? { display: 'block' } : { display: 'none' }}>
                    <Link to={`/artist/${localStorage.getItem('id')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <li>My Profile</li>
                    </Link>
                    <Link to={path.stallForm} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <li>Post an Art</li>
                    </Link>
                    <Link to={`/artist/${localStorage.getItem('id')}/orders/active`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <li>Active Orders</li>
                    </Link>
                    <Link to={`/artist/${localStorage.getItem('id')}/orders`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <li>Order list</li>
                    </Link>
                  </div>
                  <div style={localStorage.getItem('role') === 'customer' ? { display: 'block' } : { display: 'none' }}>
                    <Link to={`/user/${localStorage.getItem('id')}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <li>My Profile</li>
                    </Link>
                    <Link to={'/user/order'} style={{ color: 'inherit', textDecoration: 'none' }}>
                      <li>My Orders</li>
                    </Link>
                  </div>
                </ul>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
                <p className="mb-1">Pondok Indah, Aquarius Building</p>
                <p>Floor 1 & 2</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                <p className="social text-muted mb-0 pb-0 bold-text"> <span className="mx-2"><i className="fa fa-facebook" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-twitter" aria-hidden="true"></i></span> <span className="mx-2"><i className="fa fa-instagram" aria-hidden="true"></i></span> </p><small className="rights"><span>&#174;</span> mARTerialize All Rights Reserved. (2021)</small>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                <h6 className="mt-55 mt-2 text-muted bold-text"><b>EMAIL</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true"></i></span> mARTerialize@gmail.com</small>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                <h6 className="text-muted bold-text"><b>GITHUB</b></h6><small><span><i className="fa fa-envelope" aria-hidden="true"></i></span><a href="https://github.com/artmart-team" target="_blank">github.com/artmart-team</a></small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer

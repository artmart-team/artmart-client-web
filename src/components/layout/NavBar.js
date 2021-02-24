import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { FiPackage } from 'react-icons/fi';
import { GrAdd } from 'react-icons/gr';
import { IoPlay } from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';

import path from '../../routers/index.js';
import logo from '../../assets/images/img_logoG.svg';
import { logout, getUserByID } from '../../utils/store/actions/userAction.js';
import { updateExtraPrice, updateSelectedOptions } from '../../utils/store/actions/optionsAction'

import '../../styles/navbar.css';

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const { user, isLoading, errors } = useSelector(state => state.user);

  const handleLogout = _ => {
    dispatch(logout());
    dispatch(updateSelectedOptions([]))
    dispatch(updateExtraPrice(0))
    localStorage.clear()
    return history.push(path.home);
  };

  useEffect(() => {
    dispatch(getUserByID(localStorage.getItem('id')))
  }, [dispatch])


  function handleResetReduxAndStorage () {
    dispatch(updateSelectedOptions([]))
    dispatch(updateExtraPrice(0))
    localStorage.setItem('orderId', '')
  }

  return (
    <nav
      id="NavBar"
      className="navbar navbar-light sticky-top"
      style={pathname === path.loginCustomer ||
        pathname === path.loginArtist ||
        pathname === path.registerCustomer ||
        pathname === path.registerArtist ?
        { display: 'none' } :
        { display: 'flex', height: 56, padding: 0, boxShadow: '0 0 .5rem rgba(0,0,0,.15)', borderRadius: '0 0 32px 32px', backgroundColor: 'white' }}
    >
      <div className="container-fluid align-self-center" style={{ paddingLeft: 32, paddingRight: 32 }}>
        {/** BAGIAN KIRI */}
        <div className="navbar-brand d-flex">

          {/** LOGO BRAND */}
          <Link to={path.home} onClick={() => handleResetReduxAndStorage()}>
            <img src={logo} alt="logo" height="40" />
          </Link>

          {/** SEARCH BAR */}
          <form className="hide-674">
            <div className="input-group" style={{ marginLeft: 16 }}>
              <button
                style={{ color: '#1c1e21', height: 40, border: 'none', borderRadius: '56px 0 0 56px ', backgroundColor: '#F0F2F5' }}
                className="btn btn-outline-secondary" type="button" id="submit-search-button"
              >
                <BiSearch />
              </button>
              <input
                style={{ color: '#1c1e21', border: 'none', backgroundColor: '#F0F2F5', borderRadius: '0 56px 56px 0' }}
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </form>

        </div>
        {/** BAGIAN KIRI END */}

        {/** BAGIAN BUTTON LOGIN KANAN */}
        <div className="d-flex">

          <Link to={path.loginCustomer} className="hide-402">
            <button
              className="btn btn-link"
              type="button"
              style={!localStorage.getItem('access_token') ?
                { marginLeft: 16, marginRight: 16, textDecoration: 'none', fontWeight: 500, borderRadius: 56, height: 40 } :
                { display: 'none' }}
            >
              Login
            </button>
          </Link>

          <Link to={path.registerCustomer}>
            <button
              className="btn btn-primary"
              type="button"
              style={!localStorage.getItem('access_token') ?
                { borderRadius: 56, height: 40 } :
                { display: 'none' }}
            >
              Get Started
            </button>
          </Link>

        </div>
        {/** BAGIAN BUTTON LOGIN KANAN END */}

        {/** BAGIAN BUTTON ARTIST/USER KANAN */}
        <div style={localStorage.getItem('access_token') ? { display: 'flex' } : { display: 'none' }}>

          {/** BUTTON UNTUK ARTIST */}
          <div className="align-self-center" style={localStorage.getItem('role') === 'artist' ? { display: 'block' } : { display: 'none' }} >
            <Link to={path.stallForm} >
              <button className="btn-custom" ><GrAdd style={{ color: '1c1e21' }} /></button>
            </Link>
            <Link to={`/artist/${user?.id}/orders/active`}>
              <button className="btn-custom" style={{ marginLeft: 16 }}><IoPlay style={{ color: '1c1e21' }} /></button>
            </Link>
          </div>
          {/** BUTTON UNTUK ARTIST END */}

          {/** BUTTON UNTUK CUSTOMER */}
          <div className="align-self-center" style={localStorage.getItem('role') === 'customer' ? { display: 'block' } : { display: 'none' }} >
            <Link to={path.userOrder} >
              <button className="btn-custom"><FiPackage style={{ color: '1c1e21' }} /></button>
            </Link>
          </div>
          {/** BUTTON UNTUK CUSTOMER END */}

          {/** USER INFO */}
          <div className="align-self-center">
            <div
              className="d-flex user-btn"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              role="button"
            >
              {isLoading ?
                <Skeleton circle={true} height={40} width={40} /> :
                <img src={user?.profilePicture} style={{ borderRadius: '2.5rem', width: 40, height: 40, objectFit: 'cover' }} />
              }
            </div>

            <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownMenuButton" style={{ borderRadius: 8 }}>
              <li>
                <div className="dropdown-item text-center disabled" style={{ width: 'inherit' }}>
                  <img src={user?.profilePicture} style={{ borderRadius: '2.5rem', margin: '16px auto', width: 48, height: 48, objectFit: 'cover' }} />
                  <h6 style={{ margin: 0, fontSize: 16, color: '#202124' }}>{user?.username}</h6>
                  <p style={{ marginBottom: 16 }}>{user?.email}</p>
                </div>
                <div className="text-center">
                  <button className="btn btn-outline-danger btn-sm text-center" style={{ borderRadius: '2.5rem', marginBottom: 16 }} onClick={() => handleLogout()}>Logout</button>
                </div>
              </li>
              <div className="nav-drop">
                <li><hr className="dropdown-divider" /></li>
                <Link to={localStorage.getItem('role') === 'artist' ? `/artist/${user?.id}` : `/user/${user?.id}`} style={{ textDecoration: 'none' }}>
                  <li className="dropdown-item">
                    <p className="dropdown-item text " style={{ marginBottom: 0 }} >My Profile</p>
                  </li>
                </Link>
                <Link to={path.stallForm} style={{ textDecoration: 'none' }}>
                  <li className="dropdown-item">
                    <p className="dropdown-item text" style={localStorage.getItem('role') === 'artist' ? { marginBottom: 0 } : { display: 'none' }} >Post an Art</p>
                  </li>
                </Link>
                <Link to={`/artist/${user?.id}/orders/active`} style={{ textDecoration: 'none' }}>
                  <li className="dropdown-item">
                    <p className="dropdown-item text" style={localStorage.getItem('role') === 'artist' ? { marginBottom: 0 } : { display: 'none' }} >Active Orders</p>
                  </li>
                </Link>
              </div>
            </ul>
          </div>
          {/** USER INFO END */}
        </div>
        {/** BAGIAN BUTTON ARTIST/USER KANAN END */}
      </div>
    </nav >
  )
}

export default NavBar
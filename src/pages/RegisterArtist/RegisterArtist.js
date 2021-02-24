import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';

import path from '../../routers/index.js';
import { registerArtist, reset, resetError, setError } from '../../utils/store/actions/userAction.js';
import illustration from '../../assets/images/img_registerIllust.svg';

import '../../styles/auth.css';
import './styles/RegisterArtist.css';

const RegisterArtist = _ => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const { user, isLoading, errors } = useSelector(state => state.user);

  useEffect(() => {
    if (user) {
      console.log('REGISTER SUCCESS');
      dispatch(reset());
      return history.push(path.loginArtist);
    };
  }, [user]);

  const handleSubmit = e => {
    e.preventDefault();
    let payload = {
      email: e.target?.email.value,
      username: e.target?.username.value,
      firstName: e.target?.firstName.value,
      lastName: e.target?.lastName.value,
      password: e.target?.password.value,
      bankAccount: Number(e.target?.bankAccount.value),
      completeDuration: Number(e.target?.bankAccount.value),
      defaultPrice: 0
    };

    if (e.target?.password.value !== e.target?.confPassword.value) return dispatch(setError('Password isn\'t match!'));
    dispatch(registerArtist(payload));
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
              <h4 style={{ fontSize: '2.6em', fontWeight: 400, letterSpacing: 1, marginBottom: 8 }}>Welcome,<br />New Artist!</h4>
              <p className="text-muted" >Not an artist? <Link to={path.registerCustomer} style={{ textDecoration: 'none', fontWeight: 500 }}>register as customer!</Link></p>

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

                <div className="row mb-3">

                  <div className="form-floating col-6">
                    <input type="text" className="form-control" id="bankAccount" name="bankAccount" placeholder="123456789" style={{ borderRadius: 16 }} />
                    <label htmlFor="bankAccount" style={{ paddingLeft: 24 }}>Bank Account</label>
                  </div>

                  <div className="form-floating col-6">
                    <input type="number" className="form-control" id="completeDuration" name="completeDuration" placeholder="5" style={{ borderRadius: 16 }} />
                    <label htmlFor="completeDuration" style={{ paddingLeft: 24 }}>Complete Duration Day</label>
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

              <p style={{ marginTop: 16, marginBottom: 0 }} className="text-muted">Already have one? <Link to={path.loginArtist} style={{ textDecoration: 'none', fontWeight: 500 }} onClick={() => dispatch(resetError())}>Login!</Link></p>

            </div>
          </div>

        </div>
      </div>
    </div >
    // <div id="RegisterArtist">
    //   <div className="container-fluid">
    //     <div className="row justify-content-center" style={{ height: '100vh' }}>
    //       <div className="col align-self-center" style={{ padding: 0, width: '100vh' }}>
    //         <div className="auth-card shadow">
    //           <div className="d-flex justify-content-between">
    //             <Link to={path.home} style={{ textDecoration: 0, marginBottom: 0 }} className="align-self-center">
    //               <h5 style={{ fontWeight: 400, letterSpacing: 3, marginBottom: -4 }} ><VscChevronLeft />BACK</h5>
    //             </Link>
    //             <h4 style={{ fontSize: '2.6em', fontWeight: 400, letterSpacing: 3, marginBottom: -4 }}>REGIST.</h4>
    //           </div>
    //           <h5 style={{ fontWeight: 400, textAlign: 'right' }} >as artist.</h5>
    //           <form action="" onSubmit={e => handleSubmit(e)}>
    //             <div className="mb-2">
    //               <label htmlFor="email" className="form-label">Email</label>
    //               <input type="email" name="email" className="form-control" id="email" />
    //             </div>
    //             <div className="mb-2">
    //               <div style={{ paddingRight: 6 }}>
    //                 <label htmlFor="username" className="form-label">User Name</label>
    //                 <input type="username" name="username" className="form-control" id="username" />
    //               </div>
    //             </div>
    //             <div className="row mb-2">
    //               <div className="col-6" style={{ paddingRight: 6 }}>
    //                 <label htmlFor="firstName" className="form-label">First Name</label>
    //                 <input type="firstName" name="firstName" className="form-control" id="firstName" />
    //               </div>
    //               <div className="col-6" style={{ paddingLeft: 6 }}>
    //                 <label htmlFor="lastName" className="form-label">Last Name</label>
    //                 <input type="lastName" name="lastName" className="form-control" id="lastName" />
    //               </div>
    //             </div>
    //             <div className="row mb-2">
    //               <div className="col-6" style={{ paddingRight: 6 }}>
    //                 <label htmlFor="password" className="form-label">Password</label>
    //                 <input type="password" name="password" className="form-control" id="password" />
    //               </div>
    //               <div className="col-6" style={{ paddingLeft: 6 }}>
    //                 <label htmlFor="confPassword" className="form-label">Confirm Password</label>
    //                 <input type="password" name="confPassword" className="form-control" id="confPassword" />
    //               </div>
    //             </div>
    //             <div className="mb-2">
    //               <label htmlFor="bankAccount" className="form-label">Bank Account</label>
    //               <input type="text" name="bankAccount" className="form-control" id="bankAccount" />
    //             </div>
    //             <div className="mb-2">
    //               <div style={{ paddingRight: 6 }}>
    //                 <label htmlFor="completeDuration" className="form-label">Complete Duration Day</label>
    //                 <input type="number" name="completeDuration" className="form-control" id="completeDuration" />
    //               </div>
    //             </div>
    //             <button type="submit" className="btn btn-primary w-100">Submit</button>
    //           </form>
    //           <p style={{ marginTop: 16, marginBottom: 0 }} className="text-muted">Already have account? <Link to={path.loginCustomer} style={{ textDecoration: 'none', fontWeight: 500 }}>Login!</Link></p>
    //           <p className="text-muted" style={pathname === path.registerCustomer ? { display: 'block' } : { display: 'none' }}>Are you an Artist? <Link to={path.registerArtist} style={{ textDecoration: 'none', fontWeight: 500 }}>Register Here!</Link></p>
    //           <p className="text-muted" style={pathname === path.registerArtist ? { display: 'block' } : { display: 'none' }}>Are you a Customer? <Link to={path.registerCustomer} style={{ textDecoration: 'none', fontWeight: 500 }}>Register Here!</Link></p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div >
  );
};

export default RegisterArtist;
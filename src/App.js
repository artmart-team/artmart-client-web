import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  ArtistPage,
  ArtistEditProfile,
  ArtistPortfolio,
  Home,
  Login,
  OrderDescribe,
  OrderFinish,
  OrderProcess,
  OrderCheckout,
  RegisterCustomer,
  UserPage,
  StallAdd,
  RegisterArtist,
  UserOrderList,
  ArtistOrderList
} from './pages/index.js';

import { Switch, Route, Redirect } from 'react-router-dom';

import path from './routers/index.js';
import { NavBar } from './components/layout/index.js';
import { authenticated, getUserByID } from './utils/store/actions/userAction.js';

const App = _ => {
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(false);
  // const history = useHistory();
  const { access_token, isLoading, errors } = useSelector(state => state.user);

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      dispatch(authenticated);
      dispatch(getUserByID(localStorage.getItem('id')));
      setAuth(true);
    };
  }, [dispatch, access_token])

  const SecuredRoute = props => {
    return (
      <Route exact path={props.path} >{!localStorage.getItem('access_token') ?
        (<props.component />) :
        (<Redirect to={{ pathname: '/' }}></Redirect>)}</Route>
    );
  };

  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path={path.userOrder}>
          <UserOrderList />
        </Route>
        <Route exact path={path.artistOrder}>
          <ArtistOrderList />
        </Route>
        <Route exact path={path.stallForm}>
          <StallAdd />
        </Route>
        <Route exact path={path.artistEditProfile}>
          <ArtistEditProfile />
        </Route>
        <Route exact path={path.artistPage}>
          <ArtistPage />
        </Route>
        <Route exact path={path.userEditProfile}>
          <h1>USER EDIT</h1>
        </Route>
        <Route exact path={path.userPage}>
          <UserPage />
        </Route>
        <Route path={path.orderFinish}>
          <OrderFinish />
        </Route>
        <Route path={path.orderProcess}>
          <OrderProcess />
        </Route>
        <Route path={path.orderCheckout}>
          <OrderCheckout />
        </Route>
        <Route path={path.orderDescribe}>
          <OrderDescribe />
        </Route>
        <Route exact path={path.artistPortfolio}>
          <ArtistPortfolio />
        </Route>
        <SecuredRoute path={path.loginArtist} component={Login}>
          {/* FOR LOGIN ARTIST */}
        </SecuredRoute>
        <SecuredRoute path={path.loginCustomer} component={Login}>
          {/*FOR LOGIN CUSTOMER */}
        </SecuredRoute>
        <SecuredRoute path={path.registerArtist} component={RegisterArtist}>
          {/* FOR REGISTER ARTIST */}
        </SecuredRoute>
        <SecuredRoute path={path.registerCustomer} component={RegisterCustomer}>
          {/* FOR REGISTER CUSTOMER */}
        </SecuredRoute>
        <Route exact path={path.home}>
          <Home />
        </Route>
        <Route path="*" >
          <h1>NOT FOUND</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
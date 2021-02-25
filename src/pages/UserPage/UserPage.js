import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersUsers } from '../../utils/store/actions/orderUserAction.js';
import { useParams } from 'react-router-dom'
import axios from '../../utils/API/axios'
import UserDetail from './components/UserDetail.js';
import PictureUserCard from './components/PictureUserCard'

import illust from '../../assets/images/img_blankIllust.svg';

const UserPage = _ => {
  const dispatch = useDispatch()
  const { orders } = useSelector(state => state.orders)
  const [picturesUser, setPicturesUser] = useState(null)
  const { userId } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true)
    dispatch(fetchOrdersUsers())
    const { data } = await axios.get(`/users/${userId}/pictures`)
    setPicturesUser(data)
    setLoading(false)
  }, [])

  return (
    <div id="UserPage" style={{ marginLeft: 64, marginRight: 64 }}>
      <p>{JSON.stringify(orders)}</p>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-12">
            <UserDetail />
          </div>
          <div className="col-md-9 col-sm-6 col-12 align-self-center">
            {!picturesUser || picturesUser?.length === 0 ?
              (
                <div className="text-center" style={{marginTop: '8vh'}} >
                  <img src={illust} style={{ width: '45%' }} />
                  <h5 className="text-secondary" style={{paddingTop: 32}}>This account don't have any commissioned pictures yet.</h5>
                </div>
              ) :
              (
                <>
                  <h4 style={{ marginTop: 32 }}>My Commission</h4>
                  <hr />
                  <div className="row">
                    {/* {orders?.map(order => <OrderList key={order.id} order={order} />)} */}
                    {picturesUser?.map(pict => <PictureUserCard key={pict.id} pict={pict} />)}
                  </div>
                </>
              )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;

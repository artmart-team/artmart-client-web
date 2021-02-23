import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { artistPic } from '../../../utils/store/actions/picturesAction.js';

import StallCard from './StallCard.js';

const StallList = _ => {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const { artistPics, loading } = useSelector(state => state.pictures);

  useEffect(() => {
    dispatch(artistPic(artistId));
  }, [dispatch])

  if (loading) return '';

  return (
    <div id="StallList" className="container-fluid" style={{ marginTop: 32 }}>
      <div className="row" >
        <h3 style={{ marginBottom: 16 }}>My Pictures</h3>
        <hr />

        {artistPics?.map(e => <StallCard key={e.id} props={e}/>)}
      </div>
    </div>
  );
};

export default StallList;

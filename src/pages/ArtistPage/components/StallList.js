import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { artistPic } from '../../../utils/store/actions/picturesAction.js';
import illust from '../../../assets/images/img_blankIllust.svg';

import StallCard from './StallCard.js';

const StallList = _ => {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const { artistPics, loading } = useSelector(state => state.pictures);
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    let FilteredPics = artistPics.filter(picture => {
      return picture.link
    })
    setFiltered(FilteredPics)
  }, [artistPics])

  useEffect(() => {
    dispatch(artistPic(artistId));
  }, [dispatch])

  if (loading) return '';

  return (
    <>
      {!filtered || filtered?.length === 0 ?
        (
          <div className="d-flex" style={{marginTop: '16vh'}} >
            <div className="text-center" >
              <img src={illust} style={{ width: '45%' }} />
              <h5 className="text-secondary" style={{ paddingTop: 32 }}>This account haven't posted any pictures</h5>
            </div>
          </div>
        ) : (
          <div id="StallList" className="container-fluid" style={{ marginTop: 32 }}>
            <div className="row" >
              <h3 style={{ marginBottom: 16 }}>My Pictures</h3>
              <hr />
              {filtered?.map(e => <StallCard key={e.id} props={e} />)}
            </div>
          </div>)
      }
    </>
  );
};

export default StallList;

import React, { useEffect } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getOtherUserId, getTotalRatingArtist } from '../../../utils/store/actions/userAction.js';

import imageDP from '../../../assets/images/placeholder/pla_DP.jpg';

const ArtistProfileCard = _ => {
  const { otherUser, rating, isLoading, errors } = useSelector(state => state.user);
  const { stallId } = useParams();
  const dispatch = useDispatch();
  const role = 'artist'

  useEffect(() => {
    dispatch(getOtherUserId(role, stallId));
    dispatch(getTotalRatingArtist(stallId))
  }, [])

  if (isLoading) return '';

  console.log(otherUser)
  console.log(rating)

  return (
    <div id="ArtistProfileCard" style={{ height: 'auto', border: 'thin solid rgba(0, 0, 0, 0.5)', borderRadius: 8, marginTop: 32, padding: 32 }}>
      <div className="row">
        <div className="col-lg-2" style={{ marginRight: 4 }}>
          <img
            src={otherUser?.profilePicture}
            className="rounded-circle"
            style={{ width: 60, height: 60, objectFit: 'cover' }}
          />
        </div>
        <div className="col-lg-9">
          <h4 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{otherUser?.username}</h4>
          <div className="d-flex">
            {rating === null ?
              (<>
                <BsStar style={{ marginRight: 8, marginBottom: 2 }} className="align-self-center" />

                <p style={{ margin: 0 }} className="align-self-center">Rating N/A</p>
              </>
              ) :
              (
                <>
                  <BsStarFill style={rating >= 1 ? { marginRight: 4, marginBottom: 2 } : { display: 'none' }} className="align-self-center" />
                  <BsStarHalf style={rating >= 0.5 && rating < 1 ? { marginRight: 4, marginBottom: 2 } : { display: 'none' }} className="align-self-center" />
                  <BsStar style={rating < 0.5 ? { marginRight: 4, marginBottom: 2 } : { display: 'none' }} className="align-self-center" />

                  <BsStarFill style={rating >= 2 ? { marginRight: 4, marginBottom: 2 } : { display: ' none' }} className="align-self-center" />
                  <BsStarHalf style={rating >= 1.5 && rating < 2 ? { marginRight: 4, marginBottom: 2 } : { display: 'none' }} className="align-self-center" />
                  <BsStar style={rating < 1.5 ? { marginRight: 4, marginBottom: 2 } : { display: 'none' }} className="align-self-center" />

                  <BsStarFill style={rating >= 3 ? { marginRight: 4, marginBottom: 2 } : { display: ' none' }} className="align-self-center" />
                  <BsStarHalf style={rating >= 2.5 && rating < 3 ? { marginRight: 4, marginBottom: 2 } : { display: ' none' }} className="align-self-center" />
                  <BsStar style={rating < 2.5 ? { marginRight: 4, marginBottom: 2 } : { display: ' none' }} className="align-self-center" />

                  <BsStarFill style={rating >= 4 ? { marginRight: 4, marginBottom: 2 } : { display: ' none' }} className="align-self-center" />
                  <BsStarHalf style={rating >= 3.5 && rating < 4 ? { marginRight: 4, marginBottom: 2 } : { display: ' none' }} className="align-self-center" />
                  <BsStar style={rating < 3.5 ? { marginRight: 4, marginBottom: 2 } : { display: ' none' }} className="align-self-center" />

                  <BsStarFill style={rating >= 5 ? { marginRight: 8, marginBottom: 2 } : { display: ' none' }} className="align-self-center" />
                  <BsStarHalf style={rating >= 4.5 && rating < 5 ? { marginRight: 8, marginBottom: 2 } : { display: ' none' }} className="align-self-center" />
                  <BsStar style={rating < 4.5 ? { marginRight: 8, marginBottom: 2 } : { display: ' none' }} className="align-self-center" />

                  <p style={{ margin: 0 }} className="align-self-center">{rating}</p>
                </>)}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-success w-100 mt-3" style={{ borderRadius: 8, marginRight: 8 }}>My Review</button>
          <button className="btn btn-outline-primary w-100 mt-3" style={{ borderRadius: 8 }}>Contact Me!</button>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfileCard;

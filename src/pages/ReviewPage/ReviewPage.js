import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ReviewPageCard from './components/ReviewPageCard.js';
import { getReviewForArtist } from '../../utils/store/actions/reviewAction.js';

const ReviewPage = _ => {
  const { artistId } = useParams();
  const dispatch = useDispatch();
  const { reviews, isLoading, errors } = useSelector(state => state.reviews);

  useEffect(() => {
    dispatch(getReviewForArtist(artistId));
  }, [])

  if (isLoading) return '';
  if (errors) return <h1>ERROR</h1>

  console.log(reviews)

  return (
    <div id="ReviewPage" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Review.</h3>
      <p>What are User said about this artist?</p>

      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32, marginTop: 16 }}>
        {reviews?.map(e => <ReviewPageCard key={e.id} props={e}/>)}
      </div>
    </div>
  );
};

export default ReviewPage;

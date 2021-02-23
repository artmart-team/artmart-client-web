import React, { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';
import axios from '../../../utils/API/axios'
import { useHistory } from 'react-router-dom'

const ReviewField = ({ order }) => {
  const history = useHistory()
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRating = e => {
    setRating(e.target.value);
  }

  const handleReviewValue = e => {
    setReview(e.target.value)
  }

  const handleSendRatingAndReview = async (e) => {
    e.preventDefault()
    const ratingObj = {
      score: rating
    }

    const reviewObj = {
      title: `review from user ${localStorage.getItem('id')}`,
      description: review
    }

    await axios.post(`/users/${order.UserId}/artists/${order.ArtistId}/orders/${order.id}/ratings/`, ratingObj, {
      headers: {
        "access_token": localStorage.getItem('access_token')
      }
    })

    await axios.post(`/users/${order.UserId}/artists/${order.ArtistId}/orders/${order.id}/reviews/`, reviewObj, {
      headers: {
        "access_token": localStorage.getItem('access_token')
      }
    })

    history.push(`/user/${localStorage.getItem('id')}`)
  }

  if (order) {
    return (
      <div id="ReviewField" style={{ height: 'auto', borderRadius: 8, marginTop: 32, marginBottom: 32, }}>
        <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32, marginTop: 16 }}>
  
          <h5 style={{ marginBottom: 16 }}>Are you happy with this service? Give a review!</h5>
  
          <form action="">
  
            <label htmlFor="rating"><h6>Rating</h6></label><br />
            <div className="d-flex">
              <div className="align-self-center">
                <input type="range" min="0" max="5.0" step="0.5" value={rating} onChange={e => handleRating(e)} className="slider align-self-center" id="rating" style={{ color: 'blue' }} />
              </div>
              <div>
                <p style={{ marginBottom: 6, marginLeft: 16, fontWeight: 600 }}><BsStarFill style={{ marginBottom: 3, marginRight: 8 }} />{rating}</p>
              </div>
            </div>
  
            <div className="form-floating">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ borderRadius: 8, height: 100 }} value={review} onChange={(e) => handleReviewValue(e)}></textarea>
              <label htmlFor="floatingTextarea">Comments</label>
            </div>
            <button className="btn btn-primary w-100 mt-3" style={{ borderRadius: 8 }} onClick={(e) =>  handleSendRatingAndReview(e) }>Send</button>
          </form>
        </div>
      </div >
    );
  } else {
    return (
      <div id="ReviewField" style={{ height: 'auto', borderRadius: 8, marginTop: 32, marginBottom: 32, }}>
        <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32, marginTop: 16 }}>
  
          <h5 style={{ marginBottom: 16 }}>Are you happy with this service? Give a review!</h5>
  
          <form action="">
  
            <label htmlFor="rating"><h6>Rating</h6></label><br />
            <div className="d-flex">
              <div className="align-self-center">
                <input type="range" min="0" max="5.0" step="0.5" value={rating} onChange={e => handleRating(e)} className="slider align-self-center" id="rating" style={{ color: 'blue' }} />
              </div>
              <div>
                <p style={{ marginBottom: 6, marginLeft: 16, fontWeight: 600 }}><BsStarFill style={{ marginBottom: 3, marginRight: 8 }} />{rating}</p>
              </div>
            </div>
  
            <div className="form-floating">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ borderRadius: 8, height: 100 }} value={review} onChange={(e) => handleReviewValue(e)}></textarea>
              <label htmlFor="floatingTextarea">Comments</label>
            </div>
            <button className="btn btn-primary w-100 mt-3" style={{ borderRadius: 8 }}>Send</button>
          </form>
        </div>
      </div >
    );
  }
};

export default ReviewField;

import React from 'react';
import { BsStarFill } from 'react-icons/bs';

import image from '../../../assets/images/placeholder/pla_Card.png'

const ReviewPageCard = ({ review, rating }) => {
  console.log(rating)
  return (
    <div id="ReviewPageCard">
      <div id="CommentCard">
        <div className="d-flex" style={{ marginTop: 16 }}>
          <div style={{ flex: 1 }} >
            <img
              src={ review.Users[0].profilePicture }
              className="rounded-circle"
              style={{ width: 68, height: 68, objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 10 }}>
            <h4 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ review.Users[0].username }</h4>
            <div className="d-flex">
              <BsStarFill style={{ marginRight: 8, marginBottom: 8 }} className="align-self-center" />

              <p style={{ marginBottom: 8 }} className="align-self-center">{ rating.score }</p>
            </div>

            <p style={{ marginBottom: 8 }}>{ review.description }</p>
            {/* <button className="btn btn-link btn-sm" style={{ textDecoration: 'none' }} style={props?.User?.id !== Number(localStorage.getItem('id')) ? { display: 'none' } : { paddingLeft: 0, paddingRight: 0 }} onClick={() => handleDelete(props.id)}>Delete</button> */}
          </div>

        </div>
        <hr />
      </ div>
    </div>
  );
};

export default ReviewPageCard;
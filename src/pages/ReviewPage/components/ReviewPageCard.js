import React from 'react';
import { BsStarFill } from 'react-icons/bs';

import image from '../../../assets/images/placeholder/pla_Card.png'

const ReviewPageCard = props => {
  console.log(props);
  return (
    <div id="ReviewPageCard">
      <div id="CommentCard">
        <div className="d-flex" style={{ marginTop: 16 }}>
          <div style={{ flex: 1 }} >
            <img
              src={image}
              className="rounded-circle"
              style={{ width: 68, height: 68, objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 10 }}>
            <h4 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>UserName</h4>
            <div className="d-flex">
              <BsStarFill style={{ marginRight: 8, marginBottom: 8 }} className="align-self-center" />

              <p style={{ marginBottom: 8 }} className="align-self-center">5</p>
            </div>

            <p style={{ marginBottom: 8 }}>Tempor sunt laboris ad duis est labore quis Lorem consequat. Veniam magna id veniam ad voluptate. Irure quis non excepteur laboris aliquip ut cillum dolore mollit. Laborum ad Lorem adipisicing velit cillum consequat duis laborum dolore. Aliqua ad deserunt incididunt aute ex laborum. Est commodo elit eu aliqua aliqua velit id qui elit id mollit nisi nostrud voluptate. Eu fugiat consectetur mollit in aute magna magna veniam sit irure.</p>
            {/* <button className="btn btn-link btn-sm" style={{ textDecoration: 'none' }} style={props?.User?.id !== Number(localStorage.getItem('id')) ? { display: 'none' } : { paddingLeft: 0, paddingRight: 0 }} onClick={() => handleDelete(props.id)}>Delete</button> */}
          </div>

        </div>
        <hr />
      </ div>
    </div>
  );
};

export default ReviewPageCard;
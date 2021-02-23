import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { commentDelete } from '../../../utils/store/actions/CommentAction.js';

const CommentCard = ({ props }) => {
  const { stallId } = useParams();
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(commentDelete(id, stallId));
  };
  // console.log(props)

  return (
    <div id="CommentCard">
      <div className="d-flex" style={{ marginTop: 16 }}>
        <div style={{ flex: 1 }} >
          <img
            src={props?.User?.profilePicture}
            className="rounded-circle"
            style={{ width: 68, height: 68, objectFit: 'cover' }}
          />
        </div>
        <div style={{ flex: 10 }}>
          <h4 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{props?.User?.username}</h4>
          <p style={{ marginBottom: 8 }}>{props?.description}</p>
          <button className="btn btn-link btn-sm" style={{ textDecoration: 'none' }} style={props?.User?.id !== Number(localStorage.getItem('id')) ? { display: 'none' } : { paddingLeft: 0, paddingRight: 0 }} onClick={() => handleDelete(props.id)}>Delete</button>
        </div>

      </div>
      <hr />
    </ div>
  );
};

export default CommentCard;

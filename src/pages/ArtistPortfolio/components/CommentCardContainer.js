import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { commentFetch, commentReset, commentSubmit } from '../../../utils/store/actions/CommentAction.js';

import CommentCard from './CommentCard.js';

const CommentCardContainer = _ => {
  const { stallId } = useParams();
  const dispatch = useDispatch();
  const { description, loading, errors } = useSelector(state => state.comments);

  const UserId = Number(localStorage.getItem('id'));
  const ArtistId = Number(stallId)

  const handleSubmitComment = e => {
    e.preventDefault();
    const payload = {
      description: e?.target?.comment.value
    };

    dispatch(commentSubmit(payload, UserId, ArtistId));
    e.target.comment.value = '';
  };

  useEffect(() => {
    dispatch(commentFetch(ArtistId));
    if (description) dispatch(commentReset());
  }, []);

  if (loading) return '';

  return (
    <div id="CommentCardContainer" style={{ height: 'auto', borderRadius: 8, marginTop: 32, marginBottom: 32, }}>
      <h1>COMMENT</h1>

      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32, marginTop: 16 }}>
        {/* <CommentCard /> */}

        <form onSubmit={handleSubmitComment} action="">
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" name="comment" id="comment" style={{ borderRadius: 8, height: 100 }} required />
            <label name="comment" htmlFor="comment">Comments</label>
          </div>
          <button className="btn btn-primary w-100 mt-3" style={{ borderRadius: 8 }} type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default CommentCardContainer;
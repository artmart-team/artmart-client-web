import React from 'react';
import { useDispatch } from 'react-redux';
import { postComment } from '../../../utils/store/actions/CommentAction.js';

import CommentCard from './CommentCard.js';

const CommentCardContainer = _ => {
  const [comment, setComment] = React.useState('')
  const dispatch = useDispatch()

  const handleCommentSubmit = event => {
    event.preventDefault()
    dispatch(postComment({comment}))
  }

  const handleCommentInput = event => {
    setComment(event.target.value)
  }

  return (
    <div id="CommentCardContainer" style={{ height: 'auto', borderRadius: 8, marginTop: 32, marginBottom: 32, }}>
      <h1>COMMENT</h1>

      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32, marginTop: 16 }}>
        <CommentCard />
        
        <form onSubmit={handleCommentSubmit} action="">
          <div className="form-floating">
            <textarea value={comment} onChange={handleCommentInput} className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ borderRadius: 8, height: 100 }}></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
          </div>
          <button className="btn btn-primary w-100 mt-3" style={{ borderRadius: 8 }}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default CommentCardContainer;
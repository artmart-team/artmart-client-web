import React from 'react';

import CommentCard from './CommentCard.js';

const CommentCardContainer = _ => {
  return (
    <div id="CommentCardContainer" style={{ height: 'auto', borderRadius: 8, marginTop: 32, marginBottom: 32, }}>
      <h1>COMMENT</h1>

      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32, marginTop: 16 }}>
        <CommentCard />
        
        <form action="">
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ borderRadius: 8, height: 100 }}></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
          </div>
          <button className="btn btn-primary w-100 mt-3" style={{ borderRadius: 8 }}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default CommentCardContainer;
import React from 'react';

import imageDP2 from '../../../assets/images/placeholder/pla_DP2.jpg';

const CommentCard = _ => {
  return (
    <div id="CommentCard">
      <div className="d-flex" style={{ marginTop: 16 }}>
        <div style={{ flex: 1 }} >
          <img
            src={imageDP2}
            className="rounded-circle"
            style={{ width: 68, height: 68, objectFit: 'cover' }}
          />
        </div>
        <div style={{ flex: 10 }}>
          <h4 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>lemondseven</h4>
          <p>Magna mollit consectetur eiusmod elit ut non. Tempor anim aute dolore Lorem duis pariatur ullamco. Ea mollit laboris officia nostrud minim adipisicing. Tempor sint labore occaecat aliqua amet consectetur adipisicing nisi non duis. Proident est occaecat tempor cillum laboris consequat nisi consectetur nostrud aute ad pariatur consectetur.</p>
        </div>

      </div>
      <hr />
    </ div>
  );
};

export default CommentCard;

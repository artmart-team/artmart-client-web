import React from 'react';

import ChatCard from './ChatCard';

const ChatCardContainer = _ => {
  return (
    <div id="ChatCardContainer" style={{ height: 'auto', borderRadius: 8, marginTop: 32, marginBottom: 32, }}>
      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32, marginTop: 16 }}>
        <ChatCard />

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

export default ChatCardContainer;

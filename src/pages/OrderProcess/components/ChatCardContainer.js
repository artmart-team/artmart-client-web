import React from 'react';

import ChatCard from './ChatCard';

const ChatCardContainer = _ => {
  return (
    <div id="ChatCardContainer" style={{ height: 'auto', borderRadius: 8, marginTop: 32, marginBottom: 32, }}>

      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32, marginTop: 16 }}>
        <ChatCard />
        <div class="form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ borderRadius: 8, height: 100 }}></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>
        <button class="btn btn-primary w-100 mt-3" style={{ borderRadius: 8 }}>Send</button>
      </div>
    </div>
  );
};

export default ChatCardContainer;

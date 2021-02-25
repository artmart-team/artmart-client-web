import React from 'react';

import imageDP2 from '../../../assets/images/placeholder/pla_DP2.jpg';

const ChatCard = ({ message, artist, user, messages, counter, anchorMessage }) => {
  return (
    <div id="ChatCard">
      <div className="d-flex" style={{ marginTop: 16 }}>
        <div style={{ flex: 1 }} >
          <img
            src={ (messages.length < 1 && anchorMessage.length < 1) ? localStorage.profilePicture : 
              (messages.length < 1 && anchorMessage.length > 0 && message[1] === "artist") ? anchorMessage[0].Artist.profilePicture :
              (messages.length < 1 && anchorMessage.length > 0 && message[1] === "customer") ? anchorMessage[0].User.profilePicture :
              (message[1] === "artist") ? artist?.profilePicture :
              user?.profilePicture }
            className="rounded-circle"
            style={{ width: 68, height: 68, objectFit: 'cover' }}
          />
        </div>
        <div style={{ flex: 10 }}>
          <h4 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            { (messages.length < 1 && anchorMessage.length < 1) ? localStorage.username : 
                (messages.length < 1 && anchorMessage.length > 0 && message[1] === "artist") ? anchorMessage[0].Artist.username :
                  (messages.length < 1 && anchorMessage.length > 0 && message[1] === "customer") ? anchorMessage[0].User.username :
                    (message[1] === "artist") ? artist?.username :
                      user?.username 
            }
              </h4>
          <p>{ message[0] }</p>
        </div>

      </div>
      <hr />
    </div>
  );
};

export default ChatCard;

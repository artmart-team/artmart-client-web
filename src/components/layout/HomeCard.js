import React from 'react';

const HomeCard = _ => {
  return (
    <div id="HomeCard" className="col">
      <div className="card w-18">
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
          alt=""
        />
        <div className="bottom-right bg-secondary">Rp. 100.000</div>
        <div className="card-body bg-secondary">
          <div className="row">
            <div className="col-4">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
                className="rounded-circle img-fluid avatar"
              />
            </div>
            <div className="col-8">
              <p className="card-text row align-items-start bg-success">Some quick </p>
              <p className="card-text row align-items-end bg-primary">Nice </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

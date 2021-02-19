import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchImages } from '../../utils/store/index.js';
// import sample from '../../assets/images/694-300x300.jpg'
import './styles/Home.css';
import { Pagination, Footer } from '../../helpers/layout/index.js';

const Home = _ => {
  return (
    <>
      <div className="container-lg background">
        <div className="row row-cols-1 row-cols-lg-4 g-4 g-lg-3">
          <div className="col">
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
          <div className="col">
            <div className="card w-18">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
              />
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
          <div className="col">
            <div className="card w-18">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
              />
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
          <div className="col">
            <div className="card w-18">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
              />
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
          <div className="col">
            <div className="card w-18">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
              />
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
          <div className="col">
            <div className="card w-18">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
              />
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
          <div className="col">
            <div className="card w-18">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
              />
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
          <div className="col">
            <div className="card w-18">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
              />
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
          <div className="col">
            <div className="card w-18">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
              />
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
          <div className="col">
            <div className="card w-18">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
              />
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
          <div className="col">
            <div className="card w-18">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
              />
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
          <div className="col">
            <div className="card w-18">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                alt=""
              />
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
        </div>
        <Pagination/>
      </div>
        <Footer />
    </>
  );
};

export default Home;

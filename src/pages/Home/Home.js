import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchImages } from '../../utils/store/index.js';
// import sample from '../../assets/images/694-300x300.jpg'

import { Footer, HomeCard, Pagination } from '../../components/layout/index.js';

import './styles/Home.css';

const Home = _ => {
  return (
    <div id="HomeCard">
      <div className="container-lg background">
        <div className="row row-cols-1 row-cols-lg-4 g-4 g-lg-3">

          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />

          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />

          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />

        </div>
        <Pagination />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

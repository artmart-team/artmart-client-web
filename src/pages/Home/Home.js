import React from 'react';

import { Footer, HomeCard, Pagination } from '../../components/layout/index.js';

const Home = _ => {
  return (
    <div id="HomeCard">
      <div className="container-fluid" style={{ paddingLeft: 64, paddingRight: 64 }}>
        <div className="row" >

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

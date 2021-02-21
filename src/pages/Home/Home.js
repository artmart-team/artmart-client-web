import { Footer, HomeCard, Pagination } from '../../components/layout/index.js';
// import { useDispatch, useSelector } from 'react-redux'
// import { useState, useEffect } from 'react'
// import { fetchImages } from '../../utils/store/actions/imagesAction.js';

const Home = _ => {
  // const dispatch = useDispatch()
  // const [data, setData] = useState([])
  // const images = useSelector(state => state.imagesReducer.images)

  // useEffect(() => {
  //   console.log('fetch running')
  //   dispatch(fetchImages())
  // }, [dispatch])

  // useEffect(() => {
  //   setData(images)
  // }, [images])

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

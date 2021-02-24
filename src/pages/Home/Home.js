import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPictures } from '../../utils/store/actions/picturesAction.js';

import HomeCard from './components/HomeCard.js';
import HomeCardskeleton from './components/HomeCardSkeleton.js';
import Footer from '../../components/layout/Footer.js';
import Pagination from '../../components/layout/Pagination.js';

const Home = _ => {
  const dispatch = useDispatch()
  const { pictures, loading } = useSelector(state => state.pictures)

  useEffect(() => {
    console.log('fetch running')
    dispatch(fetchPictures())
  }, [])

  return (
    <div id="HomeCard" style={{ paddingTop: 24 }}>
      <h1 style={!localStorage.getItem('access_token') ? { paddingLeft: 32, paddingRight: 32 } : { display: 'none' }}>Picked just for you!</h1>
      <hr style={{ marginLeft: 32, marginRight: 32 }} />

      <div className="container-fluid" style={{ paddingLeft: 32, paddingRight: 32, paddingBottom: 24 }}>
        <div className="row" >
          {loading ? new Array(8).fill().map((_, i) => <HomeCardskeleton key={i} />) : pictures.map(picture => <HomeCard picture={picture} key={picture.id} />)}
        </div>
        <Pagination />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

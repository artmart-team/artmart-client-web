import { Footer, HomeCard, Pagination } from '../../components/layout/index.js';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPictures } from '../../utils/store/actions/picturesAction.js';

const Home = _ => {
  const dispatch = useDispatch()
  const { pictures, loading } = useSelector(state => state.pictures) 
  
  useEffect(() => {
    console.log('fetch running')
    dispatch(fetchPictures())
  }, [dispatch])

  if (!loading) {
    return (
      <div id="HomeCard">
        <div className="container-fluid" style={{ paddingLeft: 64, paddingRight: 64 }}>
          <div className="row" >
          {
            pictures.map(picture => <HomeCard picture={picture} key={picture.id}/>)
          }
          </div>
          <Pagination />
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
    <div>
      <h1>Now Loading...</h1>
    </div>
    )
  }
};

export default Home;

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPictures } from '../../utils/store/actions/picturesAction.js';

import HomeCard from './components/HomeCard.js';
import HomeCardskeleton from './components/HomeCardSkeleton.js';
import Footer from '../../components/layout/Footer.js';
import Pagination from '../../components/layout/Pagination.js';

const Home = _ => {
  const dispatch = useDispatch()
  const { pictures, loading, searching, pagination, picturesPagination } = useSelector(state => state.pictures)

  // pertama pecah gambar menjadi 12 / 12 / 12 (dijadikan array)
  // kedua terima parameter dari pagenya

  // console.log(pagination)

  useEffect(() => {
    // console.log('fetch running')
    dispatch(fetchPictures())
    // dispatch(searching)
  }, [])

  // picturesPagination[pagination - 1]?.map()
  if (!searching) {
    return (
      <div id="HomeCard" style={{ paddingTop: 24 }}>
        <h1 style={!localStorage.getItem('access_token') ? { paddingLeft: 32, paddingRight: 32 } : { display: 'none' }}>Picked just for you!</h1>
        <hr style={!localStorage.getItem('access_token') ? { marginLeft: 32, marginRight: 32 } : { display: 'none' }} />

        <div className="container-fluid" style={{ paddingLeft: 32, paddingRight: 32, paddingBottom: 24 }}>
          <div className="row" >
            {loading ? new Array(8).fill().map((_, i) => <HomeCardskeleton key={i} />) :
              picturesPagination[pagination - 1]?.map(pict => {
                return (
                  <HomeCard picture={pict} key={pict.id} />
                )
              })
            }

          </div>
          <Pagination />
        </div>
        <Footer />
      </div>
    )
  }

  if (searching) {
    return (
      <div id="HomeCard" style={{ paddingTop: 24 }}>
        <h1 style={!localStorage.getItem('access_token') ? { paddingLeft: 32, paddingRight: 32 } : { display: 'none' }}>Picked just for you!</h1>
        <hr style={!localStorage.getItem('access_token') ? { marginLeft: 32, marginRight: 32 } : { display: 'none' }} />

        <div className="container-fluid" style={{ paddingLeft: 32, paddingRight: 32, paddingBottom: 24 }}>
          <div className="row" >
            {loading ? new Array(8).fill().map((_, i) => <HomeCardskeleton key={i} />) :
              pictures.filter((pict) => {
                if (searching === "") return pict
                else if (pict.Artist.username.toLowerCase().includes(searching.toLowerCase())) return pict
              }).map(pict => <HomeCard picture={pict} key={pict.id} />)
            }
          </div>
          <Pagination />
        </div>
        <Footer />
      </div>
    )
  }
};

export default Home;

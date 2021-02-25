import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../../utils/API/axios'

// import ImageCarousel from '../../ArtistPortfolio/components/ImageCarousel'
// import image from '../../../assets/images/placeholder/pla_Card.png';
// import image2 from '../../../assets/images/placeholder/pla_Card2.png';
// import image3 from '../../../assets/images/placeholder/pla_Card3.png';

import image from '../../../assets/images/placeholder/pla_Card.png';
import imageDP from '../../../assets/images/placeholder/pla_DP.jpg';
import { useHistory } from 'react-router-dom';
import { showPicture } from '../../../utils/store/actions/picturesAction.js';

import '../../Home/styles/HomeCard.css';

const PictureUserCard = (props) => {
  //   let { stallId } = useParams()
  const dispatch = useDispatch()

  const history = useHistory()

  let hiddenPict = props.pict.hidden
  let pictId = props.pict.id

  // const [ hidden, setHidden ] = useState(true)
  // console.log(props.pict)

  const userId = localStorage.getItem('id')

  const token = localStorage.getItem('access_token')

  const handleHidden = async (e) => {
    e.preventDefault()
    try {
      if (!props.pict.hidden) {
        await axios({
          method: "PATCH",
          url: `/users/${userId}/pictures/${pictId}`,
          data: { hidden: true },
          headers: { access_token: token }
        })
        return window.location.reload()
        // console.log(data)
        // history.push(`/users/${userId}`)
      }

      await axios({
        method: "PATCH",
        url: `/users/${userId}/pictures/${pictId}`,
        data: { hidden: 'false' },
        headers: { access_token: token }
      })
      return window.location.reload()

    } catch (error) {
      console.log(error.response.data)
    }
    // console.log("kena hidden nih")
  }

  const handleGoToArtistPage = () => {
    history.push(`/stall/${props?.pict?.ArtistId}`);
    dispatch(showPicture(props?.pict?.link, props?.pict?.id, props?.pict?.price, props?.pict?.name, props?.pict?.description, props?.pict?.Artist?.averageRating));
  };

  const handleGoToArtistProfile = artistId => {
    history.push(`/artist/${props?.pict?.ArtistId}`);
  }

  return (
    <div id="OrderCard" className="col-6 col-sm-6 col-md-4 col-lg-4 col-xxl-4" >
      <div className="custom-card" style={{ borderRadius: 16 }}>
        {!hiddenPict ?
          <div className="" style={{ backdropFilter: 'blur(8px)', width: 'auto', backgroundColor: '#0046ded9', position: 'absolute', bottom: 112, right: 20, borderRadius: 8 }}>
            <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1', cursor: "pointer" }} onClick={handleHidden}>Display</p>
          </div> :
          <div className="" style={{ backdropFilter: 'blur(8px)', backgroundColor: '#212529d9', width: 'auto', position: 'absolute', bottom: 112, right: 20, borderRadius: 8 }}>
            <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1', cursor: "pointer" }} onClick={handleHidden}>Hidden</p>
          </div>}
        <div style={{ position: 'absolute', bottom: 76, left: 38 }}>
          <img
            src={props?.pict?.Artist?.profilePicture}
            className="custom-rounded-circle"
            style={{ width: 56, height: 56, objectFit: 'cover', border: '4px solid #232b2b' }}
            onClick={() => handleGoToArtistProfile(props?.pict?.Artist?.ArtistId)}
          />
        </div>
        <div style={{ cursor: 'pointer', padding: 8, }}>
          <img src={props?.pict?.link} className="card-img-top" style={{ height: 328, objectPosition: '50% 25%', objectFit: 'cover', borderRadius: 12 }} onClick={() => handleGoToArtistPage()} />
        </div>
        <div className="card-body">
          <div style={{ minWidth: 0, paddingLeft: 24, paddingRight: 24, marginTop: 12 }}>
            <h5 className="card-title" style={{ width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: 2 }}>{props?.pict?.name}</h5>
            <p className="card-text" style={{ minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: 0 }}>by: {props?.pict?.Artist?.username}</p>
          </div>

        </div>
      </div >
    </div >
    // <div id="OrderCard" className="col-6 col-sm-6 col-md-4 col-lg-4 col-xxl-2">
    //   <div className="card" style={{ width: '100%', borderRadius: 8, marginTop: 8, marginBottom: 8 }}>
    //     {!hiddenPict &&
    //       <div className=""
    //         style={{
    //           backdropFilter: 'blur(8px)',
    //           backgroundColor: '#0046de',
    //           width: 'auto',
    //           position: 'absolute',
    //           bottom: 100,
    //           right: 8,
    //           borderRadius: 8
    //         }}>
    //         <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1', cursor: "pointer" }} onClick={handleHidden}>display</p>
    //       </div>}
    //     {hiddenPict &&
    //       <div className=""
    //         style={{
    //           backdropFilter: 'blur(8px)',
    //           backgroundColor: '#00ad06',
    //           width: 'auto',
    //           position: 'absolute',
    //           bottom: 100,
    //           right: 8,
    //           borderRadius: 8
    //         }}>
    //         <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1', cursor: "pointer" }} onClick={handleHidden}>hidden</p>
    //       </div>}

    //     <img src={props.pict.link} className="card-img-top" style={{ height: 256, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
    //     <div className="card-body">
    //       <div className="row">
    //         <div className="row">
    //           <div className="col-sm-3" style={{ marginRight: 4 }}>
    //             <img
    //               src={props.pict.Artist.profilePicture}
    //               className="rounded-circle"
    //               style={{ width: 56, height: 56, objectFit: 'cover' }}
    //             />
    //           </div>
    //           <div className="col-12 col-sm-8">
    //             <h5 className="card-title" style={{ marginBottom: 0, width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{props.pict.name}</h5>
    //             <p className="card-text" >{props.pict.Artist.username}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div >
    // </div >
  )
};

export default PictureUserCard;
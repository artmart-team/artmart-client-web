import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../../utils/API/axios'

// import ImageCarousel from '../../ArtistPortfolio/components/ImageCarousel'
// import image from '../../../assets/images/placeholder/pla_Card.png';
// import image2 from '../../../assets/images/placeholder/pla_Card2.png';
// import image3 from '../../../assets/images/placeholder/pla_Card3.png';

import image from '../../../assets/images/placeholder/pla_Card.png';
import imageDP from '../../../assets/images/placeholder/pla_DP.jpg';
import { useHistory } from 'react-router-dom';

const PictureUserCard = (props) => {
//   let { stallId } = useParams()
//   const dispatch = useDispatch()
    console.log(props)

    const history = useHistory()

    let hiddenPict = props.pict.hidden 
    let pictId = props.pict.id 

    // const [ hidden, setHidden ] = useState(true)
    // console.log(props.pict)

    const userId = localStorage.getItem('id')

    const token = localStorage.getItem('access_token')

    const handleHidden = async (e) => {
        e.preventDefault()
        if (!props.pict.hidden) {
            const { data } = await axios.patch(`/users/${userId}/pictures/${pictId}`,
                {
                    headers : {
                        "access_token" : token
                    },
                    data: {
                        hidden : true
                    }
                }
            )
            console.log(data)
            history.push(`/users/${userId}`)
        } else {
            const data = null
            console.log('gk bisa donk omm')
        }

        // console.log("kena hidden nih")
    }

    return (
        <div id="OrderCard" className="col-6 col-sm-6 col-md-4 col-lg-4 col-xxl-2">
        <div className="card" style={{ width: '100%', borderRadius: 8, marginTop: 8, marginBottom: 8 }}>
            {!hiddenPict &&
          <div className="" 
            style={{ 
              backdropFilter: 'blur(8px)', 
              backgroundColor: '#0046de', 
              width: 'auto', 
              position: 'absolute', 
              bottom: 100, 
              right: 8, 
              borderRadius: 8 }}>
            <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1' , cursor: "pointer"}} onClick={handleHidden}>display</p>  
          </div> }
            {hiddenPict &&
          <div className="" 
            style={{ 
              backdropFilter: 'blur(8px)', 
              backgroundColor: '#00ad06', 
              width: 'auto', 
              position: 'absolute', 
              bottom: 100, 
              right: 8, 
              borderRadius: 8 }}>
            <p style={{ margin: 4, fontWeight: 600, color: '#ecf0f1' , cursor: "pointer"}} onClick={handleHidden}>hidden</p>  
          </div> }

          <img src={props.pict.link} className="card-img-top" style={{ height: 256, objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
          <div className="card-body">
            <div className="row">
              <div className="row">
                <div className="col-sm-3" style={{ marginRight: 4 }}>
                  <img
                    src={props.pict.Artist.profilePicture}
                    className="rounded-circle"
                    style={{ width: 56, height: 56, objectFit: 'cover' }}
                  />
                </div>
                <div className="col-12 col-sm-8">
                  <h5 className="card-title" style={{ marginBottom: 0, width: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{props.pict.name}</h5>
                  <p className="card-text" >{props.pict.Artist.username}</p>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    )  
};

export default PictureUserCard;
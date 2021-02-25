import React from 'react';
import { useState } from 'react';
import { storage } from '../../../utils/firebase/config'
import { useDispatch, useSelector } from 'react-redux'
import { editProfileArtistSubmit } from '../../../utils/store/actions/userAction';

const ArtistEditProfileForm = props => {

  const dispatch = useDispatch()
  // console.log(props.artist)
  let artistId = localStorage.getItem('id')

  const [ process, setProcess] = useState(false)
  // const [ image, setImage] = useState(null)
  const [ username, setUsername ] = useState(props.artist.username)
  const [ email, setEmail ] = useState(props.artist.email)
  const [ firstName, setFirst ] = useState(props.artist.firstName)
  const [ lastName, setLast ] = useState(props.artist.lastName)
  const [ profile, setProfile ] = useState(props.artist.profilePicture)
  const [ errorUname, setErrorUname ] = useState(false)
  const [ errorFirst, setErrorFirst ] = useState(false)
  const [ errorLast, setErrorLast ] = useState(false)
  const [ errorEmail, setErrorEmail ] = useState(false)

  const handleEditProfileArtist = e => {
    e.preventDefault()
    
    // handle if change and error
    if(!username) {
      setErrorUname(true)
    } else if (!firstName){
      setErrorFirst(true)
    } else if (!lastName){
      setErrorLast(true)
    } else if (!email){
      setErrorEmail(true)
    } else if (process) {
      console.log(process)
      // console.log('')
    } else {
      dispatch(editProfileArtistSubmit( artistId, {
        username : username,
        email : email,
        firstName : firstName,
        lastName : lastName,
        profilePicture : profile
      }))

      console.log('done')
    }
  }

  const editUsername = (e) => {
    e.preventDefault()
    if(e.target.value) {
      setErrorUname(false)
    }
    setUsername(e.target.value)
  }

  const editFirst = (e) => {
    e.preventDefault()
    if(e.target.value) {
      setErrorFirst(false)
    }
    setFirst(e.target.value)
  }

  const editLast = (e) => {
    e.preventDefault()
    if(e.target.value) {
      setErrorLast(false)
    }
    setLast(e.target.value)
  }

  const editEmail = (e) => {
    e.preventDefault()
    if(e.target.value) {
      setErrorEmail(false)
    }
    setEmail(e.target.value)
  }

  const editProfile = (e) => {
    if (e.target.files[0]) {
      let image = e.target.files[0];
      setProcess(true)
      const uploadTask = storage.ref(`image/${image.name}`).put(image);
      uploadTask.on(
      "state_changed",
      snapshot => {
        },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("image")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url)
            
            setProfile(url); 
            setProcess(false)
          })
        }
      );
    }
  }
  
  return (
    <div id="ArtistEditProfileForm">
      <form onSubmit={handleEditProfileArtist}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          {errorUname && <p style={{ color : "red" }}>username required</p> }
          <input name="username" type="text" className="form-control" id="username" value={username} onChange={editUsername} readOnly/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={email} onChange={editEmail} />
        </div>

        <div className="row mb-3">
          <div className="col-6" style={{ paddingRight: 6 }}>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="firstName" name="firstname" className="form-control" id="firstName" value={firstName} onChange={editFirst} />
          </div>
          <div className="col-6" style={{ paddingLeft: 6 }}>
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="lastName" name="lastname" className="form-control" id="lastName" value={lastName} onChange={editLast}/>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="link" className="form-label">Upload your image file</label>
          <input className="form-control" name="profilePicture" type="file" id="link" onChange={editProfile}/>
        </div>
        { process && <p>waiting for upload your profile picture</p>}
        <button type="submit" className="btn btn-primary">Submit</button>
        <button className="btn btn-danger">Cancel</button>
      </form>
    </div>
  );
};

export default ArtistEditProfileForm

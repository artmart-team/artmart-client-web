import React from 'react';
import { useState } from 'react';
import { storage } from '../../../utils/firebase/config'

const ArtistEditProfileForm = props => {
  const [ image, setImage] = useState(null)
  const [ username, setUsername ] = useState(props.artist.username)
  const [ email, setEmail ] = useState(props.artist.email)
  const [ firstname, setFirst ] = useState(props.artist.firstName)
  const [ lastname, setLast ] = useState(props.artist.lastName)
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
  } else if (!firstname){
    setErrorFirst(true)
  } else if (!lastname){
    setErrorLast(true)
  } else if (!email){
    setErrorEmail(true)
  } else {
    console.log('')
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
          // console.log(url)
          setProfile(url); 
        })
      }
    );
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
      setImage(e.target.files[0]);
    }
  }
  
  return (
    <div id="ArtistEditProfileForm">
      <form onSubmit={handleEditProfileArtist}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          {errorUname && <p style={{ color : "red" }}>username required</p> }
          <input name="username" type="text" className="form-control" id="username" placeholder="Shojozaki" onChange={editUsername}/>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="shojo.nozaki.kun@mail.com" onChange={editEmail} />
        </div>

        <div className="row mb-3">
          <div className="col-6" style={{ paddingRight: 6 }}>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="firstName" name="firstname" className="form-control" id="firstName" placeholder="Shojo" onChange={editFirst} />
          </div>
          <div className="col-6" style={{ paddingLeft: 6 }}>
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="lastName" name="lastname" className="form-control" id="lastName" placeholder="Nozaki" onChange={editLast}/>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="link" className="form-label">Upload your image file</label>
          <input className="form-control" name="profilePicture" type="file" id="link" onChange={editProfile}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ArtistEditProfileForm

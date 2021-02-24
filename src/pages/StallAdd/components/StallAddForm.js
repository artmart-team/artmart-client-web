import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { storage } from '../../../utils/firebase/config.js';

import path from '../../../routers/index.js';
import { postPicture, resetPicture, categoryList } from '../../../utils/store/actions/picturesAction.js';

const StallAddForm = _ => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [submitOK, setSubmitOK] = useState(true);
  const [progress, setProgress] = useState(0);
  const [process, setProcess] = useState(false);

  const { categories, picture, loading, errors } = useSelector(state => state.pictures);

  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      name: e.target?.name.value,
      description: e.target?.description.value,
      price: Number(e.target?.price.value),
      category: e.target?.categories.value === '' ? null : Number(e.target?.categories.value),
      hidden: false,
      link: url
    };

    // console.log(payload);
    dispatch(postPicture(payload));
    setSubmitOK(true)
  };

  const handleUpload = e => {
    if (e.target.files[0]) {
      setProcess(true)
      const image = e.target.files[0]

      const uploadTask = storage.ref(`artistPictures/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("artistPictures")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              console.log(url)
              setProcess(false)
              setUrl(url);
            })
        }
      );
    }
  };

  useEffect(() => {
    dispatch(categoryList());
    if (JSON.stringify(picture) !== '{}') {
      history.push('/artist/' + localStorage.getItem('id'));
      return dispatch(resetPicture());
    }
  }, [picture]);

  if (loading) return '';

  return (
    <form action="" onSubmit={e => handleSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name of your art</label>
        <input style={{ borderRadius: 12 }} type="text" className="form-control" id="name" aria-describedby="titleHelp" />
        <div id="titleHelp" className="form-text">Keep it simple but powerful.</div>
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <div className="input-group">
          <span className="input-group-text" style={{ borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }}>Rp.</span>
          <input style={{ borderTopRightRadius: 12, borderBottomRightRadius: 12 }} type="number" name="price" id="price" className="form-control" />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="categories" className="form-label">Category</label>
        <select style={{ borderRadius: 12 }} className="form-select" name="categories" id="categories" required>
          <option value="">-- Select Category--</option>
          {categories?.map(e => <option value={e.id} key={e.id}>{e.name}</option>)}

        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Describe your art</label>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Type your description here..." id="description" style={{ height: '120px', borderRadius: 12 }}></textarea>
          <label htmlFor="description">description</label>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="link" className="form-label">Upload your image file</label>
        <p style={error ? { display: 'block' } : { display: 'none' }}>Please input your image first!</p>
        {/* <div className="d-flex"> */}
        <input className="form-control" type="file" id="link" style={{ marginRight: 16, borderRadius: 12 }} onChange={handleUpload} required />
        {/* <button className="btn btn-primary" style={{ borderRadius: 8 }} onClick={e => handleUpload(e)}>Upload</button> */}
        {/* </div> */}
      </div>
      <div>
        <img src={url ? url : "http://via.placeholder.com/300"} height="300" width="300" style={{ borderRadius: 12, objectFit: 'cover' }} className="mb-3"></img>
      </div>

      <div className="progress mb-3"  >
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={5} aria-valuemin="0" aria-valuemax="100" style={{ width: `${progress}%` }}></div>
      </div>

      <button type="submit" style={{ borderRadius: 12 }} className="btn btn-primary mb-5" disabled={progress < 100 ? true : false} >Submit</button>
    </form>
  );
};

export default StallAddForm;

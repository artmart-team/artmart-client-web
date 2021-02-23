import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { storage } from '../../../utils/firebase/config.js';

import path from '../../../routers/index.js';
import { postPicture, resetPicture, categoryList } from '../../../utils/store/actions/picturesAction.js';

const StallAddForm = _ => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false)

  const { categories, picture, loading, errors } = useSelector(state => state.pictures);

  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      name: e.target?.name.value,
      description: e.target?.description.value,
      price: Number(e.target?.price.value),
      category: e.target?.categories.value === '' ? null : Number(e.target?.categories.value),
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/402px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
    };

    console.log(payload);
    // dispatch(postPicture(payload));
  };

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = e => {
    // e.preventDefault();
    if (!image) {
      return setError(true)
    };
    const uploadTask = storage.ref(`images/${image.name}`).put(image); // image bisa diubah ke handle file 
    uploadTask.on(
      "state_changed",
      error => {
        setError(true);
        console.log(error);
      },
      snapshot => {

      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url)
            setUrl(url); // ini contoh set di local state, bisa diubah ke reduxnya
          });
      }
    );
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
        <input type="text" className="form-control" id="name" aria-describedby="titleHelp" />
        <div id="titleHelp" className="form-text">Keep it simple but powerful.</div>
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <div className="input-group">
          <span className="input-group-text" >Rp.</span>
          <input type="number" name="price" id="price" className="form-control" />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="categories" className="form-label">Category</label>
        <select className="form-select" name="categories" id="categories" required>
          <option value="">-- Select Category--</option>
          {categories?.map(e => <option value={e.id} key={e.id}>{e.name}</option>)}

        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Describe your art</label>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Type your description here..." id="description" style={{ height: '120px' }}></textarea>
          <label htmlFor="description">description</label>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="link" className="form-label">Upload your image file</label>
        <p style={error ? { display: 'block' } : { display: 'none' }}>Please input your image first!</p>
        <div className="d-flex">
          <input className="form-control" type="file" id="link" style={{ marginRight: 16 }} onChange={handleChange} />
          <button className="btn btn-primary" style={{ borderRadius: 8 }} onClick={e => handleUpload(e)}>Upload</button>
        </div>
      </div>
      <div>
        <img src={url ? url : "http://via.placeholder.com/300"} height="300" width="300" style={{ borderRadius: 8 }} className="mb-3"></img>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default StallAddForm;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { firebaseConf } from '../../../utils/firebase/config.js';
import axios from '../../../utils/API/axios'

import { submitCommission, resetSubmit } from '../../../utils/store/actions/ordersAction.js';
import CategoryOption from './CategoryOption'

const SubmitCommissionForm = _ => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { orderId } = useParams();

  const [url, setUrl] = useState("");
  const [error, setError] = useState(false)
  const [submitOK, setSubmitOK] = useState(true);
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(1)

  const { commission, loading, errors } = useSelector(state => state.orders);

  useEffect(async () => {
    let { data } = await axios.get(`/categories`)
    setCategories(data)
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      imageURL: url,
      categoryId: selectedCategory
    };
    console.log(payload)
    // console.log(payload);
    dispatch(submitCommission(payload, orderId));
    setSubmitOK(true)
  };

  const handleUpload = e => {
    const file = e.target.files[0];
    firebaseConf
      .storage()
      .ref('submitCommission/')
      .child(file.name)
      .put(file)
      .then(() =>
        firebaseConf
          .storage()
          .ref('submitCommission/')
          .child(file.name)
          .getDownloadURL())
      .then(url => {
        setUrl(url)
        setSubmitOK(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (JSON.stringify(commission) !== '{}') {
      history.push('/artist/' + localStorage.getItem('id'));
      return dispatch(resetSubmit());
    }
  }, [commission]);

  if (loading) return '';

  // console.log(commission)

  function handleChangeCategory (e) {
    setSelectedCategory(e.target.value)
  }

  return (
    <div id="SubmitCommissionForm" >
      <form action="" onSubmit={e => handleSubmit(e)}>
        <div className="mb-3">
          <label>Choose a Category</label>
          <div className="mt-2">
            <select class="form-select" style={{borderRadius: 12}} onChange={(e) => handleChangeCategory(e)}>
              {
                categories?.map(category => <CategoryOption category={category} key={category.id}></CategoryOption>)
              }
            </select>
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
          <img src={url ? url : "http://via.placeholder.com/300"} height="300" width="300" style={{ borderRadius: 16, objectFit: 'cover' }} className="mb-3"></img>
        </div>

        <button type="submit" className="btn btn-primary mb-5" style={{borderRadius: 12}} disabled={submitOK}>Submit</button>

      </form>
    </div>
  );
};

export default SubmitCommissionForm;

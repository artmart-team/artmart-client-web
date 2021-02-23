import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { firebaseConf } from '../../../utils/firebase/config.js';

import { submitCommission, resetSubmit } from '../../../utils/store/actions/ordersAction.js';

const SubmitCommissionForm = _ => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { orderId } = useParams();

  const [url, setUrl] = useState("");
  const [error, setError] = useState(false)
  const [submitOK, setSubmitOK] = useState(true);

  const { commission, loading, errors } = useSelector(state => state.orders);

  const handleSubmit = e => {
    e.preventDefault();

    const payload = {
      imageURL: url
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

  console.log(commission)

  return (
    <div id="SubmitCommissionForm" >
      <form action="" onSubmit={e => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="link" className="form-label">Upload your image file</label>
          <p style={error ? { display: 'block' } : { display: 'none' }}>Please input your image first!</p>
          {/* <div className="d-flex"> */}
          <input className="form-control" type="file" id="link" style={{ marginRight: 16, borderRadius: 8 }} onChange={handleUpload} required />
          {/* <button className="btn btn-primary" style={{ borderRadius: 8 }} onClick={e => handleUpload(e)}>Upload</button> */}
          {/* </div> */}
        </div>
        <div>
          <img src={url ? url : "http://via.placeholder.com/300"} height="300" width="300" style={{ borderRadius: 8, objectFit: 'cover' }} className="mb-3"></img>
        </div>

        <button type="submit" className="btn btn-primary mb-5" disabled={submitOK}>Submit</button>

      </form>
    </div>
  );
};

export default SubmitCommissionForm;

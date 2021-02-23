import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addOption } from '../../../utils/store/actions/optionsAction.js';

const AddOption = _ => {
  const dispatch = useDispatch();
  const { artistId } = useParams();

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      title: e?.target?.title.value,
      extraPrice: Number(e?.target?.extraPrice.value)
    };

    dispatch(addOption(payload, Number(artistId)));
    e.target.title.value = '';
    e.target.extraPrice.value = '';
  };

  return (
    <div id="AddOption">
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="d-flex justify-content-between">
            <div className="w-100" style={{ marginRight: 8 }}>
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" name="title" required />
            </div>

            <div className="w-100" style={{ marginLeft: 8 }}>
              <label htmlFor="extraPrice" className="form-label">Extra Price</label>
              <div className="input-group">
                <span className="input-group-text" id="extraPrice-label">Rp.</span>
                <input type="number" className="form-control" id="extraPrice" name="extraPrice" required />
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Add Option</button>
      </form>
    </div>
  );
};

export default AddOption;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import path from '../../../routers/index.js';
import { postPicture, resetPicture, categoryList } from '../../../utils/store/actions/picturesAction.js';

const StallAddForm = _ => {
  const dispatch = useDispatch();
  const history = useHistory();

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

    dispatch(postPicture(payload));
  };

  useEffect(() => {
    dispatch(categoryList());
    if (JSON.stringify(picture) !== '{}') {
      history.push('/artist/' + localStorage.getItem('id'));
      return dispatch(resetPicture());
    }
  }, [picture]);

  if (loading) return '';

  console.log(categories, 'CATE')

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
        <input className="form-control" type="file" id="link" />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default StallAddForm;

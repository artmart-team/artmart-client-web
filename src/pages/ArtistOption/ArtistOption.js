import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchSelfOption } from '../../utils/store/actions/optionsAction.js';
import LoadingAnim from '../../components/helpers/LoadingAnim.js';

import AddOption from './components/AddOption.js';
import DataOption from './components/DataOption.js';

const ArtistOption = _ => {
  const dispatch = useDispatch();
  const { artistId } = useParams();
  const { selfOptions, loading, errors } = useSelector(state => state.options)

  useEffect(() => {
    dispatch(fetchSelfOption(artistId));
  }, []);

  if (loading) return <LoadingAnim />;

  return (
    <div id="ArtistEditProfile" style={{ marginLeft: 64, marginRight: 64, marginTop: 32 }}>
      <h1>Edit Custom Options</h1>
      <p>In here you can customize an options provided by you.</p>
      <AddOption />

      <hr />

      <table className="table  table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Extra Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {selfOptions?.map((e,i) => <DataOption key={e.id} props={e} i={i} />)}
        </tbody>
      </table>


    </div>
  );
};

export default ArtistOption;

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { deleteSelfOption } from '../../../utils/store/actions/optionsAction.js';

const DataOption = ({ props, i }) => {
  const dispatch = useDispatch();
  const { artistId } = useParams();

  const handleDelete = id => {
    // console.log(id)
    dispatch(deleteSelfOption(Number(artistId), id));
  };

  return (
    // <div id="DataOption">
    <tr>
      <th scope="row">{i + 1}</th>
      <td>{props.title}</td>
      <td>Rp. {props.extraPrice}</td>
      <td>
        <button className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(props.id)}>Delete</button>
      </td>
    </tr>
    // </div> 
  );
};

export default DataOption;

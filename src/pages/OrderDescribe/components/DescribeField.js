import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'

import { updateOrderDetails } from '../../../utils/store/actions/ordersAction'

const DescribeField = _ => {
  const dispatch = useDispatch()
  const [ orderTitle, setOrderTitle ] = useState('')
  const [ orderDescription, setOrderDescription ] = useState('')

  function updateTitle (event) {
    setOrderTitle(event.target.value)
  }

  function updateDescription (event) {
    setOrderDescription(event.target.value)
  }
  
  function handelSetOrderDetail (event) {
    event.preventDefault()
    dispatch( updateOrderDetails(orderTitle, orderDescription))
  }

  return (
    <div id="DescribeField" style={{ height: 'auto', borderRadius: 8, marginBottom: 32, }}>

      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32 }}>
        <h4>What kind of request do you want?</h4>
        
        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Commission Title</label>
            <input type="text" className="form-control" id="name" aria-describedby="titleHelp" value={orderTitle} onChange={(e) => updateTitle(e)}/>
            <div id="titleHelp" className="form-text">Keep it simple but powerful.</div>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ borderRadius: 8, height: 100 }} value={orderDescription} onChange={(e) => updateDescription(e)}></textarea>
            <label htmlFor="floatingTextarea" style={{ color: 'gray' }}>Describe</label>
          </div>
          <button className="btn btn-primary w-100 mt-3" style={{ borderRadius: 8 }} onClick={(e) => handelSetOrderDetail(e)}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default DescribeField;

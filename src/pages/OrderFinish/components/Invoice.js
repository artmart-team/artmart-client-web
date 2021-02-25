import React, { useEffect, useState } from 'react';
import Option from './Option'

const Invoice = ({ order }) => {
  const [selectedOption, setSelectedOptions] = useState([])

  useEffect(() => {
    if (order) {
      setSelectedOptions(JSON.parse(order.options))
    }
  }, [order])

  if (order) {
    return (
      <div id="Invoice">
        <div className="d-flex justify-content-between">
          <h5 style={{ marginBottom: 0 }}>{order ? order.title : '--'}</h5>
          <h5 style={{ marginBottom: 0 }}>Rp. {order ? order.price.toLocaleString('id-ID') : '--'}</h5>
        </div>
        <hr />
        <h5 style={{ marginBottom: 16 }}>Options</h5>
        <div>
          <div style={{ overflow: 'auto', paddingLeft: 8, paddingRight: 8 }}>
          {selectedOption.length === 0 ? <h6>・No additional option added</h6> :
              selectedOption.map((option, idx) => <Option option={option} key={idx}></Option>)
            }

          </div>

          <hr />
          <div className="d-flex justify-content-between mb-3">
            <p style={{ fontWeight: 600, marginBottom: 0 }}>Total</p>
            <p style={{ fontWeight: 600, marginBottom: 0 }}>Rp. {order ? order.totalPrice.toLocaleString('id-ID') : '--'}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>Now Loading...</p>
      </div>
    )
  }
};

export default Invoice;
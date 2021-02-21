import React from 'react'

import DetailProduct from './components/DetailProduct.js';
import PaymentOptions from './components/PaymentOptions.js';

const OrderCheckout = () => {
  return (
    <div id="OrderCheckout" style={{ marginLeft: 64, marginRight: 64 }}>
      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col-12 col-md-7">
            <PaymentOptions />
          </div>

          <div className="col-12 col-md-5">
            <DetailProduct />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCheckout

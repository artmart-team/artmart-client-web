import React from 'react';

// import DescribeField from './components/DescribeField.js';
// import DetailProduct from './components/DetailProduct.js';
// import ListBuy from './components/ListBuy.js';

import ThumbnailProduct from './components/ThumbnailProduct.js';
import DetailDescribeProduct from './components/DetailDescribeProduct.js';

const OrderDescribe = _ => {
  return (
    <div id="OrderDescribe" style={{ marginLeft: 32, marginRight: 32, marginTop: 32 }}>

      <h3>Describe your order.</h3>
      <hr />

      <ThumbnailProduct />

      <DetailDescribeProduct />      

      {/* 
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <DetailProduct />
            <DescribeField />
          </div>
          <div className="col-6">
            <ListBuy />
          </div>
        </div>
      </div> */}
    </div >
  );
};

export default OrderDescribe;

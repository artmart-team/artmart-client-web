import React from 'react';

const OrderFinish = _ => {
  return (
    <div id="OrderFinish" style={{ borderRadius: 8, padding: 32, marginLeft: 64, marginRight: 64 }}>
      <h3>Order finished</h3>
      <p>Here is your invoice.</p>

      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, marginTop: 32, padding: 32 }}>
        <div className="row">

          <div className="col-6">
            TEST
          </div>

          <div className="col-6">
            TEST
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderFinish;

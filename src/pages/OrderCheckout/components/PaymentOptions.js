import React, { useState } from 'react';

const PaymentOptions = _ => {
  const [creditCard, setCreditCard] = useState('');

  const handleChangeCreditCard = e => {
    let rawNumber = e.target.value.split('-').join('');

    if (rawNumber.length > 0) {
      rawNumber = rawNumber.match(new RegExp('.{1,4}', 'g')).join("-");
    };

    setCreditCard(rawNumber);

    /**
     * BEFORE SENDING TO BACKEND, REMEMBER TO SPLIT - AND JOIN IT AGAIN
     */
  };

  return (
    <div id="PaymentOptions" style={{ border: 'thin solid rgba(0, 0, 0, 0.5)', borderRadius: 8, marginTop: 32, padding: 32 }}>
      <h1>Payment Option</h1>
      <hr />
      <div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="creditCard" id="creditCard" defaultChecked />
          <label className="form-check-label" htmlFor="creditCard">
            Credit Cards
          </label>
        </div>
        <hr />
        <form action="">
          <div className="mb-3">
            <div className="row">

              <div className="col w-50">
                <label htmlFor="cardnumber" className="form-text">Card Number</label>
                <input
                  id="cardnumber"
                  name="cardnumber"
                  value={creditCard}
                  onChange={handleChangeCreditCard}
                  type="tel"
                  inputMode="numeric"
                  className="form-control"
                  maxLength="19"
                  placeholder="xxxx xxxx xxxx xxxx"
                />
              </div>

              <div className="col">
                <label htmlFor="expirationdate" className="form-text">Expiration Date</label>
                <input
                  id="expirationdate"
                  name="expirationdate"
                  type="date"
                  className="form-control"
                  style={{width: 'auto'}}
                />
              </div>

              <div className="col">
                <label htmlFor="securitycode" className="form-text">Security Code</label>
                <input
                  id="securitycode"
                  name="securitycode"
                  type="string"
                  maxLength="3"
                  className="form-control"
                />
              </div>

            </div>
          </div>

          <div className="mb-3">
            <div className="row">

              <div className="col">
                <div htmlFor="firstName" className="form-text">First Name</div>
                <input type="text" className="form-control" id="firstName" name="firstName" />
              </div>

              <div className="col">
                <div htmlFor="lastName" className="form-text">Last Name</div>
                <input type="text" className="form-control" id="lastName" name="lastName" />
              </div>
            </div>
          </div>

          {/* <hr />
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Paypal
                  </label>
          </div> */}
          <hr />
        </form>
      </div>
    </div>
  );
};

export default PaymentOptions;

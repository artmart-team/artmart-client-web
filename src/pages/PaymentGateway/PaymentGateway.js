import React from 'react'
import sampleImage from '../../assets/images/694-300x300.jpg'

import { FaCheck } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';


const PaymentGateway = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          <div className="col border border-success p-5">
            <h1>Payment Option</h1>
            <hr></hr>
            <div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">
                  Credit & Debit Cards
                </label>
              </div>
            <hr></hr>
              <form>
                <div className="mb-3">
                  <div className="row">
                    <div className="col w-50">
                      <div id="emailHelp" className="form-text">Card Number</div>
                      <input type="email" className="form-control border border-danger" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="col">
                      <div id="emailHelp" className="form-text">Expiration Date</div>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="col">
                      <div id="emailHelp" className="form-text">Security Code</div>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="row">
                    <div className="col w-50">
                      <div id="emailHelp" className="form-text">First Name</div>
                      <input type="email" className="form-control border border-success" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="col">
                      <div id="emailHelp" className="form-text">Last Name</div>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                  <label className="form-check-label" for="flexRadioDefault2">
                    Paypal
                  </label>
                </div>
                <hr></hr>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
          
          <div className="col p-3">
            <div className="card w-24 mx-auto">
              <div className="card-body card-header">
                <div className="row">
                  <div className="col-4">
                    <img src={sampleImage} className="card-img-top rounded" alt="..."/>
                  </div>
                  <div className="col-8 mb-3 text-muted"><h6>Ipsum et reprehenderit labore incididunt laborum.Ipsum et reprehenderit labore incididunt laborum.</h6></div>
                </div>
                <div className="row mt-2">
                  <div className="col text-muted mb-2 mt-3 mx-1">BASIC</div>
                  <div className="col text-muted text-end px-3 mt-3">$15</div>
                </div>
                <p className="card-subtitle mb-2 text-muted m-1"><FcCheckmark className="me-2"/> 2 Initial Concepts Included</p>
                <p className="card-subtitle mb-2 text-muted m-1"><FcCheckmark className="me-2"/> Logo Transparency</p>
                <p className="card-subtitle mb-2 text-muted m-1"><FcCheckmark className="me-2"/> Printable Resolution File</p>
                <p className="card-subtitle mb-2 text-muted m-1"><FcCheckmark className="me-2"/> Unlimited Revisions</p>
              </div>
              <div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-muted p-3">Enter promo code <FaQuestionCircle /></li>
                  <div className="row px-3 ">
                    <div className="col text-muted p-3">Service fee <FaQuestionCircle /></div>
                    <div className="col text-end text-muted p-3 mx-0">$17.75</div>
                  </div>
                </ul>
              </div>
              <div className="row px-3 ">
                <div className="col text-muted mx-1"><h5>Total</h5></div>
                <div className="col text-end text-muted p-1 mx-2"><h5>$16.75</h5></div>
              </div>
              <div className="row px-3 ">
                <div className="col text-muted mx-1 mb-2">Total Delivery Time</div>
                <div className="col text-end text-muted mx-1">1 day</div>
              </div>
                <button type="submit" class="btn btn-success d-flex justify-content-center mx-3 p-2 mb-3">Confirm & Pay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentGateway

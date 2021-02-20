import React from 'react';

const ReviewField = _ => {
  return (
    <div id="ReviewField" style={{ height: 'auto', borderRadius: 8, marginTop: 32, marginBottom: 32, }}>
      <div style={{ height: 'auto', backgroundColor: '#dddddd', borderRadius: 8, padding: 32, marginTop: 16 }}>
        <form action="">
          <div className="d-flex justify-content-between" style={{ marginBottom: 16 }}>
            <div className="align-self-center">
              <h5>Are you happy with this service? Give a review!</h5>
            </div>
            <div>

              <select className="form-select" aria-label="Default select example">
                <option value="">--rating--</option>
                <option value="1">Poor</option>
                <option value="2">Bad</option>
                <option value="3">Normal</option>
                <option value="4">Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ borderRadius: 8, height: 100 }}></textarea>
            <label htmlFor="floatingTextarea">Comments</label>
          </div>
          <button className="btn btn-primary w-100 mt-3" style={{ borderRadius: 8 }}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewField;

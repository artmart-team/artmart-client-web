import React from 'react';

const StallAddForm = _ => {
  
  const handleSubmit = e => {
    e.preventDefault();

    const payload = {

    }
  }

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name of your art</label>
        <input type="text" className="form-control" id="name" aria-describedby="titleHelp" />
        <div id="titleHelp" className="form-text">Keep it simple but powerful.</div>
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <div className="input-group">
          <span className="input-group-text" id="price">Rp.</span>
          <input type="number" className="form-control" />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">Category</label>
        <select className="form-select" aria-label="Default select example">
          <option value="">-- Select Category--</option>
          <option value="1">Realist</option>
          <option value="2">Anime</option>
          <option value="3">Potato</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="hidden" className="form-label">Is your art NSFW?</label> <br />
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="hidden" id="hiddentrue" value="true" />
          <label className="form-check-label" htmlFor="hiddentrue">Yes</label>
        </div>

        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="hidden" id="hiddenfalse" value="false" />
          <label className="form-check-label" htmlFor="hiddenfalse">No</label>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Describe your art</label>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Type your description here..." id="description" style={{ height: '120px' }}></textarea>
          <label htmlFor="description">description</label>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="link" className="form-label">Upload your image file</label>
        <input className="form-control" type="file" id="link" />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default StallAddForm;

import React from 'react';

const ArtistEditProfileForm = _ => {
  return (
    <div id="ArtistEditProfileForm">
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input name="username" type="text" className="form-control" id="username" value="Satomizu." readOnly />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" />
        </div>

        <div className="row mb-3">
          <div className="col-6" style={{ paddingRight: 6 }}>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="firstName" name="firstName" className="form-control" id="firstName" />
          </div>
          <div className="col-6" style={{ paddingLeft: 6 }}>
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="lastName" name="lastName" className="form-control" id="lastName" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-6" style={{ paddingRight: 6 }}>
            <label htmlFor="firstName" className="form-label">Complete Duration</label>
            <input type="firstName" name="firstName" className="form-control" id="firstName" />
          </div>
          <div className="col-6" style={{ paddingLeft: 6 }}>
            <label htmlFor="lastName" className="form-label">Default Price</label>
            <input type="lastName" name="lastName" className="form-control" id="lastName" />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Bank Account</label>
          <input type="text" className="form-control" id="name" aria-describedby="titleHelp" />
          <div id="titleHelp" className="form-text">We never share your bank account to anyone.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="link" className="form-label">Upload your image file</label>
          <input className="form-control" type="file" id="link" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ArtistEditProfileForm;

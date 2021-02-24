import React from 'react'

const UserEditProfileForm = () => {
  return (
    <div id="UserEditProfileForm">
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input name="username" type="text" className="form-control" id="username" value="Shihemota" readOnly />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" value="shikamota@mail.com" className="form-control" id="email" name="email" />
        </div>

        <div className="row mb-3">
          <div className="col-6" style={{ paddingRight: 6 }}>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="firstName" name="firstName" className="form-control" id="firstName" value="shikamota" />
          </div>
          <div className="col-6" style={{ paddingLeft: 6 }}>
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="lastName" name="lastName" className="form-control" id="lastName" value="kamiko" />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="link" className="form-label">Upload your image file</label>
          <input className="form-control" type="file" id="link" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default UserEditProfileForm

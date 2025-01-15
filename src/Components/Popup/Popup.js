import React from 'react';

const Popup = () => {
  return (
    <div className="login-popup">
      <div className="box">
        <div className="img-area">
          <div className="img"></div>
          <h1>Your Logo</h1>
        </div>
        <div className="form">
          <div className="close">&times;</div>
          <h1>Get a Free Quote Now</h1>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Email" className="form-control" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Phone" className="form-control" />
            </div>
            <div className="form-group">
              <select name="cars" id="dropbox">
                <option value="volvo">Select Service</option>
                <option value="Web Development">Web Development</option>
                <option value="Web Application Development">
                  Web Application Development
                </option>
                <option value="E-commerce">E-commerce</option>
                <option value="Ui & Ux Design">Ui & Ux Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Content Writing">Content Writing</option>
                <option value="Graphics Design">Graphics Design</option>
              </select>
            </div>
            <textarea
              id="w3review"
              name="w3review"
              rows="2"
              cols="50"
              placeholder="Comment"
            ></textarea>

            <button type="button" className="btn">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;

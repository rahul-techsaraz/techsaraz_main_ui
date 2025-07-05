import React, { useContext, useState } from 'react';
import { PopUpContext, useToast } from '../../Context/ToastContext';
// import emailjs from 'emailjs-com';
import { constants } from '../../Constant/constants';

const Popup = () => {
  const { isPopUp, togalPopUp } = useContext(PopUpContext);
  const { showToast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!name || !email || !phone || !comment) {
      showToast('error', 'All fields are mandatory!');
      return;
    }
    const payload = {
      toEmail: process.env.REACT_APP_TO_EMAIL,
      subject: process.env.REACT_APP_SUBJECT,
      fromEmail: process.env.REACT_APP_FROM_EMAIL,
      fromEmailName: process.env.REACT_APP_FROM_EMAIL_NAME,
      htmlTemplate: `<!DOCTYPE html>             <html>             <head><meta charset='UTF-8' /><title>Your OTP Code</title></head>             <body style='font-family:Arial,sans-serif;background:#f4f6f8;padding:20px;>             <div style='max-width:500px;margin:auto;background:#fff;padding:30px;text-align:center;border-radius:8px;'>       <h2>name: ${name} </h2>    <p>Hi I have query regarding ${comment}. You can contact me on ${phone} or ${email}</p>                 </div>             </body>             </html>`
    }
    const response = await fetch(constants?.apiUrl?.SEND_MAIL,{
      method: constants?.apiMethod?.POST,
      headers: {...constants?.apiHeader?.JSON, 'Authorization': process.env.REACT_APP_AUTHORIZATION},
      body: JSON.stringify(payload)
    })
    if(response?.status === constants?.apiResponse?.SUCCESS_CODE){
      showToast('success', 'Thanks for your query. we will respond soon');
      togalPopUp(false);
      setComment('');
      setEmail('');
      setName('');
      setPhone('');
      setService('');
    }
  };

  return (
    // <div className="login-popup" style={{display: !isPopUp ? 'none' : 'block'}}>
    //  <div className="box">
    //      <div className="img-area">
    //         <div className="popup-img">
    //         </div>
    //         <div className="logo-image">
    //             <img src={images.techSarazPopUpLogo} alt="TechSaraz Logo Image"/>
    //         </div>
    //         <div className="popup-social-icon-group">
    //             <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
    //             <a href="#"><i className="fa-brands fa-youtube"></i></a>
    //             <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
    //             <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
    //             <a href="#"><i className="fa-brands fa-instagram"></i></a>
    //         </div>
    //      </div>
    //      <div className="popup-form">
    //         <div className="close" onClick={()=>togalPopUp(false)}>&times;</div>
    //         <h1 className="popup-heading">Get a Free Quote Now</h1>
    //         <hr className="popup-hr"/>
    //         <form>
    //             <div className="form-group">
    //               <input type="text" placeholder="Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
    //             </div>
    //             <div className="form-group">
    //               <input type="text" placeholder="Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    //             </div>
    //             <div className="form-group">
    //               <input type="text" placeholder="Phone" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    //             </div>
    //             <div className="form-group">
    //               <select name="cars" id="dropbox" value={service} onChange={(e)=>setService(e.target.value)}>
    //                 <option value="volvo">Select Service</option>
    //                 <option value="Web Development">Web Development</option>
    //                 <option value="Web Application Development">
    //                   Web Application Development
    //                 </option>
    //                 <option value="E-commerce">E-commerce</option>
    //                 <option value="Ui & Ux Design">Ui & Ux Design</option>
    //                 <option value="Digital Marketing">Digital Marketing</option>
    //                 <option value="Content Writing">Content Writing</option>
    //                 <option value="Graphics Design">Graphics Design</option>
    //               </select>
    //             </div>
    //             <textarea
    //               id="w3review"
    //               name="w3review"
    //               rows="3"
    //               cols="50"
    //               placeholder="Comment"
    //               value={comment}
    //               onChange={(e)=>setComment(e.target.value)}
    //             ></textarea>

    //             <button type="button" className="pop-up-btn" onClick={(e)=>handleSubmit(e)}>
    //               Submit
    //             </button>
    //           </form>
    //      </div>
    //  </div>
    // </div>
    <div
      className="login-popup"
      style={{ display: !isPopUp ? 'none' : 'block' }}
    >
      <div className="box">
        <div className="popup-form">
          <div className="popup-child-box">
            <div className="close" onClick={() => togalPopUp(false)}>
              <i className="fa-solid fa-xmark"></i>
              {/* &times; */}
            </div>
            <h1 className="popup-heading">Get a Free Quote Now</h1>
            <form>
              <div className="form-chils-in-box">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <select
                    name="cars"
                    id="dropbox"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
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
              </div>
              <div className="form-group">
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="3"
                  cols="50"
                  placeholder="Comment"
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <a href="#">
                <div
                  className="popup-button-parent"
                  onClick={(e) => handleSubmit(e)}
                >
                  <div className="pop-up-btn">Submit</div>
                </div>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

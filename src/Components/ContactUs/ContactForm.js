import React, { useState } from 'react';
import { images } from '../../Constant/images';
import { useToast } from '../../Context/ToastContext';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const { showToast } = useToast();
  const { supportImage } = images;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!name || !email || !phone || !message) {
      showToast('error', 'All fields are mandatory!');
      return;
    }
    const templateParams = {
      name: name,
      email: email,
      message: `Hi I have query regarding ${message}. You can contact me on ${phone} or ${email}`,
    };
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        (result) => {
          console.log(result);
          showToast(
            'success',
            'The email has been sent successfully. The team will connect with you shortly.',
          );
        },
        (error) => {
          console.log(error.text);
          showToast('error', 'Something went wrong. Please try again!');
        },
      );
  };

  return (
    <>
      <section className="contact-fill-up">
        <div className="about-company-pulse">
          <img src={supportImage} alt="Support" />
        </div>
        <div className="contact-fill-up-in-box">
          <div className="contact-fill-up-in-box-textbox">
            <div className="contact-heading">
              <button className="contact-heading-text">
                CONTACT WITH US!<span className="contact-circle"></span>
              </button>
            </div>
            <div className="contact-fill-up-in-box-up-text">
              Have Any Questions?
            </div>
            <p className="contact-fill-up-in-box-up-p">
              Enthusiastically disintermediate one-to-one leadership via
              business e-commerce. Dramatically reintermediate compelling
              process improvements rather than empowered relationships.
            </p>
          </div>

          <div className="contact-fill-up-in-box-fillup">
            <form
              onSubmit={handleSubmit}
              className="contact-fill-up-in-box-fillup-wraper"
            >
              <div className="contact-fill-up-in-box-fillup-wraper23">
                <div className="contact-fill-up-in-box-fillup-name-input">
                  <input
                    type="text"
                    name="name"
                    id="contact-fill-up-in-box-fillup-name-input-input"
                    placeholder="Full Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="contact-fill-up-in-box-fillup-email-input">
                  <input
                    type="email"
                    name="email"
                    id="contact-fill-up-in-box-fillup-email-input-input"
                    placeholder="Email Address*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-fill-up-in-box-fillup-phone-input">
                  <input
                    type="text"
                    name="phone"
                    id="contact-fill-up-in-box-fillup-email-phone-input"
                    placeholder="Phone Number*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="contact-fill-up-in-box-fillup-services-input">
                  {/* <input
                    type="text"
                    name="phone"
                    id="contact-fill-up-in-box-fillup-email-phone-input"
                    placeholder="Phone Number*"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  /> */}

                  <div className="select-wraper">
                    <select
                      name="cars"
                      id="contact-fill-up-in-box-fillup-services-input-child-box"
                      value={services}
                      onChange={(e) => setServices(e.target.value)}
                    >
                      <option value="Select Services">Select Services</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Web Application Development">
                        Web Application Development
                      </option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Ui & Ux Design">Ui & Ux Design</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="Content Writing">Content Writing</option>
                      <option value="Graphics Design">Graphics Design</option>
                      <option value="Ecommerce Development">
                        Ecommerce Development
                      </option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="Software Development">
                        Software Development
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <textarea
                id="contact-fill-up-in-box-fillup-textarea"
                name="w3review"
                rows="6"
                cols="50"
                placeholder="Write Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="contact-us-btn">
                <button type="submit" className="contact-us-btn-btn">
                  CONTACT US
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

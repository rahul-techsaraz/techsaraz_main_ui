import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../Constant/images';
import PropTypes from 'prop-types';
import { PopUpContext } from '../../Context/ToastContext';

const BestCompanySection = ({
  title = 'Welcome to Tech Saraz, your go-to web design company in Bangalore.',
  description = [
    'We are committed to creating your unique online presence. Whether you need a static website, a web application, or something in between, our team of the best web designers can handle it.',
    'As the best web design company in Bangalore, we understand the client’s requirements and the importance of scalability. Hence, we focus on using the latest technologies with clean codes for better user experience and website Security.',
    'Our team of web developers in Bangalore is enthusiastic about their craft. We design and build user-centric, responsive, secure, and SEO-optimized websites. At Tech Saraz, we’re not just another web development agency in Bangalore. But we are your partners in the journey to success. We listen, understand your goals, and collaborate to create a website that embodies your brand and vision. Our commitment continues after website delivery; we provide support and maintenance to ensure your website remains current and functions seamlessly.',
  ],
  buttonText = 'CONTACT US',
  // buttonLink = '/aboutus',
}) => {
  const { webDevelopmentMain768x587Image} = images;
  const { togalPopUp } = useContext(PopUpContext);
  return (
    <section className="best-company">
      {/* <div className="best-company-pulse">
        <img src={smile1Image} alt="Smiling face" />
      </div> */}
      <div className="best-company-in-box">
        <div className="best-company-in-box-wraper">
          <div className="best-company-in-box-wraper-textbox">
            <p className="best-company-p">{title}</p>
            {description.map((text, index) => (
              <p key={index} className="best-company-p">
                {text}
              </p>
            ))}
          </div>
          <div className="best-company-in-box-wraper-imgbox">
            <img src={webDevelopmentMain768x587Image} alt="Web Development" />
          </div>
        </div>

        <div className="best-company-btn">
          <Link
            className="section-btn-btn"
            onClick={() => togalPopUp(true)}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

BestCompanySection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

export default BestCompanySection;

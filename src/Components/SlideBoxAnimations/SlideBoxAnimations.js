import React from 'react';
import '../../Pages/css/social-marketing.css';
import '../../Pages/css/e-commerce.css';
import '../../Pages/css/web-development.css';
import PropTypes from 'prop-types';
const SlideBoxAnimations = ({ slideAnimationData }) => {
  return (
    <section className="all-services-optionbox-container">
        <h1 className="our-ecommerce-in-box-h1">{slideAnimationData.title}</h1>
        <p className="benefits-p">
          {slideAnimationData.description}
        </p>
        <div className="our-ecommerce-in-box-wraper">
          {slideAnimationData.services.map((service) => (
            <div
              className="our-ecommerce-in-box-wraper-in-box"
              key={service.id}
            >
              <h3 className="our-ecommerce-in-box-wraper-in-box-h1">
                {service.title}
              </h3>
              <p className="our-ecommerce-in-box-wraper-in-box-p">
                {service.description}
              </p>
              <div className="overlay"></div>
              <div className="overlay2"></div>
              <div className="overlay3"></div>
              <div className="overlay4"></div>
            </div>
          ))}
        </div>
  
    </section>
  );
};

SlideBoxAnimations.propTypes = {
  slideAnimationData: PropTypes.array.isRequired,
};

export default SlideBoxAnimations;

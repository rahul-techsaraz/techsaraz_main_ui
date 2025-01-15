import React from 'react';
import { constants } from '../../Constant/constants';

const TestimonialSection = ({ testimonials }) => {
  return (
    <div className="testimonials-section">
      <div className="testimonial-pulse">
        <img
          src={constants.images.quotesImage.imageURL}
          alt={constants.images.quotesImage.alt}
        />
      </div>
      <div className="tesimonial-in-box">
        <div className="testimonial-heading">
          <button className="testimonial-heading-text">
            TESTIMONIAL<span className="testimonial-span-circle"></span>
          </button>
        </div>
        <div className="testmonial-heading">
          <h1 className="testmonial-h1">What Clients Say</h1>
        </div>
        <div className="owl-carousel owl-theme testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div className="item testimonial-card" key={index}>
              <main className="test-card-body">
                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  <h2>{testimonial.testimonialName}</h2>
                </div>
                <p className="testimonial-p">
                  {testimonial.testimonialDescription}
                </p>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </main>
              <div className="profile">
                <div className="profile-image">
                  <img
                    src={testimonial.profileImage.imageUrl}
                    alt={testimonial.profileImage.alt}
                  />
                </div>
                <div className="profile-desc">
                  <span>{testimonial.profileDetails.profileName}</span>
                  <span>{testimonial.profileDetails.profileDescription}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;

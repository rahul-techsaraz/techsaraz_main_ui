import React, { useState } from 'react';
import { images } from '../../Constant/images';
import CustomSwiper from '../../Components/CustomSwiper/CustomSwiper';
import { SwiperResponsive } from '../../Components/CustomSwiper/SwiperResponsive';
import { customerRivew } from '../../Constant/config';

const TestimonialSection = () => {
  const { quotesImage } = images;
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReview = (index) => {
    setExpandedReviews((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="testimonials-section">
      <div className="testimonial-pulse">
        <img src={quotesImage} alt="" />
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

        <div className="swiper-wrapper position-relative">
          <CustomSwiper
            navigation={true}
            navigationNext=".testimonial-next-button"
            navigationPrev=".testimonial-prev-button"
            noOfSlidesPerView={2}
            isBreakPoint={true}
            breakPoint={SwiperResponsive()}
          >
            {customerRivew.map((review, index) => (
              <swiper-slide key={`${review.name}-${index}`}>
                <div className="swiper-slide position-relative">
                  <div className="item testimonial-card">
                    <main className="test-card-body">
                      {/* <div className="quote">
									<i className="fa fa-quote-left"></i>
									<h2>{review.quote}</h2>
								</div> */}
                      <p className="testimonial-p">
                        {expandedReviews[index]
                          ? review?.review
                          : `${review?.review.slice(0, 100)}...`}
                      </p>
                      <span
                        className="testimonial-read-more-button"
                        style={{ color: 'white', fontWeight: 500 }}
                        onClick={() => toggleReview(index)}
                      >
                        {expandedReviews[index] ? 'Read Less' : 'Read More'}
                      </span>
                      <div className="ratings">
                        {Array.from({ length: 5 }, (_, index) => (
                          <i
                            key={index}
                            className={`fa-solid fa-star ${index < review?.stars ? 'filled' : ''}`}
                          ></i>
                        ))}
                      </div>
                    </main>
                    <div className="profile">
                      <div className="profile-image">
                        {console.log(review?.profileImage)}
                        <img src={review?.profileImage} alt="Profile Image" />
                      </div>
                      <div className="profile-desc">
                        <span>{review.name}</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </CustomSwiper>
          <div className="swiper-button-prev-next-flex">
            <div className="swiper-button-prev testimonial-prev-button">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="swiper-button-next testimonial-next-button">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default TestimonialSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../Constant/images';
import Routes from '../../Constant/routes';

const ServicesOffer = () => {
  const {
    machineLearning,
    // oneImage,
    // serviceimg1Image,
    campaignImage,
    // serviceimg2Image,
    graphicdesignerImage,
    digitalartImage,
    // pexelsolly3756679Image,
    write1Image,
    // service4Image,
    pentool2Image,
    // pexelsfabianwiktor3471423Image,
    headingIconImage,
  } = images;

  const {
    WEB_DEVELOPMENT,
    ECOMMERCE_DEVELOPMENT,
    UI_UX_DESIGN,
    DIGITAL_MARKETING,
    CONTENT_WRITING,
    GRAPHICS_DESIGN,
  } = Routes;
  return (
    <section className="services">
      <div className="services-in-box">
        <div className="top-heading text-center">
              <button className="top-heading-text justify-center">
                <img src={headingIconImage} alt="" />
                {/* <img
              src={images.headingIconImage.imageURL}
              alt={images.headingIconImage.imageURL}
            /> */}
               OUR SERVICES
                <span className="top-section-span-round"></span>
              </button>
        </div>
        <h1 className="full-heading-text-color-change-span text-center">Services <span className='heading-text-color-change-span'>We Provide</span> </h1>
        <div className='services-grid-box-main-box'>
              <Link to={WEB_DEVELOPMENT} className='services-box-parents'>
                    <div className="service-flexbox">
                      <div className="service-img">
                        <img src={machineLearning} alt="" />
                      </div>
                      <div className="service-div">
                        <h1 className="service-text">Web Development</h1>
                      </div>
                      <div className="service-peragraph">
                        <p className="service-p">
                          {' '}
                          Tech SaraZ builds custom websites using an iterative,
                          best-user-focused approach for great functionality and
                          user experience in an intuitive interface.
                        </p>
                      </div>
                      {/* <div className="service-icon">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div> */}
                    </div>
                    </Link>



              <Link to={`${WEB_DEVELOPMENT}/${ECOMMERCE_DEVELOPMENT}`} className='services-box-parents'>
                <div className="link">
                  <div className="link-span">
                    <div className="service-flexbox">
                      <div className="service-img">
                        <img src={campaignImage} alt="" />
                      </div>
                      <div className="service-div">
                        <h1 className="service-text">E-commerce</h1>
                      </div>
                      <div className="service-peragraph">
                        <p className="service-p">
                          {' '}
                          We create personalized, interactive e-commerce
                          platforms, merging technology with a user-centric
                          design to enhance customers shopping experience.
                        </p>
                      </div>
                      {/* <div className="service-icon">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div> */}
                    </div>
                  </div>
                  {/* <img src={oneImage} alt="" height="25" />
                  <div className="hover-reveal image01">
                    <img className="hidden-img" src={serviceimg2Image} alt="" />
                  </div> */}
                </div>
              </Link>



              <Link to={`${WEB_DEVELOPMENT}/${UI_UX_DESIGN}`} className='services-box-parents'>
                <div className="link">
                  <div className="link-span">
                    <div className="service-flexbox">
                      <div className="service-img">
                        <img src={graphicdesignerImage} alt="" />
                      </div>
                      <div className="service-div">
                        <h1 className="service-text">UI and UX Designing</h1>
                      </div>
                      <div className="service-peragraph">
                        <p className="service-p">
                          {' '}
                          Our design services balance aesthetics and usability,
                          creating interactive UI and UX designs that enhance
                          user experience and boost engagement.
                        </p>
                      </div>
                      {/* <div className="service-icon">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div> */}
                    </div>
                  </div>
                  {/* <img src={oneImage} alt="" height="25" />
                  <div className="hover-reveal image01">
                    <img className="hidden-img" src={service4Image} alt="" />
                  </div> */}
                </div>
              </Link>



              <Link to={`${DIGITAL_MARKETING}`} className='services-box-parents'>
                <div className="link">
                  <div className="link-span">
                    <div className="service-flexbox">
                      <div className="service-img">
                        <img src={digitalartImage} alt="" />
                      </div>
                      <div className="service-div">
                        <h1 className="service-text">Digital Marketing</h1>
                      </div>
                      <div className="service-peragraph">
                        <p className="service-p">
                          {' '}
                          We leverage the latest strategies with our
                          comprehensive digital marketing services. We amplify
                          your brand presence, attract more leads, and convert
                          them into your loyal customers.
                        </p>
                      </div>
                      {/* <div className="service-icon">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div> */}
                    </div>
                  </div>
                  {/* <img src={oneImage} alt="" height="25" />
                  <div className="hover-reveal image01">
                    <img
                      className="hidden-img"
                      src={pexelsolly3756679Image}
                      alt=""
                    />
                  </div> */}
                </div>
              </Link>



              <Link to={`${DIGITAL_MARKETING}/${CONTENT_WRITING}`} className='services-box-parents'>
                <div className="link">
                  <div className="link-span">
                    <div className="service-flexbox">
                      <div className="service-img">
                        <img src={write1Image} alt="" />
                      </div>
                      <div className="service-div">
                        <h1 className="service-text">Content Writing</h1>
                      </div>
                      <div className="service-peragraph">
                        <p className="service-p">
                          {' '}
                          Our professional writers craft compelling narratives
                          that resonate with your audience, driving engagement
                          and bolstering your brand image.
                        </p>
                      </div>
                      {/* <div className="service-icon">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div> */}
                    </div>
                  </div>
                  {/* <img src={oneImage} alt="" height="25" />
                  <div className="hover-reveal image01">
                    <img className="hidden-img" src={service4Image} alt="" />
                  </div> */}
                </div>
              </Link>

              <Link to={GRAPHICS_DESIGN} className='services-box-parents'>
                <div className="link">
                  <div className="link-span">
                    <div className="service-flexbox">
                      <div className="service-img">
                        <img src={pentool2Image} alt="" />
                      </div>
                      <div className="service-div">
                        <h1 className="service-text">Graphics Designing</h1>
                      </div>
                      <div className="service-peragraph">
                        <p className="service-p">
                          {' '}
                          Our graphic design services deliver stunning, creative
                          visuals that captivate your audience and effectively
                          communicate your brand message.
                        </p>
                      </div>
                      {/* <div className="service-icon">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </div> */}
                    </div>
                  </div>
                  {/* <img src={oneImage} alt="" height="25" />
                  <div className="hover-reveal image01">
                    <img
                      className="hidden-img"
                      src={pexelsfabianwiktor3471423Image}
                      alt=""
                    />
                  </div> */}
                </div>
              </Link>

              </div>

      </div>
    </section>
  );
};

export default ServicesOffer;

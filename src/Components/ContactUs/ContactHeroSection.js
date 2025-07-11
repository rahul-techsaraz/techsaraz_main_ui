import React from 'react';
import { Link } from 'react-router-dom';

const ContactHeroSection = () => {
  return (
    <>
      <div className="layerrr">
        <div className='contact-hero-wraper'>
         <div className="herosection-heading-h1">
          <h1 className="hero-section-textbox-h1">Contact Us</h1>
        </div>
        <div className="hero-section-top-text">
          <p className="hero-section-top-text-text-p1">
            Welcome to{' '}
            <Link href="#" className="tech-saraz-animation">
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              Tech SaraZ
            </Link>
          </p>
          <p className="about-text-p2">
            Where innovation meets expertise in web development
          </p>
        </div>
        </div>
       
      </div>
      <section className="company-details">
        <div className="company-details-wraper">
          <div className="company-details-box">
            <div className="company-details-box-i">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="company-details-box-text">
              <h3 className="company-details-box-heading">
                Our Office Address
              </h3>
              <p className="company-details-box-p">
                Nagar Phase 7 Bengaluru 560062 India
              </p>
            </div>
          </div>

          <div className="company-details-box">
            <div className="company-details-box-i">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="company-details-box-text">
              <h3 className="company-details-box-heading">Call Us Anytime</h3>
              <p className="company-details-box-p">
                <a href="tel:+917760231920" target="blank">
                  <span className="company-details-box-span">
                    +917760231920
                  </span>
                </a>
                <a href="tel:+919886958347" target="blank">
                  <span className="company-details-box-span">
                    +919886958347
                  </span>
                </a>
              </p>
            </div>
          </div>

          <div className="company-details-box">
            <div className="company-details-box-i">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="company-details-box-text">
              <h3 className="company-details-box-heading">Send An Email</h3>
              <p className="company-details-box-p">info@techsaraz.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHeroSection;

import React from 'react';
import { Link } from 'react-router-dom';

const ContactHeroSection = () => {
  return (
    <>
      <div className="layerrr">
        <div className="contact-name-haeding">Contact Us</div>
        <div className="about-us-text-p">
          <p className="about-text-p1">
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
        <canvas
          style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
        ></canvas>

        {/* The plane and cloud SVGs */}
        <div className="frame">
          <div className="plane-container">
            <a
              href="http://customer.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="1131.53px"
                height="379.304px"
                viewBox="0 0 1131.53 379.304"
                enableBackground="new 0 0 1131.53 379.304"
                xmlSpace="preserve"
                className="plane"
              >
                <polygon
                  fill="#ff002f"
                  points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223  "
                />
                <polygon
                  fill="#78051a"
                  points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102   "
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="clouds">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="762px"
            height="231px"
            viewBox="0 0 762 331"
            enableBackground="new 0 0 762 331"
            xmlSpace="preserve"
            className="cloud big front slowest"
          >
            <path
              fill="#ffffff"
              d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
            />
          </svg>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="762px"
            height="231px"
            viewBox="0 0 762 331"
            enableBackground="new 0 0 762 331"
            xmlSpace="preserve"
            className="cloud distant smaller"
          >
            <path
              fill="#baeaff"
              d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
            />
          </svg>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="762px"
            height="231px"
            viewBox="0 0 762 331"
            enableBackground="new 0 0 762 331"
            xmlSpace="preserve"
            className="cloud small slow"
          >
            <path
              fill="#baeaff"
              d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
            />
          </svg>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="762px"
            height="231px"
            viewBox="0 0 762 331"
            enableBackground="new 0 0 762 331"
            xmlSpace="preserve"
            className="cloud distant super-slow massive"
          >
            <path
              fill="#baeaff"
              d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
            />
          </svg>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="762px"
            height="231px"
            viewBox="0 0 762 331"
            enableBackground="new 0 0 762 331"
            xmlSpace="preserve"
            className="cloud slower"
          >
            <path
              fill="#baeaff"
              d="M715.394,228h-16.595c0.79-5.219,1.201-10.562,1.201-16c0-58.542-47.458-106-106-106 c-8.198,0-16.178,0.932-23.841,2.693C548.279,45.434,488.199,0,417.5,0c-84.827,0-154.374,65.401-160.98,148.529 C245.15,143.684,232.639,141,219.5,141c-49.667,0-90.381,38.315-94.204,87H46.607C20.866,228,0,251.058,0,279.5 S20.866,331,46.607,331h668.787C741.133,331,762,307.942,762,279.5S741.133,228,715.394,228z"
            />
          </svg>
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
                <span className="company-details-box-span">+917760231920</span>
                <span className="company-details-box-span">+919886958347</span>
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

import React, { useEffect, useState } from 'react';
// import '../../style/home-media.css';
import LOGO from '../../images/Tech-SaraZ-logo-300x99.webp';
import { Link } from 'react-router-dom';
import Routes from '../../Constant/routes';

const Footer = () => {
  const { HOME, ABOUT_US, BLOG, SERVICES, CONTACT } = Routes;
  const [showScrollTop, setShowScrollTop] = useState(false);

  // This function handles the scroll logic
  const handleScroll = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Scroll function for the button click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Adding scroll event listener on component mount
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <footer>
        <div className="footer-child">
          <div className="footer-wraper">
            <div className="footer-box">
              <div className="footer-up-logo-text">
                <div className="footer-logo">
                  <img src={LOGO} alt="Logo" />
                </div>
                <div className="footer-up-text">
                  Tech Saraz, we are software company based in Bangalore, that
                  specializes in top-notch Digital Marketing and Web designing.
                </div>
                <div className="icon-group">
                  <span className="icon-desin">
                    <a
                      href="https://www.facebook.com/techsaraz06/"
                      target="blank"
                    >
                      <i className="fa-brands fa-facebook-f facebook-icon-style"></i>
                    </a>
                  </span>
                  <span className="icon-desin">
                    <a href="https://www.youtube.com/@techsaraz" target="blank">
                      <i className="fa-brands fa-instagram youtube-icon-style"></i>
                    </a>
                  </span>
                  <span className="icon-desin">
                    <a
                      href="https://www.linkedin.com/company/tech-saraz/"
                      target="blank"
                    >
                      <i className="fa-brands fa-linkdin linkdin-icon-style"></i>
                    </a>
                  </span>
                  <span className="icon-desin">
                    <a href="https://x.com/TechSaraz" target="blank">
                      <i className="fa-brands fa-x-twitter twitter-icon-style"></i>
                    </a>
                  </span>
                  <span className="icon-desin">
                    <a
                      href="https://www.instagram.com/techsaraz/"
                      target="blank"
                    >
                      <i className="fa-brands fa-instgram-in instragram-icon-style"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="footer-box2">
              <div className="footer-box-menu-heading">QUICK LINKS</div>
              <div className="footer-1st-menu">
                <ul>
                  <li>
                    <Link to={HOME}>Home</Link>
                  </li>
                  <li>
                    <Link to={ABOUT_US}>About</Link>
                  </li>
                  <li>
                    <Link to={SERVICES}>Services</Link>
                  </li>
                  {/* <li><Link to="portfolio.html">Portfolio</Link></li> */}
                  <li>
                    <Link to={BLOG}>Blog</Link>
                  </li>
                  <li>
                    <Link to={CONTACT}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="footer-box">
      <div className="footer-box-menu-heading">Legal</div>
      <div className="footer-1st-menu">
      <ul>
        <li><Link to="#">Privacy Policy</Link></li>
        <li><Link to="#">Terms Of use</Link></li>
        <li><Link to="#">Cancellaing Policy</Link></li>
        <li><Link to="#">Refund Policy</Link></li>
      </ul>
    </div>
    </div> */}

            <div className="footer-box">
              <h3 className="footer-box-menu-heading">Contact Info</h3>
              <div className="phone">
                <a href="tel:+917760231920" target="blank">
                  <i className="fa-solid fa-phone"></i>
                  <span className="phone-no">+917760231920</span>
                </a>
              </div>
              <div className="phone">
                <a href="tel:+919886958347" target="blank">
                  <i className="fa-solid fa-phone"></i>
                  <span className="phone-no">+919886958347</span>
                </a>
              </div>
              <div className="phone">
                <i className="fa-solid fa-envelope"></i>
                <span className="phone-no">info@techsaraz.com</span>
              </div>
              <div className="phone">
                <i className="fa-solid fa-location-dot"></i>
                <span className="phone-no">
                  Nagar Phase 7 Bengaluru 560062 India
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {showScrollTop && (
        <div id="scroll-top" onClick={scrollToTop}>
          <button id="btn" className="scroll-top-button-22">
            <i className="fa-regular fa-paper-plane" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Footer;

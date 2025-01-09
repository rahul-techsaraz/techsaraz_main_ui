import React from 'react';
import LOGO from '../../images/Tech-SaraZ-logo-300x99.webp'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   <footer>
  <div className="footer-child">
  <div className="footer-wraper">
    <div className="footer-box">
      <div className="footer-up-logo-text">
        <div className="footer-logo">
          <img src={LOGO} alt="Logo" />
        </div>
        <div className="footer-up-text">
          Tech Saraz, we are software company based in Bangalore, that specializes in top-notch Digital Marketing and Web designing.
        </div>
        <div className="icon-group">
          <span className="icon-desin"><i className="fa-brands fa-facebook-f"></i></span>
          <span className="icon-desin"><i className="fa-brands fa-instagram"></i></span>
          <span className="icon-desin"><i className="fa-brands fa-twitter"></i></span>
          <span className="icon-desin"><i className="fa-brands fa-x-twitter"></i></span>
          <span className="icon-desin"><i className="fa-brands fa-linkedin-in"></i></span>
      </div>
      </div>
    </div>
    <div className="footer-box2">
      <div className="footer-box-menu-heading">QUICK LINKS</div>
      <div className="footer-1st-menu">
      <ul>
        <li><Link to="index.html">Home</Link></li>
        <li><Link to="about.html">About</Link></li>
        <li><Link to="services.html">Services</Link></li>
        <li><Link to="portfolio.html">Portfolio</Link></li>
        <li><Link to="blog.html">Blog</Link></li>
        <li><Link to="contact.html">Contact</Link></li>
      </ul>
    </div>
    </div>
    <div className="footer-box">
      <div className="footer-box-menu-heading">Legal</div>
      <div className="footer-1st-menu">
      <ul>
        <li><Link to="#">Privacy Policy</Link></li>
        <li><Link to="#">Terms Of use</Link></li>
        <li><Link to="#">Cancellaing Policy</Link></li>
        <li><Link to="#">Refund Policy</Link></li>
      </ul>
    </div>
    </div>

    <div className="footer-box">
      <h3 className="footer-box-menu-heading">Contact Info</h3>
        <div className="phone"><i className="fa-solid fa-phone"></i><span className="phone-no">+917760231920</span></div>
        <div className="phone"><i className="fa-solid fa-phone"></i><span className="phone-no">+919886958347</span></div>
        <div className="phone"><i className="fa-solid fa-envelope"></i><span className="phone-no">info@techsaraz.com</span></div>
        <div className="phone"><i className="fa-solid fa-location-dot"></i><span className="phone-no">Nagar Phase 7 Bengaluru 560062 India</span></div>
    </div>
  </div>
</div>
</footer>
  )
}

export default Footer
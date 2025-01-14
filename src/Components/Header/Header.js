import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '..//../images/Tech-SaraZ-logo-300x99.webp'
import Routes from '../../Constant/routes';

const Header = () => {
    const { 
        WEB_DEVELOPMENT,
        HOME,
        WORDPRESS_DEVELOPMENT,
        ECOMMERCE_DEVELOPMENT,
        UI_UX_DESIGN,
        SOCIAL_MARKETING,
        SEO,
        ABOUT_US,
        BLOG,
        CONTACT,
        SERVICES,
        DIGITAL_MARKETING,
        CONTENT_WRITING,
        GRAPHICS_DESIGN,
        WEB_APPLICATION_DEVELOPMENT
      } = Routes;
  return (
    <header className="main-header">
  <nav className="header-nav">
      <div className="menu-icons">
         <i className="fas fa-bars"></i>
         <i className="fas fa-times"></i>
      </div>
      <Link to="/" className="header-logo">
          <img src={LOGO} alt="" />
        </Link>
      <ul className="nav-list">
          <li>
              <Link to={HOME} className="">Home</Link>
          </li>

          <li>
              <Link to={ABOUT_US}>about</Link>
          </li>
          <li>
              <Link to={SERVICES}>Our Services 
                  <i className="fas fa-caret-down"></i>
              </Link>
              <ul className="sub-menu">
                  <li>
                      <Link to={WEB_DEVELOPMENT}>web development <i className="fas fa-caret-down"></i></Link>
                      <ul className="sub-menu">
                          <li>
                              <Link to={`${WEB_DEVELOPMENT}/${WEB_APPLICATION_DEVELOPMENT}`}>web applicaion development</Link>
                          </li>
                          <li>
                              <Link to={`${WEB_DEVELOPMENT}/${WORDPRESS_DEVELOPMENT}`}>wordpress development</Link>
                          </li>
                          <li>
                              <Link to={`${WEB_DEVELOPMENT}/${ECOMMERCE_DEVELOPMENT}`}>e-commerce
                              </Link>
                          </li>
                          <li>
                              <Link to={`${WEB_DEVELOPMENT}/${UI_UX_DESIGN}`}>ui and ux design
                              </Link>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <Link to={DIGITAL_MARKETING}>Digital marketing <i className="fas fa-caret-down"></i></Link>
                      <ul className="sub-menu">
                          <li>
                              <Link to={`${DIGITAL_MARKETING}/${SOCIAL_MARKETING}`}>social media marketing</Link>
                          </li>
                          <li>
                              <Link to={`${DIGITAL_MARKETING}/${SEO}`}>Seo services</Link>
                          </li>
                          
                      </ul>
                  </li>
                  <li>
                      <Link to={CONTENT_WRITING}>content writing</Link>
                  </li>
                  <li>
                      <Link to={GRAPHICS_DESIGN}>graphics design</Link>
                  </li>
              </ul>
          </li>
          {/* <li>
              <Link to="/portfolio">portfolio</Link>
          </li> */}
          <li>
              <Link to={BLOG}>Blog</Link>
          </li>
          <li>
              <Link to={CONTACT}>Contact</Link>
          </li>

          <li className="humberger-menu-button">
            <Link className="humberger-menu-button-btn-btn" to={CONTACT}>
              CONTACT US
          </Link>
        </li>
          
      </ul>

      <div className="header-btn">
          <Link className="header-btn-btn" to={CONTACT}>
              CONTACT US
          </Link>
        </div>
      
  </nav>
</header>
  )
}

export default Header
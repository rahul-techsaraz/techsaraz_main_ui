import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '..//../images/Tech-SaraZ-logo-300x99.webp'

const Header = () => {
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
              <Link to="/" className="">Home</Link>
          </li>

          <li>
              <Link to="/aboutus">about</Link>
          </li>
          <li>
              <Link to="/services">Our Services 
                  <i className="fas fa-caret-down"></i>
              </Link>
              <ul className="sub-menu">
                  <li>
                      <Link to="services/web-development">web development <i className="fas fa-caret-down"></i></Link>
                      <ul className="sub-menu">
                          <li>
                              <Link to="services/web-development/web-application-development">web applicaion development</Link>
                          </li>
                          <li>
                              <Link to="services/web-development/wordpress-development">wordpress development</Link>
                          </li>
                          <li>
                              <Link to="services/web-development/e-commerce">e-commerce
                              </Link>
                          </li>
                          <li>
                              <Link to="services/web-development/ui-ux-design">ui and ux design
                              </Link>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <Link to="services/digital-merketing">Digital marketing <i className="fas fa-caret-down"></i></Link>
                      <ul className="sub-menu">
                          <li>
                              <Link to="services/digital-merketing/social-marketing">social media marketing</Link>
                          </li>
                          <li>
                              <Link to="services/digital-merketing/seo">Seo services</Link>
                          </li>
                          
                      </ul>
                  </li>
                  <li>
                      <Link to="services/content-writing">content writing</Link>
                  </li>
                  <li>
                      <Link to="services/graphics-design">graphics design</Link>
                  </li>
              </ul>
          </li>
          <li>
              <Link to="/portfolio">portfolio</Link>
          </li>
          <li>
              <Link to="/blog">Blog</Link>
          </li>
          <li>
              <Link to="/contact">Contact</Link>
          </li>

          <li className="humberger-menu-button">
            <Link className="humberger-menu-button-btn-btn" to="/contact">
              CONTACT US
          </Link>
        </li>
          
      </ul>

      <div className="header-btn">
          <Link className="header-btn-btn" to="/contact">
              CONTACT US
          </Link>
        </div>
      
  </nav>
</header>
  )
}

export default Header
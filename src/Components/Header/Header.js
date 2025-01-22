import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '..//../images/Tech-SaraZ-logo-300x99.webp';
import Routes from '../../Constant/routes';
import { PopUpContext } from '../../Context/ToastContext';
import PropTypes from 'prop-types'; // Import PropTypes for validation
// src/Config/navConfig.js

const navConfig = [
  {
    name: 'Home',
    to: Routes.HOME,
    subMenu: null,
  },
  {
    name: 'About',
    to: Routes.ABOUT_US,
    subMenu: null,
  },
  {
    name: 'Our Services',
    to: Routes.SERVICES,
    subMenu: [
      {
        name: 'Web Development',
        to: Routes.WEB_DEVELOPMENT,
        subMenu: [
          {
            name: 'Web Application Development',
            to: `${Routes.WEB_DEVELOPMENT}/${Routes.WEB_APPLICATION_DEVELOPMENT}`,
          },
          {
            name: 'WordPress Development',
            to: `${Routes.WEB_DEVELOPMENT}/${Routes.WORDPRESS_DEVELOPMENT}`,
          },
          {
            name: 'E-commerce Development',
            to: `${Routes.WEB_DEVELOPMENT}/${Routes.ECOMMERCE_DEVELOPMENT}`,
          },
          {
            name: 'UI/UX Design',
            to: `${Routes.WEB_DEVELOPMENT}/${Routes.UI_UX_DESIGN}`,
          },
        ],
      },
      {
        name: 'Digital Marketing',
        to: Routes.DIGITAL_MARKETING,
        subMenu: [
          {
            name: 'Social Media Marketing',
            to: `${Routes.DIGITAL_MARKETING}/${Routes.SOCIAL_MARKETING}`,
          },
          {
            name: 'SEO Services',
            to: `${Routes.DIGITAL_MARKETING}/${Routes.SEO}`,
          },
        ],
      },
      { name: 'Content Writing', to: Routes.CONTENT_WRITING, subMenu: null },
      { name: 'Graphics Design', to: Routes.GRAPHICS_DESIGN, subMenu: null },
    ],
  },
  {
    name: 'Blog',
    to: Routes.BLOG,
    subMenu: null,
  },
  {
    name: 'Contact',
    to: Routes.CONTACT,
    subMenu: null,
  },
  {
    name: 'CONTACT US',
    to: null, // This button is handled via popup functionality
    subMenu: null,
    isContactButton: true,
  },
];

const ContactButton = ({ onClick }) => (
  <li className="humberger-menu-button">
    <Link className="humberger-menu-button-btn-btn" onClick={onClick}>
      CONTACT US
    </Link>
  </li>
);

ContactButton.propTypes = {
  onClick: PropTypes.func.isRequired, // Ensure onClick is a function
};

// Recursive Menu Component to handle submenu rendering
const MenuItem = ({ item, closeMenu }) => {
  return (
    <li>
      <Link to={item.to} onClick={closeMenu}>
        {item.name}
        {item.subMenu && <i className="fas fa-caret-down" />}
      </Link>
      {item.subMenu && (
        <ul className="sub-menu">
          {item.subMenu.map((subItem, index) => (
            <MenuItem key={index} item={subItem} closeMenu={closeMenu} />
          ))}
        </ul>
      )}
    </li>
  );
};
MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired, // Name should be a string
    to: PropTypes.string, // to should be a string (it can be null for the contact button)
    subMenu: PropTypes.array, // subMenu should be an array or null
  }).isRequired,
  closeMenu: PropTypes.func.isRequired, // Ensure closeMenu is a function
};
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { togalPopUp } = useContext(PopUpContext);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="main-header">
      <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="menu-icons" onClick={toggleMenu}>
          <i className="fas fa-bars" />
          <i className="fas fa-times" />
        </div>

        {/* Logo */}
        <Link to={navConfig[0].to} className="header-logo">
          <img src={LOGO} alt="Tech SaraZ Logo" />
        </Link>

        <ul className="nav-list">
          {/* Render Menu Items from Config */}
          {navConfig.map((item, index) => {
            if (item.isContactButton) {
              return (
                <ContactButton key={index} onClick={() => togalPopUp(true)} />
              );
            }
            return <MenuItem key={index} item={item} closeMenu={closeMenu} />;
          })}
        </ul>

        {/* Main Header Button */}
        <div className="header-btn">
          <Link className="header-btn-btn" onClick={() => togalPopUp(true)}>
            Get a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

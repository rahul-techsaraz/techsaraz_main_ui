import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../Constant/routes';
import PropTypes from 'prop-types';

const ServicesHeroSection = ({ heading }) => {
  return (
    <div className="services-hero-section">
      <div className="all-hero-section-wraper">
        <div className="herosection-heading-h1">
          <h1 className="hero-section-textbox-h1">{heading}</h1>
        </div>
        <div className="hero-section-top-text">
          <p className="hero-section-top-text-text-p1">
            Welcome to{' '}
            <Link to={Routes.HOME} className="tech-saraz-animation">
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              Tech SaraZ
            </Link>
          </p>
          <p className="hero-section-top-down-p-text">
            Where innovation meets expertise in web development
          </p>
        </div>
      </div>
    </div>
  );
};

ServicesHeroSection.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default ServicesHeroSection;

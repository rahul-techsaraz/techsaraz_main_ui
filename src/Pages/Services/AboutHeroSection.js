import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../Constant/routes';

const AboutHeroSection = () => {
  return (
    <div className="about-hero-section">
      <div className="hro">
        <div className="textBox">
          <h1 className="hero-section-tectbox-h1">About Us</h1>
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

      <div className="animate-center">
        <div className="planet-container">
          <div className="night"></div>
          <div className="day"></div>
          <div className="planet-cloud"></div>
          <div className="inner-shadow"></div>
        </div>
      </div>

    </div>
  );
};

export default AboutHeroSection;

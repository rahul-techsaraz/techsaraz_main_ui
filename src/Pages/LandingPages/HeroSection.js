import React from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../Constant/constants';
import Routes from '../../Constant/routes';

const HeroSection = () => {
  const { heroSectionMainSubText } = constants.landingPageText;
  const { facebook, instagram, linkedin, youtube, tweeter } =
    constants.socialLinks;
  return (
    <section className="hero-section">
      <div className="hero_section_layer"></div>
      <div className="hero_section_layer"></div>
      <div className="hero_section_layer"></div>
      <div className="hero_section_layer"></div>
      <div className="hero_section_layer"></div>
      <div className="hero_section_layer"></div>
      <div className="hero_section_layer"></div>
      <div className="hero-section-text">
        <h1 className="hero-section-text-main-heading">
          IT Solutions <span style={{ color: '#bbff00;' }}> & Business </span>{' '}
          <br />
          Services Company
        </h1>
        <p className="hero-section-text-p">{heroSectionMainSubText}</p>
        <div className="banner-btn">
          <Link className="banner-btn-btn" to={Routes.CONTACT}>
            ENQUIRE NOW
          </Link>
        </div>
        <div className="header-icon-group">
          <Link to={facebook} target='blank' className="header-icon-span">
            <i className="fa-brands fa-facebook-f facebook-icon-style"></i>
          </Link>
          <Link to={youtube} target='blank' className="header-icon-span">
            <i className="fa-brands fa-youtube youtube-icon-style"></i>
          </Link>
          <Link to={linkedin} target='blank' className="header-icon-span">
            <i className="fa-brands fa-linkedin-in linkdin-icon-style"></i>
          </Link>
          <Link to={tweeter} target='blank' className="header-icon-span">
            <i className="fa-brands fa-x-twitter twitter-icon-style"></i>
          </Link>
          <Link to={instagram} target='blank' className="header-icon-span">
            <i className="fa-brands fa-instagram instragram-icon-style"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

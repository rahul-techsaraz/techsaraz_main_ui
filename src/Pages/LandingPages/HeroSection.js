import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../Constant/constants';
// import Routes from '../../Constant/routes';
import { PopUpContext } from '../../Context/ToastContext';

const HeroSection = () => {
  const { togalPopUp } = useContext(PopUpContext);
  const { heroSectionMainSubText } = constants.landingPageText;
  const { facebook, instagram, linkedin, youtube, tweeter } =
    constants.socialLinks;
  const heroSectionAnimation = () => {
    let container = document.querySelector('.hero-section');
    let hero_section_layer = document.querySelectorAll('.hero_section_layer');
    container.onmousemove = function (e) {
      let X = e.pageX;
      let Y = e.pageY;
      hero_section_layer[0].style.transform =
        'translate(' + (X / 100) * 2 + 'px, ' + (Y / 100) * 2 + 'px)';
      hero_section_layer[1].style.transform =
        'translate(' + (X / 100) * -2 + 'px, ' + (Y / 100) * -2 + 'px)';
      hero_section_layer[2].style.transform =
        'translate(' + (X / 100) * -3 + 'px, ' + (Y / 100) * -3 + 'px)';
      hero_section_layer[3].style.transform =
        'translate(' + (X / 100) * -4 + 'px, ' + (Y / 100) * -4 + 'px)';
      hero_section_layer[4].style.transform =
        'translate(' + (X / 100) * -5 + 'px, ' + (Y / 100) * -5 + 'px)';
      hero_section_layer[5].style.transform =
        'translate(' + (X / 100) * -6 + 'px, ' + (Y / 100) * -6 + 'px)';
      hero_section_layer[6].style.transform =
        'translate(' + (X / 100) * -7 + 'px, ' + (Y / 100) * -7 + 'px)';
    };
  };
  useEffect(() => {
    heroSectionAnimation();
    return () => {};
  }, []);
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
          IT Solutions <span style={{ color: '#bbff00' }}> & Business </span>{' '}
          <br />
          Services Company
        </h1>
        <p className="hero-section-text-p">{heroSectionMainSubText}</p>
        <div className="banner-btn">
          {/* <Link className="banner-btn-btn" to={Routes.CONTACT}> */}
          <button className="banner-btn-btn" onClick={() => togalPopUp(true)}>
            ENQUIRE NOW
          </button>

          {/* </Link> */}
        </div>
        <div className="header-icon-group">
          <Link to={facebook} target="blank" className="header-icon-span">
            <i className="fa-brands fa-facebook-f facebook-icon-style"></i>
          </Link>
          <Link to={youtube} target="blank" className="header-icon-span">
            <i className="fa-brands fa-youtube youtube-icon-style"></i>
          </Link>
          <Link to={linkedin} target="blank" className="header-icon-span">
            <i className="fa-brands fa-linkedin-in linkdin-icon-style"></i>
          </Link>
          <Link to={tweeter} target="blank" className="header-icon-span">
            <i className="fa-brands fa-x-twitter twitter-icon-style"></i>
          </Link>
          <Link to={instagram} target="blank" className="header-icon-span">
            <i className="fa-brands fa-instagram instragram-icon-style"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

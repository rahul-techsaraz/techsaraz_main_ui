import React from 'react';
import { constants } from '../../Constant/constants';
import { Link } from 'react-router-dom';
import Routes from '../../Constant/routes';

const AboutSection = () => {
  const { images } = constants;
  const { aboutSectionDescription } = constants.landingPageText;
  return (
    <section className="about">
      <div className="pulse">
        <img src={images.user1Image.imageURL} alt={images.user1Image.alt} />
      </div>
      <div className="about-in-box">
        <div className="about-in-box-wraper">
          <div className="about-in-box-wraper-imgbox">
            <img
              src={images.homeFont1Image.imageURL}
              alt={images.homeFont1Image.imageURL}
            />
          </div>
          <div className="about-in-box-wraper-textbox">
            <div className="about-heading">
              <button className="about-heading-text">
                ABOUT US<span className="about-section-span-round"></span>
              </button>
            </div>
            <div className="about-in-box-wraper-textbox-text">
              WE ARE MORE THAN JUST AN IT COMPANY
            </div>
            <p className="about-in-box-wraper-textbox-text-p">
              {aboutSectionDescription}
            </p>
            <div className="about-btn">
              <Link className="about-btn-btn" to={Routes.ABOUT_US}>
                KNOW MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from 'react';
import { constants } from '../../Constant/constants';
import { Link } from 'react-router-dom';
import Routes from '../../Constant/routes';

const AboutSection = () => {
  const { images } = constants;
  const { aboutSectionDescription } = constants.landingPageText;
  return (
    <section className="about">
      <div className="about-in-box">
        <div className="about-in-box-wraper">
           <div className="about-in-box-wraper-textbox">
            <div className="top-heading">
              <button className="top-heading-text">
                 <img
              src={images.headingIconImage.imageURL}
              alt={images.headingIconImage.imageURL}
            />
                ABOUT US 
                <span className="top-section-span-round"></span>
              </button>
            </div>
            <div className="full-heading-text-color-change-span">
              WE ARE MORE THAN JUST AN <span className='heading-text-color-change-span'>IT COMPANY</span>
            </div>
            <p className="paragraph-p pb pt">
              {aboutSectionDescription}
            </p>
            <div className="about-btn">
              <Link className="section-btn-btn" to={Routes.ABOUT_US}>
                KNOW MORE
              </Link>
            </div>
          </div>
          <div className="about-in-box-wraper-imgbox">
            <img
              src={images.homeFont1Image.imageURL}
              alt={images.homeFont1Image.imageURL}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

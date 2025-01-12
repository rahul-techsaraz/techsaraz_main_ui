import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/about.css';
import '../../style/style.css';
import user1Image from '../../images/user (1).png';
import service4Image from '../../images/service-4.jpg';

const AboutUs = () => {
  return (
    <>
      <div className="about-hero-section">
        <div id="containe">
          <canvas id="pixie"></canvas>
          <div className="about-us-text-p">
            <p className="about-text-p1">
              Welcome to
              <Link to="/" className="tech-saraz-animation">
                <span className="tech-saraz-name-animation"></span>
                <span className="tech-saraz-name-animation"></span>
                <span className="tech-saraz-name-animation"></span>
                <span className="tech-saraz-name-animation"></span>
                Tech SaraZ
              </Link>
            </p>
            <p className="about-text-p2">
              Where innovation meets expertise in web development
            </p>
          </div>
          <div id="loa">
            <section id="turnglobe">
              <div id="worldmap"></div>
            </section>
          </div>

          {/* <div className="about-hero-section-text">ABOUT US</div> */}
        </div>
      </div>

      <section className="about-company">
        <div className="about-company-pulse">
          <img src={user1Image} alt="" />
        </div>
        <div className="about-company-in-box">
          <div className="about-company-in-box-wraper">
            <div className="about-company-in-box-wraper-textbox">
              <div className="about-company-heading">
                <button className="about-company-heading-text">
                  ABOUT COMPANY<span className="span-circle"></span>
                </button>
              </div>
              <div className="about-company-in-box-wraper-textbox-text">
                Making Your Business More Unique
              </div>
              <p className="about-company-in-box-wraper-textbox-text-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                officia molestiae dolorum tempora ut accusamus cupiditate!
                Nesciunt tempora reiciendis libero voluptate!
              </p>
              <p className="about-company-in-box-wraper-textbox-text-p2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
              <div className="about-company-btn">
                <Link className="about-company-btn-btn" to="/contact">
                  CONTACT US
                </Link>
              </div>
            </div>
            <div className="about-company-in-box-wraper-imgbox">
              <div className="about-company-in-box-wraper-imgbox-child">
                <img src={service4Image} alt="about-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

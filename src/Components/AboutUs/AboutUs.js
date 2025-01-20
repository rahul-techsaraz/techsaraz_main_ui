import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../style/style.css';
import user1Image from '../../images/user (1).png';
import service4Image from '../../images/service-4.jpg';
import ServicesHeroSection from '../../Pages/Services/ServicesHeroSection';
import WorkSection from '../../Pages/LandingPages/WorkSection';
import { PopUpContext } from '../../Context/ToastContext';

const AboutUs = () => {
  const { togalPopUp } = useContext(PopUpContext);
  return (
    <>
      <ServicesHeroSection />

      <section className="about-company">
        <div className="about-company-pulse about-page-company-pulse">
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
                Welcome to Tech SaraZ
              </div>
              <p className="about-company-in-box-wraper-textbox-text-p">
                Tech SaraZ is a software company based in Bangalore that
                specializes in top-notch digital Marketing and web design. In
                our fast-paced digital world, it’s crucial to make your products
                or services shine brighter than the rest. We’re here to support
                those with big dreams and a relentless drive to succeed in their
                online businesses by providing our unmatched services. A
                well-designed website is the key to drawing in and keeping
                customers in this digital era. We at Tech SaraZ grasp this
                essential fact, and our work ranges from creating the most
                inventive and user-friendly websites to effectively marketing
                business online. A top-tier website and extraordinary marketing
                services can act as the spark that sends business soaring. Our
                experienced professionals are committed to ensuring your online
                presence isn’t just another face in the crowd but a standout
                player that grabs attention and fuels business growth. With Tech
                SaraZ, you can be confident that your digital marketing needs
                are in the safest hands.
              </p>
              <div className="about-company-btn">
                <Link className="about-company-btn-btn" onClick={()=>togalPopUp(true)}>
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
      <WorkSection />
    </>
  );
};

export default AboutUs;

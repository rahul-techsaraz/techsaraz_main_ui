import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../style/style.css';
// import user1Image from '../../images/user (1).png';
import service4Image from '../../images/service-4.jpg';
import headingIconImage from '../../images/subtitle-icon.png';
import clientTrust from '../../images/client-trust-img.avif';
// import ServicesHeroSection from '../../Pages/Services/ServicesHeroSection';
import WorkSection from '../../Pages/LandingPages/WorkSection';
import { PopUpContext } from '../../Context/ToastContext';
import AboutHeroSection from '../../Pages/Services/AboutHeroSection';

const AboutUs = () => {
  const { togalPopUp } = useContext(PopUpContext);
  return (
    <>
      {/* <ServicesHeroSection heading={'about us'}/> */}
      <AboutHeroSection />

      <section className="about-company">
        <div className="about-company-in-box">
          <div className="about-company-in-box-wraper">
            <div className="about-company-in-box-wraper-textbox">

             <div className="top-heading">
              <button className="top-heading-text">
                ABOUT COMPANY 
                <span className="top-section-span-round"></span>
              </button>
             </div>
              <div className="about-company-in-box-wraper-textbox-text">
                Welcome to Tech SaraZ
              </div>
              <p className="about-company-in-box-wraper-textbox-text-p paragraph-p">
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
              <div className="about-company-btn pt">
                <Link
                  className="section-btn-btn"
                  onClick={() => togalPopUp(true)}
                >
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

      {/* OUR VISION MISSION SECTION START */}
      <section className='our-vission-mission-section'>
      <div className='our-vission-mission-section-container'>
        <div className='our-vission-mission-section-heading-box'>
          <div className='our-vission-mission-section-heading-box-text'>
            <div className="top-heading">
              <button className="top-heading-text">
                mission & vission 
                <span className="top-section-span-round"></span>
              </button>
            </div>
            <div className="full-heading-text-color-change-span">
              our <span className='heading-text-color-change-span'>mission and vission</span> statment
            </div>
            <p className='paragraph-p pt'>Tech SaraZ is a software company based in Bangalore that specializes in top-notch digital Marketing and web design. In our fast-paced digital world, it’s crucial to make your products or services shine brighter than the rest. We’re here to support those with big dreams and a relentless drive to succeed in their online businesses by providing our unmatched services.</p>
          </div>
          <div className='our-vission-mission-section-heading-box-empty'></div>
        </div>
        <div className='our-vission-mission-section-main-box'>
          <div className='our-vission-mission-section-left-box'>
          <div className='our-vision-section-box'>
            <div className='our-vision-section-box-img-parent'><div className='our-vision-section-box-img'></div></div>
            <div className='our-vision-section-box-text-group'>
              <h3>vision</h3>
              <hr className='our-vision-section-box-text-group-hr-line'/>
              <p className='paragraph-p'>Tech SaraZ is a software company based in Bangalore that specializes in top-notch digital Marketing and web design.
                 In our fast-paced digital world,
                 it’s crucial to make your products or services shine brighter than the rest.</p>
            </div>
          </div>
          <div className='our-mission-section-box'>
            <div className='our-vision-section-box-img-parent'><div className='our-mission-section-box-img'></div></div>
            <div className='our-vision-section-box-text-group'>
              <h3>mission</h3>
              <hr className='our-vision-section-box-text-group-hr-line'/>
              <p className='paragraph-p'>Tech SaraZ is a software company based in Bangalore that specializes in top-notch digital Marketing and web design.
                 In our fast-paced digital world,
                 it’s crucial to make your products or services shine brighter than the rest.</p>
            </div>
          </div>
          </div>
          <div className='our-vission-mission-section-right-box'>
          <div className='our-vission-mission-section-img-box'></div>
          </div>
        </div>
      </div>
    </section>
    {/* OUR VISION MISSION SECTION END */}

    {/* OUR CLIENT TRUST START */}

    <section className='client-trust'>
      <div className="top-heading text-center">
              <button className="top-heading-text text-stroke-color2 justify-center">
                <img src={headingIconImage} alt="about-image" />
                client trust
              </button>
        </div>
        <h1 className="full-heading-text-color-change-span text-center">Why Clients Trust <span className='heading-text-color-change-span'>Techsaraz</span></h1>
      <div className='client-trust-in-text-imgbox'>
        <div className='client-trust-in-textbox'>
          <div className='client-trust-textbox-child grid-1box'>
            <h1 className='client-trust-textbox-child-h1'>.01</h1>
            <h3 className='client-trust-textbox-child-h3'>Proven track record of delivering complex projects on time and within budget.</h3>
          </div>
          <div className='client-trust-textbox-child'>
            <h1 className='client-trust-textbox-child-h1'>.02</h1>
            <h3 className='client-trust-textbox-child-h3'>Agile, scalable solutions tailored to unique business needs.</h3>
          </div>
          <div className='client-trust-textbox-child'>
             <h1 className='client-trust-textbox-child-h1'>.03</h1>
            <h3 className='client-trust-textbox-child-h3'>A team of certified experts committed to continuous learning and innovation.</h3>
          </div>
          <div className='client-trust-textbox-child'>
            <h1 className='client-trust-textbox-child-h1'>.04</h1>
            <h3 className='client-trust-textbox-child-h3'>Transparent communication and a client-first mindset.</h3>
          </div>
          <div className='client-trust-textbox-child'>
            <h1 className='client-trust-textbox-child-h1'>.05</h1>
            <h3 className='client-trust-textbox-child-h3'>Strong emphasis on data security, privacy, and compliance.</h3>
          </div>
        </div>
        <div className='client-trust-in-imgbox'>
           <div className='client-trust-in-imgbox-clienttrust-img'>
           <img src={clientTrust} alt="about-image" />
           </div>
        </div>
      </div>
    </section>

    {/* OUR CLIENT TRUST END */}

      <WorkSection />

          {/* LETS BUILDS FUTURE TOGETHER SECTION START */}

    <section className='builds-together'>
      <div className='builds-together-child-grid-container'>
        <div className='builds-together-child-text-container'>
          <div className="top-heading text-center">
              <button className="top-heading-text color-white justify-center">
                <img src={headingIconImage} alt="about-image" />
                builds-together
              </button>
        </div>
        <h1 className="full-heading-text-color-change-span text-center color-white">Let’s Build the <span className='heading-text-color-change-span heading-text-color-change-span-span'>Future Together</span></h1>
        <p className='builds-together-para paragraph-p text-center color-white'>Ready to take your business to the next level? Let’s connect and explore how Techsaraz can help you achieve your goals.</p>
        <Link
            className="button-btn-btn2"
            onClick={() => togalPopUp(true)}
            >
            CONTACT US
        </Link>

        </div>
      </div>
    </section>


    {/* LETS BUILDS FUTURE TOGETHER SECTION END */}


    </>
  );
};

export default AboutUs;

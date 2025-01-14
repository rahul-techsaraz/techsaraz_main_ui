import React from 'react'
import { Link } from 'react-router-dom';
import '../../style/about.css';
import '../../style/style.css';
import user1Image from '../../images/user (1).png'
import service4Image from '../../images/service-4.jpg'
import ServicesHeroSection from '../../Pages/Services/ServicesHeroSection'
import WorkSection from '../../Pages/LandingPages/WorkSection';
import Routes from '../../Constant/routes'



const AboutUs = () => {
  const {CONTACT} = Routes
  return (
    <>
    <ServicesHeroSection />

<section className="about-company">
    <div className="about-company-pulse">
        <img src={user1Image} alt="" />
    </div>
    <div className="about-company-in-box">
        <div className="about-company-in-box-wraper">
            <div className="about-company-in-box-wraper-textbox">
                <div className="about-company-heading"><button className="about-company-heading-text">ABOUT COMPANY<span className="span-circle"></span></button></div>
                <div className="about-company-in-box-wraper-textbox-text">Making Your Business More Unique</div>
                <p className="about-company-in-box-wraper-textbox-text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus 
                    cupiditate! Nesciunt tempora reiciendis libero voluptate!</p>
                    <p className="about-company-in-box-wraper-textbox-text-p2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    <div className="about-company-btn">
                        <Link className="about-company-btn-btn" to={CONTACT}>
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
  )
}

export default AboutUs
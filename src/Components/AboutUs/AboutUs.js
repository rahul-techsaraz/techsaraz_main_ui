import React from 'react'
import { Link } from 'react-router-dom';
import '../../style/about.css';
import '../../style/style.css';
import user1Image from '../../images/user (1).png'
import service4Image from '../../images/service-4.jpg'



const AboutUs = () => {
  return (
    <>
    <div className="about-hero-section">
<div id="containe">
    <canvas id="pixie"></canvas>
    <div className="about-us-text-p">
      <p className="about-text-p1">Welcome to    
        <Link to="/" className="tech-saraz-animation">
        <span className="tech-saraz-name-animation"></span>
        <span className="tech-saraz-name-animation"></span>
        <span className="tech-saraz-name-animation"></span>
        <span className="tech-saraz-name-animation"></span>
        Tech SaraZ
      </Link>
      </p>
        <p className="about-text-p2">Where innovation meets expertise in web development</p>
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
                <div className="about-company-heading"><button className="about-company-heading-text">ABOUT COMPANY<span className="span-circle"></span></button></div>
                <div className="about-company-in-box-wraper-textbox-text">Welcome to Tech SaraZ</div>
                <p className="about-company-in-box-wraper-textbox-text-p">Tech SaraZ is a software company based in Bangalore that specializes in
                   top-notch digital Marketing and web design. In our fast-paced digital world, it’s crucial to make your products or
                    services shine brighter than the rest. We’re here to support those with big dreams and a relentless drive to succeed in 
                    their online businesses by providing our unmatched services. A well-designed website is the key to drawing in and keeping 
                    customers in this digital era. We at Tech SaraZ grasp this essential fact, and our work ranges from creating the most
                     inventive and user-friendly websites to effectively marketing business online. A top-tier website and extraordinary 
                     marketing services can act as the spark that sends business soaring. Our experienced professionals are committed to 
                     ensuring your online presence isn’t just another face in the crowd but a standout player that grabs attention and fuels
                      business growth. With Tech SaraZ, you can be confident that 
                  your digital marketing needs are in the safest hands.</p>
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
  )
}

export default AboutUs
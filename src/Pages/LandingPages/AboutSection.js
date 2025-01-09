import React from 'react';
import { constants } from '../../Constant/constants';

const AboutSection = () => {
    const { images } = constants;
  return (
   <section className="about">
    <div className="pulse">
        <img src={images.user1Image.imageURL} alt={images.user1Image.alt} />
    </div>
    <div className="about-in-box">
        <div className="about-in-box-wraper">
            <div className="about-in-box-wraper-imgbox">
                <img src={images.homeFont1Image.imageURL} alt={images.homeFont1Image.imageURL} />
            </div>
            <div className="about-in-box-wraper-textbox">
                <div className="about-heading"><button className="about-heading-text">ABOUT US<span className="span-circle"></span></button></div>
                <div className="about-in-box-wraper-textbox-text">Trusted By Worldwide Clients Since 1980.</div>
                <p className="about-in-box-wraper-textbox-text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus 
                    cupiditate! Nesciunt tempora reiciendis libero voluptate!</p>
                    <div className="about-btn">
                        <a className="about-btn-btn" href="about.html">
                            KNOW MORE
                        </a>
                      </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutSection
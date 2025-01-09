import React from 'react'
import { images } from '../../../Constant/images';

const WebCompetitorSection = () => {
  const {timeImage} = images;
  return (
    <>
    <section className="competitor">
    <div className="competitor-pulse">
        <img src={timeImage} alt="" />
    </div>
    <div className="competitor-in-box">
        <h1 className="competitor-h1">What sets Tech Saraz apart from its competitors?</h1>
        <p className="competitor-p">Tech Saraz distinguishes itself through exceptional services and approach. 
            Here are several unique 
            factors that make us stand out from other companies in Bangalore:</p>
        <div className="competitor-in-box-wraper">
           <div className="competitor-box" id="competitor-box-set">
              <div className="competitor-box-i">
                <i className="fa-solid fa-code"></i>
              </div>
              <h1 className="competitor-box-h1">Innovative Design</h1>
              <p className="competitor-box-p">Our creative team is fearless in pushing boundaries. We bring a fresh perspective to every project, crafting unique, 
                aesthetically pleasing designs that capture your brand's essence and set you apart from the competition.</p>
        </div>
           
        <div className="competitor-box" id="competitor-box-set">
            <div className="competitor-box-i">
              <i className="fa-solid fa-award"></i>
            </div>
            <h1 className="competitor-box-h1">Cutting-Edge Technology</h1>
            <p className="competitor-box-p">We stay ahead of the curve by embracing the latest advancements in web development technology. This enables us to create efficient, future-proof websites that remain relevant and effective in an ever-evolving digital landscape.</p>
      </div>
      <div className="competitor-box" id="competitor-box-set">
        <div className="competitor-box-i">
          <i className="fa-solid fa-gears"></i>
        </div>
        <h1 className="competitor-box-h1">Customer-Centric Approach</h1>
        <p className="competitor-box-p">At Tech Saraz, you're not just a client but a partner. We prioritize your vision and goals, collaborating closely with you at every stage of the web development process. This ensures the end product reflects your brand and meets your needs.</p>
  </div>
  <div className="competitor-box" id="competitor-box-set">
    <div className="competitor-box-i">
      <i className="fa-solid fa-user-tie"></i>
    </div>
    <h1 className="competitor-box-h1">Expert Web Developers</h1>
    <p className="competitor-box-p">Our team comprises experienced and skilled web developers proficient in various languages and frameworks. Their technical expertise and keen attention to detail guarantee a high-quality, high-performing website that enhances your online presence.</p>
</div>
<div className="competitor-box" id="competitor-box-set">
    <div className="competitor-box-i">
      <i className="fa-solid fa-chart-line"></i>
    </div>
    <h1 className="competitor-box-h1">Exceptional Performance</h1>
    <p className="competitor-box-p">Our creative team is fearless in pushing boundaries. We bring a fresh perspective to every project, crafting unique, 
      aesthetically pleasing designs that capture your brand's essence and set you apart from the competition.</p>
</div>
        </div>
    </div>
</section>
<section className="service-in">
    <div className="service-in-box">
            <div className="service-in-textbox">
                <h1 className="service-in-h1">Web design services in Bangalore</h1>
                <p className="service-in-p">Tech Saraz, a top web design company in Bangalore, is dedicated to providing exceptional
                     web design services in Bangalore that elevate your online presence. With our team of highly skilled professionals, 
                     we craft visually captivating and user-friendly websites that engage your audience and drive business growth.
                      As the top choice for web design services in Bangalore, we understand the importance of creating a website that 
                      looks appealing and delivers seamless functionality.
                     Our expertise lies in designing custom websites that align perfectly with your brand’s vision and objectives.</p>


                    <p className="service-in-p">At Tech Saraz, we believe in a collaborative approach. Our web design process involves active client engagement, ensuring we incorporate your unique requirements and preferences. We work closely with you to understand your business goals, target audience, and brand identity, enabling us to create a website that truly represents your business. Our talented designers leverage the latest industry trends and best practices to deliver websites that are fully responsive and optimized for all devices. We focus on user experience,
                         making navigation intuitive and content easily accessible to visitors, resulting in higher engagement and conversions.</p>


                        <p className="service-in-p">Tech Saraz takes pride in it’s client-centric approach, 
                            delivering top-notch web design solutions tailored to your needs. By choosing our
                             web design services in Bangalore and suburbs areas such as jp nagar and so on , you gain a 
                             competitive edge in the digital marketplace, 
                            establishing a solid online presence and attracting your target audience effectively.</p>
            </div>
    </div>
</section>
</>
  )
}

export default WebCompetitorSection;
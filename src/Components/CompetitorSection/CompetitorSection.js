import React from 'react';
import {images} from '../../Constant/images'
import CompetitorBox from './CompetitorBox'

// CompetitorSection component
const CompetitorSection = ({competitorData}) => {
  const { timeImage } = images;
  const { title, description, boxes} = competitorData;

  return (
    <>
      <section className="competitor">
        <div className="competitor-pulse">
          <img src={timeImage} alt="Competitor Pulse" />
        </div>
        <div className="competitor-in-box">
          <h1 className="competitor-h1">{title}</h1>
          <p className="competitor-p">
            {description}
          </p>
          <div className="competitor-in-box-wraper">
            {boxes.map((item, index) => (
              <CompetitorBox
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="service-in">
        <div className="service-in-box">
          <div className="service-in-textbox">
            <h1 className="service-in-h1">Web design services in Bangalore</h1>
            <p className="service-in-p">
              Tech Saraz, a top web design company in Bangalore, is dedicated to providing exceptional
              web design services in Bangalore that elevate your online presence. With our team of highly skilled professionals, 
              we craft visually captivating and user-friendly websites that engage your audience and drive business growth. 
              As the top choice for web design services in Bangalore, we understand the importance of creating a website that 
              looks appealing and delivers seamless functionality.
            </p>
            <p className="service-in-p">
              At Tech Saraz, we believe in a collaborative approach. Our web design process involves active client engagement, ensuring we incorporate your unique requirements and preferences. We work closely with you to understand your business goals, target audience, and brand identity, enabling us to create a website that truly represents your business. Our talented designers leverage the latest industry trends and best practices to deliver websites that are fully responsive and optimized for all devices. We focus on user experience, making navigation intuitive and content easily accessible to visitors, resulting in higher engagement and conversions.
            </p>
            <p className="service-in-p">
              Tech Saraz takes pride in its client-centric approach, delivering top-notch web design solutions tailored to your needs. By choosing our
              web design services in Bangalore and suburbs such as JP Nagar, you gain a competitive edge in the digital marketplace, 
              establishing a solid online presence and attracting your target audience effectively.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompetitorSection;

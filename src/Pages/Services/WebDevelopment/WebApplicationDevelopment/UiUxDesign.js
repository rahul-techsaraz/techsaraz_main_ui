import React from 'react';
import { images } from '../../../../Constant/images';

const Section = ({ title, description, image, items }) => {
    const {checkedImage} = image;
  return (
    <section className="in-bangalore">
      <div className="in-bangalore-pulse">
        <img src={image.pulseImage} alt="" />
      </div>
      <div className="in-bangalore-box">
        <div className="in-bangalore-wraper">
          <div className="in-bangalore-imgbox">
            <img src={image.mainImage} alt="best-company-image" />
          </div>
          <div className="in-bangalore-textbox">
            <h1 className="in-bangalore-h1">{title}</h1>
            <p className="in-bangalore-p">{description[0]}</p>
            <p className="in-bangalore-p">{description[1]}</p>
          </div>
        </div>
        <div className="in-bangalore-down-box-parent">
          <div className="in-bangalore-down-box">
            {items.map((item, index) => (
              <div className="in-bangalore-down-box-i-text" key={index}>
                <div className="in-bangalore-down-box-i">
                  <img src={checkedImage} alt="" />
                </div>
                <div className="in-bangalore-down-box-text">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CompetitorSection = () => {
    const {competitorAnalysisImage} = images;
  return (
    <section className="competitor">
      <div className="competitor-pulse">
        <img src={competitorAnalysisImage} alt="" />
      </div>
      <div className="competitor-in-box">
        <h1 className="competitor-h1">
          What makes Tech SaraZ unique for UI And UX designing in Bangalore?
        </h1>
        <div className="competitor-in-box-wraper">
          {[
            {
              icon: 'fa-award',
              title: 'Commitment to Excellence',
              description:
                'At Tech Saraz, a leading UI and UX design company in Bangalore, we steadfastly deliver top-notch design solutions. We strive to provide designs beyond aesthetics, ensuring a rich and fulfilling user experience.',
            },
            {
              icon: 'fa-users',
              title: 'User-Centric Approach',
              description:
                'We place the user at the heart of our design process. We focus on creating designs that resonate with your users, addressing their needs, and enhancing their interaction with your digital platform. This user-centric approach sets us apart as a preferred UX design agency in Bangalore.',
            },
            {
              icon: 'fa-arrow-trend-up',
              title: 'Adherence to Latest Trends',
              description:
                'We ensure your digital platform remains competitive and appealing by staying current with the latest UI and UX design trends. We blend innovation with best design practices to craft modern but also intuitive and user-friendly interfaces.',
            },
            {
              icon: 'fa-folder-tree',
              title: 'Emphasis on Collaboration and Transparency',
              description:
                'Our design process is deeply rooted in collaboration and transparency. We believe in involving you at every stage, fostering a shared vision, and maintaining complete transparency about progress and decision-making.',
            },
            {
              icon: 'fa-object-ungroup',
              title: 'High-Quality UI/UX Design Services',
              description:
                'If you\'re seeking to build a web or mobile app, our highly skilled team is equipped to offer you top-tier UI/UX design services. We strive to construct interactive, high-quality products efficiently, solidifying our reputation as a trusted UI and UX design company in Bangalore.',
            },
          ].map((item, index) => (
            <div className="competitor-box" key={index}>
              <div className="competitor-box-i">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h1 className="competitor-box-h1">{item.title}</h1>
              <p className="competitor-box-p">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UiUxDesign = () => {
    const {uxDesignImage,
        uxStratagyImage} = images;
  const uxStrategyData = {
    title: 'UX Strategy',
    description: [
      'Our strategic process begins with an in-depth analysis of your business model, a clear understanding of your objectives, and a thorough assessment of your users’ needs.',
      'Leveraging these insights, we craft a UX strategy that captivates your audience, driving user engagement and conversions and positioning us as a leading provider of UX design in Bangalore.',
    ],
    image: {
      pulseImage: uxDesignImage,
      mainImage: uxStratagyImage,
    },
    items: ['Fast setup', 'User-friendly', 'Best For online store', 'Seamless integration', 'Optimize your business'],
  };

  return (
    <div>
      <Section {...uxStrategyData} />
      <CompetitorSection />
    </div>
  );
};

export default UiUxDesign;

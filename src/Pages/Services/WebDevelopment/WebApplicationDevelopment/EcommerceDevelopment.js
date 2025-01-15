import React from 'react';
import '../../../css/social-marketing.css';
import '../../../css/e-commerce.css';
import '../../../css/web-development.css';
import { ecommerceServicesConfig } from '../../../../Constant/config/servicesConfig';
import ServiceSection from '../../../../Components/Services/ServiceSection ';
import BenefitsSection from '../../../../Components/BenefitsSection/BenefitsSection';
import { constant } from '../../../../Constant/en';
import { ecommerceBenefitsData } from '../../../../Constant/config/benefitsConfig';
import { ecommerceSlideAnimationsConfig } from '../../../../Constant/config/slideBoxAnimationsConfig';
import SlideBoxAnimations from '../../../../Components/SlideBoxAnimations/SlideBoxAnimations';

export const OurEcommerce = () => {
  return (
    <section className="our-ecommerce">
      <div className="our-ecommerce-in-box">
        <h1 className="our-ecommerce-in-box-h1">
          Our Ecommerce Development Services in Bangalore
        </h1>
        <p className="our-ecommerce-in-box-p">
          At Tech Saraz, we comprehend the dynamics of the digital marketplace.
          As a leading E-commerce development company in Bangalore, we offer
          comprehensive E-commerce solutions tailored to your unique business
          needs. Our adept developers excel at creating platforms that deliver
          an unparalleled shopping experience, catalyzing growth and success for
          your enterprise.
        </p>
        <div className="our-ecommerce-in-box-wraper">
          {[
            'Brand Positioning',
            'Brand Positioning',
            'Brand Positioning',
            'Brand Positioning',
          ].map((title, index) => (
            <div className="our-ecommerce-in-box-wraper-in-box" key={index}>
              <h3 className="our-ecommerce-in-box-wraper-in-box-h1">{title}</h3>
              <p className="our-ecommerce-in-box-wraper-in-box-p">
                Social media platforms are not just about posting content;
                they're about showcasing your brand in the best light. By using
                the unique creative opportunities each platform offers, you can
                position your brand effectively and attractively.
              </p>
              <div className="overlay"></div>
              <div className="overlay2"></div>
              <div className="overlay3"></div>
              <div className="overlay4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EcommerceDevelopment = () => {
  const { title, description } = constant;

  return (
    <>
      {ecommerceServicesConfig.map((section) => (
        <ServiceSection
          key={section.id}
          title={section.title}
          description={section.description}
          imageSrc={section.imageSrc}
          altText={section.altText}
          points={section.points}
          pulseImageSrc={section.pulseImageSrc}
          pulseAltText={section.pulseAltText}
          imageSide={section.id % 2 === 0 ? 'right' : 'left'}
        />
      ))}
      <BenefitsSection
        benefitsData={ecommerceBenefitsData}
        title={title.ecommerceBenefitTitle}
        description={description.ecommerceBenefitDescription}
      />
      <SlideBoxAnimations slideAnimationData={ecommerceSlideAnimationsConfig} />
    </>
  );
};

export default EcommerceDevelopment;

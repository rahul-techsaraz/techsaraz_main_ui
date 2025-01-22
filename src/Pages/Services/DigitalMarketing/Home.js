import React from 'react';
import { digitalMarketingServicesConfig } from '../../../Constant/config/servicesConfig';
import ServiceSection from '../../../Components/Services/ServiceSection ';
import SlideBoxAnimations from '../../../Components/SlideBoxAnimations/SlideBoxAnimations';
import { digitalMarketingSlideAnimateConfig } from '../../../Constant/config/slideBoxAnimationsConfig';

const Home = () => {
  return (
    <>
      {digitalMarketingServicesConfig.map((section) => (
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
          classesToToggle={section.classToggle}
        />
      ))}
      <SlideBoxAnimations
        slideAnimationData={digitalMarketingSlideAnimateConfig}
      />
    </>
  );
};

export default Home;

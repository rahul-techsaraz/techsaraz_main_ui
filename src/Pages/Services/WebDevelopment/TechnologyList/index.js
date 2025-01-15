import React from 'react';
import ServiceSection from '../../../../Components/Services/ServiceSection ';
import { technologyServicesConfig } from '../../../../Constant/config/servicesConfig';

const TechnologyList = () => {
  return (
    <>
      {technologyServicesConfig.map((section) => (
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
    </>
  );
};

export default TechnologyList;

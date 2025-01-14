import React from 'react';
import { uiuxServicesConfig } from '../../../../Constant/config/servicesConfig';
import ServiceSection from "../../../../Components/Services/ServiceSection ";



const UiUxDesign = () => {
  return (
    <div>
      {uiuxServicesConfig
      .map((section) => (
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
    </div>
  );
};

export default UiUxDesign;

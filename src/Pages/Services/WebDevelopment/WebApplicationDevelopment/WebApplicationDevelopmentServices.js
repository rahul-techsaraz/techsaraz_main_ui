import React from 'react';
import '../../../css/web-application-developmeent.css';
import ServiceSection from '../../../../Components/Services/ServiceSection ';
import { webApplicationDevServicesConfig } from '../../../../Constant/config/servicesConfig';

const WebApplicationDevelopmentServices = () => {
  return (
    <>
      <section className="development-services-in-Bangalore">
        <h1>Our web application development services in Bangalore</h1>
      </section>
      {webApplicationDevServicesConfig.map((section) => (
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
    </>
  );
};

export default WebApplicationDevelopmentServices;

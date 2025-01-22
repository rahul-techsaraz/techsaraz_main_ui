import React from 'react';
import '../../../Pages/css/web-development.css';
import '../../../Pages/css/social-marketing.css';
import '../../../Pages/css/content-writing.css';
import LetterHeroBanner from '../../LetterHeroBanner/LetterHeroBanner';
import BestCompanySection from '../../BestCompanySection/BestCompanySection';
import { constants } from '../../../Constant/constants';
import { serviceContentConfig } from '../../../Constant/config/servicesConfig';
import ServiceSection from '../ServiceSection ';
import CompetitorSection from '../../CompetitorSection/CompetitorSection';
import { contentWrittingCompetitorData } from '../../../Constant/config/competitorConfigData';
import SlideBoxAnimations from '../../SlideBoxAnimations/SlideBoxAnimations';
import { contentWrittingSlideAnimationConfig } from '../../../Constant/config/slideBoxAnimationsConfig';

const ContentWriting = () => {
  return (
    <>
      <LetterHeroBanner
        headingText={'CONTENT WRITTING'}
        socialIcons={constants.socialIcons}
        subtitle={constants.heroBannerHeading.subtitle}
        linkText={constants.heroBannerHeading.linkText}
        linkUrl={constants.heroBannerHeading.linkUrl}
      />
      <BestCompanySection />
      <CompetitorSection competitorData={contentWrittingCompetitorData} />
      <div>
        {serviceContentConfig.map((section) => (
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
      </div>
      <SlideBoxAnimations
        slideAnimationData={contentWrittingSlideAnimationConfig}
      />
    </>
  );
};

export default ContentWriting;

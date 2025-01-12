import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../../Pages/css/web-development.css';
import LetterHeroBanner from '../../LetterHeroBanner/LetterHeroBanner';
import { constants } from '../../../Constant/constants';
import BestCompanySection from '../../BestCompanySection/BestCompanySection';
import CompetitorSection from '../../CompetitorSection/CompetitorSection';

const MainWebDevelopmentSection = () => {
  return (
    <>
      <LetterHeroBanner
        headingText={'Web Developer'}
        socialIcons={constants.socialIcons}
        subtitle={constants.heroBannerHeading.subtitle}
        linkText={constants.heroBannerHeading.linkText}
        linkUrl={constants.heroBannerHeading.linkUrl}
      />
      <BestCompanySection />
      <CompetitorSection />
      <Outlet />
    </>
  );
};

export default MainWebDevelopmentSection;

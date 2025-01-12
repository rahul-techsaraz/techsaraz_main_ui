import React from 'react'
import '../../../Pages/css/digital-merketing.css';
import '../../../Pages/css/web-development.css';
import '../../../Pages/css/social-marketing.css';
import { Outlet } from 'react-router-dom'
import LetterHeroBanner from '../../LetterHeroBanner/LetterHeroBanner';
import { constants } from '../../../Constant/constants';
import BestCompanySection from '../../BestCompanySection/BestCompanySection';

const DigitalMarketing = () => {
  return (
    <>
    <LetterHeroBanner
          headingText={"Web Developer"} 
          socialIcons={constants.socialIcons} 
          subtitle={constants.heroBannerHeading.subtitle}
          linkText={constants.heroBannerHeading.linkText} 
          linkUrl={constants.heroBannerHeading.linkUrl}
          />
    <BestCompanySection />
    <Outlet />


    </>
  )
}

export default DigitalMarketing
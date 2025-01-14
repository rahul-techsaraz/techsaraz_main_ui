import React, { useEffect, useState } from 'react'
import '../../../Pages/css/digital-merketing.css';
import '../../../Pages/css/web-development.css';
import '../../../Pages/css/social-marketing.css';
import { Outlet, useLocation } from 'react-router-dom'
import LetterHeroBanner from '../../LetterHeroBanner/LetterHeroBanner';
import { constants } from '../../../Constant/constants';
import BestCompanySection from '../../BestCompanySection/BestCompanySection';
import CompetitorSection from '../../CompetitorSection/CompetitorSection';
import { digitalMarketingCompetitorData, socialMediaMarketingCompetitorData, seoMarketingCompetitorData } from '../../../Constant/config/competitorConfigData';

const DigitalMarketing = () => {
  const [headingText,setHeadingText] = useState("DIGITAL MARKETING");
    const {pathname} = useLocation();
    useEffect(() => {
      // Update heading text based on pathname
      if (pathname === '/services/digital-merketing/social-marketing') {
        setHeadingText('SOCIAL MEDIA MARKETING');
      } else if (pathname === '/services/digital-merketing/seo') {
        setHeadingText('SEO DEVELOPMENT');
      }  else {
        setHeadingText('DIGITAL MARKETING');
      }
    }, [pathname]);

    const getcompetitorData = () => {
      if(pathname === '/services/digital-merketing/social-marketing'){
        return socialMediaMarketingCompetitorData;
      } else if(pathname === '/services/digital-merketing/seo') {
        return seoMarketingCompetitorData;
      }  
       else {
        return digitalMarketingCompetitorData;
      }
    }
  return (
    <>
    <LetterHeroBanner
          headingText={headingText} 
          socialIcons={constants.socialIcons} 
          subtitle={constants.heroBannerHeading.subtitle}
          linkText={constants.heroBannerHeading.linkText} 
          linkUrl={constants.heroBannerHeading.linkUrl}
          />
    <BestCompanySection />
    <CompetitorSection competitorData={getcompetitorData()} />
    <Outlet />


    </>
  )
}

export default DigitalMarketing
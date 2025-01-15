import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import '../../../Pages/css/web-development.css';
import LetterHeroBanner from '../../LetterHeroBanner/LetterHeroBanner';
import { constants } from '../../../Constant/constants';
import BestCompanySection from '../../BestCompanySection/BestCompanySection';
import CompetitorSection from '../../CompetitorSection/CompetitorSection';
import { 
  webDevelopmentCompetitorData,
  webApplicationCompetitorData,
  wordpressCompetitorData,
  ecommerceCompetitorData,
  uiUxCompetitorData
} from '../../../Constant/config/competitorConfigData';

const MainWebDevelopmentSection = () => {
  const [headingText,setHeadingText] = useState('WEB DEVELOPMENT');
  const {pathname} = useLocation();
  useEffect(() => {
    // Update heading text based on pathname
    if (pathname === '/services/web-development/web-application-development') {
      setHeadingText('WEB APPLICATION DEVELOPMENT');
    } else if (pathname === '/services/web-development/wordpress-development') {
      setHeadingText('WORDPRESS DEVELOPMENT');
    } else if (pathname === '/services/web-development/e-commerce') {
      setHeadingText('E COMMERCE');
    } else if (pathname === '/services/web-development/ui-ux-design') {
      setHeadingText('UIUX DESIGN');
    } else {
      setHeadingText('WEB DEVELOPMENT');
    }
  }, [pathname]);
  const getcompetitorData = () => {
    if(pathname === '/services/web-development/web-application-development'){
      //setHeadingText('WEB APPLICATION DEVELOPMENT');
      return webApplicationCompetitorData;
    } else if(pathname === '/services/web-development/wordpress-development') {
      //setHeadingText('WORDPRESS DEVELOPMENT');
      return wordpressCompetitorData;
    } else if(pathname === '/services/web-development/e-commerce') {
      //setHeadingText('E COMMERCE');
      return ecommerceCompetitorData;
    } else if(pathname === '/services/web-development/ui-ux-design') {
      //setHeadingText('UI AND UX DESIGN');

      return uiUxCompetitorData;
    }
     else {
      return webDevelopmentCompetitorData;
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

export default MainWebDevelopmentSection
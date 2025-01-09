import React from 'react'
import '../../../Pages/css/digital-merketing.css';
import '../../../Pages/css/web-development.css';
import '../../../Pages/css/social-marketing.css';


import WebDevelopmentBanner from '../../../Pages/Services/WebDevelopment/WebDevelopmentBanner'
import BestCompanySection from '../../../Pages/Services/WebDevelopment/BestCompanySection'
import { Outlet } from 'react-router-dom'

const DigitalMarketing = () => {
  return (
    <>
    <WebDevelopmentBanner />
    <BestCompanySection />
    <Outlet />


    </>
  )
}

export default DigitalMarketing
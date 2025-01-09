import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../../Pages/css/web-development.css';
import WebDevelopmentBanner from '../../../Pages/Services/WebDevelopment/WebDevelopmentBanner'
import BestCompanySection from '../../../Pages/Services/WebDevelopment/BestCompanySection'
import WebCompetitorSection from '../../../Pages/Services/WebDevelopment/WebCompetitorSection'

const MainWebDevelopmentSection = () => {
  return (
    <>
    <WebDevelopmentBanner />
    <BestCompanySection />
    <WebCompetitorSection />
    <Outlet />
    </>
  )
}

export default MainWebDevelopmentSection
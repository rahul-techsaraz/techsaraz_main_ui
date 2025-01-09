import React from 'react'
import HeroSection from '../../Pages/LandingPages/HeroSection'
import AboutSection from '../../Pages/LandingPages/AboutSection'
import WorkSection from '../../Pages/LandingPages/WorkSection'
import ServicesSection from '../../Pages/LandingPages/ServicesSection'
import { config } from '../../Constant/config'
import LetterSlider from '../../Pages/LandingPages/LetterSlider'
import Mission from '../../Pages/LandingPages/Mission'
import CounterSection from '../../Pages/LandingPages/CounterSection'
import TestimonialSection from '../../Pages/Services/TestimonialSection'


const LandingContainer = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <ServicesSection services={config.LandingPageServiceCatelogConfig.services} />
            <LetterSlider letters={config.LetterSliderConfig.letters} />
            <Mission />
            <CounterSection counters={config.MissionConfig.missions} />
            <TestimonialSection  />
            
      </>
      
  )
}

export default LandingContainer
import React from 'react';
import HeroSection from '../../Pages/LandingPages/HeroSection';
import AboutSection from '../../Pages/LandingPages/AboutSection';
import WorkSection from '../../Pages/LandingPages/WorkSection';
import { config } from '../../Constant/config';
import LetterSlider from '../../Pages/LandingPages/LetterSlider';
import Mission from '../../Pages/LandingPages/Mission';
import CounterSection from '../../Pages/LandingPages/CounterSection';
import TestimonialSection from '../../Pages/Services/TestimonialSection';
import ServicesOffer from '../../Pages/Services/ServicesOffer';

const LandingContainer = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServicesOffer />
      {/* <LetterSlider letters={config.LetterSliderConfig.letters} /> */}
      <Mission />
      <CounterSection counters={config.MissionConfig.missions} />
      <TestimonialSection />
    </>
  );
};

export default LandingContainer;

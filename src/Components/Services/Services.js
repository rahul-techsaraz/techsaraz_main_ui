import React from 'react';
import ServicesHeroSection from '../../Pages/Services/ServicesHeroSection';
import './service.css'
import ServicesOffer from '../../Pages/Services/ServicesOffer';
import Consultation from '../../Pages/Services/Consultation';
import TestimonialSection from '../../Pages/Services/TestimonialSection';

const Services = () => {
  return (
    <>
    <ServicesHeroSection />
    <ServicesOffer />
    <Consultation />
    <TestimonialSection />
    </>
  )
}

export default Services
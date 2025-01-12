import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const CustomOwlCarousel = ({isloop, margin=10, isnav,children}) => {
  return (
    <OwlCarousel className='owl-carousel owl-theme testimonials-container' loop={isloop} margin={margin} nav={isnav}>
        {children}
        </OwlCarousel>
  )
}

export default CustomOwlCarousel
import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../../Constant/routes'

const AboutHeroSection = () => {


  
  return (
    <div className="services-hero-section">
  
  
      <div className="hro">
        <div className="textBox">
          <h1 className="section-tectbox-h1">About Us</h1>
        </div>
        <div className="about-us-text-p">
          <p className="about-text-p1">
            Welcome to{' '}
            <Link to={Routes.HOME} className="tech-saraz-animation">
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              <span className="tech-saraz-name-animation"></span>
              Tech SaraZ
            </Link>
          </p>
          <p className="about-text-p2">
            Where innovation meets expertise in web development
          </p>
        </div>
      </div>

      <div className='animate-center'>
        <div className='planet-container'>
          <div className='night'></div>
          <div className='day'></div>
          <div className='planet-cloud'></div>
          <div className='inner-shadow'></div>
        </div>
      </div>

    </div>
  )
}

export default AboutHeroSection
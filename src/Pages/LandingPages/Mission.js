import React from 'react'
import { constants } from '../../Constant/constants'
import { Link } from 'react-router-dom'
import Routes from '../../Constant/routes'

const Mission = () => {
  return (
   <section className="our-mission">
    <div className="mission-pulse">
        <img src={constants.images.launchImage.imageURL} alt={constants.images.launchImage.alt} />
    </div>
    <div className="our-mission-in-box">
        <div className="our-mission-wraper">
            <div className="our-mission-text">
        <div className="our-mission-heading"><button className="our-mission-heading-text">OUR MAIN MISSION<span className="our-mission-span-circle"></span></button></div>
        <h1 className="our-mission-h1">Our Mission Is To Look After The Financial Best Interests With Automation</h1>
        <div className="our-mission-btn">
            <Link className="our-mission-btn-btn" to={Routes.CONTACT}>
                CONTACT US
            </Link>
          </div> 
    </div>
    <div className="our-mission-img2">
      <div className="our-mission-1stimg">
        <img src={constants.images.h1HeroRightImage.imageURL} alt={constants.images.h1HeroRightImage.imageURL} />
      </div>
      <div className="our-mission-2ndimg">
        <img src={constants.images.h1HeroTestimonialImage.imageURL} alt={constants.images.h1HeroTestimonialImage.alt} />
      </div>
    </div>
</div>
<div className="conta">
  <div className="scrol">
    <div className="RightToLeft">
      <div className="mission-div">Adaptability</div>
      <div className="mission-div">Creative Innovation</div>
      <div className="mission-div">4000+ partners</div>
      <div className="mission-div">15M Customer Worldwide</div>
      <div className="mission-div">Engagement</div>
      <div className="mission-div">Ethical Practices</div>
      <div className="mission-div">Communication</div>
      <div className="mission-div">Personalization</div>
      <div className="mission-div">Expertise</div>
      <div className="mission-div">Communication</div>
      <div className="mission-div">Personalization</div>
      <div className="mission-div">Adaptability</div>
      <div className="mission-div">Creative Innovation</div>
      <div className="mission-div">4000+ partners</div>
      <div className="mission-div">15M Customer Worldwide</div>
      <div className="mission-div">Engagement</div>
      <div className="mission-div">Ethical Practices</div>
      <div className="mission-div">Communication</div>
      <div className="mission-div">Personalization</div>
      <div className="mission-div">Expertise</div>
      <div className="mission-div">Communication</div>
      <div className="mission-div">Personalization</div>
    </div>
    <div className="LeftToRight">
      <div className="mission-div">Adaptability</div>
      <div className="mission-div">Creative Innovation</div>
      <div className="mission-div">4000+ partners</div>
      <div className="mission-div">15M Customer Worldwide</div>
      <div className="mission-div">Engagement</div>
      <div className="mission-div">Ethical Practices</div>
      <div className="mission-div">Communication</div>
      <div className="mission-div">Personalization</div>
      <div className="mission-div">Expertise</div>
      <div className="mission-div">Communication</div>
      <div className="mission-div">Personalization</div>
      <div className="mission-div">Adaptability</div>
      <div className="mission-div">Creative Innovation</div>
      <div className="mission-div">4000+ partners</div>
      <div className="mission-div">15M Customer Worldwide</div>
      <div className="mission-div">Engagement</div>
      <div className="mission-div">Ethical Practices</div>
      <div className="mission-div">Communication</div>
      <div className="mission-div">Personalization</div>
      <div className="mission-div">Expertise</div>
      <div className="mission-div">Communication</div>
      <div className="mission-div">Personalization</div>
    </div>
    <div className="RightToLeft">
      <div className="mission-div">Adaptability</div>
      <div className="mission-div">Creative Innovation</div>
      <div className="mission-div">4000+ partners</div>
      <div className="mission-div">15M Customer Worldwide</div>
      <div className="mission-div">Engagement</div>
      <div className="mission-div">Ethical Practices</div>
      <div className="mission-div">Communication</div>
      <div className="mission-div">Personalization</div>
      <div className="mission-div">Expertise</div>
      <div className="mission-div">Communication</div>
      <div className="mission-div">Personalization</div>
      <div className="mission-div">Adaptability</div>
      <div className="mission-div">Creative Innovation</div>
      <div className="mission-div">4000+ partners</div>
      <div className="mission-div">15M Customer Worldwide</div>
      <div className="mission-div">Engagement</div>
      <div className="mission-div">Ethical Practices</div>
      <div className="mission-div">Communication</div>
      <div className="mission-div">Personalization</div>
      <div className="mission-div">Expertise</div>
      <div className="mission-div">Communication</div>
      <div className="mission-div">Personalization</div>
    </div>
  </div>
</div>

    </div>
</section>
  )
}

export default Mission
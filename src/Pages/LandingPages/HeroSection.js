import React from 'react'

const HeroSection = () => {
  return (
   <section className="hero-section">
    <div className="hero_section_layer"></div>
    <div className="hero_section_layer"></div>
    <div className="hero_section_layer"></div>
    <div className="hero_section_layer"></div>
    <div className="hero_section_layer"></div>
    <div className="hero_section_layer"></div>
    <div className="hero_section_layer"></div>
    <div className="hero-section-text">
         <h1 className="hero-section-text-main-heading">IT Solutions <span style={{color: "#bbff00;"}}> & Business </span> <br />Services Company</h1>
         <p className="hero-section-text-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor magna aliqua, 
            magna aliqua. ipsum is simply dummy text of the printing.</p>
            <div className="banner-btn">
                <a className="banner-btn-btn" href="contact.html">
                    ENQUIRE NOW
                </a>
              </div>
            <div className="header-icon-group">
                <span className="header-icon-span"><i className="fa-brands fa-facebook-f"></i></span>
                <span className="header-icon-span" ><i className="fa-brands fa-twitter"></i></span>
                <span className="header-icon-span"><i className="fa-brands fa-linkedin-in"></i></span>
                <span className="header-icon-span"><i className="fa-brands fa-x-twitter"></i></span>
                <span className="header-icon-span" ><i className="fa-brands fa-instagram"></i></span>
            </div>
    </div>
    
</section>
  )
}

export default HeroSection
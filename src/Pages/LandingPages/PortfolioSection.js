import React from 'react'
import { constants } from '../../Constant/constants'
import { Link } from 'react-router-dom'
import CustomOwlCarousel from '../../Components/CustomOwlCarousel/CustomOwlCarousel'
import CustomSwiper from '../../Components/CustomSwiper/CustomSwiper'
import { SwiperResponsive } from '../../Components/CustomSwiper/SwiperResponsive'
import { display } from '@splidejs/splide/src/js/utils'

const PortfolioSection = ({portfolios}) => {
  console.log(portfolios)
  return (
    <section className="creative-work portfolio-section-start">
  <div className="creative-work-pulse">
    <img src={constants.images.marketImage.imageURL} alt={constants.images.marketImage.alt} />
</div>
  <div className="creative-work-in-box">
    <div className="creative-work-heading"><button className="creative-work-heading-text">Portfolio<span className="creative-work-span-circle"></span></button></div>
	<div className="creative-work-heading">
		<h1 className="creative-work-h1">Our Latest Work For Our Best Customer</h1>
    </div>
<div className="loc">
  <div id="horizontal">
      <div className="containe">
          {/* <div className="horizontal__content"> */}
            {/* <CustomOwlCarousel>
                              {portfolios.map(portfolio => (
                 <div className="horizontal__item">
              <Link to={portfolio?.link} >
                <div className="horizontal-in-box">
                  <div className="horizontal__num">
                    <img src={portfolio?.image} alt={portfolio?.portfolioImage?.alt} />
                    <div className="horizontal-layer-box">{portfolio?.title}</div>
                      <p className="horizontal-layer-box-p">{portfolio?.description}</p>
                    </div>
                  </div>
              </Link>
              </div>
            ))}
           </CustomOwlCarousel> */}
               <div className="swiper-wrapper position-relative">
                <CustomSwiper navigationNext='.courselist-button-next' navigationPrev='.courselist-button-prev' noOfSlidesPerView={2} isBreakPoint={true} breakPoint={SwiperResponsive()}>
                  {portfolios.map((portfolio)=>(
                    <swiper-slide>
                      <div className="swiper-slide position-relative">
                        <Link to={portfolio.link} >
                          {/* <div className="horizontal-in-box">
                            <div className="horizontal__num" style={{display:'flex', flexDirection:'column'}}>
                              <img src={portfolio.image} alt={portfolio?.alt} />
                              <div className="horizontal-layer-box">{portfolio?.title}</div>
                              <p className="horizontal-layer-box-p">{portfolio?.description}</p>
                            </div>
                          </div> */}
                          <div class="swiper-slide">
                            <div class="swiper-slider-box-in-image">
                              <img src={portfolio?.image} alt={portfolio?.alt}/>
                            </div>
                            <h2 class="swiper-slider-h2-heading">{portfolio.title}</h2>
                            <span class="swiper-slider-span">{portfolio.description}</span>
                          </div>
                        </Link>
                      </div>
                    </swiper-slide>
                  ))}
                </CustomSwiper>
                <div class="swiper-button-prev courselist-button-prev">
                  {/* <img src={leftArrow} alt="" /> */}
                </div>
                <div class="swiper-button-next courselist-button-next">
                  {/* <img src={rightArrow} alt="" /> */}
                </div>
              </div> 

          {/* </div> */}
      </div>
  </div>
</div>
  </div>
 </section>
  )
}

export default PortfolioSection
import React, { useEffect, useState } from 'react';
import { images } from '../../Constant/images';
import CustomOwlCarousel from '../../Components/CustomOwlCarousel/CustomOwlCarousel';
import CustomSwiper from '../../Components/CustomSwiper/CustomSwiper';
import { SwiperResponsive } from '../../Components/CustomSwiper/SwiperResponsive';
import { constants } from '../../Constant/constants';
import { customerRivew } from '../../Constant/config';
import { reviewExpander } from '../../Utils/reviewExpander';


const TestimonialSection = () => {
    const {quotesImage,
        pexelsnkhajotia1516680Image} = images;
	const [expandedReviews, setExpandedReviews] = useState({});

	const toggleReview = (index) => {
		setExpandedReviews((prevState) => ({
		  ...prevState,
		  [index]: !prevState[index],
		}));
	  };

        
  return (
    <div className="testimonials-section">
    <div className="testimonial-pulse">
        <img src={quotesImage} alt="" />
    </div>
    <div className="tesimonial-in-box">
        <div className="testimonial-heading"><button className="testimonial-heading-text">TESTIMONIAL<span className="testimonial-span-circle"></span></button></div>
	<div className="testmonial-heading">
		<h1 className="testmonial-h1">What Clients Say</h1>
    </div>
	{/* <div className="owl-carousel owl-theme testimonials-container"> */} 
        {/* <CustomOwlCarousel isloop={true} margin={10} isnav={true}>
    	<div className="item testimonial-card">
    		<main className="test-card-body">
    			<div className="quote">
    				<i className="fa fa-quote-left"></i>
    				<h2>Awesome Coding</h2>
    			</div>
    			<p className="testimonial-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    			<div className="ratings">
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    			</div>
    		</main>
    		<div className="profile">
    			<div className="profile-image">
    				<img src={pexelsnkhajotia1516680Image} alt='' />
    			</div>
    			<div className="profile-desc">
    				<span>Person Name</span>
    				<span>Description</span>
    			</div>
    		</div>
    	</div>

    	<div className="item testimonial-card">
    		<main className="test-card-body">
    			<div className="quote">
    				<i className="fa fa-quote-left"></i>
    				<h2>Awesome Coding</h2>
    			</div>
    			<p className="testimonial-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    			<div className="ratings">
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    			</div>
    		</main>
    		<div className="profile">
    			<div className="profile-image">
    				<img src={pexelsnkhajotia1516680Image} alt='' />
    			</div>
    			<div className="profile-desc">
    				<span>Person Name</span>
    				<span>Description</span>
    			</div>
    		</div>
    	</div>

    	<div className="item testimonial-card">
    		<main className="test-card-body">
    			<div className="quote">
    				<i className="fa fa-quote-left"></i>
    				<h2>Awesome Coding</h2>
    			</div>
    			<p className="testimonial-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    			<div className="ratings">
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    			</div>
    		</main>
    		<div className="profile">
    			<div className="profile-image">
    				<img src={pexelsnkhajotia1516680Image} alt='' />
    			</div>
    			<div className="profile-desc">
    				<span>Person Name</span>
    				<span>Description</span>
    			</div>
    		</div>
    	</div>

    	<div className="item testimonial-card">
    		<main className="test-card-body">
    			<div className="quote">
    				<i className="fa fa-quote-left"></i>
    				<h2>Awesome Coding</h2>
    			</div>
    			<p className="testimonial-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    			<div className="ratings">
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    			</div>
    		</main>
    		<div className="profile">
    			<div className="profile-image">
    				<img src={pexelsnkhajotia1516680Image} alt='' />
    			</div>
    			<div className="profile-desc">
    				<span>Person Name</span>
    				<span>Description</span>
    			</div>
    		</div>
    	</div>

    	<div className="item testimonial-card">
    		<main className="test-card-body">
    			<div className="quote">
    				<i className="fa fa-quote-left"></i>
    				<h2>Awesome Coding</h2>
    			</div>
    			<p className="testimonial-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    			<div className="ratings">
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    			</div>
    		</main>
    		<div className="profile">
    			<div className="profile-image">
    				<img src={pexelsnkhajotia1516680Image} alt='' />
    			</div>
    			<div className="profile-desc">
    				<span>Person Name</span>
    				<span>Description</span>
    			</div>
    		</div>
    	</div>

    	<div className="item testimonial-card">
    		<main className="test-card-body">
    			<div className="quote">
    				<i className="fa fa-quote-left"></i>
    				<h2>Awesome Coding</h2>
    			</div>
    			<p className="testimonial-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    			<div className="ratings">
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    				<i className="fa-solid fa-star"></i>
    			</div>
    		</main>
    		<div className="profile">
    			<div className="profile-image">
    				<img src={pexelsnkhajotia1516680Image} alt={'profile_image'} />
    			</div>
    			<div className="profile-desc">
    				<span>Person Name</span>
    				<span>Description</span>
    			</div>
    		</div>
    	</div>
        </CustomOwlCarousel> */}
		 <div className="swiper-wrapper position-relative">
			<CustomSwiper navigationNext='.courselist-button-next' navigationPrev='.courselist-button-prev' noOfSlidesPerView={2} isBreakPoint={true} breakPoint={SwiperResponsive()}>
				{customerRivew.map((review, index)=>(
					<swiper-slide>
					<div className="swiper-slide position-relative">
						<div className="item testimonial-card">
							<main className="test-card-body">
								{/* <div className="quote">
									<i className="fa fa-quote-left"></i>
									<h2>{review.quote}</h2>
								</div> */}
								<p className="testimonial-p">{expandedReviews[index]
              ? review?.review
              : `${review?.review.slice(0, 100)}...`}</p>
								<button onClick={()=>toggleReview(index)}>{expandedReviews[index] ? 'Read Less' : 'Read More'}</button>
								<div className="ratings">
									{Array.from({ length: 5 }, (_, index) => (
										<i	key={index}	className={`fa-solid fa-star ${index < review?.stars ? 'filled' : ''}`}
										></i>
									))}
								</div>
							</main>
							<div className="profile">
								<div className="profile-image">
									<img src={review.profileImage} alt='' />
								</div>
								<div className="profile-desc">
									<span>{review.name}</span>
									<span>{review.date}</span>
								</div>
							</div>
						</div>
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
  )
}

export default TestimonialSection
import React, { useEffect } from 'react';
import { images } from '../../Constant/images';
import CustomOwlCarousel from '../../Components/CustomOwlCarousel/CustomOwlCarousel';


const TestimonialSection = () => {
    const {quotesImage,
        pexelsnkhajotia1516680Image} = images;

        
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
        <CustomOwlCarousel isloop={true} margin={10} isnav={true}>
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
        </CustomOwlCarousel>
    {/* </div> */}
</div>

</div>
  )
}

export default TestimonialSection
import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../../Constant/images'

const BestCompanySection = () => {
    const {webDevelopmentMain768x587Image,
        smile1Image} = images;
  return (
    <section className="best-company">
    <div className="best-company-pulse">
        <img src={smile1Image} alt="" />
    </div>
    <div className="best-company-in-box">
        <div className="best-company-in-box-wraper">
            <div className="best-company-in-box-wraper-textbox">
                <p className="best-company-p">Welcome to Tech Saraz, your go-to web design company in Bangalore. 
                    We are committed to creating your unique online presence. Whether you need a static website, 
                    a web application, or something in between, our team of the best web designers can handle it. </p>
                    <p className="best-company-p">As the best web design company in Bangalore, we understand the client’s requirements 
                        and the importance of scalability. Hence, 
                        we focus on using the latest technologies with clean codes for better user experience 
                        and website Security.</p>
                        <p className="best-company-p">Our team of web developers in Bangalore is enthusiastic about their craft. 
                            We design and build user-centric, responsive, secure, and SEO-optimized websites. At Tech Saraz, 
                            we’re not just another web development agency in Bangalore. But we are your partners in the journey to success. 
                            We listen, understand your goals, and collaborate to create a website that embodies your brand and vision. 
                            Our commitment continues after website delivery;
                             we provide support and maintenance to ensure your website remains current and functions seamlessly.</p>

            </div>
            <div className="best-company-in-box-wraper-imgbox">
                <img src={webDevelopmentMain768x587Image} alt="best-company-image" />
            </div>
        </div>
      
        <div className="best-company-btn">
            <Link className="best-company-btn-btn" to="/aboutus">
                CONTACT US
            </Link>
          </div>

    </div>
</section>
  )
}

export default BestCompanySection
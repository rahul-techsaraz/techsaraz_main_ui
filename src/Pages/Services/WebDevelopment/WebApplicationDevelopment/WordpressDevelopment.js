import React from 'react'
import '../../../css/wordpress-development.css'
import { images } from '../../../../Constant/images'


const WordpressDevelopment = () => {
    const {
        timeImage,
        webImage,
        socialImage,
        migrationImage,
        maintenanceImage,
        serverImage,
        ecommerceImage,
        transactionalDataImage,
        user1Image
    } = images;
  return (
    <section className="benefits">
    <div className="benefits-pulse">
        <img src={timeImage} alt="" />
    </div>
    <div className="benefits-in-box">
        <h1 className="benefits-h1">Our WordPress website development services in Bangalore</h1>
        <p className="benefits-p">Tech Saraz distinguishes itself through exceptional services and approach. 
            Here are several unique 
            factors that make us stand out from other companies in Bangalore:</p>
        <div className="benefits-in-box-wraper">
           <div className="benefits-box">
              <div className="benefits-box-img">
                <img src={socialImage} alt="" />
              </div>
              <h1 className="benefits-box-h1">
                WordPress Installation & Configuration </h1>
              <p className="benefits-box-p"> Launch your digital journey with Tech Saraz. Our team of seasoned professionals helps you with seamless WordPress installation and configuration, ensuring the settings are optimized for your specific needs. No need to worry about the technical details; we handle it all, giving you a robust and reliable foundation for your website.</p>
        </div>
           
        <div className="benefits-box">
            <div className="benefits-box-img">
              <img src={webImage} alt="" />
            </div>
            <h1 className="benefits-box-h1">
              WordPress Website Development</h1>
            <p className="benefits-box-p">Let your website reflect your vision. At Tech Saraz, we leverage the power of WordPress to create customized websites that resonate with your brand ethos. Our development focuses on creating a dynamic, user-friendly, and aesthetically appealing website that is a robust platform for your digital presence.</p>
      </div>
      <div className="benefits-box">
        <div className="benefits-box-img">
          <img src={migrationImage} alt="" />
        </div>
        <h1 className="benefits-box-h1">
          WordPress Migration</h1>
        <p className="benefits-box-p">Moving your website can seem daunting, but not with Tech Saraz. As the leading WordPress web development company in Bangalore, we ensure a smooth, secure WordPress migration. Our team carefully transfers all your data, ensuring no loss of information and minimum downtime. With us, your transition will be as seamless as possible.</p>
  </div>
  <div className="benefits-box">
    <div className="benefits-box-img">
      <img src={maintenanceImage} alt="" />
    </div>
    <h1 className="benefits-box-h1">
      WordPress Maintenance</h1>
    <p className="benefits-box-p">Tech Saraz believes in building long-term partnerships. Our commitment to you extends beyond website development; we offer comprehensive WordPress maintenance and support services. From regular updates and bug fixes to troubleshooting, we keep your website running smoothly, ensuring you stay ahead in the digital game.</p>
  </div>
  <div className="benefits-box">
    <div className="benefits-box-img">
      <img src={serverImage} alt="" />
    </div>
    <h1 className="benefits-box-h1">
      WordPress SEO</h1>
    <p className="benefits-box-p">Visibility matters in the digital world. Tech Saraz helps enhance your digital presence with our specialized WordPress SEO services. We optimize your website for search engines, improve rankings, and drive organic traffic. Let's make your brand easily discoverable for your audience.</p>
  </div>
  <div className="benefits-box">
    <div className="benefits-box-img">
      <img src={ecommerceImage} alt="" />
    </div>
    <h1 className="benefits-box-h1">
      WordPress Ecommerce Solutions</h1>
    <p className="benefits-box-p">Bring your store online with Tech Saraz's WordPress Ecommerce solutions. We design user-friendly, secure, and efficient e-commerce platforms that offer a seamless shopping experience to your customers. With easy navigation, quick checkouts, and secure payment options, we make online shopping a breeze for your customers.</p>
  </div>
  <div className="benefits-box">
      <div className="benefits-box-img">
        <img src={transactionalDataImage} alt="" />
      </div>
      <h1 className="benefits-box-h1">
        Payment Gateway Integration</h1>
    <p className="benefits-box-p">Ensure secure and smooth transactions on your website with Tech Saraz's payment gateway integration services. We integrate reliable and secure payment gateways into your WordPress website, providing various payment options for your customers. With our service, you can assure your customers of specific transactions, enhancing their trust in your brand.</p>
  </div>
  <div className="benefits-box">
    <div className="benefits-box-img">
      <img src={user1Image} alt="" />
    </div>
    <h1 className="benefits-box-h1">
      CDN Integration</h1>
    <p className="benefits-box-p">Boost your website's performance with CDN Integration by Tech Saraz. CDN, or Content Delivery Network, significantly improves your website's loading speed, enhancing the user experience. Our team ensures a seamless integration process, making your website faster and more efficient for users around the globe.</p>
  </div>
        </div>
    </div>
  </section>
  )
}

export default WordpressDevelopment
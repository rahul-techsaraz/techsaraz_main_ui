import React from "react";
import '../../../css/social-marketing.css';
import '../../../css/e-commerce.css'
import '../../../css/web-development.css'
import { images } from "../../../../Constant/images";
import { Link } from "react-router-dom";


const BestCompany = () => {
  const {smile1Image,eCommercemage} = images
  return (
    <section className="best-company">
      <div className="best-company-pulse">
        <img src={smile1Image} alt="" />
      </div>
      <div className="best-company-in-box">
        <div className="best-company-in-box-wraper">
          <div className="best-company-in-box-wraper-textbox">
            <p className="best-company-p">
              Tech Saraz is a leading e-commerce website development company in Bangalore; we are committed to delivering intelligent, efficient e-commerce solutions to our clients worldwide. We specialize in designing mobile-responsive e-commerce stores using multiple and the latest technologies. Our highly skilled and experienced e-commerce developers work closely with clients to understand their requirements and deliver scalable, robust online stores for both web and mobile.
            </p>
            <p className="best-company-p">
              We provide comprehensive custom e-commerce services to a range of businesses, from SMEs to large-scale enterprises across the globe. Our services empower businesses to showcase their products and services vividly on the internet, helping them stand out in the digital marketplace. With substantial experience in e-commerce development, Tech Saraz become a premier e-commerce website development company in Bangalore, offering a powerful off-the-shelf solution to your e-commerce needs.
            </p>
          </div>
          <div className="best-company-in-box-wraper-imgbox">
            <img src={eCommercemage} alt="best-company-image" />
          </div>
        </div>

        <div className="best-company-btn">
          <Link className="best-company-btn-btn" to="/aboutus">
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
};

const InBangalore = () => {
  const {shopify1Image,shopify768x587Image,checkedImage} = images;
  return (
    <section className="in-bangalore">
      <div className="in-bangalore-pulse">
        <img src={shopify1Image} alt="" />
      </div>
      <div className="in-bangalore-box">
        <div className="in-bangalore-wraper">
          <div className="in-bangalore-imgbox">
            <img src={shopify768x587Image} alt="best-company-image" />
          </div>
          <div className="in-bangalore-textbox">
            <h1 className="in-bangalore-h1">Shopify e-commerce development in Bangalore</h1>
            <p className="in-bangalore-p">
              With a global user base of over 1.7 million merchants, Shopify has earned its place as a reliable e-commerce platform. As a leading player in WooCommerce development in Bangalore, Tech Saraz leverages Shopify’s robust capabilities to deliver secure, dependable, and visually stimulating e-commerce solutions.
            </p>
            <p className="in-bangalore-p">
              Shopify’s robust support infrastructure and frequent security updates guarantee an uninterrupted shopping experience for your customers.
            </p>
          </div>
        </div>

        <div className="in-bangalore-down-box-parent">
          <div className="in-bangalore-down-box">
            {['Fast setup', 'User-friendly', 'Best For online store', 'Seamless integration', 'Optimize your business'].map((text, index) => (
              <div className="in-bangalore-down-box-i-text" key={index}>
                <div className="in-bangalore-down-box-i">
                  <img src={checkedImage} alt="" />
                </div>
                <div className="in-bangalore-down-box-text">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const InBangalore2 = () => {
  const { woocommerce1Image,checkedImage,woocommerce768x587Image } = images;
  return (
    <section className="in-bangalore2">
      <div className="in-bangalore2-pulse">
        <img src={woocommerce1Image} alt="" />
      </div>
      <div className="in-bangalore2-box">
        <div className="in-bangalore2-wraper">
          <div className="in-bangalore2-textbox">
            <h1 className="in-bangalore2-h1">Woocommerce development in Bangalore</h1>
            <p className="in-bangalore2-p">
              WooCommerce provides a versatile e-commerce platform for businesses to showcase their various products with the power of WordPress Plugins and Themes. As an esteemed WooCommerce development company in Bangalore, Tech Saraz harnesses this flexibility to craft customized E-commerce platforms.
            </p>
            <p className="in-bangalore2-p">
              Integrated with WordPress, WooCommerce streamlines operations and optimizes SEO, promising quicker loading times and enhanced conversion rates.
            </p>
          </div>

          <div className="in-bangalore2-imgbox">
            <img src={woocommerce768x587Image} alt="best-company-image" />
          </div>
        </div>

        <div className="in-bangalore2-down-box-parent">
          <div className="in-bangalore2-down-box">
            {['Easy to use', 'Optimize For wordpress', 'Multi payment options', 'Tax calculations'].map((text, index) => (
              <div className="in-bangalore2-down-box-i-text" key={index}>
                <div className="in-bangalore2-down-box-i">
                  <img src={checkedImage} alt="" />
                </div>
                <div className="in-bangalore2-down-box-text">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const InBangalore3 = () => {
  const {magentoImage,magneto1Image,checkedImage} = images;
  return (
    <section className="in-bangalore3">
      <div className="in-bangalore3-pulse">
        <img src={magentoImage} alt="" />
      </div>
      <div className="in-bangalore3-box">
        <div className="in-bangalore3-wraper">
          <div className="in-bangalore3-imgbox">
            <img src={magneto1Image} alt="best-company-image" />
          </div>
          <div className="in-bangalore3-textbox">
            <h1 className="in-bangalore3-h1">Magento development in Bangalore</h1>
            <p className="in-bangalore3-p">
              Magento is celebrated for its scalability and compatibility with third-party integrations. Tech Saraz capitalizes on Magento’s fast loading times and integration features to architect robust E-commerce platforms.
            </p>
            <p className="in-bangalore3-p">
              By incorporating applications like Google Analytics, we provide invaluable insights into customer behavior, finetuning your E-commerce strategy for success.
            </p>
          </div>
        </div>

        <div className="down-box-parent">
          <div className="down-box">
            {['Magento 2 migration services', 'Features rich', 'Multiple languages support', 'Ecommerce development'].map((text, index) => (
              <div className="down-box-i-text" key={index}>
                <div className="down-box-i">
                  <img src={checkedImage} alt="" />
                </div>
                <div className="down-box-text">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const {timeImage} = images;
  return (
    <section className="benefits">
      <div className="benefits-pulse">
        <img src={timeImage} alt="" />
      </div>
      <div className="benefits-in-box">
        <h1 className="benefits-h1">Why choose Tech SaraZ as an E-commerce development company in Bangalore ?</h1>
        <p className="benefits-p">
          Choosing an E-commerce development company can make or break your online business in a highly competitive digital marketplace. Tech Saraz, a leading E-commerce development company in Bangalore, combines technical know-how, inventive thinking, and business insights. Here’s why we should be your first choice:
        </p>
        <div className="benefits-in-box-wraper">
          {[
            {
              icon: "fa-magnifying-glass-dollar",
              title: "Budget-Friendly E-commerce Development",
              description: "At Tech Saraz, we believe in delivering superior quality without straining your budget. Our cost-effective e-commerce solutions strike a perfect balance between cost and quality, assuring you of an excellent return on your investment."
            },
            {
              icon: "fa-laptop-code",
              title: "Innovative E-commerce Developers",
              description: "Our team of innovative developers infuses a fresh perspective into e-commerce development. We create unique, engaging, user-friendly e-commerce platforms that offer aesthetic appeal and a seamless shopping experience."
            },
            {
              icon: "fa-chart-line",
              title: "Profit-driven Approach",
              description: "Our e-commerce solutions are built with a singular objective - to boost your profitability. We incorporate features and strategies that drive traffic, enhance conversions, and improve your bottom line."
            },
            {
              icon: "fa-truck",
              title: "Timely Delivery",
              description: "We understand the critical role of time in business; our team is committed to delivering your e-commerce platform within the stipulated timeline, enabling your business to get up and running swiftly."
            },
            {
              icon: "fa-people-group",
              title: "Choose Your Team",
              description: "Tech Saraz empowers you with the liberty to choose your team. Our flexible team Models allow you to select developers that align best with your project needs and working style."
            },
            {
              icon: "fa-credit-card",
              title: "Flexible Payment Options",
              description: "Our flexible payment options are designed to cater to your financial preferences. Whether a one-time payment or an installment plan, we've got you covered."
            },
            {
              icon: "fa-user-group",
              title: "SEO-Friendly Platforms",
              description: "Our e-commerce platforms are designed with a strong SEO focus, ensuring your website ranks high in search engine results and draws more organic traffic."
            },
            {
              icon: "fa-headset",
              title: "Support and Maintenance",
              description: "Our commitment to clients extends beyond delivery. We offer ongoing support and maintenance services to keep your e-commerce platform updated and performing at its best."
            },
            {
              icon: "fa-scissors",
              title: "Cutting-edge Technologies",
              description: "We stay ahead of the curve by keeping pace with the latest technologies in e-commerce development. This equips us to deliver innovative solutions that give you a competitive edge."
            }
          ].map((benefit, index) => (
            <div className="benefits-box" key={index}>
              <div className="benefits-box-i">
                <i className={`fa-solid ${benefit.icon}`} />
              </div>
              <h1 className="benefits-box-h1">{benefit.title}</h1>
              <p className="benefits-box-p">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const OurEcommerce = () => {
  return (
    <section className="our-ecommerce">
      <div className="our-ecommerce-in-box">
        <h1 className="our-ecommerce-in-box-h1">Our Ecommerce Development Services in Bangalore</h1>
        <p className="our-ecommerce-in-box-p">
          At Tech Saraz, we comprehend the dynamics of the digital marketplace. As a leading E-commerce development company in Bangalore, we offer comprehensive E-commerce solutions tailored to your unique business needs. Our adept developers excel at creating platforms that deliver an unparalleled shopping experience, catalyzing growth and success for your enterprise.
        </p>
        <div className="our-ecommerce-in-box-wraper">
          {[
            "Brand Positioning", 
            "Brand Positioning", 
            "Brand Positioning", 
            "Brand Positioning"
          ].map((title, index) => (
            <div className="our-ecommerce-in-box-wraper-in-box" key={index}>
              <h3 className="our-ecommerce-in-box-wraper-in-box-h1">{title}</h3>
              <p className="our-ecommerce-in-box-wraper-in-box-p">
                Social media platforms are not just about posting content; they're about showcasing your brand in the best light. By using the unique creative opportunities each platform offers, you can position your brand effectively and attractively.
              </p>
              <div className="overlay"></div>
              <div className="overlay2"></div>
              <div className="overlay3"></div>
              <div className="overlay4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EcommerceDevelopment = () => (
  <div>
    <BestCompany />
    <InBangalore />
    <InBangalore2 />
    <InBangalore3 />
    <Benefits />
    <OurEcommerce />
  </div>
);

export default EcommerceDevelopment;

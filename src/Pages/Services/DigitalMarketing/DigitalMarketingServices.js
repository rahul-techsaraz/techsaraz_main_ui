import React from 'react';
import { images } from '../../../Constant/images';

const DigitalMarketingServices = () => {
  const {
    seoImage,
    seoImage2,
    checkedImage,
    socialMediaImage,
    digitalMarketing1Image,
  } = images;
  return (
    <>
      <section className="in-bangalore">
        <div className="in-bangalore-pulse">
          <img src={seoImage} alt="" />
        </div>
        <div className="in-bangalore-box">
          <div className="in-bangalore-wraper">
            <div className="in-bangalore-imgbox">
              <img src={seoImage2} alt="best-company-image" />
            </div>
            <div className="in-bangalore-textbox">
              <h1 className="in-bangalore-h1">SEO Services in Bangalore</h1>
              <p className="in-bangalore-p">
                Search Engine Optimization is an ever-changing landscape, and
                staying at the forefront requires a deep understanding of the
                latest trends and techniques.
              </p>
              <p className="in-bangalore-p">
                At Tech Saraz, we specialize in strategic keyword research,
                on-page and off-page optimization, and technical SEO. This
                multi-pronged approach helps enhance your online presence and
                promotes sustainable growth.
              </p>
            </div>
          </div>

          <div className="in-bangalore-down-box-parent">
            <div className="in-bangalore-down-box">
              {[
                'Fast setup',
                'User-friendly',
                'Best For online store',
                'Seamless integration',
                'Optimize your business',
              ].map((text, index) => (
                <div className="in-bangalore-down-box-i-text" key={index}>
                  <div className="in-bangalore-down-box-i">
                    <img src={checkedImage} alt="" />
                  </div>
                  <div className="in-bangalore-down-box-text">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="in-bangalore2">
        <div className="in-bangalore2-pulse">
          <img src={digitalMarketing1Image} alt="" />
        </div>
        <div className="in-bangalore2-box">
          <div className="in-bangalore2-wraper">
            <div className="in-bangalore2-textbox">
              <h1 className="in-bangalore2-h1">
                Social Media Marketing Services in Bangalore
              </h1>
              <p className="in-bangalore2-p">
                Our meticulous UX research shows our commitment to excellence.
                We focus on understanding user behaviors, preferences, and
                expectations.
              </p>
              <p className="in-bangalore2-p">
                This comprehensive approach informs our design process, enabling
                us to create solutions that genuinely resonate with your target
                audience, further solidifying our reputation for delivering
                top-notch Bangalore UX services.
              </p>
            </div>
            <div className="in-bangalore2-imgbox">
              <img src={socialMediaImage} alt="best-company-image" />
            </div>
          </div>

          <div className="in-bangalore2-down-box-parent">
            <div className="in-bangalore2-down-box">
              {[
                'Easy to use',
                'Optimize For WordPress',
                'Multi payment options',
                'Tax calculations',
              ].map((text, index) => (
                <div className="in-bangalore2-down-box-i-text" key={index}>
                  <div className="in-bangalore2-down-box-i">
                    <img src={checkedImage} alt="" />
                  </div>
                  <div className="in-bangalore2-down-box-text">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingServices;

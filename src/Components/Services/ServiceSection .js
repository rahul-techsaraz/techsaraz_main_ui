import React from 'react';
import { images } from '../../Constant/images';

const ServiceSection = ({
  title,
  description,
  imageSrc,
  altText,
  points,
  imageSide = 'left', // can be 'left' or 'right'
  pulseImageSrc,
  pulseAltText,
}) => {
  const { checkedImage } = images;
  return (
    <>
      {imageSide === 'left' && (
        <section className="in-bangalore">
          <div className="in-bangalore-pulse">
            <img src={pulseImageSrc} alt={pulseAltText} />
          </div>
          <div className="in-bangalore-box">
            <div className="in-bangalore-wraper">
              <div className="in-bangalore-imgbox">
                <img src={imageSrc} alt={altText} />
              </div>
              <div className="in-bangalore-textbox">
                <h1 className="in-bangalore-h1">{title}</h1>
                <p className="in-bangalore-p">{description}</p>
                {/* <p className="in-bangalore-p">
            At Tech Saraz, we specialize in strategic keyword research, on-page and off-page optimization, and technical SEO. This multi-pronged approach helps enhance your online presence and promotes sustainable growth.
          </p> */}
              </div>
            </div>

            <div className="in-bangalore-down-box-parent">
              <div className="in-bangalore-down-box">
                {points.map((text, index) => (
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
      )}
      {imageSide !== 'left' && (
        <section className="in-bangalore2">
          <div className="in-bangalore2-pulse">
            <img src={pulseImageSrc} alt="" />
          </div>
          <div className="in-bangalore2-box">
            <div className="in-bangalore2-wraper">
              <div className="in-bangalore2-textbox">
                <h1 className="in-bangalore2-h1">{title}</h1>
                <p className="in-bangalore2-p">{description}</p>
                {/* <p className="in-bangalore2-p">
                This comprehensive approach informs our design process, enabling us to create solutions that genuinely resonate with your target audience, further solidifying our reputation for delivering top-notch Bangalore UX services.
              </p> */}
              </div>
              <div className="in-bangalore2-imgbox">
                <img src={imageSrc} alt="best-company-image" />
              </div>
            </div>

            <div className="in-bangalore2-down-box-parent">
              <div className="in-bangalore2-down-box">
                {points.map((text, index) => (
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
      )}
    </>
  );
};

export default ServiceSection;

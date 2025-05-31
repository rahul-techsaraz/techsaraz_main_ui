import React from 'react';
import { constants } from '../../Constant/constants';

const WorkSection = () => {
  const { images } = constants;
  return (
    <section className="work">
      <div className="work-in-box">
        <div className="top-heading text-center">
              <button className="top-heading-text text-stroke-color2 justify-center">
                <img
              src={images.headingIconImage.imageURL}
              alt={images.headingIconImage.imageURL}
            />
                WORK PROCESS
                <span className="top-section-span-round"></span>
              </button>
        </div>
        <h1 className="full-heading-text-color-change-span text-center">Follow <span className='heading-text-color-change-span'>3 Easy</span> Work Steps</h1>
        <div className="work-in-box-wraper">
          <div className="work-box-down-box">
            <div className="work-box-up-box">
              <div className="work-box-up-box-i">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h1 className="work-box-h1">Project Processing</h1>
              <p className="work-box-up-box-p">
                Tech SaraZ delivers efficient project processing through
                strategic planning, expert execution, and cutting-edge
                technology. We work closely with clients to ensure tailored
                solutions that meet objectives and exceed expectations, ensuring
                project success.
              </p>
            </div>
          </div>

          <div className="work-box-down-box">
            <div className="work-box-up-box">
              <div className="work-box-up-box-i">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <h1 className="work-box-h1">High Quality Products</h1>
              <p className="work-box-up-box-p">
                Tech SaraZ offers high-quality products built with precision and
                innovation. We prioritize durability, performance, and customer
                satisfaction, delivering reliable solutions that meet industry
                standards and exceed client expectations for long-term success.
              </p>
            </div>
          </div>

          <div className="work-box-down-box-parent">
            <div className="work-box-down-box">
              <div className="work-box-up-box">
                <div className="work-box-up-box-i">
                  <i className="fa-solid fa-fill-drip"></i>
                </div>
                <h1 className="work-box-h1">Quality Finished</h1>
                <p className="work-box-up-box-p">
                  Tech SaraZ ensures quality finished products through
                  meticulous attention to detail, superior craftsmanship, and
                  rigorous testing. Our commitment to excellence guarantees
                  reliable, high-performance solutions that meet the highest
                  standards of quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

import React from 'react';
import { constants } from '../../Constant/constants';
import { Link } from 'react-router-dom';
import CustomOwlCarousel from '../../Components/CustomOwlCarousel/CustomOwlCarousel';

const PortfolioSection = ({ portfolios }) => {
  return (
    <section className="creative-work portfolio-section-start">
      <div className="creative-work-pulse">
        <img
          src={constants.images.marketImage.imageURL}
          alt={constants.images.marketImage.alt}
        />
      </div>
      <div className="creative-work-in-box">
        <div className="creative-work-heading">
          <button className="creative-work-heading-text">
            Portfolio<span className="creative-work-span-circle"></span>
          </button>
        </div>
        <div className="creative-work-heading">
          <h1 className="creative-work-h1">
            Our Latest Work For Our Best Customer
          </h1>
        </div>
        <div className="loc">
          <div id="horizontal">
            <div className="containe">
              <div className="horizontal__content">
                <CustomOwlCarousel isloop={true} margin={10} isnav={true}>
                  {portfolios.map((portfolio) => (
                    <div className="horizontal__item">
                      <Link to={portfolio.portfolioLink}>
                        <div className="horizontal-in-box">
                          <div className="horizontal__num">
                            <img
                              src={portfolio.portfolioImage.imageUrl}
                              alt={portfolio.portfolioImage.alt}
                            />
                            <div className="horizontal-layer-box">
                              {portfolio.companyName}
                            </div>
                            <p className="horizontal-layer-box-p">
                              {portfolio.serviceCategory}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </CustomOwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

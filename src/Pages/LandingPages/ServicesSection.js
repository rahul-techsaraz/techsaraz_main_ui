import React from 'react';
import { constants } from '../../Constant/constants';
import { Link } from 'react-router-dom';
import Routes from '../../Constant/routes';

const ServicesSection = ({ services }) => {
  const { images } = constants;
  return (
    <section className="services">
      <div className="services-pulse">
        <img
          src={images.repairToolImage.imageURL}
          alt={images.repairToolImage.alt}
        />
      </div>
      <div className="services-in-box">
        <div className="services-heading">
          <button className="services-heading-text">
            OUR SERVICES
            <span className="services-span-circle"></span>
          </button>
        </div>
        <h1 className="services-h1">Services We Provide</h1>
        <nav className="services-nav">
          <ul>
            {services.map((service) => (
              <li key={service.serviceName}>
                <Link to={service.viewMoreLink}>
                  <div className="link">
                    <div className="link-span">
                      <div className="service-flexbox">
                        <div className="service-img">
                          <img
                            src={service.serviceImage.imageUrl}
                            alt={service.serviceImage.alt}
                          />
                        </div>
                        <div className="service-div">
                          <h1 className="service-text">
                            {service.serviceName}
                          </h1>
                        </div>
                        <div className="service-peragraph">
                          <p className="service-p">
                            {' '}
                            {service.serviceDescription}
                          </p>
                        </div>
                        <div className="service-icon">
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                      </div>
                    </div>
                    <img
                      src={service.serviceIcon.imageUrl}
                      alt={service.serviceIcon.alt}
                      height="25"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="services-btn">
          <Link className="services-btn-btn" to={Routes.SERVICES}>
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

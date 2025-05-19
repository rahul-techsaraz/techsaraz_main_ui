import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
// import { images } from '../../Constant/images';

const ClientSection = ({ clients }) => {
  return (
    <section className="our-client">
      {/* <div className="our-client-pulse">
        <img src={images.customerCare} alt="Customer Care Image" />
      </div> */}
      <div className="our-client-in-box">

        
        <div className="our-client-heading">
          <button className="our-client-heading-text">
            Clients<span className="our-client-span-circle"></span>
          </button>
        </div>


        <div className="our-client-heading">
          <h1 className="our-client-h1">Our Clients</h1>
        </div>
        <div className="wrapper">
          {clients.map((client, index) => (
            <div className={`itemLeft item${index + 1}`} key={index}>
              <div className={`item${index + 1}-img`}>
                <img
                  className="item1-img-img"
                  src={client.imageUrl}
                  alt={client.alt}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="wrapper">
          {clients.map((client, index) => (
            <div className={`itemRight item${index + 1}`} key={index}>
              <div className={`item${index + 1}-img`}>
                <img
                  className="item1-img-img"
                  src={client.imageUrl}
                  alt={client.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Prop validation for ClientSection
ClientSection.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired, // URL of the client's image
      alt: PropTypes.string.isRequired, // Alt text for the image
    }),
  ).isRequired, // Ensures clients is an array of client objects
};

export default ClientSection;

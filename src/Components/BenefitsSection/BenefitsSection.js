import React from 'react';
import PropTypes from 'prop-types';
import { images } from '../../Constant/images';

const BenefitBox = React.memo(({ imageSrc, title, description }) => (
  <article className="benefits-box" id="benefits-seo-heigh">
    <div className="benefits-box-i">
      <img src={imageSrc} alt={`${title}`} />
    </div>
    <h1 className="benefits-box-h1">{title}</h1>
    <p className="benefits-box-p">{description}</p>
  </article>
));

const BenefitsSection = ({ benefitsData, title, description }) => {
  const { timeImage } = images;

  return (
    <section className="benefits">
      <div className="benefits-pulse">
        <img src={timeImage} alt="Time-related illustration" />
      </div>
      <div className="benefits-in-box">
        <h1 className="benefits-h1">{title}</h1>
        <p className="benefits-p">{description}</p>
        <div className="benefits-in-box-wraper">
          {benefitsData.map((benefit) => (
            <BenefitBox
              key={benefit.title} // Replace index with a unique identifier
              imageSrc={benefit.imageSrc}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

BenefitBox.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

BenefitBox.defaultProps = {
  imageSrc: '',
  title: 'No Title',
  description: 'No Description Available',
};

BenefitsSection.propTypes = {
  benefitsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BenefitsSection;

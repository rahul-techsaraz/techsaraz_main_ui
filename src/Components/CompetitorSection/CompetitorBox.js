import React from 'react';
import PropTypes from 'prop-types';

// Reusable CompetitorBox component with prop validation
const CompetitorBox = ({ icon, title, description }) => {
  return (
    <div className="competitor-box" id="competitor-box-set">
      <div className="competitor-box-i">
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <h1 className="competitor-box-h1">{title}</h1>
      <p className="competitor-box-p">{description}</p>
    </div>
  );
};

// Prop validation
CompetitorBox.propTypes = {
  icon: PropTypes.string.isRequired,      // 'icon' should be a string and is required
  title: PropTypes.string.isRequired,     // 'title' should be a string and is required
  description: PropTypes.string.isRequired // 'description' should be a string and is required
};

export default CompetitorBox;

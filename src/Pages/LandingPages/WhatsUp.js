import React from 'react';
import whatsappicon from '../../images/whatsapp-button-image.png';
import { Link } from 'react-router-dom';

const WhatsUp = () => {
  return (
    <Link to="https://wa.me/+917760231920" target="blank">
      <div className="whatsapp-button">
        <img src={whatsappicon} alt="whatsapp-icon" />
      </div>
    </Link>
  );
};

export default WhatsUp;

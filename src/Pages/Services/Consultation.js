import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../Constant/routes';

const Consultation = () => {
  return (
    <section className="consulation">
      <div className="consulation-in-box">
        <div className="consulation-img">
          <div className="consulation-layer">
            <div className="consulation-heading">
              Drop us a line! We are here to answer your questions 24/7
            </div>
            <div className="consulation-text">NEED A CONSULTATION?</div>
            <div className="consulatio-btn">
              <Link className="button-btn-btn2" to={Routes.CONTACT}>
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;

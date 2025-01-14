import React from 'react'
import { Link } from 'react-router-dom'

const Consultation = () => {
  return (
    <section className="consulation">
    <div className="consulation-in-box">
    <div className="consulation-img">
        <div className="consulation-layer">
           <div className="consulation-heading">Drop us a line! We are here to answer your questions 24/7</div>
           <div className="consulation-text">NEED A CONSULTATION?</div>
           <div className="consulatio-btn">
            <Link className="consulatio-btn-btn" to="/contact">
                CONTACT US
            </Link>
          </div>
        </div>
    </div>
</div>
</section>
  )
}

export default Consultation
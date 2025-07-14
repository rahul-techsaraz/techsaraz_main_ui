import React, { useState, useEffect } from 'react';
import './LeadCaptureBanner.css';

const LeadCaptureBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    optIn: false,
  });

  // Handle cookie accept
  const handleConsent = async () => {
    localStorage.setItem('cookieConsent', 'true');
    setConsentGiven(true);
    setShowBanner(false);
    document.body.classList.remove('no-scroll');
    // Show modal after consent
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.optIn) {
      console.log('Lead Data:', formData);
      alert('Thanks! Your info was saved.');
    } else {
      alert('Please accept the opt-in box.');
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
      document.body.classList.add('no-scroll');
    } else {
      setConsentGiven(true);
    }
  }, []);
  return (
    <div className="lead-wrapper">
      {/* Cookie Banner */}
      {!consentGiven && showBanner && (
        <div className="cookie-overlay">
          <div className="cookie-banner slide-up">
            <p>
              We use cookies to enhance your experience. Read our{' '}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </p>
            <button className="accept-btn" onClick={handleConsent}>
              Accept & Continue
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Welcome!</h2>
            <p>
              Thanks for accepting cookies. You can now enjoy the full
              experience.
            </p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Lead Form */}
      {consentGiven && (
        <form className="lead-form" onSubmit={handleSubmit}>
          <h2>Stay Updated</h2>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="optIn"
              checked={formData.optIn}
              onChange={handleChange}
            />
            I agree to receive updates and accept the privacy policy.
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default LeadCaptureBanner;

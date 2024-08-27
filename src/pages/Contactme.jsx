import React, { useState, useEffect } from 'react';
import '../styles/Contactme.css';

function Contactme() {
  const phoneNumber = '+96171107196'; 
  const email = 'ramimehdi2@hotmail.com';
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSMSClick = () => {
    window.location.href = `sms:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="contactme-container">
      <div className="background-image"></div>
      <div className="background-overlay"></div>
      <div className="container">
        <h1 className="contact-title">Contact Me</h1>
        <h2 className="subtitle">Let's connect constellations</h2>
        <p className="subtitle2">
          Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
        </p>
        <div className="contact-details">
          <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
          <p>Phone: <a href={`sms:${phoneNumber}`}>{phoneNumber}</a></p>
          <div className="button-group">
            <button onClick={handleSMSClick}>Send Me a Text Message</button>
            <button onClick={handleEmailClick}>Send Me an Email</button>
          </div>
        </div>
        {showBackToTop && (
          <div
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <i className="fas fa-arrow-up"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contactme;

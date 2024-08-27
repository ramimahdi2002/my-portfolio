import React from 'react';
import '../styles/Contactme.css';
import BackToTop from '../components/BackToTop'; 
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
function Contactme() {
  const phoneNumber = '+96171107196'; 
  const email = 'ramimehdi2@hotmail.com';



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
        <BackToTop /> 
      </div>
    </div>
  );
}

export default Contactme;

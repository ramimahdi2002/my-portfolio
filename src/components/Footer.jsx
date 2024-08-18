import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section reach-us">
          <h4>Reach us</h4>
          <ul>
            <li><i className="fas fa-phone-alt"></i> +961 71107196</li>
            <li><i className="fas fa-envelope"></i> ramimehdi2@hotmail.com</li>
            <li><i className="fas fa-map-marker-alt"></i> Ain Anoub</li>
          </ul>
        </div>

        <div className="footer-section rami-mahdi">
          <h4>Rami Mahdi</h4>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Portfolio</li>
          </ul>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <a href="./assets/RamiMahdiCV.pdf" download="Rami Mahdi (Resume).pdf" className="download-cv-button">
            Download my CV
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

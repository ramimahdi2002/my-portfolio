import React, { useState, useEffect } from 'react';
import '../styles/Aboutme.css';

const Aboutme = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Adjust the scroll position where the button should appear
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="aboutme-container">
      <div className="background-image"></div>
      <div className="background-overlay"></div>
      <div className="about">
        <h2>About Me</h2>
        <img
          src="./assets/images/myimage.jpg"
          alt="Rami Mahdi"
        />
        <p>
          Hello! I’m Rami Mahdi, a passionate front-end developer hailing from the picturesque town 
          of Ain Anoub. My journey in the digital realm began in 2020, and since then, my dedication 
          to creating beautiful, intuitive, and user-friendly digital experiences has only deepened. 
          My expertise lies in weaving together the latest front-end technologies such as HTML5, CSS3,
          and JavaScript frameworks like React and Vue.js, to bring responsive and dynamic web
          applications to life. I take pride in my meticulous attention to detail and my commitment to 
          elevating user experience to the realm of art. It's not just about writing code; it's about 
          building a digital story that engages and inspires. Each project is a new adventure, an 
          opportunity to challenge the boundaries of what's possible on the web.
          Whether it's a small business website, an intricate e-commerce platform, or a vibrant 
          interactive web application, my goal is to deliver digital experiences that resonate with users
          and stand out in the digital landscape. My work is a testament to my craft, 
          a blend of aesthetic appeal and technical robustness. I invite you to peruse my body of work 
          and see for yourself the passion and craftsmanship I bring to each project. 
          Navigate to the Check My Portfolio section to explore my projects, each a chapter in my 
          ongoing story of growth and creativity in front-end development.
        </p>
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
};

export default Aboutme;

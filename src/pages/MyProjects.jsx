import React from 'react';
import Slider from 'react-slick';
import '../styles/MyProjects.css';
import BackToTop from '../components/BackToTop';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
const Portfolio = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'ease-in-out',
  };


  return (
    <div className="portfolio-container">
      <div className="background-image"></div>
      <div className="background-overlay"></div>
      <div className="about">
        <h2>My Projects</h2>
      </div>
      <div>
        <h2 className="section-title">
          <span className="section-number">01 -</span> Youbee AI Clone
        </h2>
        <div className="project-slider">
          <Slider {...sliderSettings}>
            <div>
              <img src="./assets/images/youbee1.png" alt="Project 1" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/youbee2.png" alt="Project 2" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/youbee3.png" alt="Project 3" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/youbee4.png" alt="Project 4" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/youbee5.png" alt="Project 5" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/youbee6.png" alt="Project 6" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/youbee7.png" alt="Project 7" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/youbee8.png" alt="Project 8" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/youbee9.png" alt="Project 9" className="slider-image" />
            </div>
          </Slider>
        </div>
      </div>
      <div>
        <h2 className="section-title">
          <span className="section-number">02 -</span> Admin Dashboard
        </h2>
        <div className="project-slider">
          <Slider {...sliderSettings}>
            <div>
              <img src="./assets/images/admin.png" alt="Project 1" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/admin1.png" alt="Project 2" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/admin2.png" alt="Project 3" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/admin3.png" alt="Project 4" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/admin4.png" alt="Project 5" className="slider-image" />
            </div>
            <div>
              <img src="./assets/images/admin5.png" alt="Project 6" className="slider-image" />
            </div>
          </Slider>
        </div>
      </div>
      <div>
        <h2 className="section-title">
          <span className="section-number">03 -</span> Instagram Clone
        </h2>
        <div className="project-slider">
          <Slider {...sliderSettings}>
            <div>
              <img src="./assets/images/instagram.png" alt="Project 1" className="slider-image" />
            </div>
          </Slider>
        </div>
<BackToTop/>
      </div>
    </div>
  );
};

export default Portfolio;

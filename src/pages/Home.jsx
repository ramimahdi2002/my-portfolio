import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Home.css';
import BackToTop from '../components/BackToTop'; 
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
const Home = () => {

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
    <div className='background'>
      <div className="home-container">
        <div className="header-section">
          <div className="header-text">
            <h2 className="header-title">Front-End</h2>
            <h2 className="header-title developer-title">Developer</h2>
          </div>
          <div className="header-overlay" />
        </div>

        <div className="about-section">
          <div className="about-text">
            <h2 className="section-title">
              <span className="section-number">01 -</span> About Me
            </h2>
            <img
              src="./assets/images/myimage.jpg"
              alt="Rami Mahdi"
              className="about-image"
            />
          </div>
          <div className="about-description">
            <p>
              Hello! I'm Rami Mahdi, a passionate front-end developer based in Ain Anoub with a knack for crafting beautiful and user-friendly digital experiences. Since 2020, I've been immersed in the world of web development.
            </p>
          </div>
        </div>

        <div className="portfolio-section">
          <h2 className="section-title">
            <span className="section-number">02 -</span> Projects
          </h2>
          <div className="portfolio-description">
            <p>
              Welcome to the portfolio of Rami Mahdi, a dedicated and innovative Front-End Developer with a passion for crafting engaging user experiences. With expertise in modern technologies like HTML, CSS, JavaScript, and React, I have a proven track record of developing responsive and intuitive web applications. I had several internships and took courses from academy like full Stack web development from the yoobee ai academy.
            </p>
          </div>

          <div className="portfolio-slider">
            <Slider {...sliderSettings}>
              <div>
                <img src="./assets/images/project1.png" alt="Project 1" className="slider-image" />
              </div>
              <div>
                <img src="./assets/images/project2.png" alt="Project 2" className="slider-image" />
              </div>
              <div>
                <img src="./assets/images/project3.png" alt="Project 3" className="slider-image" />
              </div>
            </Slider>
          </div>
        </div>

<BackToTop/>
      </div>
    </div>
  );
};

export default Home;

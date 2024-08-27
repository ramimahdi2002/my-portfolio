import React from 'react';
import '../styles/Aboutme.css';
import BackToTop from '../components/BackToTop';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
const Aboutme = () => {

  return (
    <div className="aboutme-container">
      <div className="background-image"></div>
      <div className="background-overlay"></div>
      <div className="about">
        <h2>About Me</h2>
        <img
          src="./assets/images/myimage.jpg"
          alt="Rami Mahdi"
          className="profile-image"
        />
        <p className="about-description">
          Hello! I’m Rami Mahdi, a passionate front-end developer hailing from the picturesque town 
          of Ain Anoub. My journey in the digital realm began in 2020, and since then, my dedication 
          to creating beautiful, intuitive, and user-friendly digital experiences has only deepened...
        </p>
        <div className="objective">
          <h3>Objective</h3>
          <p>
            I am looking for a software or web development position where I can start my career in developing and building websites and mobile applications.
          </p>
        </div>
        <div className="education">
          <h3>Education</h3>
          <p><strong>Antonine University</strong> - Bachelor of Technology in Computer Science, DEC 2024</p>
          <p><strong>Kfarshima High School</strong> - Lebanese Baccalaureate - Life Science, JUN 2019</p>
          <p><strong>You bee AI</strong> - Full Stack Web Development Bootcamp, JUN 2024</p>
        </div>
        <div className="experience">
          <h3>Experience</h3>
          <p><strong>OGERO, Lebanon - Intern</strong> (JAN 2024 - APR 2024)</p>
          <p>Installed networking and fiber internet technologies.</p>
          <p>Configured networking equipment and fiber internet connections.</p>
          <p><strong>OGERO, Lebanon - Front-end development</strong> (JUN 2024 - AUG 2024)</p>
          <p>Developed admin consoles using React JS primarily focusing on university management system.</p>
          <p>Created a comprehensive dashboard page for managing students, professors, and courses each requiring a complex logic and intricate functionalities.</p>
          <p>Gained extensive experience in handling data interactions and state management within React, designing systems, enhancing my ability to create cohesive and visually appealing user interfaces, building scalable and maintainable web applications.</p>
        </div>
        <div className="skills">
          <h3>Technical Skills</h3>
          <ul>
            {['React JS', 'Laravel', 'PHP', 'C#', 'HTML, CSS, JS', 'React-Native', 'Java FX', 'Java', 'C++'].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills">
          <h3>Soft Skills</h3>
          <ul>
            {['Time Management', 'Problem-Solving', 'Communication'].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills">
          <h3>Languages</h3>
          <ul>
            {['English (Fluent)', 'Arabic (Native)'].map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
<BackToTop/>
      </div>
    </div>
  );
};

export default Aboutme;

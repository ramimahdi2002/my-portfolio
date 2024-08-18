import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <span className="header-title-bold">Rami</span>{' '}
        <span className="header-title-normal">Mahdi</span>
      </div>
      <nav className="header-nav">
        <a href="./">{'< Home >'}</a>
        <a href="./aboutme">{'< About Me >'}</a>
        <a href="./MyProjects">{'< My Projects >'}</a>
        <a href="./contactme">{'< Contact >'}</a>
      </nav>
    </header>
  );
};

export default Header;

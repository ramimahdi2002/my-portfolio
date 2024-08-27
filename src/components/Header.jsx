import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    if (e.target.closest('.header-nav') || e.target.closest('.burger-icon')) {
      return;
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-title">
        <span className="header-title-bold">Rami</span>{' '}
        <span className="header-title-normal">Mahdi</span>
      </div>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="./" className={location.pathname === '/' ? 'active' : ''}>{'< Home >'}</a>
        <a href="./aboutme" className={location.pathname === '/aboutme' ? 'active' : ''}>{'< About Me >'}</a>
        <a href="./MyProjects" className={location.pathname === '/MyProjects' ? 'active' : ''}>{'< My Projects >'}</a>
        <a href="./contactme" className={location.pathname === '/contactme' ? 'active' : ''}>{'< Contact >'}</a>
      </nav>
    </header>
  );
};

export default Header;

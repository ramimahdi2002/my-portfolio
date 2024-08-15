import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px',
        backgroundColor: 'transparent',
        color: 'white',
        position: 'absolute',  // Make the header position absolute to float above the content
        top: 0,
        width: '100%',
      }}
    >
      <div style={{ fontSize: '30px' }}>
        <span style={{ fontWeight: 'bold' }}>Rami</span>{' '}
        <span style={{ fontWeight: 'normal' }}>Mahdi</span>
      </div>
      <nav>
        <a
          href="./"
          style={{
            color: 'white',
            margin: '0 25px',
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          {'< Home >'}
        </a>
        <a
          href="#about"
          style={{
            color: 'white',
            margin: '0 25px',
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          {'< About Me >'}
        </a>
        <a
          href="#portfolio"
          style={{
            color: 'white',
            margin: '0 25px',
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          {'< Portfolio >'}
        </a>
        <a
          href="#contact"
          style={{
            color: 'white',
            margin: '0 25px',
            textDecoration: 'none',
            fontSize: '18px',
          }}
        >
          {'< Contact >'}
        </a>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';


const Home = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          backgroundImage: `url('./assets/images/image.png')`,
          backgroundSize: 'fill',
          backgroundPosition: 'center',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ zIndex: 1 }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '48px', margin: '0' }}>Rami Mahdi</h1>
          <h2 style={{ fontWeight: 'normal', fontSize: '36px', margin: '0' }}>Front-End Developer</h2>
        </div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            zIndex: 0,
          }}
        />
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contactme';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactme" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

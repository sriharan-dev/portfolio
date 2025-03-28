import React, { useState } from 'react';
import { Fade} from 'react-awesome-reveal';
import Sidebar from './components/Sidebar';
import OffCanvasMenu from './components/OffCanvasMenu';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="mobile-header">
        <h3>Portfolio</h3>
        <button className="toggle-btn" onClick={toggleMenu}>☰</button>
      </div>
      <OffCanvasMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      <div className="main-content">
        <Fade triggerOnce delay={500} duration={1000} direction='bottom'>
          <Home />
        </Fade>
        <Fade triggerOnce delay={500} duration={1000} direction='bottom'>
          <About />
        </Fade>
        <Fade triggerOnce delay={500} duration={1000} direction='bottom'>
          <Skills />
        </Fade>
        <Fade triggerOnce delay={500} duration={1000} direction='bottom'>
          <Projects />
        </Fade>
        <Fade triggerOnce delay={500} duration={1000} direction='bottom'>
          <Contacts />
        </Fade>
        <Footer />
      </div>
    </div>
  );
};

export default App;
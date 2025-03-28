import React from 'react';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './OffCanvasMenu.css';

const OffCanvasMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`off-canvas-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <ul className="menu-links">
        <li><a href="#home" onClick={onClose}><FaHome /> Home</a></li>
        <li><a href="#about" onClick={onClose}><FaUser /> About Me</a></li>
        <li><a href="#skills" onClick={onClose}><FaCode /> Skills</a></li>
        <li><a href="#projects" onClick={onClose}><FaProjectDiagram /> Projects</a></li>
        <li><a href="#contacts" onClick={onClose}><FaEnvelope /> Contact</a></li>
      </ul>
    </div>
  );
};

export default OffCanvasMenu;
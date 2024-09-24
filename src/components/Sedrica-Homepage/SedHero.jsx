import React from 'react';
import './SedHero.css'; // Import the CSS file for styling
import heroImg from '../../assets/maxresdefault.jpg'

const HeroImage = () => {
  return (
    <div className="hero-container">
      <img 
        src={heroImg} 
        alt="Hero" 
        className="hero-image" 
      />
      <div className="hero-content">
        <h1>SeDriCa</h1>
        <p>Subtitlte</p>
      </div>
    </div>
  );
};

export default HeroImage;

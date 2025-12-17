import React, { useState, useEffect } from 'react';
import '../Styles/HeroSection.css'; 
const heroContent = {
 buttonText: "Contact Us",
};

const AboutHeroSection = ({ videoSrc, title }) => {
  const [lineVisibility, setLineVisibility] = useState({
    title: false,
    subtitle: false,
    description: false,
    button: false,
  });

  useEffect(() => {
    const timers = [];

    timers.push(setTimeout(() => {
      setLineVisibility(prev => ({ ...prev, title: true }));
    }, 200)); 

    timers.push(setTimeout(() => {
      setLineVisibility(prev => ({ ...prev, button: true }));
    }, 500));

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <section className="hero-section-container">
      <video
        className="hero-video-background"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      <div className="hero-video-overlay"></div>

      <div className="hero-content-wrapper">
        
        <h1 className={`hero-title ${lineVisibility.title ? 'is-visible' : ''}`}>
          {title}
        </h1>
        <button className={`hero-cta-button ${lineVisibility.button ? 'is-visible' : ''}`}>
          {heroContent.buttonText}
        </button>
      </div>
    </section>
  );
};

export default AboutHeroSection;
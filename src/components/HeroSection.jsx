import React, { useState, useEffect } from 'react';
import '../Styles/HeroSection.css';

const heroContent = [
  {
    title: "Seraya Retreat",
    subtitle: "A Sacred Space of Healing and Harmony.",
    description: "Experience a unique blend of nature and wellness.",
    buttonText: "Contact Us",
    videoSrc: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/04.mp4",
  },
  {
    title: "Holistic Wellness",
    subtitle: "Reconnect Your Mind, Body & Soul.",
    description: "Explore treatments that balance energy & restore peace.",
    buttonText: "Book Now",
    videoSrc: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/04.mp4",
  },
  {
    title: "Nature Heals",
    subtitle: "Experience Peace Like Never Before.",
    description: "Surrounded by nature, guided by experts.",
    buttonText: "Explore",
    videoSrc: "https://ylaeqctg9anxinzu.public.blob.vercel-storage.com/04.mp4",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lineVisibility, setLineVisibility] = useState({
    title: false,
    subtitle: false,
    description: false,
    button: false,
  });

  useEffect(() => {
    setLineVisibility({
      title: false,
      subtitle: false,
      description: false,
      button: false,
    });

    const timers = [];
    timers.push(setTimeout(() => setLineVisibility(p => ({ ...p, title: true })), 200));
    timers.push(setTimeout(() => setLineVisibility(p => ({ ...p, subtitle: true })), 600));
    timers.push(setTimeout(() => setLineVisibility(p => ({ ...p, description: true })), 1000));
    timers.push(setTimeout(() => setLineVisibility(p => ({ ...p, button: true })), 1400));

    return () => timers.forEach(t => clearTimeout(t));
  }, [activeIndex]);

  const slide = heroContent[activeIndex];

  return (
    <section className="hero-section-container">
      <video
        key={slide.videoSrc}
        className="hero-video-background fade-video"
        src={slide.videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-video-overlay"></div>
      <div className="hero-content-wrapper fade-text">
        <h1 className={`hero-title ${lineVisibility.title ? 'is-visible' : ''}`}>
          {slide.title}
        </h1>

        <p className={`hero-subtitle ${lineVisibility.subtitle ? 'is-visible' : ''}`}>
          {slide.subtitle}
        </p>

        <p className={`hero-description ${lineVisibility.description ? 'is-visible' : ''}`}>
          {slide.description}
        </p>

        <button className={`hero-cta-button ${lineVisibility.button ? 'is-visible' : ''}`}>
          {slide.buttonText}
        </button>
      </div>

      <div className="hero-dots">
        {heroContent.map((_, index) => (
          <span
            key={index}
            className={`hero-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

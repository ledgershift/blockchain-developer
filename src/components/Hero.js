import React from "react";
import "../styles/hero.css";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Empowering Businesses with Blockchain Innovation</h1>
        <p className="hero-subtitle">I specialize in building secure, scalable, and efficient blockchain solutions tailored to your needs.</p>
        <div className="hero-buttons">
          <button className="cta-button" onClick={() => scrollToSection("services")}>Get Started</button>
          <button className="cta-button outline" onClick={() => scrollToSection("about")}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
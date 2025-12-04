import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Premium Mobile Car Detailing
            <span className="highlight">At Your Doorstep</span>
          </h1>
          <p className="hero-subtitle">
            Professional car detailing services brought directly to you. 
            We make your vehicle shine like new, wherever you are.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary btn-large" onClick={scrollToContact}>
              Book Appointment
            </button>
            <button className="btn-secondary btn-large" onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              View Services
            </button>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <span>Premium Quality</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚚</span>
              <span>Mobile Service</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⏱️</span>
              <span>Quick & Efficient</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💯</span>
              <span>100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


import React from 'react'
import './About.css'

const About = () => {
  const features = [
    {
      icon: '🚚',
      title: 'We Come To You',
      description: 'Professional mobile service - we bring everything to your location, saving you time and hassle'
    },
    {
      icon: '🔧',
      title: 'Premium Products',
      description: 'We use only the highest quality, eco-friendly products and equipment'
    },
    {
      icon: '⏰',
      title: 'Flexible Scheduling',
      description: 'Book at your convenience - we work around your schedule',
      hideOnMobile: true
    },
    {
      icon: '💧',
      title: 'Water Efficient',
      description: 'Eco-friendly methods that use minimal water while delivering maximum results'
    },
    {
      icon: '🛡️',
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage for your peace of mind',
      hideOnMobile: true
    },
    {
      icon: '⭐',
      title: 'Satisfaction Guaranteed',
      description: '100% satisfaction guarantee or we\'ll make it right'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="about-description">
              We're not just another car wash. We're a premium mobile detailing service 
              dedicated to making your vehicle look and feel like new. Our team of expert 
              technicians brings professional-grade equipment and premium products directly 
              to your location, saving you time while delivering exceptional results.
            </p>
            <p className="about-description">
              We've built our 
              reputation on attention to detail, customer satisfaction, and using only the 
              finest products available. Your car deserves the best, and that's exactly 
              what we deliver.
            </p>
          </div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card ${feature.hideOnMobile ? 'hide-on-mobile' : ''}`}>
              <div className="feature-icon-large">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About


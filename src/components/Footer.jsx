import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🚗</span>
              <span className="logo-text">Home Truck And Auto Detailers</span>
            </div>
            <p className="footer-description">
              Professional mobile car detailing services. We bring the shine to you.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Maintenance Exterior Wash</a></li>
              <li><a href="#services">Interior Refresh</a></li>
              <li><a href="#services">Full Detail</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>📞 (305) 878-8962</li>
              <li>✉️ hometruckdetail@gmail.com</li>
              <li>📍 Metro Area Service</li>
              <li>⏰ Mon-Sat: 8AM - 6PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Home Truck And Auto Detailers. All rights reserved.</p>
          <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer


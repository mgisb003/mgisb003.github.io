import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicleType: '',
    date: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // EmailJS Configuration
  // Replace these with your EmailJS credentials from https://www.emailjs.com/
  const EMAILJS_SERVICE_ID = 'service_gfqrbd5'
  const EMAILJS_TEMPLATE_ID = 'template_ri26rt8'
  const EMAILJS_PUBLIC_KEY = 's3ExfFWhp862iHVs_'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) setError('')
  }

  const getServiceDisplayName = (value) => {
    const serviceMap = {
      'exterior': 'Maintenance Exterior Wash',
      'interior': 'Interior Refresh',
      'full': 'Full Detail (Interior + Exterior)',
      'custom': 'Custom Service'
    }
    return serviceMap[value] || value
  }

  const getVehicleTypeDisplayName = (value) => {
    const vehicleMap = {
      'sedan': 'Sedan',
      'small-suv': 'Small SUV',
      'truck': 'Truck',
      'large-suv': 'Large SUV (3-row)'
    }
    return vehicleMap[value] || value
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setError('Email service is not configured. Please contact the website administrator.')
      setIsLoading(false)
      return
    }

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: getServiceDisplayName(formData.service),
        vehicle_type: getVehicleTypeDisplayName(formData.vehicleType),
        preferred_date: formData.date,
        message: formData.message || 'No additional details provided.',
        to_email: 'hometruckdetail@gmail.com'
      }

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      // Success!
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        vehicleType: '',
        date: '',
        message: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)

    } catch (error) {
      console.error('EmailJS Error:', error)
      setError('Failed to send your request. Please try again or call us directly at (305) 878-8962')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Book Your Appointment</h2>
          <p className="section-subtitle">
            Fill out the form below and we'll get back to you within 24 hours to confirm your booking.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Service Package *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="exterior">Maintenance Exterior Wash</option>
                    <option value="interior">Interior Refresh</option>
                    <option value="full">Full Detail (Interior + Exterior)</option>
                    <option value="custom">Custom Service</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="vehicleType">Vehicle Type *</label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select vehicle type</option>
                    <option value="sedan">Sedan</option>
                    <option value="small-suv">Small SUV</option>
                    <option value="truck">Truck</option>
                    <option value="large-suv">Large SUV (3-row)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="date">Preferred Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Any special requests or vehicle details we should know about?"
                ></textarea>
              </div>

              {error && (
                <div className="form-error">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                className="btn-primary btn-large btn-submit"
                disabled={isLoading || submitted}
              >
                {isLoading 
                  ? 'Sending...' 
                  : submitted 
                    ? '✓ Request Sent!' 
                    : 'Submit Booking Request'
                }
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>(305) 878-8962</p>
              <p>Mon-Sat: 8AM - 6PM</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email Us</h3>
              <p>hometruckdetail@gmail.com</p>
              <p>We respond within 24 hours</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Service Area</h3>
              <p>We service the entire metro area</p>
              <p>Free travel within 20 miles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      name: 'Maintenance Exterior Wash',
      description: 'Keep your vehicle looking clean and fresh',
      pricing: [
        { type: 'Sedan', price: '$65' },
        { type: 'Small SUV', price: '$75' },
        { type: 'Truck', price: '$85' },
        { type: 'Large SUV (3-row)', price: '$95' }
      ],
      features: [
        'Foam pre-wash',
        'Hand wash',
        'Wheel/tire clean & dress',
        'Door jambs',
        'Windows outside',
        'Quick spray wax/sealant'
      ],
      popular: false
    },
    {
      name: 'Interior Refresh',
      description: 'Deep clean and refresh your vehicle\'s interior',
      pricing: [
        { type: 'Sedan', price: '$100' },
        { type: 'Small SUV', price: '$120' },
        { type: 'Truck', price: '$130' },
        { type: 'Large SUV (3-row)', price: '$140' }
      ],
      features: [
        'Full vacuum (seats, carpets, trunk)',
        'Wipe & UV protect plastics/vinyl',
        'Windows inside',
        'Light spot cleaning on seats/carpets'
      ],
      popular: false
    },
    {
      name: 'Full Detail',
      description: 'Complete interior and exterior detail',
      pricing: [
        { type: 'Sedan', price: '$180' },
        { type: 'Small SUV', price: '$200' },
        { type: 'Truck', price: '$220' },
        { type: 'Large SUV (3-row)', price: '$240' }
      ],
      features: [
        'Maintenance Wash (all exterior services)',
        'Deep interior: crevice blowout',
        'Plastics scrubbed',
        'Leather cleaned & conditioned',
        'Basic stain treatment',
        'Spray sealant / hand wax on paint'
      ],
      popular: true
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Choose the perfect package for your vehicle. All services are performed at your location.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.popular ? 'popular' : ''}`}>
              {service.popular && <div className="popular-badge">Most Popular</div>}
              <div className="service-header">
                <h3 className="service-name">{service.name}</h3>
                {service.popular && <div className="profit-badge">All Inclusive</div>}
              </div>
              <p className="service-description">{service.description}</p>
              
              <div className="pricing-table">
                <div className="pricing-header">Pricing by Vehicle Type</div>
                <table className="price-table">
                  <thead>
                    <tr>
                      <th>Vehicle Type</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.pricing.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.type}</td>
                        <td className="price-cell">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="service-features-wrapper">
                <h4 className="features-title">What's Included:</h4>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="btn-service" onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                Book This Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services


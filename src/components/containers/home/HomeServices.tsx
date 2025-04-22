import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeServices = () => {
  const services = [
    {
      id: 1,
      title: 'ACA Lead Generation',
      description: 'Connect with qualified prospects looking for Affordable Care Act insurance options. Our verified ACA leads deliver high conversion rates.',
      icon: '/icons/healthcare.svg',
      link: '/insurance/aca',
      stat: '94%',
      statLabel: 'Conversion Rate'
    },
    {
      id: 2,
      title: 'Medicare Lead Generation',
      description: 'Reach eligible seniors interested in Medicare plans. Our targeted Medicare leads help you grow your insurance business efficiently.',
      icon: '/icons/senior.svg',
      link: '/insurance/medicare',
      stat: '87%',
      statLabel: 'Satisfaction'
    },
    {
      id: 3,
      title: 'MVA Lead Generation',
      description: 'Access high-intent prospects seeking Motor Vehicle Accident assistance. Our MVA leads connect you with clients needing immediate solutions.',
      icon: '/icons/car.svg',
      link: '/insurance/mva',
      stat: '4.9/5',
      statLabel: 'Quality Rating'
    },
    {
      id: 4,
      title: 'Auto Insurance Leads',
      description: 'Connect directly with high-intent callers through our premium pay-per-call service. Real-time connections that drive conversions.',
      icon: '/icons/phone-call.svg',
      link: '/insurance/auto',
      stat: '24/7',
      statLabel: 'Lead Delivery'
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Premium <span className="highlight">Lead Generation</span> Services</h2>
          <p className="section-subtitle">Powerful solutions designed to boost conversions and grow your business</p>
        </div>
        
        <div className="services-grid single-row">
          {services.map((service) => (
            <div key={service.id} className="service-card glass-card animated">
              <div className="card-indicator"></div>
              <div className="service-icon">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  width={64} 
                  height={64}
                  className="icon-pulse"
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-stat">
                <span className="stat-number">{service.stat}</span>
                <span className="stat-label">{service.statLabel}</span>
              </div>
              <p className="service-description">{service.description}</p>
              <div className="card-overlay"></div>
              <Link href={service.link} className="service-link">
                Learn More
                <span className="arrow-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16669 10H15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.8334 5L15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;

import React from 'react';
import Link from 'next/link';

const HomeFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Customer Service",
      description: "Our representatives handle inquiries and technical support, ensuring seamless communication.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          <path d="M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
        </svg>
      ),
      bgPattern: "pattern-1",
      stats: "98%",
      statsLabel: "Satisfaction Rate",
      link: "/contact-us"
    },
    {
      id: 2,
      title: "Inbound & Outbound",
      description: "Answering queries, conducting surveys, and generating leads with expert handling.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      bgPattern: "pattern-2",
      stats: "24/7",
      statsLabel: "Support Available",
      link: "/contact-us"
    },
    {
      id: 3,
      title: "Insurance Support",
      description: "Specialized insurance services including policy management and claims processing.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
          <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
          <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      bgPattern: "pattern-3",
      stats: "100+",
      statsLabel: "Insurance Experts",
      link: "/contact-us"
    },
    {
      id: 4,
      title: "Tailored Solutions",
      description: "Customizable service plans and insurance products to meet your unique business needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      bgPattern: "pattern-4",
      stats: "500+",
      statsLabel: "Custom Solutions",
      link: "/contact-us"
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">OUR FEATURES</span>
          <h2 className="section-title">ENABLE BETTER CUSTOMER EXPERIENCE</h2>
          <p className="section-subtitle">Specialized services tailored to your needs</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-wrapper">
              <Link href={feature.link} className="feature-card-link">
                <div className={`feature-card ${feature.bgPattern}`}>
                  <div className="card-blob"></div>
                  <div className="feature-badge">{feature.id}</div>
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-textBox">
                    <div className="feature-stats">
                      <span className="stats-number">{feature.stats}</span>
                      <span className="stats-label">{feature.statsLabel}</span>
                    </div>
                    <p className="feature-text head">{feature.title}</p>
                    {/* <span className="feature-category">{feature.id === 1 ? "Customer Experience" : feature.id === 2 ? "Communication" : feature.id === 3 ? "Insurance" : "Business Solutions"}</span> */}
                    <p className="feature-text description">{feature.description}</p>
                    <div className="card-button">
                      <span className="btn-text">Learn More</span>
                      <span className="arrow-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.16669 10H15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10.8334 5L15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="card-shine"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;

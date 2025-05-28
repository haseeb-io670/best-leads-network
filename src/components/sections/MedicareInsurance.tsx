import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaArrowRight } from "react-icons/fa";

const MedicareInsurance = () => {
  const [animateSection, setAnimateSection] = useState(0);
  const heroRef = useRef(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateSection(1);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      document.querySelectorAll('.animate-section').forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8) {
          section.classList.add('animated');
        }
      });

      if (heroRef.current) {
        const heroRect = (heroRef.current as HTMLElement).getBoundingClientRect();
        const heroOffset = window.scrollY * 0.4;
        (heroRef.current as HTMLElement).style.transform = `translateY(${heroOffset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="medicare-insurance-section">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background">
          <div className="hero-diagonal"></div>
          <div className="hero-pattern">
            {Array.from({length: 10}, (_, index) => (
              <div key={index} className="pattern-icon" style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}>
                <Image src="/icons/medicare.svg" alt="" width={30} height={30} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="container" ref={heroRef}>
          <div className="hero-content">
            <div className="hero-badge">
              <Image src="/icons/shield-check.svg" alt="" width={18} height={18} />
              <span>Premium Quality Leads</span>
            </div>
            <h1>Medicare Live Transfer Leads for High-Converting Senior Prospects</h1>
            <p className="subtitle">Connect with qualified Medicare prospects through our real-time live transfer lead generation system</p>
            <div className="hero-cta">
              <Link href="/contact-us" className="primary-button">
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="tel:+18002321145" className="secondary-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Us</span>
              </Link>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="medicare-animation">
              <Image src="/icons/medicare.svg" alt="Medicare" width={100} height={100} className="medicare-icon" />
              <div className="shield-animation">
                <div className="shield-circle"></div>
                <div className="shield-lines">
                  {Array.from({length: 5}, (_, i) => (
                    <div key={i} className="shield-line" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </div>

      <div className="container">
        {/* Process Section */}
        <div className="process-section animate-section">
          <div className="section-header">
            <h2>Pre-Qualified Medicare Live Transfer Leads That Convert</h2>
            <p className="section-intro">A streamlined process to connect you with verified Medicare prospects</p>
          </div>
          
          <div className="process-timeline">
            <div className="timeline-line"></div>
            
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Lead Generation</h3>
                <p>We attract potential Medicare insurance seekers through targeted campaigns.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Pre-Qualification</h3>
                <p>Our team verifies eligibility, needs, and interest before transferring.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Live Transfer</h3>
                <p>Qualified leads are transferred directly to Medicare insurance specialists.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Instant Connection</h3>
                <p>Connect with prospects who need Medicare coverage immediately.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section animate-section">
          <div className="section-header">
            <h2>Benefits of Exclusive Medicare Live Transfer Lead Generation</h2>
            <p className="section-intro">Why our Medicare leads outperform other lead generation solutions</p>
          </div>
          
          <div className="benefits-cards">
            <div className="benefit-card">
              <div className="card-inner">
                <div className="benefit-icon">
                  <Image src="/icons/check-verified.svg" alt="Qualified" width={40} height={40} />
                </div>
                <h3>Qualified Prospects</h3>
                <p>Age and eligibility verified leads that meet Medicare requirements.</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="card-inner">
                <div className="benefit-icon">
                  <Image src="/icons/time.svg" alt="Real-Time" width={40} height={40} />
                </div>
                <h3>Real-Time Transfers</h3>
                <p>Connect with prospects during their decision-making moment.</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="card-inner">
                <div className="benefit-icon">
                  <Image src="/icons/law.svg" alt="Compliance" width={40} height={40} />
                </div>
                <h3>Compliance Assured</h3>
                <p>All leads follow Medicare marketing guidelines and regulations.</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="card-inner">
                <div className="benefit-icon">
                  <Image src="/icons/scale.svg" alt="Scalable" width={40} height={40} />
                </div>
                <h3>Scalable Solutions</h3>
                <p>Adjust volume based on your capacity and business needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="audience-section animate-section">
          <div className="section-header">
            <h2>Real-Time Medicare Insurance Leads for Qualified Agents</h2>
            <p className="section-intro">Our leads are designed for insurance professionals focused on the senior market</p>
          </div>
          
          <div className="audience-grid">
            <div className="audience-item">
              <div className="audience-image">
                <Image 
                  src="/images/insurance/happy-senior-couple-communicating-with-doctor-about-their-health-insurance-while-going-through-paperwork.webp" 
                  alt="Medicare Insurance Agents" 
                  width={400} 
                  height={300} 
                  className="audience-img"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="audience-content">
                <h3>Medicare Insurance Agents</h3>
                <p>Connect with eligible Medicare prospects actively seeking coverage options.</p>
                <ul className="audience-features">
                  <li>
                    <span className="feature-icon"><FaCheck /></span>
                    <span>Access to pre-qualified Medicare prospects</span>
                  </li>
                  <li>
                    <span className="feature-icon"><FaCheck /></span>
                    <span>Higher conversion rates from live transfers</span>
                  </li>
                  <li>
                    <span className="feature-icon"><FaCheck /></span>
                    <span>Focus only on selling, not lead generation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="audience-item">
              <div className="audience-image">
                <Image 
                  src="/images/insurance/african-american-doctor-helping-senior-man-get-up-from-chair-home-visit.webp" 
                  alt="Healthcare Providers" 
                  width={400} 
                  height={300} 
                  className="audience-img"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="audience-content">
                <h3>Healthcare Providers</h3>
                <p>Expand your Medicare patient base with quality live transfer leads.</p>
                <ul className="audience-features">
                  <li>
                    <span className="feature-icon"><FaCheck /></span>
                    <span>Connect with patients seeking Medicare services</span>
                  </li>
                  <li>
                    <span className="feature-icon"><FaCheck /></span>
                    <span>Grow your Medicare patient network</span>
                  </li>
                  <li>
                    <span className="feature-icon"><FaCheck /></span>
                    <span>Improve patient acquisition efficiency</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="audience-item">
              <div className="audience-image">
                <Image 
                  src="/images/insurance/senior-couple-black-doctor-wearing-face-masks-while-using-touchpad-nursing-home.webp" 
                  alt="Insurance Agencies" 
                  width={400} 
                  height={300} 
                  className="audience-img"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="audience-content">
                <h3>Insurance Agencies</h3>
                <p>Grow your Medicare insurance division with qualified leads ready to enroll.</p>
                <ul className="audience-features">
                  <li>
                    <span className="feature-icon"><FaCheck /></span>
                    <span>Scale your Medicare business efficiently</span>
                  </li>
                  <li>
                    <span className="feature-icon"><FaCheck /></span>
                    <span>Support agents with quality lead flow</span>
                  </li>
                  <li>
                    <span className="feature-icon"><FaCheck /></span>
                    <span>Increase agency revenue and market share</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="pricing-section animate-section">
          <div className="section-header">
            <h2>Flexible Lead Packages for Medicare Insurance</h2>
            <p className="section-intro">Tailored lead generation solutions to match your business goals</p>
          </div>
          
          <div className="pricing-features">
            <div className="pricing-feature">
              <div className="feature-icon">
                <FaCheck size={32} color="#2A64AD" />
              </div>
              <div className="feature-content">
                <h3>Flexible Lead Packages</h3>
                <ul className="feature-list">
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Daily, weekly, or monthly lead plans</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Volume-based pricing tiers</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Seasonal campaign options</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>No long-term contracts required</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pricing-feature">
              <div className="feature-icon">
                <FaCheck size={32} color="#2A64AD" />
              </div>
              <div className="feature-content">
                <h3>Pay-Per-Lead Model</h3>
                <ul className="feature-list">
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Only pay for the leads you receive</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Transparent billing processes</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Cost-effective acquisition strategy</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Competitive industry pricing</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pricing-feature">
              <div className="feature-icon">
                <FaCheck size={32} color="#2A64AD" />
              </div>
              <div className="feature-content">
                <h3>Customizable Options</h3>
                <ul className="feature-list">
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Target specific geographic areas</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Focus on Medicare Advantage or Supplements</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Special enrollment period campaigns</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Tailor lead criteria to your needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pricing-action">
            <a href="/pricing" className="pricing-button">
              Get Detailed Pricing <FaArrowRight />
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section animate-section">
          <div className="cta-background">
            <div className="cta-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <div className="cta-content">
              <h2>Get Started Today!</h2>
              <p>Don't miss out on high-converting Medicare Insurance prospects. Get in touch now to start receiving real-time live transfer leads and scale your insurance sales effortlessly.</p>
              
              <Link href="/contact-us" className="cta-button">
                Get Your Medicare Insurance Leads Now
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              
              <div className="cta-contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <a href="tel:+18002321145">+1 (800) 232-1145</a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <a href="mailto:info@bestleadsnetwork.com">info@bestleadsnetwork.com</a>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <p>14 Hartland Ave, Huntington Station, NY 11746, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicareInsurance;

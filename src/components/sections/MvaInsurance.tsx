import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaArrowRight } from "react-icons/fa";

const MvaInsurance = () => {
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

  // Pricing section component with the updated design
  const PricingSection = () => (
    <div className="pricing-section">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Flexible Pricing for Premium MVA Live Transfer Lead Generation</h2>
          <p>Our competitive pricing options are designed to maximize your ROI</p>
        </div>
        
        <div className="pricing-creative">
          <div className="pricing-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path className="wave-path" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="rgba(42, 100, 173, 0.03)"></path>
            </svg>
          </div>
          
          <div className="pricing-features">
            <div className="feature-column">
              <div className="feature-icon">
                <FaCheck size={32} color="#2A64AD" />
              </div>
              <div className="feature-content">
                <h3>Flexible Lead Packages</h3>
                <ul className="feature-list">
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Customizable lead volume</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Scale up or down based on capacity</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>No long-term contracts required</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Weekly or monthly billing options</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="feature-column">
              <div className="feature-icon">
                <FaCheck size={32} color="#2A64AD" />
              </div>
              <div className="feature-content">
                <h3>Pay Per Lead Model</h3>
                <ul className="feature-list">
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Only pay for verified leads</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Competitive per-lead pricing</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Volume discounts available</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Transparent reporting dashboard</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="feature-column">
              <div className="feature-icon">
                <FaCheck size={32} color="#2A64AD" />
              </div>
              <div className="feature-content">
                <h3>Customizable Options</h3>
                <ul className="feature-list">
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Geographic targeting available</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>Lead filtering by criteria</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>API integration available</span>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheck /></span>
                    <span>White-labeled solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pricing-action">
            <a href="#contact" className="pricing-button">
              Get Pricing Details <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="mva-insurance-section">
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
                <Image src="/icons/car.svg" alt="" width={30} height={30} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="container" ref={heroRef}>
          <div className="hero-content">
            <div className="hero-badge">
              <Image src="/icons/shield-check.svg" alt="" width={18} height={18} />
              <span>Top Quality Leads</span>
            </div>
            <h1>MVA Live Transfer Leads for High-Converting Legal Case Prospects</h1>
            <p className="subtitle">Connect with high-intent auto insurance prospects through our real-time live transfer system</p>
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
            <div className="car-animation">
              <Image src="/icons/car.svg" alt="Car" width={100} height={60} className="car-icon" />
              <div className="road"></div>
              <div className="road-marks">
                {Array.from({length: 5}, (_, i) => (
                  <div key={i} className="road-mark" style={{ left: `${i * 25}%` }}></div>
                ))}
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

      <div className="container main-content">
        <div className="process-section animate-section">
          <div className="section-header">
            <h2>How Our Auto Insurance Live Transfer Leads Work</h2>
            <p className="section-intro">A seamless process designed to connect you with qualified prospects</p>
          </div>
          
          <div className="process-timeline">
            <div className="timeline-line"></div>
            
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Lead Generation</h3>
                <p>We attract potential auto insurance buyers through targeted marketing strategies.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Pre-Qualification</h3>
                <p>Our team verifies their intent, vehicle information, and interest before transferring.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Live Transfer</h3>
                <p>Once qualified, the lead is transferred directly to your sales agents.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Instant Connection</h3>
                <p>Engage with a highly interested prospect in real-time, increasing your chances of conversion.</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="benefits-section animate-section">
          <div className="section-header">
            <h2>Benefits of MVA Insurance Live Transfer Leads</h2>
          </div>
          
          <div className="benefits-wrapper">
            <div className="benefits-cards">
              <div className="benefit-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="benefit-icon">
                      <Image src="/icons/chart.svg" alt="Higher Closing Rates" width={40} height={40} />
                    </div>
                    <h3>Higher Closing Rates</h3>
                  </div>
                  <div className="card-back">
                    <p>Warm leads ensure better conversions with less effort.</p>
                    <div className="benefit-number">1</div>
                  </div>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="benefit-icon">
                      <Image src="/icons/phone-call.svg" alt="Real-Time Engagement" width={40} height={40} />
                    </div>
                    <h3>Real-Time Engagement</h3>
                  </div>
                  <div className="card-back">
                    <p>Instant connection with high-intent customers means no delays.</p>
                    <div className="benefit-number">2</div>
                  </div>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="benefit-icon">
                      <Image src="/icons/arrow-up.svg" alt="Increased ROI" width={40} height={40} />
                    </div>
                    <h3>Increased ROI</h3>
                  </div>
                  <div className="card-back">
                    <p>More closed deals mean a better return on investment.</p>
                    <div className="benefit-number">3</div>
                  </div>
                </div>
              </div>
              
              <div className="benefit-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="benefit-icon">
                      <Image src="/icons/settings.svg" alt="Scalable Lead Volume" width={40} height={40} />
                    </div>
                    <h3>Scalable Lead Volume</h3>
                  </div>
                  <div className="card-back">
                    <p>Adjust lead flow based on your business needs.</p>
                    <div className="benefit-number">4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="benefits-background">
            {Array.from({length: 8}, (_, index) => (
              <div key={index} className="floating-icon" style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}>
                <Image 
                  src={["/icons/chat.svg", "/icons/calendar.svg", "/icons/car.svg"][Math.floor(Math.random() * 3)]} 
                  alt="" 
                  width={20} 
                  height={20} 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="audience-section animate-section">
          <div className="section-header">
            <h2>Who Can Benefit from Our MVA Insurance Live Transfer Leads?</h2>
          </div>
          
          <div className="audience-minimal">
            <div className="audience-grid">
              <div className="audience-item">
                <div className="item-content">
                  <div className="item-icon">
                    <div className="icon-bg"></div>
                    <Image src="/icons/target.svg" alt="Agents" width={40} height={40} />
                  </div>
                  <div className="item-text">
                    <h3>Auto Insurance Agents & Brokers</h3>
                    <p>Connect with verified leads ready to purchase auto insurance policies.</p>
                  </div>
                </div>
                <Link href="/contact-us" className="item-cta">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              
              <div className="audience-item">
                <div className="item-content">
                  <div className="item-icon">
                    <div className="icon-bg"></div>
                    <Image src="/icons/headset.svg" alt="Call Centers" width={40} height={40} />
                  </div>
                  <div className="item-text">
                    <h3>Call Centers</h3>
                    <p>Receive real-time leads that convert faster.</p>
                  </div>
                </div>
                <Link href="/contact-us" className="item-cta">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
              
              <div className="audience-item">
                <div className="item-content">
                  <div className="item-icon">
                    <div className="icon-bg"></div>
                    <Image src="/icons/check-verified.svg" alt="Marketing Firms" width={40} height={40} />
                  </div>
                  <div className="item-text">
                    <h3>Insurance Marketing Firms</h3>
                    <p>Access high-intent prospects to maximize campaign performance.</p>
                  </div>
                </div>
                <Link href="/contact-us" className="item-cta">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <PricingSection />

        {/* CTA Section - Interactive Design */}
        <div className="cta-section animate-section">
          <div className="cta-background">
            <div className="cta-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <div className="cta-content">
              <h2>Get Started Today!</h2>
              <p>Don't miss out on high-converting MVA Insurance prospects. Get in touch now to start receiving real-time live transfer leads and scale your insurance sales effortlessly.</p>
              
              <Link href="/contact-us" className="cta-button">
                Get Your MVA Insurance Leads Now
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

export default MvaInsurance;

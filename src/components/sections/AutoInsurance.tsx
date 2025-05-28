import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaArrowRight, FaCar } from "react-icons/fa";

const AutoInsurance = () => {
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
    <section className="auto-insurance-section">
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
                <Image src="/icons/car.svg" alt="" width={30} height={30} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="container" ref={heroRef}>
          <div className="hero-content">
            <div className="hero-badge">
              <Image src="/icons/shield-check.svg" alt="" width={18} height={18} />
              <span>High Quality Leads</span>
            </div>
            <h1>Auto Insurance Live Transfers for High-Converting Driver Prospects</h1>
            <p className="subtitle">Connect with qualified auto insurance prospects through our real-time live transfer lead generation system</p>
            <div className="hero-cta">
              <Link href="/contact-us" className="primary-button">
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="/contact-us" className="secondary-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+18882563257"><span>Call Us</span></a>
              </Link>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="car-animation">
              <div className="road">
                <div className="road-line"></div>
                <div className="road-line"></div>
                <div className="road-line"></div>
              </div>
              <div className="car">
                <FaCar size={60} className="car-icon" />
                <div className="car-shadow"></div>
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
            <h2>Pre-Qualified Auto Insurance Live Transfer Leads That Convert</h2>
            <p className="section-intro">A seamless process designed to connect you with high-intent auto insurance prospects</p>
          </div>
          
          <div className="process-steps">
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

        {/* Benefits Section */}
        <div className="benefits-section animate-section">
          <div className="section-header">
            <h2>Benefits of Exclusive Auto Insurance Live Transfer Lead Generation</h2>
            <p className="section-intro">Discover why our auto insurance leads outperform traditional lead generation methods</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/chart.svg" alt="Higher Closing Rates" width={50} height={50} />
              </div>
              <h3>Higher Closing Rates</h3>
              <p>Warm leads ensure better conversions with less effort. Our pre-qualified auto insurance prospects are ready to make decisions.</p>
              <div className="benefit-bg"></div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/phone-call.svg" alt="Real-Time Engagement" width={50} height={50} />
              </div>
              <h3>Real-Time Engagement</h3>
              <p>Instant connection with high-intent customers means no delays. Speak directly with prospects while their interest is at its peak.</p>
              <div className="benefit-bg"></div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/arrow-up.svg" alt="Increased ROI" width={50} height={50} />
              </div>
              <h3>Increased ROI</h3>
              <p>More closed deals mean a better return on investment. Our auto insurance leads help maximize your marketing budget efficiency.</p>
              <div className="benefit-bg"></div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/settings.svg" alt="Scalable Lead Volume" width={50} height={50} />
              </div>
              <h3>Scalable Lead Volume</h3>
              <p>Adjust lead flow based on your business needs. Easily scale up during growth periods or optimize during slower seasons.</p>
              <div className="benefit-bg"></div>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="audience-section animate-section">
          <div className="section-header">
            <h2>Real-Time Auto Insurance Leads for Qualified Agents</h2>
            <p className="section-intro">Our auto insurance leads are perfect for insurance professionals focused on growth</p>
          </div>
          
          <div className="audience-cards">
            <div className="audience-card">
              <div className="audience-image">
                <Image 
                  src="/images/insurance/online-car-insurance-application.webp" 
                  alt="Auto Insurance Agents & Brokers" 
                  width={400} 
                  height={370} 
                  className="audience-img"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="audience-content">
                <h3>Auto Insurance Agents & Brokers</h3>
                <p>Connect with verified leads ready to purchase auto insurance policies. Grow your client base with high-quality prospects who are actively seeking coverage.</p>
                <ul className="audience-features">
                  <li><FaCheck className="check-icon" /> Qualified leads ready to buy</li>
                  <li><FaCheck className="check-icon" /> Detailed prospect information</li>
                  <li><FaCheck className="check-icon" /> Instant connection with interested buyers</li>
                </ul>
                <Link href="/contact-us" className="audience-cta">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
            
            <div className="audience-card">
              <div className="audience-image">
                <Image 
                  src="/images/Why-BestLeads.webp" 
                  alt="Call Centers" 
                  width={400} 
                  height={370} 
                  className="audience-img"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="audience-content">
                <h3>Call Centers</h3>
                <p>Receive real-time leads that convert faster. Keep your agents productive with a steady flow of pre-qualified prospects who are ready to discuss auto insurance options.</p>
                <ul className="audience-features">
                  <li><FaCheck className="check-icon" /> Optimized for call center operations</li>
                  <li><FaCheck className="check-icon" /> Seamless integration with CRM systems</li>
                  <li><FaCheck className="check-icon" /> Higher contact and conversion rates</li>
                </ul>
                <Link href="/contact-us" className="audience-cta">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
            
            <div className="audience-card">
              <div className="audience-image">
                <Image 
                  src="/images/insurance/image-auto-accident-involving-two-cars_613910-7924.webp" 
                  alt="Insurance Marketing Firms" 
                  width={400} 
                  height={370} 
                  className="audience-img"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="audience-content">
                <h3>Insurance Marketing Firms</h3>
                <p>Access high-intent prospects to maximize campaign performance. Enhance your marketing strategies with qualified leads that are more likely to convert into paying customers.</p>
                <ul className="audience-features">
                  <li><FaCheck className="check-icon" /> Complement existing marketing efforts</li>
                  <li><FaCheck className="check-icon" /> Improve campaign ROI metrics</li>
                  <li><FaCheck className="check-icon" /> Data-driven performance reporting</li>
                </ul>
                <Link href="/contact-us" className="audience-cta">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="pricing-section animate-section">
          <div className="section-header">
            <h2>Flexible Lead Packages for Auto Insurance</h2>
            <p className="section-intro">Choose the pricing model that best suits your business needs</p>
          </div>
          
          <div className="pricing-options">
            <div className="pricing-option">
              <div className="option-header">
                <div className="option-icon">
                  <Image src="/icons/package.svg" alt="Packages" width={40} height={40} />
                </div>
                <h3>Flexible Lead Packages</h3>
              </div>
              <div className="option-features">
                <ul>
                  <li>
                    <span className="feature-check"><FaCheck /></span>
                    <span>Daily, weekly, or monthly lead plans</span>
                  </li>
                  <li>
                    <span className="feature-check"><FaCheck /></span>
                    <span>Adjustable volume to match your capacity</span>
                  </li>
                  <li>
                    <span className="feature-check"><FaCheck /></span>
                    <span>No long-term contracts required</span>
                  </li>
                  <li>
                    <span className="feature-check"><FaCheck /></span>
                    <span>Pause or resume delivery as needed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pricing-option featured">
              <div className="option-badge">POPULAR</div>
              <div className="option-header">
                <div className="option-icon">
                  <Image src="/icons/dollar.svg" alt="Pay-Per-Lead" width={40} height={40} />
                </div>
                <h3>Pay-Per-Lead Model</h3>
              </div>
              <div className="option-features">
                <ul>
                  <li>
                    <span className="feature-check"><FaCheck /></span>
                    <span>Only pay for the leads you receive</span>
                  </li>
                  <li>
                    <span className="feature-check"><FaCheck /></span>
                    <span>Cost-effective acquisition strategy</span>
                  </li>
                  <li>
                    <span className="feature-check"><FaCheck /></span>
                    <span>Volume discounts available</span>
                  </li>
                  <li>
                    <span className="feature-check"><FaCheck /></span>
                    <span>Transparent billing with no hidden fees</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pricing-option">
              <div className="option-header">
                <div className="option-icon">
                  <Image src="/icons/settings.svg" alt="Customizable" width={40} height={40} />
                </div>
                <h3>Customizable Options</h3>
              </div>
              <div className="option-features">
                <ul>
                  <li>
                    <span className="feature-check"><FaCheck /></span>
                    <span>Target specific geographic areas</span>
                  </li>
                  <li>
                    <span className="feature-check"><FaCheck /></span>
                    <span>Filter by vehicle type or coverage needs</span>
                  </li>
                  <li>
                    <span className="feature-check"><FaCheck /></span>
                    <span>Exclusive territory options available</span>
                  </li>
                  <li>
                    <span className="feature-check"><FaCheck /></span>
                    <span>Tailor lead criteria to your needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pricing-cta">
            <a href="/pricing" className="pricing-button">
              Get Custom Pricing <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="cta-section animate-section">
          <div className="cta-background">
            <div className="cta-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <div className="cta-content">
              <h2>Get Started Today!</h2>
              <p>Don't miss out on high-converting Auto Insurance prospects. Get in touch now to start receiving real-time live transfer leads and scale your insurance sales effortlessly.</p>
              
              <Link href="/contact-us" className="cta-button">
                Get Your Auto Insurance Leads Now
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
                  <a href="tel:+18884509639">+1 (888) 450-9639</a>
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

export default AutoInsurance;

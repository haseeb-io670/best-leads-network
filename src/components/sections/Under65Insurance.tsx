import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaArrowRight, FaShieldAlt, FaHeartbeat, FaIdCard, FaUsers, FaRegLightbulb, FaHandshake, FaChartLine, FaRocket } from "react-icons/fa";

const Under65Insurance = () => {
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
        const heroOffset = window.scrollY * 0.4;
        (heroRef.current as HTMLElement).style.transform = `translateY(${heroOffset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="u65-insurance-section">
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
                <Image src="/icons/shield-check.svg" alt="" width={30} height={30} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="container" ref={heroRef}>
          <div className="hero-content">
            <div className="hero-badge">
              <Image src="/icons/shield-check.svg" alt="" width={18} height={18} />
              <span>Quality Health Insurance Leads</span>
            </div>
            <h1>U65 Live Transfer Leads for High-Converting Health Insurance Prospects</h1>
            <p className="subtitle">Connect with qualified health insurance prospects under 65 through our real-time live transfer lead generation system</p>
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
            <div className="floating-elements">
              <div className="floating-element shield">
                <FaShieldAlt className="icon" />
              </div>
              <div className="floating-element heart">
                <FaHeartbeat className="icon" />
              </div>
              <div className="floating-element card">
                <FaIdCard className="icon" />
              </div>
              <div className="floating-element users">
                <FaUsers className="icon" />
              </div>
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
              <div className="circle-pulse"></div>
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
            <h2>Pre-Qualified U65 Health Insurance Live Transfer Leads That Convert</h2>
            <p className="section-intro">A seamless process designed to connect you with high-intent health insurance prospects under 65</p>
          </div>
          
          <div className="process-steps">
            <div className="step-connector"></div>
            
            <div className="process-step">
              <div className="step-number">
                <span>1</span>
              </div>
              <div className="step-content">
                <h3>Lead Generation</h3>
                <p>We attract potential U65 insurance buyers through targeted marketing strategies across multiple channels.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">
                <span>2</span>
              </div>
              <div className="step-content">
                <h3>Pre-Qualification</h3>
                <p>Our team verifies their insurance needs, eligibility status, and coverage interests before transferring.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">
                <span>3</span>
              </div>
              <div className="step-content">
                <h3>Live Transfer</h3>
                <p>Once qualified, the lead is transferred directly to your sales agents in real-time for immediate engagement.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">
                <span>4</span>
              </div>
              <div className="step-content">
                <h3>Instant Connection</h3>
                <p>Engage with a highly interested prospect in real-time, increasing your chances of conversion and policy enrollment.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section animate-section">
          <div className="section-header">
            <h2>Benefits of Exclusive U65 Live Transfer Lead Generation</h2>
            <p className="section-intro">Discover why our U65 insurance leads outperform traditional lead generation methods</p>
          </div>
          
          <div className="benefits-hexgrid">
            <div className="hex-container">
              <div className="hex-item">
                <div className="hex-content">
                  <div className="benefit-icon">
                    <FaRegLightbulb />
                  </div>
                  <h3>Higher Closing Rates</h3>
                  <p>Warm leads ensure better conversions with less effort</p>
                </div>
              </div>
              
              <div className="hex-item">
                <div className="hex-content">
                  <div className="benefit-icon">
                    <FaHandshake />
                  </div>
                  <h3>Real-Time Engagement</h3>
                  <p>Instant connection with high-intent customers</p>
                </div>
              </div>
              
              <div className="hex-item">
                <div className="hex-content">
                  <div className="benefit-icon">
                    <FaChartLine />
                  </div>
                  <h3>Increased ROI</h3>
                  <p>More closed deals mean better return on investment</p>
                </div>
              </div>
              
              <div className="hex-item">
                <div className="hex-content">
                  <div className="benefit-icon">
                    <FaRocket />
                  </div>
                  <h3>Scalable Lead Volume</h3>
                  <p>Adjust lead flow based on your business needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="audience-section animate-section">
          <div className="section-header">
            <h2>Who Can Benefit from Our U65 Insurance Live Transfer Leads?</h2>
            <p className="section-intro">Our U65 insurance leads are perfect for healthcare insurance professionals focused on growth</p>
          </div>
          
          <div className="audience-cards">
            <div className="audience-card">
              <div className="card-header">
                <div className="icon-circle">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Health Insurance Agents & Brokers</h3>
              </div>
              <div className="card-body">
                <p>Connect with verified leads ready to purchase U65 health insurance policies. Grow your client base with high-quality prospects.</p>
                <ul className="feature-list">
                  <li><FaCheck className="check-icon" /> Qualified leads ready to enroll</li>
                  <li><FaCheck className="check-icon" /> Detailed prospect information</li>
                  <li><FaCheck className="check-icon" /> Instant connection with interested buyers</li>
                </ul>
                <Link href="/contact-us" className="card-cta">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
            
            <div className="audience-card">
              <div className="card-header">
                <div className="icon-circle">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Health Insurance Call Centers</h3>
              </div>
              <div className="card-body">
                <p>Receive real-time leads that convert faster. Keep your agents productive with a steady flow of pre-qualified health insurance prospects.</p>
                <ul className="feature-list">
                  <li><FaCheck className="check-icon" /> Optimized for call center operations</li>
                  <li><FaCheck className="check-icon" /> Seamless integration with CRM systems</li>
                  <li><FaCheck className="check-icon" /> Higher contact and conversion rates</li>
                </ul>
                <Link href="/contact-us" className="card-cta">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
            
            <div className="audience-card">
              <div className="card-header">
                <div className="icon-circle">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21H13V15H21V21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 21H3V12H11V21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 10H13V3H21V10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 9H3V3H11V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 6L5 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M19 7L15 7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M19 18L15 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 16.5L5 16.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Health Insurance Marketing Firms</h3>
              </div>
              <div className="card-body">
                <p>Access high-intent prospects to maximize campaign performance. Enhance your marketing strategies with qualified U65 leads for better ROI.</p>
                <ul className="feature-list">
                  <li><FaCheck className="check-icon" /> Complement existing marketing efforts</li>
                  <li><FaCheck className="check-icon" /> Improve campaign ROI metrics</li>
                  <li><FaCheck className="check-icon" /> Data-driven performance reporting</li>
                </ul>
                <Link href="/contact-us" className="card-cta">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="pricing-section animate-section">
          <div className="section-header">
            <h2>Flexible Lead Packages for U65 Insurance</h2>
            <p className="section-intro">Choose the pricing model that best suits your business needs</p>
          </div>
          
          <div className="pricing-tiles">
            <div className="pricing-tile">
              <div className="tile-header">
                <div className="tile-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V7.2C21 6.88174 20.8736 6.57652 20.6485 6.35147C20.4235 6.12643 20.1183 6 19.8 6H4.2C3.88174 6 3.57652 6.12643 3.35147 6.35147C3.12643 6.57652 3 6.88174 3 7.2V16.8C3 17.1183 3.12643 17.4235 3.35147 17.6485C3.57652 17.8736 3.88174 18 4.2 18H19.8C20.1183 18 20.4235 17.8736 20.6485 17.6485C20.8736 17.4235 21 17.1183 21 16.8V16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 12.0001C16.5523 12.0001 17 11.5524 17 11.0001C17 10.4478 16.5523 10.0001 16 10.0001C15.4477 10.0001 15 10.4478 15 11.0001C15 11.5524 15.4477 12.0001 16 12.0001Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12.0001C12.5523 12.0001 13 11.5524 13 11.0001C13 10.4478 12.5523 10.0001 12 10.0001C11.4477 10.0001 11 10.4478 11 11.0001C11 11.5524 11.4477 12.0001 12 12.0001Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12.0001C8.55228 12.0001 9 11.5524 9 11.0001C9 10.4478 8.55228 10.0001 8 10.0001C7.44772 10.0001 7 10.4478 7 11.0001C7 11.5524 7.44772 12.0001 8 12.0001Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Flexible Lead Packages</h3>
              </div>
              <div className="tile-body">
                <ul className="pricing-features">
                  <li>
                    <FaCheck className="check-icon" />
                    <span>Daily, weekly, or monthly lead plans</span>
                  </li>
                  <li>
                    <FaCheck className="check-icon" />
                    <span>Adjustable volume to match your capacity</span>
                  </li>
                  <li>
                    <FaCheck className="check-icon" />
                    <span>No long-term contracts required</span>
                  </li>
                  <li>
                    <FaCheck className="check-icon" />
                    <span>Pause or resume delivery as needed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pricing-tile">
              <div className="tile-badge">POPULAR</div>
              <div className="tile-header">
                <div className="tile-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.93 4.93L7.76 7.76" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.24 16.24L19.07 19.07" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.93 19.07L7.76 16.24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.24 7.76L19.07 4.93" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Pay-Per-Lead Model</h3>
              </div>
              <div className="tile-body">
                <ul className="pricing-features">
                  <li>
                    <FaCheck className="check-icon" />
                    <span>Only pay for the leads you receive</span>
                  </li>
                  <li>
                    <FaCheck className="check-icon" />
                    <span>Cost-effective acquisition strategy</span>
                  </li>
                  <li>
                    <FaCheck className="check-icon" />
                    <span>Volume discounts available</span>
                  </li>
                  <li>
                    <FaCheck className="check-icon" />
                    <span>Transparent billing with no hidden fees</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pricing-tile">
              <div className="tile-header">
                <div className="tile-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.4 15C19.2669 15.6255 18.9575 16.1962 18.5094 16.6311C18.0614 17.0659 17.4936 17.3442 16.8791 17.4357C16.2645 17.5272 15.6338 17.4271 15.0782 17.1496C14.5227 16.8722 14.0681 16.4323 13.78 15.89L10.22 8.11C9.93192 7.56774 9.47732 7.12784 8.92175 6.85036C8.36618 6.57287 7.73549 6.47284 7.12094 6.56429C6.50639 6.65575 5.93858 6.93401 5.49056 7.36886C5.04254 7.80371 4.73315 8.37447 4.6 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12C2 13.9778 2.58649 15.9112 3.6853 17.5557C4.78412 19.2002 6.3459 20.4819 8.17317 21.2388C10.0004 21.9957 12.0111 22.1937 13.9509 21.8079C15.8907 21.422 17.6725 20.4696 19.0711 19.0711C20.4696 17.6725 21.422 15.8907 21.8079 13.9509C22.1937 12.0111 21.9957 10.0004 21.2388 8.17317C20.4819 6.3459 19.2002 4.78412 17.5557 3.6853C15.9112 2.58649 13.9778 2 12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Customizable Options</h3>
              </div>
              <div className="tile-body">
                <ul className="pricing-features">
                  <li>
                    <FaCheck className="check-icon" />
                    <span>Target specific geographic areas</span>
                  </li>
                  <li>
                    <FaCheck className="check-icon" />
                    <span>Filter by coverage needs and budget</span>
                  </li>
                  <li>
                    <FaCheck className="check-icon" />
                    <span>Exclusive territory options available</span>
                  </li>
                  <li>
                    <FaCheck className="check-icon" />
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
              <p>Don't miss out on high-converting U65 Insurance prospects. Get in touch now to start receiving real-time live transfer leads and scale your insurance sales effortlessly.</p>
              
              <Link href="/contact-us" className="cta-button">
                Get Your U65 Insurance Leads Now
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

export default Under65Insurance;

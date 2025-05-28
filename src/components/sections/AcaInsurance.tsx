import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaArrowRight } from "react-icons/fa";

const AcaInsurance = () => {
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
    <section className="aca-insurance-section">
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
                <Image src="/icons/aca-pattern.svg" alt="" width={30} height={30} />
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
            <h1>ACA Live Transfer Leads for Health Insurance Marketplace Prospects</h1>
            <p className="subtitle">Connect with qualified healthcare prospects through our real-time ACA live transfer system</p>
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
            <div className="health-animation">
              <Image src="/icons/aca-pattern.svg" alt="Health" width={100} height={100} className="health-icon" />
              <div className="pulse-circle"></div>
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
          <h2 className="sub-heading">How Our ACA Insurance Live Transfer Leads Work</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Market Research</h3>
                <p>We identify individuals seeking Affordable Care Act (ACA) health insurance coverage.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Eligibility Screening</h3>
                <p>Our team pre-screens leads for ACA eligibility, including income levels and coverage requirements.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Quality Verification</h3>
                <p>Each lead is verified for accuracy and intent to enroll in an ACA health plan.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Instant Transfer</h3>
                <p>Qualified leads are immediately connected to ACA insurance specialists.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2 className="sub-heading">Pre-Qualified ACA Health Insurance Live Transfer Leads That Convert</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/check-verified.svg" alt="Pre-Qualified" width={40} height={40} />
              </div>
              <h3>Pre-Qualified Prospects</h3>
              <p>All leads are pre-screened for ACA eligibility and genuine interest.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/calendar.svg" alt="Enrollment Period" width={40} height={40} />
              </div>
              <h3>Enrollment Period Focus</h3>
              <p>Increased lead volume during Open Enrollment and Special Enrollment Periods.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/shield.svg" alt="Compliance" width={40} height={40} />
              </div>
              <h3>Compliance Assured</h3>
              <p>All leads are generated in compliance with ACA marketing regulations.</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/star.svg" alt="Quality" width={40} height={40} />
              </div>
              <h3>Quality Guaranteed</h3>
              <p>High-intent leads from individuals actively seeking ACA coverage.</p>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="audience-section animate-section">
          <h2 className="sub-heading">Real-Time ACA Marketplace Insurance Leads for Qualified Agents</h2>
          
          <div className="audience-cards">
            <div className="audience-card">
              <div className="audience-image">
                <Image 
                  src="/images/insurance/doctor-starting-recovery-plan-with-her-patient.webp" 
                  alt="ACA Insurance Agents" 
                  width={400} 
                  height={250} 
                  className="rounded-image"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="audience-content">
                <h3>ACA Insurance Agents</h3>
                <p>Connect with individuals seeking ACA-compliant health insurance plans and boost your client acquisition.</p>
              </div>
            </div>
            
            <div className="audience-card">
              <div className="audience-image">
                <Image 
                  src="/images/insurance/happy-senior-couple-communicating-with-doctor-about-their-health-insurance-while-going-through-paperwork.webp" 
                  alt="Healthcare Navigators" 
                  width={400} 
                  height={250} 
                  className="rounded-image"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="audience-content">
                <h3>Healthcare Navigators</h3>
                <p>Assist more people in understanding and enrolling in ACA coverage with our qualified lead generation.</p>
              </div>
            </div>
            
            <div className="audience-card">
              <div className="audience-image">
                <Image 
                  src="/images/insurance/family-insurance-reimbursement-protection-concept.webp" 
                  alt="Insurance Agencies" 
                  width={400} 
                  height={250} 
                  className="rounded-image"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="audience-content">
                <h3>Insurance Agencies</h3>
                <p>Expand your ACA insurance division with qualified leads that convert into long-term clients.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="pricing-section">
          <h2 className="sub-heading">Flexible Lead Packages</h2>
          
          <div className="pricing-features">
            <div className="pricing-feature">
              <div className="feature-icon">
                <Image src="/icons/package.svg" alt="Flexible Packages" width={32} height={32} />
              </div>
              <div className="feature-content">
                <h3>Flexible Lead Packages</h3>
                <p>Choose from daily, weekly, or monthly lead plans.</p>
              </div>
            </div>
            
            <div className="pricing-feature">
              <div className="feature-icon">
                <Image src="/icons/dollar.svg" alt="Pay-Per-Lead" width={32} height={32} />
              </div>
              <div className="feature-content">
                <h3>Pay-Per-Lead Model</h3>
                <p>Only pay for the leads you receive, ensuring cost-effectiveness.</p>
              </div>
            </div>
            
            <div className="pricing-feature">
              <div className="feature-icon">
                <Image src="/icons/settings.svg" alt="Customizable" width={32} height={32} />
              </div>
              <div className="feature-content">
                <h3>Customizable Options</h3>
                <p>Tailor lead volume and criteria to meet your business needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-background">
            <div className="cta-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <div className="cta-content">
              <h2>Get Started Today!</h2>
              <p>Don't miss out on high-converting ACA Insurance prospects. Get in touch now to start receiving real-time live transfer leads and scale your insurance sales effortlessly.</p>
              
              <Link href="/contact-us" className="cta-button">
                Get Your ACA Insurance Leads Now
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

export default AcaInsurance;

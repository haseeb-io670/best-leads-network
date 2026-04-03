import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeInsurance = () => {
  const [animateSection, setAnimateSection] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateSection(1);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      document.querySelectorAll('.animate-section').forEach((section) => {
        const rect = (section as HTMLElement).getBoundingClientRect();
        if (rect.top < windowHeight * 0.8) {
          section.classList.add('animated');
        }
      });
      if (heroRef.current) {
        const heroOffset = window.scrollY * 0.4;
        heroRef.current.style.transform = `translateY(${heroOffset}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="fe-insurance-section">
      <div className="hero-section">
        <div className="hero-background">
          <div className="hero-diagonal"></div>
          <div className="hero-pattern">
            {Array.from({ length: 10 }, (_, index) => (
              <div
                key={index}
                className="pattern-icon"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                <Image src="/icons/shield-check.svg" alt="" width={30} height={30} />
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
            <h1>Final Expense Live Transfer Leads for Life Insurance Agents</h1>
            <p className="subtitle">Connect with qualified seniors seeking Final Expense coverage through our real-time live transfer system</p>
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
            <div className="hero-trust">
              <div className="trust-item">
                <Image src="/icons/shield.svg" alt="" width={22} height={22} />
                <span>TCPA Compliant</span>
              </div>
              <div className="trust-item">
                <Image src="/icons/check-verified.svg" alt="" width={22} height={22} />
                <span>Double Verified</span>
              </div>
              <div className="trust-item">
                <Image src="/icons/star.svg" alt="" width={22} height={22} />
                <span>Exclusive Transfers</span>
              </div>
            </div>
          </div>
          <div className="hero-illustration">
            <div className="health-animation">
              <Image src="/icons/shield.svg" alt="Protection Shield" width={100} height={100} className="health-icon" />
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
        <div className="process-section animate-section">
          <h2 className="sub-heading">How Our Final Expense Live Transfer Leads Work</h2>
          <div className="assurance-row">
            <div className="assurance-item">
              <div className="assurance-icon">
                <Image src="/icons/shield.svg" alt="" width={28} height={28} />
              </div>
              <div className="assurance-text">
                <h4>Secure Transfers</h4>
                <p>TCPA compliant consented connections</p>
              </div>
            </div>
            <div className="assurance-item">
              <div className="assurance-icon">
                <Image src="/icons/star.svg" alt="" width={28} height={28} />
              </div>
              <div className="assurance-text">
                <h4>Exclusive Leads</h4>
                <p>Delivered to you only in real time</p>
              </div>
            </div>
            <div className="assurance-item">
              <div className="assurance-icon">
                <Image src="/icons/check-verified.svg" alt="" width={28} height={28} />
              </div>
              <div className="assurance-text">
                <h4>Quality Verified</h4>
                <p>Double verified senior intent</p>
              </div>
            </div>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Market Research</h3>
                <p>We identify seniors actively seeking Final Expense coverage to protect loved ones from burial and end-of-life costs.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Qualification</h3>
                <p>Leads are screened for age, interest, budget, and eligibility for simplified issue whole life policies.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Verification</h3>
                <p>We verify intent, contact details, and compliance before transferring the lead to your team.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Instant Transfer</h3>
                <p>Qualified prospects are connected to licensed agents in real time for maximum conversion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h2 className="sub-heading">Pre-Qualified Final Expense Leads That Convert</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/check-verified.svg" alt="Pre-Qualified" width={40} height={40} />
              </div>
              <h3>Pre-Qualified Seniors</h3>
              <p>All leads are screened for age, interest, and eligibility to ensure quality conversations.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/shield.svg" alt="Compliance" width={40} height={40} />
              </div>
              <h3>TCPA Compliant</h3>
              <p>Leads are generated and transferred in full compliance with TCPA regulations.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/star.svg" alt="Exclusive" width={40} height={40} />
              </div>
              <h3>Exclusive Leads</h3>
              <p>We deliver exclusive live transfers so you can focus on closing without competition.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/dollar.svg" alt="High Intent" width={40} height={40} />
              </div>
              <h3>High Intent</h3>
              <p>Prospects are actively seeking coverage, resulting in higher conversion rates.</p>
            </div>
          </div>
        </div>

        <div className="audience-section animate-section">
          <h2 className="sub-heading">Real-Time Final Expense Insurance Leads for Licensed Agents</h2>
          <div className="audience-cards">
            <div className="audience-card">
              <div className="audience-image">
                <Image
                  src="/images/insurance/happy-senior-couple-communicating-with-doctor-about-their-health-insurance-while-going-through-paperwork.webp"
                  alt="Life Insurance Agents"
                  width={400}
                  height={250}
                  className="rounded-image"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="audience-content">
                <h3>Life Insurance Agents</h3>
                <p>Connect with seniors seeking Final Expense coverage and grow your policy volume.</p>
              </div>
            </div>
            <div className="audience-card">
              <div className="audience-image">
                <Image
                  src="/images/insurance/african-american-doctor-helping-senior-man-get-up-from-chair-home-visit.webp" 
                  alt="Independent Brokers"
                  width={400}
                  height={250}
                  className="rounded-image"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="audience-content">
                <h3>Independent Brokers</h3>
                <p>Receive exclusive leads tailored to your preferred carriers and underwriting criteria.</p>
              </div>
            </div>
            <div className="audience-card">
              <div className="audience-image">
                <Image
                  src="/images/insurance/doctor-starting-recovery-plan-with-her-patient.webp"
                  alt="Insurance Agencies"
                  width={400}
                  height={250}
                  className="rounded-image"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="audience-content">
                <h3>Insurance Agencies</h3>
                <p>Scale your Final Expense division with real-time transfers that fit your sales workflow.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-section">
          <h2 className="sub-heading">Pricing</h2>
          <div className="pricing-features">
            <div className="pricing-feature">
              <div className="feature-icon">
                <Image src="/icons/dollar.svg" alt="Price" width={32} height={32} />
              </div>
              <div className="feature-content">
                <h3>Transparent Pay-Per-Lead</h3>
                <p>Exclusive live transfers with clear, predictable pricing.</p>
              </div>
            </div>
            <div className="pricing-feature">
              <div className="feature-icon">
                <Image src="/icons/package.svg" alt="Flexible Packages" width={32} height={32} />
              </div>
              <div className="feature-content">
                <h3>Flexible Lead Packages</h3>
                <p>Choose daily, weekly, or monthly plans aligned with your sales capacity.</p>
              </div>
            </div>
            <div className="pricing-feature">
              <div className="feature-icon">
                <Image src="/icons/settings.svg" alt="Customizable" width={32} height={32} />
              </div>
              <div className="feature-content">
                <h3>Customizable Options</h3>
                <p>Tailor lead criteria such as age ranges, states, and call windows.</p>
              </div>
            </div>
          </div>
          <div className="pricing-cta">
            <Link href="/pricing" className="pricing-button">
              View More Pricing
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-background">
            <div className="cta-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <div className="cta-content">
              <h2>Get Started Today!</h2>
              <p>Connect with high-intent Final Expense prospects. Start receiving real-time live transfer leads and grow your life insurance sales.</p>
              <Link href="/contact-us" className="cta-button">
                Get Your Final Expense Leads Now
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
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

export default FeInsurance;

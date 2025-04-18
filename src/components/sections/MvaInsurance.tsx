import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MvaInsurance = () => {
  const [animateSection, setAnimateSection] = useState(0);
  
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
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="mva-insurance-section">
      

      <div className="container main-content">
        {/* Process Section */}
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

        {/* Benefits Section */}
        <div className="benefits-section animate-section">
          <div className="section-header">
            <h2>Benefits of MVA Insurance Live Transfer Leads</h2>
            <p className="section-intro">What makes our MVA leads superior to the competition</p>
          </div>
          
          <div className="benefits-cards">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/chat.svg" alt="Higher Closing Rates" width={40} height={40} />
              </div>
              <div className="card-content">
                <h3>Higher Closing Rates</h3>
                <p>Warm leads ensure better conversions with less effort.</p>
                <div className="card-highlight"></div>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/calendar.svg" alt="Real-Time Engagement" width={40} height={40} />
              </div>
              <div className="card-content">
                <h3>Real-Time Engagement</h3>
                <p>Instant connection with high-intent customers means no delays.</p>
                <div className="card-highlight"></div>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/chart.svg" alt="Increased ROI" width={40} height={40} />
              </div>
              <div className="card-content">
                <h3>Increased ROI</h3>
                <p>More closed deals mean a better return on investment.</p>
                <div className="card-highlight"></div>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <Image src="/icons/arrow-up.svg" alt="Scalable Lead Volume" width={40} height={40} />
              </div>
              <div className="card-content">
                <h3>Scalable Lead Volume</h3>
                <p>Adjust lead flow based on your business needs.</p>
                <div className="card-highlight"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="audience-section animate-section">
          <div className="section-header">
            <h2>Who Can Benefit from Our MVA Insurance Live Transfer Leads?</h2>
            <p className="section-intro">Tailored solutions for various insurance professionals</p>
          </div>
          
          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon">
                <Image src="/icons/target.svg" alt="Target" width={40} height={40} />
              </div>
              <div className="audience-content">
                <h3>Auto Insurance Agents & Brokers</h3>
                <p>Connect with verified leads ready to purchase auto insurance policies.</p>
                <Link href="/contact" className="learn-more">
                  <span>Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="audience-card">
              <div className="audience-icon">
                <Image src="/icons/customer-service.svg" alt="Customer Service" width={40} height={40} />
              </div>
              <div className="audience-content">
                <h3>Call Centers</h3>
                <p>Receive real-time leads that convert faster.</p>
                <Link href="/contact" className="learn-more">
                  <span>Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="audience-card">
              <div className="audience-icon">
                <Image src="/icons/check-verified.svg" alt="Marketing" width={40} height={40} />
              </div>
              <div className="audience-content">
                <h3>Insurance Marketing Firms</h3>
                <p>Access high-intent prospects to maximize campaign performance.</p>
                <Link href="/contact" className="learn-more">
                  <span>Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="pricing-section animate-section">
          <div className="section-header">
            <h2>Flexible Lead Packages</h2>
            <p className="section-intro">Choose the plan that works for your business</p>
          </div>
          
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="card-badge">Popular</div>
              <div className="pricing-header">
                <div className="pricing-icon">
                  <Image src="/icons/package.svg" alt="Package" width={32} height={32} />
                </div>
                <h3>Flexible Lead Packages</h3>
              </div>
              <div className="pricing-description">
                <p>Choose from daily, weekly, or monthly lead plans.</p>
              </div>
              <ul className="pricing-features">
                <li>Customizable delivery schedule</li>
                <li>No long-term contracts</li>
                <li>Volume discounts available</li>
              </ul>
            </div>
            
            <div className="pricing-card">
              <div className="pricing-header">
                <div className="pricing-icon">
                  <Image src="/icons/dollar.svg" alt="Dollar" width={32} height={32} />
                </div>
                <h3>Pay-Per-Lead Model</h3>
              </div>
              <div className="pricing-description">
                <p>Only pay for the leads you receive, ensuring cost-effectiveness.</p>
              </div>
              <ul className="pricing-features">
                <li>No monthly minimums</li>
                <li>Premium lead quality</li>
                <li>Transparent pricing</li>
              </ul>
            </div>
            
            <div className="pricing-card">
              <div className="pricing-header">
                <div className="pricing-icon">
                  <Image src="/icons/settings.svg" alt="Settings" width={32} height={32} />
                </div>
                <h3>Customizable Options</h3>
              </div>
              <div className="pricing-description">
                <p>Tailor lead volume and criteria to meet your business needs.</p>
              </div>
              <ul className="pricing-features">
                <li>Geographic targeting</li>
                <li>Demographic filtering</li>
                <li>Lead quality controls</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section animate-section">
          <div className="cta-content">
            <h2>Ready to Boost Your Insurance Business?</h2>
            <p>Take advantage of our premium MVA Insurance lead transfers and start growing your client base today.</p>
            
            <div className="cta-stats">
              <div className="stat-item">
                <div className="stat-number">97<span>%</span></div>
                <div className="stat-label">Contact Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">78<span>%</span></div>
                <div className="stat-label">Conversion Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24<span>hr</span></div>
                <div className="stat-label">Support</div>
              </div>
            </div>
            
            <Link href="/contact" className="cta-button">
              Get Started Today
            </Link>
            <Link href="/pricing" className="cta-secondary">
              View Pricing
            </Link>
            
            <div className="contact-info">
              <div className="phone">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+18001234567">(800) 123-4567</a>
              </div>
              <div className="email">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@bestleads.com">info@bestleads.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MvaInsurance;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AcaInsurance = () => {
  return (
    <section className="aca-insurance-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">ACA Insurance Leads</h1>
        </div>

        {/* Process Section */}
        <div className="process-section">
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
          <h2 className="sub-heading">Benefits of ACA Insurance Live Transfer Leads</h2>
          
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
        <div className="audience-section">
          <h2 className="sub-heading">Who Can Benefit from Our ACA Insurance Live Transfer Leads?</h2>
          
          <div className="audience-cards">
            <div className="audience-card">
              <div className="audience-image">
                <Image src="/images/insurance-agent.jpg" alt="ACA Insurance Agents" width={300} height={200} className="rounded-image" />
              </div>
              <div className="audience-content">
                <h3>ACA Insurance Agents</h3>
                <p>Connect with individuals seeking ACA-compliant health insurance plans.</p>
              </div>
            </div>
            
            <div className="audience-card">
              <div className="audience-image">
                <Image src="/images/healthcare-navigator.jpg" alt="Healthcare Navigators" width={300} height={200} className="rounded-image" />
              </div>
              <div className="audience-content">
                <h3>Healthcare Navigators</h3>
                <p>Assist more people in understanding and enrolling in ACA coverage.</p>
              </div>
            </div>
            
            <div className="audience-card">
              <div className="audience-image">
                <Image src="/images/insurance-agency.jpg" alt="Insurance Agencies" width={300} height={200} className="rounded-image" />
              </div>
              <div className="audience-content">
                <h3>Insurance Agencies</h3>
                <p>Expand your ACA insurance division with qualified leads.</p>
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
          <div className="cta-content">
            <h2>Get Started Today!</h2>
            <p>Don't miss out on high-converting ACA Insurance prospects. Get in touch now to start receiving real-time live transfer leads and scale your insurance sales effortlessly.</p>
            <Link href="/contact" className="cta-button">
              Get Your ACA Insurance Leads Now
            </Link>
          </div>
          
          <div className="trust-indicators">
            <div className="trust-item">
              <Image src="/icons/customer-service.svg" alt="Customer Service" width={28} height={28} />
              <div className="trust-content">
                <span>Need assistance?</span>
                <a href="tel:+18882563257" className="phone-number">+1 (888) 256-3257</a>
              </div>
            </div>
            
            <div className="testimonial">
              <p>"The quality of ACA leads from BestLeads Network has transformed our business. Our agents are closing more deals with less effort."</p>
              <div className="testimonial-author">- Michael R., Insurance Agency Owner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcaInsurance;

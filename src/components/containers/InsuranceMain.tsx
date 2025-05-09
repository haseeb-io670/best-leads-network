import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShieldAlt, FaUserPlus, FaCarAlt, FaHeartbeat, FaHome, FaUserMd, FaBalanceScale } from 'react-icons/fa';

const InsuranceMain = () => {
  return (
    <div className="insurance-main">
      <section className="insurance-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Premium Live Transfer Leads for Medicare, ACA, MVA, and Auto Insurance</h1>
            <p className="hero-description">
              Best Leads Network delivers high-intent, exclusive insurance leads across multiple verticals. 
              Our advanced verification process ensures you connect with qualified prospects actively seeking coverage.
            </p>
            <div className="hero-cta">
              <Link href="/sample-leads" className="btn primary-btn">
              Sample Leads
              </Link>
              <Link href="/contact-us" className="btn outline-btn">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="insurance-categories">
        <div className="container">
          <div className="section-header">
            <h2>Connect with <span className="highlight">Pre-Qualified</span> Medicare and ACA Prospects in Real-Time</h2>
            <p>Explore our comprehensive range of insurance lead verticals, each tailored to connect you with high-intent prospects</p>
          </div>

          <div className="categories-grid">
            <div className="category-card" id="medicare-leads">
              <div className="card-icon">
                <FaUserMd />
              </div>
              <h3>Medicare Leads</h3>
              <p>Connect with seniors actively seeking Medicare Advantage, Medicare Supplement, and Prescription Drug Plans. Our Medicare leads are 100% exclusive and TCPA compliant.</p>
              <ul className="category-features">
                <li>Medicare Advantage (Part C)</li>
                <li>Medicare Supplement (Medigap)</li>
                <li>Prescription Drug Plans (Part D)</li>
                <li>Medicare Special Needs Plans</li>
              </ul>
              <Link href="/insurance/medicare" className="category-link">
                Learn More
              </Link>
            </div>

            <div className="category-card" id="aca-leads">
              <div className="card-icon">
                <FaHeartbeat />
              </div>
              <h3>ACA Health Insurance Leads</h3>
              <p>Access verified leads for Affordable Care Act (ACA) health insurance plans. Our leads include individuals and families seeking comprehensive health coverage during open enrollment and special enrollment periods.</p>
              <ul className="category-features">
                <li>Marketplace Health Plans</li>
                <li>Subsidized Coverage</li>
                <li>Family Health Insurance</li>
                <li>Special Enrollment Periods</li>
              </ul>
              <Link href="/insurance/aca" className="category-link">
                Learn More
              </Link>
            </div>

            <div className="category-card" id="auto-leads">
              <div className="card-icon">
                <FaCarAlt />
              </div>
              <h3>Auto Insurance Leads</h3>
              <p>Generate more auto insurance policies with our high-converting leads. We connect you with drivers actively shopping for better rates, new coverage, or specific auto insurance products.</p>
              <ul className="category-features">
                <li>Personal Auto Insurance</li>
                <li>Commercial Auto Coverage</li>
                <li>Motorcycle Insurance</li>
                <li>SR-22 Filing Assistance</li>
              </ul>
              <Link href="/insurance/auto" className="category-link">
                Learn More
              </Link>
            </div>

            <div className="category-card" id="mva-leads">
              <div className="card-icon">
                <FaBalanceScale />
              </div>
              <h3>MVA Legal Leads</h3>
              <p>Connect with individuals seeking legal representation after motor vehicle accidents. Our MVA leads are pre-screened and verified to ensure quality cases for personal injury attorneys and law firms.</p>
              <ul className="category-features">
                <li>Personal Injury Cases</li>
                <li>Auto Accident Claims</li>
                <li>Motorcycle Accidents</li>
                <li>Commercial Vehicle Incidents</li>
              </ul>
              <Link href="/insurance/mva" className="category-link">
                Learn More
              </Link>
            </div>

            <div className="category-card" id="u65-leads">
              <div className="card-icon">
                <FaShieldAlt />
              </div>
              <h3>U65 Insurance Leads</h3>
              <p>Connect with individuals under 65 seeking comprehensive health coverage options. Our U65 leads include prospects looking for individual and family health plans outside of Medicare and ACA marketplaces.</p>
              <ul className="category-features">
                <li>Individual Health Plans</li>
                <li>Family Coverage Options</li>
                <li>Short-Term Health Insurance</li>
                <li>Supplemental Health Coverage</li>
              </ul>
              <Link href="/insurance/u65" className="category-link">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="lead-delivery">
        <div className="container">
          <div className="delivery-content">
            <div className="delivery-info">
              <span className="section-subtitle">Lead Delivery</span>
              <h2>Exclusive MVA and Auto Insurance Live Transfers to Boost Your Sales</h2>
              <p>
                At Best Leads Network, we provide flexible delivery methods to seamlessly integrate with your sales process. 
                Our insurance leads are delivered in real-time, ensuring you can connect with prospects while their interest is at its peak.
              </p>
              
              <div className="delivery-methods">
                <div className="method-item">
                  <div className="method-icon">
                    <FaUserPlus />
                  </div>
                  <div className="method-content">
                    <h3>Live Transfer Leads</h3>
                    <p>Connect instantly with prospects via warm transfers. Our agents pre-qualify each lead before transferring them directly to your sales team, maximizing conversion opportunities.</p>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon">
                    <FaShieldAlt />
                  </div>
                  <div className="method-content">
                    <h3>Real-Time Data Leads</h3>
                    <p>Receive lead information instantly through our secure portal, API integration, or email notifications. All leads include comprehensive contact information and insurance needs.</p>
                  </div>
                </div>
              </div>
              
              <div className="delivery-cta">
                <Link href="/contact-us" className="btn primary-btn">
                  Get Started Today
                </Link>
              </div>
            </div>
            
            <div className="delivery-image">
              <Image 
                src="/images/insurance/doctor-starting-recovery-plan-with-her-patient.webp" 
                alt="Insurance Lead Delivery Process" 
                width={500} 
                height={400}
                className="delivery-illustration"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="insurance-showcase">
        <div className="container">
          <div className="section-header">
            <h2>High-Converting Insurance Leads for Every Vertical</h2>
            <p>Tailored lead generation services for every insurance vertical</p>
          </div>
          
          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-image">
                <Image 
                  src="/images/insurance/happy-senior-couple-communicating-with-doctor-about-their-health-insurance-while-going-through-paperwork.webp" 
                  alt="Medicare Insurance Consultation" 
                  width={600} 
                  height={400}
                  className="rounded-image"
                />
              </div>
              <div className="showcase-content">
                <h3>Medicare Lead Solutions</h3>
                <p>Connect with qualified seniors actively seeking Medicare coverage options. Our verification process ensures high-intent prospects.</p>
                <Link href="/insurance/medicare" className="btn outline-btn">Learn More</Link>
              </div>
            </div>
            
            <div className="showcase-item reverse">
              <div className="showcase-image">
                <Image 
                  src="/images/insurance/family-insurance-reimbursement-protection-concept.webp" 
                  alt="ACA Health Insurance for Families" 
                  width={600} 
                  height={400}
                  className="rounded-image"
                />
              </div>
              <div className="showcase-content">
                <h3>ACA Health Insurance Leads</h3>
                <p>Access verified leads for families seeking Affordable Care Act coverage during open enrollment and special enrollment periods.</p>
                <Link href="/insurance/aca" className="btn outline-btn">Learn More</Link>
              </div>
            </div>
            
            <div className="showcase-item">
              <div className="showcase-image">
                <Image 
                  src="/images/insurance/car-insurance-coverage-accident-benefits.webp" 
                  alt="Auto Insurance Coverage" 
                  width={600} 
                  height={400}
                  className="rounded-image"
                />
              </div>
              <div className="showcase-content">
                <h3>Auto Insurance Leads</h3>
                <p>Generate more auto insurance policies with high-converting leads from drivers actively shopping for better rates and coverage.</p>
                <Link href="/insurance/auto" className="btn outline-btn">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="insurance-cta">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-content">
              <h2>Ready to Grow Your Insurance Business?</h2>
              <p>Partner with Best Leads Network for high-quality, exclusive insurance leads that convert. Our comprehensive verification process ensures you only receive leads that match your target criteria.</p>
              <div className="cta-buttons">
                <Link href="/contact-us" className="btn primary-btn">
                  Request Leads
                </Link>
                <Link href="/pricing" className="btn outline-btn">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsuranceMain;

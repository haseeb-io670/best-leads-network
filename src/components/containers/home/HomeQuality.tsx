import React from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaSync, FaAward, FaLock } from 'react-icons/fa';

const HomeQuality = () => {
  return (
    <section className="lead-quality-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Commitment</span>
          <h2 className="section-title">Lead Quality <span className="highlight">Guarantee</span></h2>
          <p className="section-description">
            At Best Leads Network, we understand that superior lead quality and conversion potential are paramount for live transfer leads. 
            Our comprehensive quality assurance process ensures you receive only the highest caliber prospects across all insurance verticals.
          </p>
        </div>

        <div className="quality-grid">
          <div className="quality-card">
            <div className="card-icon">
              <FaShieldAlt />
            </div>
            <div className="card-content">
              <h3>100% Verified & Exclusive Transfers</h3>
              <p>
                Our rigorous verification process ensures every lead matches your campaign criteria before transfer. 
                You'll connect exclusively with qualified prospects actively seeking Medicare enrollment, ACA health coverage, 
                Auto Insurance quotes, or MVA legal assistance.
              </p>
            </div>
          </div>

          <div className="quality-card">
            <div className="card-icon">
              <FaSync />
            </div>
            <div className="card-content">
              <h3>24-Hour Lead Replacement Policy</h3>
              <p>
                We stand behind our lead quality with a comprehensive replacement guarantee. Any lead that proves to be 
                duplicated, disconnected, or unqualified will be replaced within 24 hours upon notification, 
                safeguarding your investment and maximizing your marketing ROI.
              </p>
            </div>
          </div>

          <div className="quality-card">
            <div className="card-icon">
              <FaAward />
            </div>
            <div className="card-content">
              <h3>Trusted by Insurance Professionals Nationwide</h3>
              <p>
                Insurance agents, brokers, and legal teams across the country rely on our network for high-converting 
                Medicare, ACA, Auto Insurance, and MVA live transfer leads. Our advanced filtering technology and 
                strict compliance protocols deliver only high-intent prospects ready to engage.
              </p>
            </div>
          </div>

          <div className="quality-card">
            <div className="card-icon">
              <FaLock />
            </div>
            <div className="card-content">
              <h3>Lead Quality Assurance</h3>
              <p>
                Our comprehensive quality framework provides confidence-building assurances including TCPA compliance, 
                24-hour replacement guarantee, 100% U.S.-based live transfers, and verified interest across Medicare, 
                ACA, Auto Insurance, and MVA verticals.
              </p>
            </div>
          </div>
        </div>

        <div className="quality-cta">
          <div className="cta-content">
            <h3>Connect with Qualified Prospects Today</h3>
            <p>
              Whether targeting seniors for Medicare, families seeking ACA health plans, drivers shopping for auto insurance, 
              or individuals requiring MVA services—we facilitate connections with verified prospects ready for meaningful engagement.
            </p>
            <Link href="/contact-us" className="btn primary-btn cta-button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeQuality;

import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const PricingMain = () => {
  return (
    <section className="pricing-main">
      <div className="pricing-header">
        <div className="container">
          <h1 className="section-title">
            <span>Live Transfer</span> Pricing
          </h1>
          <p className="section-subtitle">
            High-quality insurance leads to boost your conversion rates and grow your business
          </p>
        </div>
      </div>

      <div className="container">
        <div className="pricing-cards simple-pricing">
          <div className="pricing-card">
            <div className="card-header">
              <h3>Medicare</h3>
              <p className="transfer-type">(Live transfers)</p>
              <div className="price">
                <span className="amount">$30</span>
                <span className="period">/ Per live transfer</span>
              </div>
            </div>
            <div className="card-body">
              <ul className="features">
                <li><div className="check-circle"><FaCheck /></div> Automated Emails</li>
                <li><div className="check-circle"><FaCheck /></div> 100% Exclusive Leads</li>
                <li><div className="check-circle"><FaCheck /></div> CRM System</li>
                <li><div className="check-circle"><FaCheck /></div> Real Time Lead Alerts</li>
                <li><div className="check-circle"><FaCheck /></div> TCPA & DNC Compliance</li>
                <li><div className="check-circle"><FaCheck /></div> DNC Scrubbing</li>
                <li><div className="check-circle"><FaCheck /></div> Double Verified</li>
                <li><div className="check-circle"><FaCheck /></div> 24/7 Support</li>
              </ul>
            </div>
            <div className="card-footer">
              <Link href="/contact" className="pricing-cta">
                Get Started
              </Link>
            </div>
          </div>

          <div className="pricing-card">
            <div className="card-header">
              <h3>ACA</h3>
              <p className="transfer-type">(Live transfers)</p>
              <div className="price">
                <span className="amount">$40</span>
                <span className="period">/ Per live transfer</span>
              </div>
            </div>
            <div className="card-body">
              <ul className="features">
                <li><div className="check-circle"><FaCheck /></div> Automated Emails</li>
                <li><div className="check-circle"><FaCheck /></div> 100% Exclusive Leads</li>
                <li><div className="check-circle"><FaCheck /></div> CRM System</li>
                <li><div className="check-circle"><FaCheck /></div> Real Time Lead Alerts</li>
                <li><div className="check-circle"><FaCheck /></div> TCPA & DNC Compliance</li>
                <li><div className="check-circle"><FaCheck /></div> DNC Scrubbing</li>
                <li><div className="check-circle"><FaCheck /></div> Double Verified</li>
                <li><div className="check-circle"><FaCheck /></div> 24/7 Support</li>
              </ul>
            </div>
            <div className="card-footer">
              <Link href="/contact" className="pricing-cta">
                Get Started
              </Link>
            </div>
          </div>

          <div className="pricing-card">
            <div className="card-header">
              <h3>Auto Insurance</h3>
              <p className="transfer-type">(Live transfers)</p>
              <div className="price">
                <span className="amount">$35</span>
                <span className="period">/ Per live transfer</span>
              </div>
            </div>
            <div className="card-body">
              <ul className="features">
                <li><div className="check-circle"><FaCheck /></div> Automated Emails</li>
                <li><div className="check-circle"><FaCheck /></div> 100% Exclusive Leads</li>
                <li><div className="check-circle"><FaCheck /></div> CRM System</li>
                <li><div className="check-circle"><FaCheck /></div> Real Time Lead Alerts</li>
                <li><div className="check-circle"><FaCheck /></div> TCPA & DNC Compliance</li>
                <li><div className="check-circle"><FaCheck /></div> DNC Scrubbing</li>
                <li><div className="check-circle"><FaCheck /></div> Double Verified</li>
                <li><div className="check-circle"><FaCheck /></div> 24/7 Support</li>
              </ul>
            </div>
            <div className="card-footer">
              <Link href="/contact" className="pricing-cta">
                Get Started
              </Link>
            </div>
          </div>

          <div className="pricing-card">
            <div className="card-header">
              <h3>MVA</h3>
              <p className="transfer-type">(Live transfers)</p>
              <div className="price">
                <span className="amount">$120</span>
                <span className="period">/ Per live transfer</span>
              </div>
            </div>
            <div className="card-body">
              <ul className="features">
                <li><div className="check-circle"><FaCheck /></div> Automated Emails</li>
                <li><div className="check-circle"><FaCheck /></div> 100% Exclusive Leads</li>
                <li><div className="check-circle"><FaCheck /></div> CRM System</li>
                <li><div className="check-circle"><FaCheck /></div> Real Time Lead Alerts</li>
                <li><div className="check-circle"><FaCheck /></div> TCPA & DNC Compliance</li>
                <li><div className="check-circle"><FaCheck /></div> DNC Scrubbing</li>
                <li><div className="check-circle"><FaCheck /></div> Double Verified</li>
                <li><div className="check-circle"><FaCheck /></div> 24/7 Support</li>
              </ul>
            </div>
            <div className="card-footer">
              <Link href="/contact" className="pricing-cta">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="custom-plan">
          <div className="custom-plan-content">
            <div className="plan-heading">
              <h3>Need a Custom Solution?</h3>
              <p>Get a tailored plan designed specifically for your business needs and volume requirements.</p>
            </div>
            <Link href="/contact" className="custom-plan-cta">
              Contact Sales <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div className="guarantee-section">
        <div className="container">
          <div className="guarantee-wrapper">
            <div className="guarantee-content">
              <h3>Our Performance Guarantee</h3>
              <p>We're so confident in our leads that if they don't meet our quality standards, we'll replace them for free. No questions asked.</p>
              <ul className="guarantee-features">
                <li><div className="check-circle"><FaCheck /></div> 85%+ Contact Rate Guarantee</li>
                <li><div className="check-circle"><FaCheck /></div> Verified Interest Insurance Leads</li>
                <li><div className="check-circle"><FaCheck /></div> Fresh Leads Delivered in Real-Time</li>
                <li><div className="check-circle"><FaCheck /></div> Industry-Leading Conversion Rates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingMain;

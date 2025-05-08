import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeOneBanner = () => {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-content">
            <h1 className="hero-title">Generate High-Quality <span className="highlight">Exclusive Leads</span> That Convert</h1>
            <p className="hero-text">
              Specialized insurance lead generation for Medicare, ACA, Auto, and MVA verticals. Our TCPA-compliant live transfers connect you with qualified prospects seeking health and auto coverage.
            </p>
            <div className="banner-stats">
              <div className="stat-item">
                <span className="stat-number">94%</span>
                <span className="stat-text">Contact Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">87%</span>
                <span className="stat-text">Conversion Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-text">Lead Delivery</span>
              </div>
            </div>
            <div className="banner-buttons">
              <Link href="tel:+18882563257" className="btn primary-btn">
                Call (888) 256-3257
              </Link>
              <Link href="/sample-leads" className="btn secondary-btn">
              Sample Leads
              </Link>
            </div>
          </div>
          <div className="banner-form">
            <div className="form-container">
              <div className="form-header">
                <h3>Start Generating Leads Today</h3>
                <p>Fill out the form to get started with a free consultation</p>
              </div>
              <form className="lead-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Full Name*" 
                    required 
                    aria-label="Full Name"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Business Email*" 
                    required 
                    aria-label="Business Email"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    placeholder="Phone Number*" 
                    required 
                    aria-label="Phone Number"
                  />
                </div>
                <div className="form-group">
                  <select defaultValue="" required aria-label="Industry">
                    <option value="" disabled>Select Industry*</option>
                    <option value="medicare">Medicare Leads</option>
                    <option value="aca">ACA Leads</option>
                    <option value="mva">MVA Leads</option>
                    <option value="auto">Auto Leads</option>
                    <option value="under65">U65 Leads</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <select defaultValue="" required aria-label="Lead Volume">
                    <option value="" disabled>Monthly Lead Volume*</option>
                    <option value="1-50">1-50 leads</option>
                    <option value="51-100">51-100 leads</option>
                    <option value="101-500">101-500 leads</option>
                    <option value="500+">500+ leads</option>
                  </select>
                </div>
                <button type="submit" className="form-submit-btn">Get Started Now</button>
              </form>
              <div className="form-footer">
                <p className="privacy-text">By submitting, you agree to our <Link href="/privacypolicy">Privacy Policy</Link></p>
                <div className="trust-badges">
                  <span className="badge">
                    <Image src="/icons/shield-check.svg" alt="Secure" width={16} height={16} />
                    <span>256-bit SSL</span>
                  </span>
                  <span className="badge">
                    <Image src="/icons/verified.svg" alt="Verified" width={16} height={16} />
                    <span>Verified Business</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOneBanner; 
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeOneBanner = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      industry: '',
      leadVolume: '',
      message: '',
      consent: '1'
    });
  
    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState<{
      success: boolean;
      message: string;
    } | null>(null);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target as HTMLInputElement;
      setFormData(prevState => ({
        ...prevState,
        [name] : value
      }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setResponseMessage(null);
  
      try {
        const response = await fetch('/api/contact/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        setResponseMessage(data);
  
        if (data.success) {
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            industry: '',
            leadVolume: '',
            message: '',
            consent: '1'
          });
        }
      } catch (error) {
        setResponseMessage({
          success: false,
          message: 'Failed to send message. Please try again.'
        });
      } finally {
        setIsLoading(false);
      }
    };
  
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-content">
            <h1 className="hero-title">Generate High-Quality <span className="highlight">Exclusive Leads</span> That Convert</h1>
            <p className="hero-text">
            Best Leads Network delivers premium live transfer leads for Medicare, ACA, MVA, and auto insurance. Connect with pre-qualified, ready-to-convert prospects in real-time to accelerate your sales and grow your Insurance Business.
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
              <Link href="tel:+18002321145" className="btn primary-btn">
                Call (800) 232-1145
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
              <form className="lead-form" onSubmit={handleSubmit}>
                {responseMessage && (
                <div className={`form-status ${responseMessage.success ? 'success' : 'error'}`}>
                  {responseMessage.message}
                </div>
                )}
                <div className="form-group">
                  <input 
                    type="text" 
                    name='name'
                    placeholder="Full Name*" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Business Email*" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="tel" 
                    placeholder="Phone Number*" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <select 
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required 
                  >
                    <option selected value="">Select Industry*</option>
                    <option value="medicare">Medicare Leads</option>
                    <option value="aca">ACA Leads</option>
                    <option value="mva">MVA Leads</option>
                    <option value="auto">Auto Leads</option>
                    <option value="under65">U65 Leads</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <select 
                    name="leadVolume"
                    value={formData.leadVolume}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  >
                    <option selected value="">Monthly Lead Volume*</option>
                    <option value="1-50">1-50 leads</option>
                    <option value="51-100">51-100 leads</option>
                    <option value="101-500">101-500 leads</option>
                    <option value="500+">500+ leads</option>
                    <option value="custom">Custom offer</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Write us a message..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    rows={6}
                    className="form-control"
                  />
                </div>
                <button 
                  type="submit" 
                  className={`form-submit-btn ${isLoading ? 'Loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Get Started Now'}
                </button>
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
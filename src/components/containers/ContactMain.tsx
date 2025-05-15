import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const ContactMain = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    leadVolume: '',
    consent: '1'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
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
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Get in touch with us</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Write a Message</h3>
              {responseMessage && (
                <div className={`form-status ${responseMessage.success ? 'success' : 'error'}`}>
                  {responseMessage.message}
                </div>
              )}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
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
                    name="email"
                    placeholder="Business Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
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
                    aria-label="Industry"
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
                    <option selected value="monthly">Monthly Lead Volume*</option>
                    <option value="1-50">1-50 leads</option>
                    <option value="51-100">51-100 leads</option>
                    <option value="101-500">101-500 leads</option>
                    <option value="500+">500+ leads</option>
                    <option value="custom">Custom offer</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className={`submit-btn ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>

          <div className="contact-details">
            <div className="info-card">
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaPhoneAlt />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:+18882563257">+1 (888) 256-3257</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:contact@bestleadsnetwork.com">contact@bestleadsnetwork.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Address</h4>
                  <address>
                    <a href="https://maps.app.goo.gl/8967N3v5D2PyCbnX6" target="_blank" rel="noopener noreferrer">
                      14 Hartland Ave<br />
                      Huntington Station, NY 11746<br />
                      USA
                    </a>
                  </address>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.facebook.com/bestleadsnetwork" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/bestleadsnetworkllc/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/best-leads-network/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </div>
              
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.109796102247!2d-73.3802147636227!3d40.84751313840903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e828b7a443fd25%3A0xc7af8f78fed6b9c1!2s14%20Hartland%20Ave%2C%20Huntington%20Station%2C%20NY%2011746%2C%20USA!5e0!3m2!1sen!2s!4v1745341274186!5m2!1sen!2s" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BestLeads Network Office Location"
                  className="location-map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* New Contact CTA Section */}
        <div className="contact-cta-section">
          <div className="cta-card">
            <div className="cta-content">
              <h3 className="cta-title">Ready to Boost Your Business with High-Quality Leads?</h3>
              <p className="cta-description">
                Discover how our premium lead generation services can help you connect with more qualified prospects and grow your business.
              </p>
              <div className="cta-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <span>98%</span>
                  </div>
                  <div className="feature-text">
                    <p>Verified Leads</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <span>24h</span>
                  </div>
                  <div className="feature-text">
                    <p>Delivery Time</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <span>30+</span>
                  </div>
                  <div className="feature-text">
                    <p>Industries Served</p>
                  </div>
                </div>
              </div>
              <div className="cta-action">
                <Link href="/pricing" className="cta-btn primary">
                  View Lead Packages <FaArrowRight className="btn-icon" />
                </Link>
                <Link href="/sample-leads" className="cta-btn secondary">
                  Request Sample Leads
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;

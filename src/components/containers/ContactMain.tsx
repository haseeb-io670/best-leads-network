import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ContactMain = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message. We will get back to you shortly!'
    });

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
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
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message*"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send a Message
                </button>
                {submitStatus.submitted && (
                  <div className={`form-status ${submitStatus.success ? 'success' : 'error'}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="contact-details">
            <div className="info-card">
              <p className="location-text">
                Our office is conveniently located in Huntington Station, NY. Visit us at 14 Hartland Ave, Huntington Station, NY 11746, USA.
              </p>
              <p className="map-text">
                If you prefer to see our location on a map, please contact us directly and we'll provide directions.
              </p>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <Image src="/icons/phone.svg" alt="Phone" width={24} height={24} />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:+18882563257">+1 (888) 256-3257</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:contact@bestleadsnetwork.com">contact@bestleadsnetwork.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper">
                  <Image src="/icons/map-pin.svg" alt="Address" width={24} height={24} />
                </div>
                <div className="contact-text">
                  <h4>Address</h4>
                  <address>
                    14 Hartland Ave<br />
                    Huntington Station, NY 11746<br />
                    USA
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
            </div>
          </div>
        </div>

        {/* Lead Generation CTA */}
        <div className="leads-cta">
          <div className="cta-content">
            <h3>Ready to Grow Your Business?</h3>
            <p>Join thousands of businesses that trust BestLeads Network for high-quality, verified leads that convert.</p>
            
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Verified Leads</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24h</div>
                <div className="stat-label">Delivery Time</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">Industries Served</div>
              </div>
            </div>
            
            <div className="cta-buttons">
              <Link href="/pricing" className="primary-btn">
                View Lead Packages
              </Link>
              <Link href="/leads-demo" className="secondary-btn">
                Request Sample Leads
              </Link>
            </div>
          </div>
          
          <div className="testimonial-slider">
            <div className="testimonial-item">
              <div className="testimonial-quote">
                "BestLeads Network increased our conversion rate by 45% in just two months. The quality of leads is exceptional."
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">Sarah Johnson</div>
                  <div className="author-position">Marketing Director, TechSolutions Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;

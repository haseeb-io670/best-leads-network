import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaShieldAlt, 
  FaChartLine, 
  FaUserCheck, 
  FaRegClock,
  FaDatabase,
  FaRegHandshake,
  FaHeadset,
  FaQuoteLeft,
  FaArrowRight,
  FaTimes,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';

const WhyUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="why-us-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Why <span className="text-highlight">BestLeads Network</span> Is Your Premier Lead Generation Partner
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hero-subtitle"
            >
              Delivering premium quality insurance leads with industry-leading conversion rates since 2012
            </motion.p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link href="/contact-us" className="btn btn-primary">Start Getting Leads</Link>
              <Link href="/contact-us" className="btn btn-outline">Book a Demo</Link>
            </motion.div>
          </div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image 
              src="/images/Why-BestLeads.webp" 
              alt="BestLeads Network Team" 
              width={600} 
              height={500}
              className="hero-img"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div 
            className="stats-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="stat-card" variants={scaleIn}>
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Retention Rate</div>
            </motion.div>
            <motion.div className="stat-card" variants={scaleIn}>
              <div className="stat-number">3.5M+</div>
              <div className="stat-label">Leads Delivered</div>
            </motion.div>
            <motion.div className="stat-card" variants={scaleIn}>
              <div className="stat-number">32%</div>
              <div className="stat-label">Average Conversion Rate</div>
            </motion.div>
            <motion.div className="stat-card" variants={scaleIn}>
              <div className="stat-number">4,500+</div>
              <div className="stat-label">Active Insurance Agents</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Core Benefits of Choosing BestLeads Network</h2>
            <p>We're not just another lead vendor — we're your growth partner</p>
          </motion.div>

          <motion.div 
            className="benefits-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="benefit-card" variants={fadeInUp}>
              <div className="benefit-icon quality-icon">
                <FaUserCheck />
              </div>
              <h3>Premium Lead Quality</h3>
              <p>Our multi-step verification process ensures you only receive high-intent leads with accurate contact information and genuine interest in insurance products.</p>
            </motion.div>

            <motion.div className="benefit-card" variants={fadeInUp}>
              <div className="benefit-icon exclusivity-icon">
                <FaShieldAlt />
              </div>
              <h3>Lead Exclusivity</h3>
              <p>Unlike competitors who sell the same lead multiple times, we provide exclusive leads to maximize your conversion potential and ROI.</p>
            </motion.div>

            <motion.div className="benefit-card" variants={fadeInUp}>
              <div className="benefit-icon targeting-icon">
                <FaDatabase />
              </div>
              <h3>Advanced Targeting</h3>
              <p>Our sophisticated filtering options allow you to specify exactly the types of leads you want based on demographics, location, coverage needs, and more.</p>
            </motion.div>

            <motion.div className="benefit-card" variants={fadeInUp}>
              <div className="benefit-icon delivery-icon">
                <FaRegClock />
              </div>
              <h3>Real-Time Delivery</h3>
              <p>Receive fresh leads instantly through our platform, email, or CRM integration, allowing you to contact prospects while their interest is at its peak.</p>
            </motion.div>

            <motion.div className="benefit-card" variants={fadeInUp}>
              <div className="benefit-icon insights-icon">
                <FaChartLine />
              </div>
              <h3>Performance Analytics</h3>
              <p>Access detailed reports and analytics to track your lead performance, conversions, and ROI through our intuitive dashboard.</p>
            </motion.div>

            <motion.div className="benefit-card" variants={fadeInUp}>
              <div className="benefit-icon support-icon">
                <FaHeadset />
              </div>
              <h3>Dedicated Support</h3>
              <p>Our team of insurance lead specialists provides personalized assistance to optimize your lead generation strategy and maximize results.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>How We Compare to Other Lead Providers</h2>
            <p>See why insurance professionals choose BestLeads Network over the competition</p>
          </motion.div>

          <motion.div 
            className="comparison-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="comparison-cards">
              <motion.div 
                className="comparison-card us-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-header">
                  <h3>BestLeads Network</h3>
                  <div className="highlight-badge">Recommended</div>
                </div>
                <ul className="comparison-features">
                  <li>
                    <span className="check-icon"><FaCheckCircle /></span>
                    <div className="feature-text">
                      <strong>100% Exclusive Leads</strong>
                      <p>We never sell the same lead to multiple agents</p>
                    </div>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheckCircle /></span>
                    <div className="feature-text">
                      <strong>Multi-step Verification Process</strong>
                      <p>Every lead undergoes rigorous validation</p>
                    </div>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheckCircle /></span>
                    <div className="feature-text">
                      <strong>Real-time Delivery</strong>
                      <p>Receive fresh leads instantly</p>
                    </div>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheckCircle /></span>
                    <div className="feature-text">
                      <strong>Transparent Replacement Policy</strong>
                      <p>No questions asked returns for bad leads</p>
                    </div>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheckCircle /></span>
                    <div className="feature-text">
                      <strong>Dedicated Account Manager</strong>
                      <p>Personalized service and strategy</p>
                    </div>
                  </li>
                  <li>
                    <span className="check-icon"><FaCheckCircle /></span>
                    <div className="feature-text">
                      <strong>No Long-term Contracts</strong>
                      <p>Flexible terms with no commitments</p>
                    </div>
                  </li>
                </ul>
                <div className="card-cta">
                  <Link href="/contact-us" className="btn btn-primary">Get Started</Link>
                </div>
              </motion.div>

              <motion.div 
                className="comparison-card competitor-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-header">
                  <h3>Other Lead Providers</h3>
                </div>
                <ul className="comparison-features">
                  <li>
                    <span className="x-icon"><FaTimes /></span>
                    <div className="feature-text">
                      <strong>Shared Leads</strong>
                      <p>Often sold to 3-5+ agents</p>
                    </div>
                  </li>
                  <li>
                    <span className="x-icon"><FaTimes /></span>
                    <div className="feature-text">
                      <strong>Minimal Verification</strong>
                      <p>Often outdated or incorrect information</p>
                    </div>
                  </li>
                  <li>
                    <span className="x-icon"><FaTimes /></span>
                    <div className="feature-text">
                      <strong>Delayed Delivery</strong>
                      <p>Often batched and delivered in groups</p>
                    </div>
                  </li>
                  <li>
                    <span className="x-icon"><FaTimes /></span>
                    <div className="feature-text">
                      <strong>Limited Return Policies</strong>
                      <p>Complicated or restrictive replacement terms</p>
                    </div>
                  </li>
                  <li>
                    <span className="x-icon"><FaTimes /></span>
                    <div className="feature-text">
                      <strong>Generic Support</strong>
                      <p>Call center representatives with limited knowledge</p>
                    </div>
                  </li>
                  <li>
                    <span className="x-icon"><FaTimes /></span>
                    <div className="feature-text">
                      <strong>Contract Lock-in</strong>
                      <p>Long-term commitments with penalties</p>
                    </div>
                  </li>
                </ul>
                <div className="card-cta competitor-cta">
                  <span className="text-muted">Don't settle for less</span>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>


      {/* FAQ Preview Section */}
      <section className="faq-preview-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common questions about our services</p>
          </motion.div>

          <motion.div 
            className="faq-preview-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="faq-item" variants={fadeInUp}>
              <h3>How are your leads different from other providers?</h3>
              <p>Our leads are 100% exclusive, meaning they're sold to only one agent, and undergo a rigorous verification process to ensure accuracy and high intent.</p>
            </motion.div>

            <motion.div className="faq-item" variants={fadeInUp}>
              <h3>What if I receive a bad lead?</h3>
              <p>We stand behind our lead quality with a transparent replacement policy. If a lead doesn't meet our quality standards, we'll replace it promptly.</p>
            </motion.div>

            <motion.div className="faq-item" variants={fadeInUp}>
              <h3>Do I need to sign a long-term contract?</h3>
              <p>No. We offer flexible terms with no long-term commitments required. You can adjust your volume or pause your account at any time.</p>
            </motion.div>

            <motion.div className="faq-item" variants={fadeInUp}>
              <h3>How quickly will I receive leads after signing up?</h3>
              <p>You can start receiving leads immediately after your account is set up and your targeting criteria are established.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="faq-link"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* <Link href="/faq" className="view-all-link">
              View All FAQs <FaArrowRight className="arrow-icon" />
            </Link> */}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Grow Your Insurance Business?</h2>
            <p>Join thousands of successful agents and brokers who trust BestLeads Network for high-quality insurance leads.</p>
            <div className="cta-buttons">
              <Link href="/contact-us" className="btn btn-primary">
                Get Started Today
              </Link>
              <Link href="/contact-us" className="btn btn-secondary">
                Schedule a Consultation
              </Link>
            </div>
            <div className="satisfaction-guarantee">
              <FaRegHandshake className="guarantee-icon" />
              <span>100% Satisfaction Guarantee • No Long-Term Contracts</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;

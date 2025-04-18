import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-widget">
            <h3 className="widget-title">BestLeads Network</h3>
            <p>Professional lead generation services</p>
          </div>
          <div className="footer-widget">
            <h3 className="widget-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} BestLeads Network. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-widget company-info">
            <div className="footer-logo">
              <Image src="/images/best-leads-white.png" alt="BestLeads Network" width={180} height={45} />
            </div>
            <p className="tagline">Your Source for Premium Insurance Leads</p>
            {/* <p className="company-description">We connect insurance agents with high-quality, verified leads to boost your sales and grow your business.</p> */}
            <ul className="social-links">
              <li><a href="https://www.facebook.com/bestleadsnetwork" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
              <li><a href="https://www.linkedin.com/company/best-leads-network/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
              <li><a href="https://www.instagram.com/bestleadsnetworkllc/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            </ul>
          </div>
          
          <div className="footer-widget">
            <h3 className="widget-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="footer-widget">
            <h3 className="widget-title">Our Services</h3>
            <ul className="footer-links">
              <li><Link href="/insurance/medicare">Medicare Leads</Link></li>
              <li><Link href="/insurance/auto">Auto Insurance</Link></li>
              <li><Link href="/insurance/aca">ACA Leads</Link></li>
              <li><Link href="/insurance/mva">MVA Leads</Link></li>
              <li><Link href="/insurance/u65">U65 Leads</Link></li>
            </ul>
          </div>
          
          <div className="footer-widget">
            <h3 className="widget-title">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <div className="icon"><FaMapMarkerAlt /></div>
                <div><a href="https://maps.app.goo.gl/8967N3v5D2PyCbnX6">14 Hartland Ave Huntington<br />Station NY 11746, USA</a></div>
              </li>
              <li>
                <div className="icon"><FaPhoneAlt /></div>
                <div><a href="tel:+18002321145">(800) 232-1145</a></div>
              </li>
              <li>
                <div className="icon"><FaEnvelope /></div>
                <div><a href="mailto:info@bestleadsnetwork.com">info@bestleadsnetwork.com</a></div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} BestLeads Network. All Rights Reserved.</p>
          </div>
          <div className="legal-links">
            <Link href="/privacypolicy">Privacy Policy</Link>
            <Link href="/termsandconditions">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
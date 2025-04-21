import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-wrapper">
            <div className="topbar-contact">
              <div className="contact-item">
                <span className="contact-icon">
                  <Image src="/icons/phone.svg" alt="Phone" width={16} height={16} />
                </span>
                <a href="tel:+18882563257">+1 (888) 256-3257</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <Image src="/icons/mail.svg" alt="Email" width={16} height={16} />
                </span>
                <a href="mailto:info@bestleadsnetwork.com">info@bestleadsnetwork.com</a>
              </div>
            </div>
            <div className="topbar-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <Image src="/icons/facebook.svg" alt="Facebook" width={16} height={16} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Image src="/icons/twitter.svg" alt="Twitter" width={16} height={16} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={16} height={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*  Header */}
      <header className="site-header">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link href="/">
                <img src="/images/Best-Leads-Logo.png" alt="Best Leads Logo" />
              </Link>
            </div>
            
            {/* Mobile Menu  */}
            <div 
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            
            <nav className={`main-nav ${isMobileMenuOpen ? 'show' : ''}`}>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li className="has-dropdown">
                  <a 
                    href="#" 
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownOpen}
                  >
                    Insurance 
                    <span className="dropdown-arrow">
                      <Image 
                        src="/icons/chevron-down.svg" 
                        alt="Dropdown" 
                        width={16} 
                        height={16}
                        className={isDropdownOpen ? 'rotate' : ''}
                      />
                    </span>
                  </a>
                  <ul className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
                    <li><Link href="/insurance/aca">ACA</Link></li>
                    <li><Link href="/insurance/medicare">Medicare</Link></li>
                    <li><Link href="/insurance/auto">Auto</Link></li>
                    <li><Link href="/insurance/mva">MVA</Link></li>
                    <li><Link href="/insurance/u65">U65</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <Link href="/get-leads" className="btn primary-btn">
                Get Leads Now
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header; 
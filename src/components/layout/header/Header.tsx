import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();
  
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

  // Handle dropdown on hover for desktop
  useEffect(() => {
    const dropdown = dropdownRef.current;
    if (!dropdown) return;

    const handleMouseEnter = () => {
      if (window.innerWidth > 768) {
        setIsDropdownOpen(true);
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth > 768) {
        setIsDropdownOpen(false);
      }
    };

    dropdown.addEventListener('mouseenter', handleMouseEnter);
    dropdown.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      dropdown.removeEventListener('mouseenter', handleMouseEnter);
      dropdown.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // const handleInsuranceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   if (window.innerWidth <= 768) {
  //     // On mobile, toggle dropdown
  //     e.preventDefault();
  //     setIsDropdownOpen(!isDropdownOpen);
  //   } else {
  //     // On desktop, navigate to insurance page
  //     router.push('/insurance-leads');
  //   }
  // };

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
                <a href="tel:+18002321145">+1 (800) 232-1145</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <Image src="/icons/mail.svg" alt="Email" width={16} height={16} />
                </span>
                <a href="mailto:info@bestleadsnetwork.com">info@bestleadsnetwork.com</a>
              </div>
            </div>
            <div className="topbar-social">
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
                <li className="has-dropdown" ref={dropdownRef}>
                  <a 
                    href="/insurance-leads" 
                    // onClick={handleInsuranceClick}
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
              <Link href="/contact-us" className="btn primary-btn">
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
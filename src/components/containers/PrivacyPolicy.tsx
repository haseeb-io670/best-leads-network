import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy">
      <div className="container">
        <div className="page-header">
          <h1>Privacy Policy</h1>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> <FaChevronRight className="breadcrumb-icon" /> 
            <span>Privacy Policy</span>
          </div>
        </div>
        
        <div className="privacy-content">
          <div className="last-updated">
            <p>Last Updated: June 15, 2023</p>
          </div>
          
          <div className="privacy-section">
            <h2>1. Introduction</h2>
            <p>
              At BestLeads Network, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our lead generation services. Please read this privacy policy carefully. If you do not agree with the terms of this 
              privacy policy, please do not access the site or use our services.
            </p>
          </div>
          
          <div className="privacy-section">
            <h2>2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, information we obtain automatically when you use our services, 
              and information from third parties. This information may include:
            </p>
            <h3>2.1 Personal Information</h3>
            <ul className="privacy-list">
              <li>Name, email address, telephone number, and postal address</li>
              <li>Business information, such as company name and job title</li>
              <li>Insurance license information for agent verification</li>
              <li>Demographic information such as age, gender, and location</li>
              <li>Financial information for payment processing</li>
              <li>Information provided in communications with us</li>
            </ul>
            <h3>2.2 Non-Personal Information</h3>
            <ul className="privacy-list">
              <li>Browser and device information</li>
              <li>IP address and usage data</li>
              <li>Information collected through cookies and tracking technologies</li>
            </ul>
          </div>
          
          <div className="privacy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul className="privacy-list">
              <li>Provide, maintain, and improve our services</li>
              <li>Connect insurance agents with potential clients</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative messages, updates, and promotional materials</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize and improve the services and provide content or features that match user profiles or interests</li>
            </ul>
          </div>
          
          <div className="privacy-section">
            <h2>4. Sharing of Information</h2>
            <p>We may share your personal information with:</p>
            <h3>4.1 Insurance Agents and Partners</h3>
            <p>
              When you submit your information as a potential insurance client, we share your contact details and 
              insurance-related information with licensed insurance agents and brokers who may contact you to offer 
              insurance products or services.
            </p>
            <h3>4.2 Service Providers</h3>
            <p>
              We may share your information with third-party vendors, consultants, and other service providers who 
              need access to such information to carry out work on our behalf.
            </p>
            <h3>4.3 Legal Requirements</h3>
            <p>
              We may disclose your information if required to do so by law or in response to valid requests by public 
              authorities (e.g., a court or government agency).
            </p>
            <h3>4.4 Business Transfers</h3>
            <p>
              If we are involved in a merger, acquisition, financing, or sale of business assets, your information may be 
              transferred as part of that transaction.
            </p>
          </div>
          
          <div className="privacy-section">
            <h2>5. Your Choices</h2>
            <p>You have several choices regarding the use of your information:</p>
            <h3>5.1 Opt-Out</h3>
            <p>
              You may opt out of receiving promotional communications from us by following the instructions in those messages 
              or by contacting us directly. Please note that even if you opt out, we may still send you non-promotional 
              communications, such as those about your account or our ongoing business relations.
            </p>
            <h3>5.2 Cookies</h3>
            <p>
              Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser 
              to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect 
              the availability and functionality of our services.
            </p>
            <h3>5.3 Access, Update, or Delete</h3>
            <p>
              You may request to access, correct, update, or delete your personal information by contacting us. We will respond 
              to your request within a reasonable timeframe.
            </p>
          </div>
          
          <div className="privacy-section">
            <h2>6. Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information from accidental loss and from unauthorized 
              access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls. 
              Any payment transactions will be encrypted using SSL technology.
            </p>
            <p>
              The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a 
              password for access to certain parts of our website, you are responsible for keeping this password confidential.
            </p>
            <p>
              Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to 
              protect your personal information, we cannot guarantee the security of your personal information transmitted to our 
              website. Any transmission of personal information is at your own risk.
            </p>
          </div>
          
          <div className="privacy-section">
            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 16 years of age. No one under age 16 may provide any personal information 
              on the website. We do not knowingly collect personal information from children under 16. If you are under 16, do not use or 
              provide any information on this website or through any of its features. If we learn we have collected or received personal 
              information from a child under 16 without verification of parental consent, we will delete that information.
            </p>
          </div>
          
          <div className="privacy-section">
            <h2>8. Changes to Our Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. If we make material changes to how we treat our users' personal 
              information, we will notify you through a notice on the website home page or via email. Your continued use of our services 
              after we make changes is deemed to be acceptance of those changes.
            </p>
          </div>
          
          <div className="privacy-section">
            <h2>9. California Privacy Rights</h2>
            <p>
              If you are a California resident, California law may provide you with additional rights regarding our use of your personal 
              information. To learn more about your California privacy rights, visit our California Privacy Notice.
            </p>
          </div>
          
          <div className="privacy-section">
            <h2>10. International Data Transfers</h2>
            <p>
              We are based in the United States and the information we collect is governed by U.S. law. If you are accessing our services 
              from outside the United States, please be aware that information collected through the services may be transferred to, 
              processed in, and stored in the United States. By using the services, you consent to the transfer, processing, and storage 
              of your information in the United States, where privacy laws may be less comprehensive than those in your country.
            </p>
          </div>
          
          <div className="privacy-section">
            <h2>11. Contact Information</h2>
            <p>
              If you have any questions or concerns about this privacy policy or our privacy practices, please contact us at:
            </p>
            <address>
              BestLeads Network<br />
              14 Hartland Ave<br />
              Huntington Station, NY 11746<br />
              Phone: (800) 555-1234<br />
              Email: privacy@bestleadsnetwork.com
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

const TermsAndConditions = () => {
  return (
    <section className="terms-and-conditions">
     
      
      <div className="container">
        <div className="page-header">
          <h1>Terms and Conditions</h1>
          <div className="breadcrumbs">
            <Link href="/">Home</Link> <FaChevronRight className="breadcrumb-icon" /> 
            <span>Terms and Conditions</span>
          </div>
        </div>
        
        <div className="terms-content">
          <div className="last-updated">
            <p>Last Updated: June 15, 2023</p>
          </div>
          
          <div className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              Welcome to BestLeads Network. By accessing or using our website, services, or products, you agree to be bound by these Terms and Conditions. 
              If you do not agree to all the terms and conditions, you may not access or use our services.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>2. Description of Services</h2>
            <p>
              BestLeads Network provides lead generation services for insurance professionals, connecting agents with potential clients interested in 
              various insurance products including Medicare, Auto Insurance, ACA plans, and other insurance-related services.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>3. Subscription and Payment Terms</h2>
            <p>
              3.1. <strong>Subscription Plans:</strong> We offer various subscription plans for our lead generation services. The specifics of each plan, 
              including pricing, lead volume, and features, are described on our website.
            </p>
            <p>
              3.2. <strong>Payment Terms:</strong> Payment for subscription plans must be made in advance. We accept credit cards, debit cards, and other 
              payment methods as specified on our payment portal. All payments are non-refundable unless otherwise stated.
            </p>
            <p>
              3.3. <strong>Billing Cycles:</strong> Depending on your chosen plan, you will be billed on a monthly, quarterly, or annual basis. 
              Subscription plans automatically renew unless canceled prior to the renewal date.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>4. Lead Quality and Guarantees</h2>
            <p>
              4.1. <strong>Lead Quality:</strong> BestLeads Network strives to provide high-quality, verified leads. However, we cannot guarantee that 
              every lead will result in a conversion or sale.
            </p>
            <p>
              4.2. <strong>Lead Replacement Policy:</strong> Under certain circumstances, we may replace leads that do not meet our quality standards. 
              The specific criteria for lead replacement are outlined in our Lead Replacement Policy, which is incorporated by reference.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>5. User Responsibilities</h2>
            <p>
              5.1. <strong>Compliance with Laws:</strong> You agree to comply with all applicable laws and regulations, including insurance licensing requirements, 
              telemarketing laws, and data protection regulations.
            </p>
            <p>
              5.2. <strong>Ethical Use:</strong> You agree to use the leads provided by BestLeads Network in an ethical and professional manner, 
              respecting the privacy and preferences of potential clients.
            </p>
            <p>
              5.3. <strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all 
              activities that occur under your account.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>6. Data Privacy and Protection</h2>
            <p>
              6.1. <strong>Privacy Policy:</strong> Our collection, use, and protection of personal data are governed by our Privacy Policy, 
              which is incorporated by reference.
            </p>
            <p>
              6.2. <strong>Data Handling:</strong> You agree to handle all lead data in compliance with applicable privacy laws, including obtaining 
              necessary consents before contacting leads and implementing appropriate security measures.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>7. Intellectual Property</h2>
            <p>
              All content, logos, trademarks, and other intellectual property displayed on our website or in our services are the property of 
              BestLeads Network or our licensors. You may not use, reproduce, or distribute our intellectual property without our prior written consent.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, BESTLEADS NETWORK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
              OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OR INABILITY TO USE OUR SERVICES.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services for violation of these Terms and Conditions or for any other 
              reason at our sole discretion. You may cancel your subscription at any time by contacting our customer service.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>10. Changes to Terms</h2>
            <p>
              We may update these Terms and Conditions from time to time. We will notify you of any significant changes through our website or by email. 
              Your continued use of our services after such changes constitutes your acceptance of the new terms.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>11. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of New York, without regard to its 
              conflict of law provisions. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of 
              the courts located in New York.
            </p>
          </div>
          
          <div className="terms-section">
            <h2>12. Contact Information</h2>
            <p>
              <strong>Contact Information:</strong><br />
              BestLeads Network<br />
              14 Hartland Ave, Huntington Station, NY 11746<br />
              Email: support@bestleadsnetwork.com<br />
              Phone: (888) 450-9639<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;

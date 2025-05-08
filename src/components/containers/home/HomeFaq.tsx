import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronRight, FaChevronDown, FaShieldAlt, FaCheckCircle, FaChartLine, FaMobileAlt } from 'react-icons/fa';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  toggleFaq: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleFaq }) => {
  return (
    <div className={`home-faq-item ${isOpen ? 'active' : ''}`}>
      <div className="faq-question" onClick={toggleFaq}>
        <h3>{question}</h3>
        <span className="toggle-icon">
          {isOpen ? <FaChevronDown /> : <FaChevronRight />}
        </span>
      </div>
      <div className={`faq-answer ${isOpen ? 'show' : ''}`}>
        <div className="answer-content">
          {answer}
        </div>
      </div>
    </div>
  );
};

const HomeFaq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Selected most important FAQs for homepage display
  const faqItems = [
    {
      question: "What does SMS VERIFIED mean?",
      answer: (
        <p>
          The "SMS Verified" tag appears on all our insurance lead types. We utilize advanced A.I. software to verify each prospect's cell phone number by sending a 6-digit security code via text message. This verification process ensures higher quality Medicare, ACA, Auto, and MVA insurance leads with valid contact information.
        </p>
      )
    },
    {
      question: "What is the average conversion rate for insurance leads?",
      answer: (
        <p>
          Conversion rates for insurance leads depend on several factors, including follow-up speed, messaging effectiveness, and the specifics of your sales process. Results vary across Medicare, ACA, Auto, and MVA insurance verticals, but insurance agents typically experience stronger outcomes with quick, consistent engagement and proper lead nurturing strategies.
        </p>
      )
    },
    {
      question: "What platforms do you use to generate insurance leads?",
      answer: (
        <p>
          All BestLeads Network leads are generated through targeted campaigns via sophisticated Digital Advertising platforms. These specialized channels allow us to reach highly relevant audiences seeking Medicare, ACA, Auto, and MVA insurance coverage. Our multi-channel approach optimizes for quality insurance leads specifically tailored to each insurance vertical.
        </p>
      )
    },
    {
      question: "When will I start receiving insurance leads after purchase?",
      answer: (
        <p>
          Insurance agents typically begin receiving leads within 24-72 hours after completing their purchase. This timeline applies to all our insurance verticals including Medicare, ACA, Auto, and MVA leads, though exact timing may vary based on your specific order details and current market conditions.
        </p>
      )
    }
  ];

  return (
    <section className="home-faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span></h2>
          <p className="section-subtitle">Common questions about our insurance lead generation services</p>
        </div>
        
        <div className="home-faq-container">
          {faqItems.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaq === index}
              toggleFaq={() => toggleFaq(index)}
            />
          ))}
        </div>
        
        <div className="view-all-faqs">
          <Link href="/faq" className="view-all-btn">
            View All FAQs
            <FaChevronRight className="btn-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;

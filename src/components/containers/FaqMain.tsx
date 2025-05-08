import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronRight, FaChevronDown, FaShieldAlt, FaCheckCircle, FaChartLine, FaMobileAlt, FaRegClock, FaFileAlt, FaServer, FaHeadset } from 'react-icons/fa';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  icon?: React.ReactNode;
  isOpen: boolean;
  toggleFaq: () => void;
  category: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, icon, isOpen, toggleFaq, category }) => {
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <div className="faq-question" onClick={toggleFaq}>
        <div className="question-content">
          {icon && <span className="faq-icon">{icon}</span>}
          <div className="question-text">
            <span className="faq-category">{category}</span>
            <h3>{question}</h3>
          </div>
        </div>
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

const FaqMain = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "What does SMS VERIFIED mean?",
      answer: (
        <p>
          The "SMS Verified" tag appears on all our insurance lead types. We utilize advanced A.I. Software to verify each prospect's cell phone number by sending a 6-digit security code via text message. This verification process ensures higher quality Medicare, ACA, Auto, and MVA insurance leads with valid contact information.
        </p>
      ),
      icon: <FaMobileAlt />,
      category: "Verification"
    },
    {
      question: "Is there a guaranteed result with your insurance leads?",
      answer: (
        <p>
          While we implement comprehensive strategies to optimize campaigns and enhance lead quality for insurance agents, results may vary across different insurance verticals. We don't offer guaranteed conversions, but our commitment is providing high-quality Medicare, ACA, Auto, and MVA leads specifically tailored to the insurance industry. Your ultimate outcomes will depend on your follow-up process and sales approach.
        </p>
      ),
      icon: <FaShieldAlt />,
      category: "Results"
    },
    {
      question: "What is the average conversion rate for insurance leads?",
      answer: (
        <p>
          Conversion rates for insurance leads depend on several factors, including follow-up speed, messaging effectiveness, and the specifics of your sales process. Results vary across Medicare, ACA, Auto, and MVA insurance verticals, but insurance agents typically experience stronger outcomes with quick, consistent engagement and proper lead nurturing strategies.
        </p>
      ),
      icon: <FaChartLine />,
      category: "Performance"
    },
    {
      question: "What platforms do you use to generate insurance leads?",
      answer: (
        <p>
          All BestLeads Network leads are generated through targeted campaigns via sophisticated Digital Advertising platforms. These specialized channels allow us to reach highly relevant audiences seeking Medicare, ACA, Auto, and MVA insurance coverage. Our multi-channel approach optimizes for quality insurance leads specifically tailored to each insurance vertical.
        </p>
      ),
      icon: <FaServer />,
      category: "Technology"
    },
    {
      question: "Do you provide scripts for insurance lead follow-up?",
      answer: (
        <p>
          We offer a comprehensive range of scripts to help insurance agents engage effectively with Medicare, ACA, Auto, and MVA leads. Some scripts are available at no cost through our resources section, though availability may vary depending on the insurance product. Our scripts are designed to maximize conversion potential across different insurance verticals.
        </p>
      ),
      icon: <FaFileAlt />,
      category: "Resources"
    },
    {
      question: "I don't have a CRM; how can I receive my insurance leads?",
      answer: (
        <p>
          If you don't currently utilize a CRM system, we can deliver your Medicare, ACA, Auto, or MVA insurance leads via email or provide a simple spreadsheet format. This ensures you can begin contacting prospects immediately while considering CRM options for more effective insurance lead management in the future.
        </p>
      ),
      icon: <FaHeadset />,
      category: "Delivery"
    },
    {
      question: "When will I start receiving insurance leads after purchase?",
      answer: (
        <p>
          Insurance agents typically begin receiving leads within 24-72 hours after completing their purchase. This timeline applies to all our insurance verticals including Medicare, ACA, Auto, and MVA leads, though exact timing may vary based on your specific order details and current market conditions.
        </p>
      ),
      icon: <FaRegClock />,
      category: "Timing"
    },
    {
      question: "How long does it take to fulfill an insurance lead order?",
      answer: (
        <p>
          Insurance lead orders are generally fulfilled within 5-7 business days, depending on order volume and the specific insurance vertical (Medicare, ACA, Auto, or MVA). Our team works efficiently to ensure leads are generated and delivered according to your specifications, maintaining quality standards throughout the process.
        </p>
      ),
      icon: <FaRegClock />,
      category: "Timing"
    }
  ];

  const categories = ["all", ...Array.from(new Set(faqItems.map(item => item.category)))];
  
  const filteredFaqs = activeCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="page-header">
          <div className="header-content">
            <span className="page-subtitle">Knowledge Base</span>
            <h1>Frequently Asked <span className="highlight">Questions</span></h1>
            <p className="header-description">
              Comprehensive answers to common questions about our premium insurance lead generation services for Medicare, ACA, Auto, and MVA verticals.
            </p>
          </div>
          <div className="header-image">
            <div className="image-container">
              <img src="/images/faq-illustration.svg" alt="FAQ" />
            </div>
          </div>
        </div>
        
        <div className="faq-category-filter">
          <div className="filter-wrapper">
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="faq-container">
          {filteredFaqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              icon={faq.icon}
              isOpen={openFaq === faqItems.indexOf(faq)}
              toggleFaq={() => toggleFaq(faqItems.indexOf(faq))}
              category={faq.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqMain; 
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { m, motion } from 'framer-motion';
import { 
  FaPhone, 
  FaUser, 
  FaClipboardList, 
  FaCalendarAlt,
  FaAddressCard,
  FaDollarSign,
  FaShieldAlt,
  FaHeadset,
  FaPlay,
  FaPause,
  FaCar,
  FaHospital,
  FaStethoscope,
  FaTags,
  FaChevronRight,
  FaInfoCircle,
  FaCheckCircle
} from 'react-icons/fa';

// Types for sample lead data
interface LeadQuestion {
  id: number;
  question: string;
  answer: string;
  isCustomerSpeaking: boolean;
  timeStamp: string;
}

interface SampleLead {
  id: string;
  type: 'Medicare' | 'ACA' | 'Auto' | 'MVA' | 'Final Expense';
  customerName: string;
  phoneNumber: string;
  date: string;
  duration: string;
  pricingTier: 'Standard' | 'Premium' | 'Elite';
  pricePerLead: number;
  leadQuality: number; // 1-5 scale
  conversionRate: string;
  callFlow: LeadQuestion[];
  iconColor: string;
  icon: React.ReactNode;
}

// Sample lead data
const sampleLeads: SampleLead[] = [
  {
    id: 'medicare-sample-1',
    type: 'Medicare',
    customerName: 'Margaret Wilson',
    phoneNumber: '(555) 123-4567',
    date: '2023-10-15',
    duration: '8:43',
    pricingTier: 'Premium',
    pricePerLead: 28,
    leadQuality: 4,
    conversionRate: '33%',
    iconColor: '#0494d4',
    icon: <FaStethoscope />,
    callFlow: [
      {
        id: 1,
        question: 'Hello, this is Sarah from Medicare Benefits Center. Am I speaking with Margaret?',
        answer: 'Yes, this is Margaret.',
        isCustomerSpeaking: true,
        timeStamp: '00:12'
      },
      {
        id: 2,
        question: "Great! Margaret, I'm calling because you recently requested information about Medicare Advantage plans in your area. Is that correct?",
        answer: "Yes, I did. I'm turning 65 next month and need to figure out my Medicare options.",
        isCustomerSpeaking: true,
        timeStamp: '00:34'
      },
      {
        id: 3,
        question: "Perfect timing then! To help find the best plan for you, I'll need to ask a few questions. First, do you currently have any parts of Medicare?",
        answer: "I just got my Medicare card in the mail with Part A and Part B.",
        isCustomerSpeaking: true,
        timeStamp: '01:16'
      },
      {
        id: 4,
        question: "And are you currently taking any prescription medications that you'd want covered in your plan?",
        answer: 'Yes, I take medication for high blood pressure and cholesterol.',
        isCustomerSpeaking: true,
        timeStamp: '02:05'
      },
      {
        id: 5,
        question: 'Which doctors or hospitals would you want to keep in your network?',
        answer: "I've been seeing Dr. Johnson at Westside Medical for years, and I'd like to keep going there.",
        isCustomerSpeaking: true,
        timeStamp: '03:27'
      },
      {
        id: 6,
        question: "Based on what you've shared, I can connect you with a licensed insurance agent who specializes in Medicare Advantage plans in your area. They can compare options from different carriers. Would that be helpful?",
        answer: "Yes, that would be very helpful. When can they call me?",
        isCustomerSpeaking: true,
        timeStamp: '06:58'
      }
    ]
  },
  {
    id: 'aca-sample-1',
    type: 'ACA',
    customerName: 'Robert Thompson',
    phoneNumber: '(555) 987-6543',
    date: '2023-10-17',
    duration: '9:21',
    pricingTier: 'Elite',
    pricePerLead: 32,
    leadQuality: 5,
    conversionRate: '38%',
    iconColor: '#00C288',
    icon: <FaShieldAlt />,
    callFlow: [
      {
        id: 1,
        question: 'Hello, this is Michael from Health Coverage Solutions. Am I speaking with Robert?',
        answer: 'Yes, this is Robert.',
        isCustomerSpeaking: true,
        timeStamp: '00:08'
      },
      {
        id: 2,
        question: "Hi Robert, I'm calling because you recently requested information about affordable health insurance options. Is that right?",
        answer: "Yes, I'm currently uninsured and looking for coverage options.",
        isCustomerSpeaking: true,
        timeStamp: '00:25'
      },
      {
        id: 3,
        question: "I understand. The open enrollment period for ACA plans is coming up, so this is a perfect time to explore your options. May I ask if you're employed, self-employed, or not currently working?",
        answer: "I'm self-employed as a contractor.",
        isCustomerSpeaking: true,
        timeStamp: '01:12'
      },
      {
        id: 4,
        question: "And what's your approximate annual income?",
        answer: "About $48,000 a year, but it varies a bit.",
        isCustomerSpeaking: true,
        timeStamp: '02:33'
      },
      {
        id: 5,
        question: "Do you have any specific health concerns or existing conditions you'd want covered?",
        answer: "I have asthma and need regular medication for that.",
        isCustomerSpeaking: true,
        timeStamp: '03:45'
      },
      {
        id: 6,
        question: "Based on what you've shared, you may qualify for subsidies on the health insurance marketplace. I can connect you with a licensed insurance agent who specializes in ACA plans in your area. They can help you compare options and apply. Would that work for you?",
        answer: "That sounds great. When can I speak with them?",
        isCustomerSpeaking: true,
        timeStamp: '07:54'
      }
    ]
  },
  {
    id: 'auto-sample-1',
    type: 'Auto',
    customerName: 'Jennifer Martinez',
    phoneNumber: '(555) 234-5678',
    date: '2023-10-12',
    duration: '7:18',
    pricingTier: 'Standard',
    pricePerLead: 22,
    leadQuality: 3,
    conversionRate: '29%',
    iconColor: '#FF9900',
    icon: <FaCar />,
    callFlow: [
      {
        id: 1,
        question: 'Hello, this is David from Auto Insurance Solutions. Am I speaking with Jennifer?',
        answer: 'Yes, this is Jennifer.',
        isCustomerSpeaking: true,
        timeStamp: '00:10'
      },
      {
        id: 2,
        question: "Hi Jennifer, I'm calling because you requested information about saving money on your auto insurance. Is that correct?",
        answer: "Yes, my current policy is getting expensive and I wanted to see if there are better options.",
        isCustomerSpeaking: true,
        timeStamp: '00:28'
      },
      {
        id: 3,
        question: "I understand. Many people are looking for better rates right now. May I ask who your current provider is and when your policy expires?",
        answer: "I'm with StateAuto and my policy renews next month.",
        isCustomerSpeaking: true,
        timeStamp: '01:05'
      },
      {
        id: 4,
        question: "How many vehicles do you need to insure, and what are the makes and models?",
        answer: "I have a 2019 Honda Civic and a 2017 Toyota RAV4.",
        isCustomerSpeaking: true,
        timeStamp: '02:14'
      },
      {
        id: 5,
        question: "Have you had any accidents or traffic violations in the past 3 years?",
        answer: "No accidents, but I did get one speeding ticket about a year ago.",
        isCustomerSpeaking: true,
        timeStamp: '03:42'
      },
      {
        id: 6,
        question: "Based on what you've shared, I can connect you with a licensed insurance agent who can compare rates from multiple carriers and potentially save you money. Would that be helpful?",
        answer: "Yes, that's exactly what I'm looking for.",
        isCustomerSpeaking: true,
        timeStamp: '06:30'
      }
    ]
  },
  {
    id: 'mva-sample-1',
    type: 'MVA',
    customerName: 'Michael Johnson',
    phoneNumber: '(555) 345-6789',
    date: '2023-10-14',
    duration: '10:02',
    pricingTier: 'Premium',
    pricePerLead: 35,
    leadQuality: 5,
    conversionRate: '41%',
    iconColor: '#FF3A5E',
    icon: <FaHospital />,
    callFlow: [
      {
        id: 1,
        question: 'Hello, this is Lisa from Accident Recovery Advocates. Am I speaking with Michael?',
        answer: 'Yes, this is Michael.',
        isCustomerSpeaking: true,
        timeStamp: '00:15'
      },
      {
        id: 2,
        question: "Hi Michael, I'm calling because you requested information about assistance after your recent auto accident. Is that correct?",
        answer: "Yes, I was in an accident last week and I'm not sure what to do next.",
        isCustomerSpeaking: true,
        timeStamp: '00:32'
      },
      {
        id: 3,
        question: "I'm sorry to hear about your accident. First, are you experiencing any injuries or pain as a result of the accident?",
        answer: "Yes, I've been having neck pain and headaches since the accident.",
        isCustomerSpeaking: true,
        timeStamp: '01:20'
      },
      {
        id: 4,
        question: "Have you seen a doctor or received any medical treatment for these symptoms yet?",
        answer: "I went to the ER right after the accident, but haven't had any follow-up care.",
        isCustomerSpeaking: true,
        timeStamp: '02:08'
      },
      {
        id: 5,
        question: "Was the accident your fault, the other driver's fault, or is that still being determined?",
        answer: "The other driver ran a red light, so it wasn't my fault.",
        isCustomerSpeaking: true,
        timeStamp: '03:45'
      },
      {
        id: 6,
        question: "Have you been in contact with the other driver's insurance company?",
        answer: "They called once but I haven't given them any statement yet.",
        isCustomerSpeaking: true,
        timeStamp: '04:56'
      },
      {
        id: 7,
        question: "Based on what you've shared, I can connect you with an attorney who specializes in motor vehicle accidents. They can help ensure you receive proper medical care and fair compensation. Would that be helpful?",
        answer: "Yes, I definitely need some guidance through this process.",
        isCustomerSpeaking: true,
        timeStamp: '08:34'
      }
    ]
  },
  {
    id: 'final-expense-sample-1',
    type: 'Final Expense',
    customerName: 'Susan Williams',
    phoneNumber: '(555) 456-7890',
    date: '2023-10-16',
    duration: '6:49',
    pricingTier: 'Standard',
    pricePerLead: 25,
    leadQuality: 4,
    conversionRate: '31%',
    iconColor: '#6E4DFF',
    icon: <FaAddressCard />,
    callFlow: [
      {
        id: 1,
        question: 'Hello, this is James from Family Protection Services. Am I speaking with Susan?',
        answer: 'Yes, this is Susan.',
        isCustomerSpeaking: true,
        timeStamp: '00:09'
      },
      {
        id: 2,
        question: "Hi Susan, I'm calling because you requested information about final expense insurance plans. Is that correct?",
        answer: "Yes, I want to make sure my family isn't burdened with expenses when I pass.",
        isCustomerSpeaking: true,
        timeStamp: '00:26'
      },
      {
        id: 3,
        question: "That's a thoughtful decision. Many people want to ensure their loved ones are protected. May I ask your age?",
        answer: "I'm 67 years old.",
        isCustomerSpeaking: true,
        timeStamp: '01:12'
      },
      {
        id: 4,
        question: "Do you currently have any life insurance or final expense coverage?",
        answer: "I had a small policy through my employer, but I'm retired now so that's no longer in effect.",
        isCustomerSpeaking: true,
        timeStamp: '02:03'
      },
      {
        id: 5,
        question: "And would you mind sharing if you have any significant health conditions?",
        answer: "I have type 2 diabetes that's controlled with medication, but otherwise I'm fairly healthy.",
        isCustomerSpeaking: true,
        timeStamp: '03:22'
      },
      {
        id: 6,
        question: "Based on what you've shared, I can connect you with a licensed insurance agent who specializes in final expense policies. They can help find a plan that meets your needs and budget. Would that be helpful?",
        answer: "Yes, I'd like to speak with someone about my options.",
        isCustomerSpeaking: true,
        timeStamp: '05:38'
      }
    ]
  }
];

// Pricing tiers data
const pricingTiers = {
  Standard: {
    features: [
      'Basic demographic information',
      'Verified contact information',
      'Basic qualification questions',
      'Standard delivery time',
      'Shared leads (max 3 agents)'
    ],
    recommended: false
  },
  Premium: {
    features: [
      'Detailed demographic information',
      'Verified contact information',
      'Advanced qualification questions',
      'Expedited delivery time',
      'Exclusive leads (only your agency)',
      'Priority support'
    ],
    recommended: true
  },
  Elite: {
    features: [
      'Comprehensive demographic details',
      'Multi-channel verification',
      'In-depth qualification questions',
      'Real-time delivery',
      'Exclusive leads with follow-up information',
      'Dedicated account manager',
      'Performance analytics'
    ],
    recommended: false
  }
};

const SampleLeads: React.FC = () => {
  const [activeLead, setActiveLead] = useState<string>(sampleLeads[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showPricingModal, setShowPricingModal] = useState<boolean>(false);
  const [activePricingType, setActivePricingType] = useState<string>('');

  const selectedLead = sampleLeads.find(lead => lead.id === activeLead) || sampleLeads[0];

  const handlePricingClick = (leadType: string) => {
    setActivePricingType(leadType);
    setShowPricingModal(true);
  };

  const closePricingModal = () => {
    setShowPricingModal(false);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="sample-leads-container">
      <section className="sample-leads-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sample Lead Calls
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lead-description"
          >
            Listen to real examples of the high-quality leads you'll receive when you partner with BestLeads Network. Each sample demonstrates the qualification process and information gathering that ensures you receive only the most promising prospects.
          </motion.p>
        </div>
      </section>

      <section className="sample-leads-content">
        <div className="container">
          <div className="lead-tabs">
            {sampleLeads.map((lead) => (
              <button
                key={lead.id}
                className={`lead-tab ${activeLead === lead.id ? 'active' : ''}`}
                onClick={() => setActiveLead(lead.id)}
              >
                <div className="tab-icon" style={{ backgroundColor: lead.iconColor }}>
                  {lead.icon}
                </div>
                <span>{lead.type}</span>
                <FaChevronRight className="arrow-icon" />
              </button>
            ))}
          </div>

          <motion.div 
            className="lead-display"
            key={selectedLead.id}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="lead-info-header">
              <div className="lead-type-badge" style={{ backgroundColor: selectedLead.iconColor }}>
                {selectedLead.icon}
                <span>{selectedLead.type} Lead</span>
              </div>
              <button 
                className="pricing-button"
                onClick={() => handlePricingClick(selectedLead.type)}
              >
                <FaDollarSign />
                <span>View Pricing</span>
              </button>
            </div>

            <div className="lead-details">
              <div className="lead-detail-item">
                <FaUser className="detail-icon" />
                <div className="detail-content">
                  <span className="detail-label">Prospect</span>
                  <span className="detail-value">{selectedLead.customerName}</span>
                </div>
              </div>
              <div className="lead-detail-item">
                <FaPhone className="detail-icon" />
                <div className="detail-content">
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">{selectedLead.phoneNumber}</span>
                </div>
              </div>
              <div className="lead-detail-item">
                <FaCalendarAlt className="detail-icon" />
                <div className="detail-content">
                  <span className="detail-label">Date</span>
                  <span className="detail-value">{new Date(selectedLead.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="lead-detail-item">
                <FaClipboardList className="detail-icon" />
                <div className="detail-content">
                  <span className="detail-label">Duration</span>
                  <span className="detail-value">{selectedLead.duration}</span>
                </div>
              </div>
            </div>

            <div className="lead-metrics">
              <div className="lead-metric">
                <div className="metric-value">
                  {selectedLead.pricingTier}
                </div>
                <div className="metric-label">Tier</div>
              </div>
              <div className="lead-metric">
                <div className="metric-value">
                  ${selectedLead.pricePerLead}
                </div>
                <div className="metric-label">Per Lead</div>
              </div>
              <div className="lead-metric">
                <div className="metric-value">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span 
                      key={index} 
                      className={`quality-dot ${index < selectedLead.leadQuality ? 'active' : ''}`}
                    ></span>
                  ))}
                </div>
                <div className="metric-label">Quality</div>
              </div>
              <div className="lead-metric">
                <div className="metric-value">{selectedLead.conversionRate}</div>
                <div className="metric-label">Avg. Conversion</div>
              </div>
            </div>

            <div className="call-transcript">
              <div className="transcript-header">
                <h3>Call Transcript</h3>
                <button 
                  className={`play-button ${isPlaying ? 'playing' : ''}`}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                  <span>{isPlaying ? 'Pause Audio' : 'Play Audio'}</span>
                </button>
              </div>
              
              <div className="conversation-flow">
                {selectedLead.callFlow.map((item) => (
                  <motion.div 
                    key={item.id}
                    className={`conversation-item ${item.isCustomerSpeaking ? 'customer' : 'agent'}`}
                    variants={fadeInUp}
                  >
                    <div className="speaker-indicator">
                      {item.isCustomerSpeaking ? 'Customer' : 'Agent'}
                      <span className="timestamp">{item.timeStamp}</span>
                    </div>
                    <div className="conversation-bubble">
                      {item.isCustomerSpeaking ? item.answer : item.question}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lead-actions">
              <button 
                className="action-button primary"
                onClick={() => handlePricingClick(selectedLead.type)}
              >
                <FaDollarSign className="button-icon" />
                Get {selectedLead.type} Leads
              </button>
              <Link href="/contact-us" className="action-button secondary">
                <FaHeadset className="button-icon" />
                Speak with a Lead Specialist
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Modal */}
      {showPricingModal && (
        <div className="pricing-modal-overlay" onClick={closePricingModal}>
          <div className="pricing-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closePricingModal}>×</button>
            <div className="modal-header">
              <h2>{activePricingType} Lead Pricing</h2>
              <p>Choose the tier that best fits your business needs</p>
            </div>
            
            <div className="pricing-tiers">
              {Object.entries(pricingTiers).map(([tier, { features, recommended }]) => {
                const tierLead = sampleLeads.find(lead => lead.type === activePricingType && lead.pricingTier === tier);
                const price = tierLead ? tierLead.pricePerLead : (
                  tier === 'Standard' ? 22 : tier === 'Premium' ? 28 : 35
                );
                
                return (
                  <div key={tier} className={`pricing-tier ${recommended ? 'recommended' : ''}`}>
                    {recommended && <div className="recommended-badge">Recommended</div>}
                    <h3 className="tier-name">{tier}</h3>
                    <div className="tier-price">
                      <span className="currency">$</span>
                      <span className="amount">{price}</span>
                      <span className="period">per lead</span>
                    </div>
                    
                    <ul className="tier-features">
                      {features.map((feature, index) => (
                        <li key={index}>
                          <FaCheckCircle className="feature-icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/contact-us" className="select-tier-button">
                      Get Started
                    </Link>
                  </div>
                );
              })}
            </div>
            
            <div className="volume-discount">
              <FaInfoCircle className="info-icon" />
              <p>Volume discounts available for packages of 50+ leads. Contact us for custom pricing.</p>
            </div>
          </div>
        </div>
      )}

      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get High-Quality Leads?</h2>
            <p>Start receiving exclusive, verified leads tailored to your specific insurance specialties</p>
            <div className="cta-buttons">
              <Link href="/pricing" className="btn btn-primary">View All Pricing Plans</Link>
              <Link href="/contact-us" className="btn btn-outline">Schedule a Demo</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SampleLeads;

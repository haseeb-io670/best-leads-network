import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const PricingComponent = () => {
  // Define pricing plans
  const pricingPlans = [
    {
      id: 1,
      name: 'Basic',
      transferType: 'Perfect for beginners',
      price: '$29',
      period: 'per month',
      features: [
        '500 lead contacts',
        'Email marketing tools',
        'Basic CRM features',
        'Email support',
        'Limited integrations'
      ]
    },
    {
      id: 2,
      name: 'Professional',
      transferType: 'For growing businesses',
      price: '$69',
      period: 'per month',
      features: [
        '2,500 lead contacts',
        'Advanced email marketing',
        'Full CRM capabilities',
        'Priority email support',
        'Extended integrations',
        'Marketing automation'
      ]
    },
    {
      id: 3,
      name: 'Business',
      transferType: 'For established companies',
      price: '$149',
      period: 'per month',
      features: [
        '10,000 lead contacts',
        'Advanced lead scoring',
        'Complete CRM suite',
        'Phone + email support',
        'All integrations',
        'Marketing automation',
        'Team collaboration tools'
      ]
    },
    {
      id: 4,
      name: 'Enterprise',
      transferType: 'Custom solutions',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Unlimited lead contacts',
        'Custom implementation',
        'Advanced security features',
        'Dedicated account manager',
        'Premium 24/7 support',
        'Custom integrations',
        'Advanced reporting'
      ]
    }
  ];

  return (
    <div className="pricing-main">
      <div className="container">
        {/* Header Section */}
        <div className="pricing-header">
          <h1 className="section-title">Simple, <span>Transparent</span> Pricing</h1>
          <p className="section-subtitle">
            Choose the perfect plan for your lead generation needs. No hidden fees, no contracts.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="simple-pricing">
          {pricingPlans.map((plan) => (
            <div className="pricing-card" key={plan.id}>
              <div className="card-header">
                <h3>{plan.name}</h3>
                <div className="transfer-type">{plan.transferType}</div>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
              </div>

              <div className="card-body">
                <ul className="features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <span className="check-circle"><FaCheck /></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-footer">
                <Link to="/register" className="pricing-cta">
                  {plan.id === 4 ? 'Contact Us' : 'Get Started'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Plan Section */}
        <div className="custom-plan">
          <div className="custom-plan-content">
            <div className="plan-heading">
              <h3>Need a Custom Plan?</h3>
              <p>Contact our team for a tailored solution that fits your business needs</p>
            </div>
            <Link to="/contact" className="custom-plan-cta">
              Contact Sales <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="guarantee-section">
          <div className="guarantee-wrapper">
            <div className="guarantee-content">
              <h3>Our 30-Day Money-Back Guarantee</h3>
              <p>
                We're confident that our platform will boost your lead generation efforts. 
                If you're not satisfied with our service within the first 30 days, we'll refund your money, no questions asked.
              </p>
              <ul className="guarantee-features">
                <li>
                  <span className="check-circle"><FaCheck /></span>
                  30-day risk-free trial
                </li>
                <li>
                  <span className="check-circle"><FaCheck /></span>
                  No credit card required
                </li>
                <li>
                  <span className="check-circle"><FaCheck /></span>
                  Cancel anytime
                </li>
                <li>
                  <span className="check-circle"><FaCheck /></span>
                  Full feature access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent; 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomeAbout = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <Image 
              src="/images/About-BestLeads.webp" 
              alt="About BestLeads Network" 
              width={600} 
              height={450}
              layout="responsive"
              quality={100}
            />
          </div>
          <div className="about-text">
            <h2>Lead Generation Experts You Can Trust</h2>
            <p>
              At <span className="highlight">BestLeads Network</span>, we specialize in providing high-quality, 
              targeted leads that help businesses grow their customer base and increase revenue. 
              With over 10 years of experience in the industry, we understand what it takes 
              to generate leads that convert.
            </p>
            <p>
              Our team of experts uses advanced techniques and technologies to identify and 
              target potential customers who are genuinely interested in your products or services. 
              We focus on quality over quantity, ensuring that every lead we deliver has real potential.
            </p>
            <div className="banner-buttons">
              <Link href="/about-us" className="btn primary-btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;

import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import WhyUs from '@/components/containers/WhyUs';

const WhyUsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Why Choose BestLeads Network | Premium Insurance Lead Generation</title>
        <meta 
          name="description" 
          content="Discover why BestLeads Network is the preferred lead generation partner for insurance professionals. High-quality exclusive leads, superior conversion rates, and exceptional service." 
        />
      </Head>
      
      <WhyUs />
    </Layout>
  );
};

export default WhyUsPage; 
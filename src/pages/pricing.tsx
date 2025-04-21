import React from 'react';
import Head from 'next/head';
import PricingMain from '@/components/containers/PricingMain';
const PricingPage = () => {
  return (
    <>
      <Head>
        <title>Pricing | BestLeads Network</title>
        <meta name="description" content="Explore our pricing at BestLeads Network" />
      </Head>
      
      <main>
        <PricingMain />
      </main>
    </>
  );
};

export default PricingPage; 
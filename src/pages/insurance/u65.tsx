import React from 'react';
import Head from 'next/head';
import Under65Insurance from '@/components/sections/Under65Insurance';
const LifeInsurancePage = () => {
  return (
    <>
      <Head>
        <title>Life Insurance Leads | BestLeads Network</title>
        <meta name="description" content="Get high-quality Life insurance leads for your business" />
      </Head>
      
      <main>
        <Under65Insurance />
      </main>
    </>
  );
};

export default LifeInsurancePage; 
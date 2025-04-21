import React from 'react';
import Head from 'next/head';
import AutoInsurance from '@/components/sections/AutoInsurance';

const AutoInsurancePage = () => {
  return (
    <>
      <Head>
        <title>Auto Insurance Leads | BestLeads Network</title>
        <meta name="description" content="Get high-quality Auto insurance leads for your business" />
      </Head>
      
      <main>
        <AutoInsurance />
      </main>
    </>
  );
};

export default AutoInsurancePage; 
import React from 'react';
import Head from 'next/head';
import MedicareInsurance from '../../components/sections/MedicareInsurance';

const MedicarePage = () => {
  return (
    <>
      <Head>
        <title>Medicare Insurance Leads | BestLeads Network</title>
        <meta name="description" content="Get high-quality Medicare insurance leads for your business" />
      </Head>
      
      <main>
        <MedicareInsurance />
      </main>
    </>
  );
};

export default MedicarePage; 
import React from 'react';
import Head from 'next/head';
import MedicareInsurance from '../../components/sections/MedicareInsurance';

const MedicarePage = () => {
  return (
    <>
      <Head>
        <title>Medicare Live Transfer Leads | Pre-Qualified Senior Insurance Prospects</title>
        <meta name="description" content="Connect with pre-qualified Medicare prospects through our exclusive live transfer lead generation system. High-converting Medicare Advantage and Supplement leads." />
        <meta name="keywords" content="Medicare live transfer leads, pre-qualified Medicare prospects, Medicare Advantage leads, Medicare Supplement leads, senior insurance leads, real-time Medicare leads" />
      </Head>
      
      <main>
        <MedicareInsurance />
      </main>
    </>
  );
};

export default MedicarePage; 
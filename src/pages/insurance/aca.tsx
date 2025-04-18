import React from 'react';
import Head from 'next/head';
import AcaInsurance from '../../components/sections/AcaInsurance';

const ACAPage = () => {
  return (
    <>
      <Head>
        <title>ACA Insurance Leads | BestLeads Network</title>
        <meta name="description" content="Get high-quality ACA insurance leads for your business" />
      </Head>
      
      <main>
        <AcaInsurance />
      </main>
    </>
  );
};

export default ACAPage; 
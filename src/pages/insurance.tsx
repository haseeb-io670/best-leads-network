import React from 'react';
import Head from 'next/head';
import InsuranceMain from '@/components/containers/InsuranceMain';


const InsurancePage = () => {
  return (
    <>
      <Head>
        <title>Insurance Leads | BestLeads Network</title>
        <meta name="description" content="Get answers to common questions about our insurance lead generation services for Medicare, ACA, Auto, and MVA leads." />
        <meta name="keywords" content="insurance leads FAQ, Medicare lead generation, ACA leads, auto insurance leads, MVA leads, insurance lead quality" />
      </Head>
      
      <main>
        <InsuranceMain />
      </main>
    </>
  );
};

export default InsurancePage; 
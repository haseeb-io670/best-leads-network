import React from 'react';
import Head from 'next/head';
import TermsAndConditions from '@/components/containers/TermsAndConditions';

const TermsAndConditionsPage = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | BestLeads Network</title>
        <meta name="description" content="Explore our terms and conditions at BestLeads Network" />
      </Head>
      
      <main>
        <TermsAndConditions />
      </main>
    </>
  );
};

export default TermsAndConditionsPage; 
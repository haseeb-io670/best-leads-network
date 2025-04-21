import React from 'react';
import Head from 'next/head';
import PrivacyPolicy from '@/components/containers/PrivacyPolicy';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | BestLeads Network</title>
        <meta name="description" content="Explore our privacy policy at BestLeads Network" />
      </Head>
      
      <main>
        <PrivacyPolicy />

      </main>
    </>
  );
};

export default PrivacyPolicyPage; 
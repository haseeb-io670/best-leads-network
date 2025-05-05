import React from 'react';
import Layout from '@/components/layout/Layout';
import TermsAndConditions from '@/components/containers/TermsAndConditions';
import Head from 'next/head';

const TermsOfServicePage = () => {
  return (
    <Layout>
      <Head>
        <title>Terms and Conditions | BestLeads Network</title>
        <meta name="description" content="Terms and conditions for using BestLeads Network services and lead generation platform." />
      </Head>
      <TermsAndConditions />
    </Layout>
  );
};

export default TermsOfServicePage; 
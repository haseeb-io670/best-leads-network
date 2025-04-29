import React from 'react';
import Head from 'next/head';
import SampleLeadsMain from '../components/containers/SampleLeads';

const SampleLeads = () => {
  return (
    <>
      <Head>
        <title>Sample Leads | BestLeads Network</title>
        <meta name="description" content="View sample leads from BestLeads Network for lead generation services and business growth solutions." />
      </Head>
      <main>
        <SampleLeadsMain />
      </main>
    </>
  );
};

export default SampleLeads; 
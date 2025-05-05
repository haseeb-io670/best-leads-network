import React from 'react';
import Head from 'next/head';
import MvaInsurance from '../../components/sections/MvaInsurance';


const MVAPage = () => {
  return (
    <>
      <Head>
        <title>MVA Insurance Leads | BestLeads Network</title>
        <meta name="description" content="Get high-quality Motor Vehicle Accident insurance leads for your business" />
      </Head>
      
      <main>
        <MvaInsurance />
      </main>
    </>
  );
};

export default MVAPage; 
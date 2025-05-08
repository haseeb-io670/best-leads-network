import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import FaqMain from '@/components/containers/FaqMain';


const FaqPage = () => {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | BestLeads Network</title>
        <meta name="description" content="Get answers to common questions about our insurance lead generation services for Medicare, ACA, Auto, and MVA leads." />
        <meta name="keywords" content="insurance leads FAQ, Medicare lead generation, ACA leads, auto insurance leads, MVA leads, insurance lead quality" />
      </Head>
      
      <main>
        <FaqMain />
      </main>
    </>
  );
};

export default FaqPage; 
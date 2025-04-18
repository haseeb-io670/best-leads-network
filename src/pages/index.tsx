import React from 'react';
import Head from 'next/head';

import HomeOneBanner from '../components/layout/banner/HomeOneBanner';
import HomeAbout from '../components/containers/home/HomeAbout';
import HomeServices from '../components/containers/home/HomeServices';
import HomeFeatures from '../components/containers/home/HomeFeatures';

const Home = () => {
  return (
    <>
      <Head>
        <title>BestLeads Network - Lead Generation Services</title>
        <meta name="description" content="BestLeads Network - Professional Lead Generation Services" />
      </Head>
      
      <main>
        <HomeOneBanner />
        <HomeServices />
        <HomeFeatures />
        <HomeAbout />
      </main>
    </>
  );
};

export default Home; 
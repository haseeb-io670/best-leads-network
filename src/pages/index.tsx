import React from 'react';
import Head from 'next/head';

import HomeOneBanner from '../components/layout/banner/HomeOneBanner';
import HomeAbout from '../components/containers/home/HomeAbout';
import LeadQuality from '../components/containers/home/HomeQuality';
import HomeServices from '../components/containers/home/HomeServices';
import HomeFeatures from '../components/containers/home/HomeFeatures';
import HomeTestimonial from '@/components/containers/home/HomeTestimonial';
import HomeFaq from '../components/containers/home/HomeFaq';
import ContactMain from '@/components/containers/ContactMain';

const Home = () => {
  return (
    <>
      <Head>
        <title>BestLeads Network - Medicare, ACA, MVA & Auto Insurance Live Transfer Leads</title>
        <meta name="description" content="BestLeads Network - Professional Lead Generation Services" />
        <meta name="keywords" content="Medicare live transfer leads, ACA live transfer leads, MVA live transfer leads, auto insurance live transfers, real-time insurance leads, pre-qualified insurance leads, exclusive live transfer services, inbound insurance calls, high-converting insurance leads, live transfer lead generation, insurance leads, best insurance leads vendor, insurance lead gen company, "></meta>
      </Head>
      
      <main>
        <HomeOneBanner />
        <HomeServices />
        <HomeAbout />
        <LeadQuality />
        <HomeFeatures />
        <HomeTestimonial />
        <HomeFaq />
        <ContactMain />
      </main>
    </>
  );
};

export default Home; 
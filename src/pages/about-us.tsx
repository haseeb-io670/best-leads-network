import React from 'react';
import Head from 'next/head';
// import Layout from '../components/layout/Layout';
import HomeAbout from '../components/containers/home/HomeAbout';
import WhyUs from '@/components/containers/WhyUs';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | BestLeads Network</title>
        <meta name="description" content="Learn about BestLeads Network and our mission to provide top-quality lead generation services." />
      </Head>
      <main>
        <HomeAbout />
        <WhyUs />
      </main>
      {/* <Layout>
        <HomeAbout />
      </Layout> */}
    </>
  );
};

export default AboutUs; 
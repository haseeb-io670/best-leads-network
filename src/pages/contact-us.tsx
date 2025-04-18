import React from 'react';
import Head from 'next/head';
import ContactMain from '../components/containers/ContactMain';

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | BestLeads Network</title>
        <meta name="description" content="Contact BestLeads Network for lead generation services and business growth solutions." />
      </Head>
      <main>
        <ContactMain />
      </main>
    </>
  );
};

export default ContactUs; 
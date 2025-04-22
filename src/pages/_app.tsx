import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import '../styles/main.scss';
import '../styles/blog.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/fvicon.ico" />
        <link rel="apple-touch-icon" href="/images/fvicon.ico" />
        <meta name="theme-color" content="#3498db" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp; 
import React from 'react';
import Head from 'next/head';
import BlogMain from '../components/containers/BlogMain';
import { sampleBlogPosts } from '../data/blogData';

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog | BestLeads Network</title>
        <meta name="description" content="Read the latest insights and news from BestLeads Network about insurance lead generation, sales strategies, and industry updates." />
        <meta property="og:title" content="Blog | BestLeads Network" />
        <meta property="og:description" content="Expert insurance industry insights to help you grow your business." />
        <meta property="og:type" content="website" />
      </Head>
      
      <main>
        <BlogMain posts={sampleBlogPosts} />
      </main>
    </>
  );
};

export default BlogPage; 
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import BlogMain from '../components/containers/BlogMain';
import { sampleBlogPosts } from '../data/blogData';

const BlogPage = () => {
  const [postsData, setPosts] = useState([]);
  const [responseMessage, setResponseMessage] = useState<{
      success: boolean;
      message: string;
    } | null>(null);

  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch('/api/blogs/fetch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      const responseData = await response.json();

      if (!responseData.success) {
        setResponseMessage({
          success: false,
          message: responseData.message
        });
      } else {
        setPosts(responseData.data);
      }
    }

    getBlogs();
    
  }, []);
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
        {responseMessage ? (
          <div className={`form-status error`}>
            {responseMessage.message}
          </div>
        ) : (
          <BlogMain posts={postsData} />
        )}
      </main>
    </>
  );
};

export default BlogPage; 
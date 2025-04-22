import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BlogPostDetail from '../../components/containers/BlogPostDetail';
import { sampleBlogPosts } from '../../data/blogData';

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  
  const post = sampleBlogPosts.find(post => post.slug === slug);
  
  if (router.isFallback || !post) {
    return (
      <div className="container">
        <div className="loading-container">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Head>
        <title>{post.title} | BestLeads Network</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
      </Head>
      
      <main>
        <BlogPostDetail post={post} />
      </main>
    </>
  );
};

export default BlogPostPage; 
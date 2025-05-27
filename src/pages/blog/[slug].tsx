import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import BlogPostDetail from '../../components/containers/BlogPostDetail';
import { motion } from 'framer-motion';
import styles from '../../styles/BlogPostDetail.module.css';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  body: string;
  feature_image: string;
  status: string;
  category: {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
  };
  creator: {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
  };
  created_at: string;
  tags: {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
    pivot: any;
  }[];
}

const LoadingSkeleton = () => (
  <div className="blog-post-detail">
    <div className="container">
      {/* Breadcrumb Skeleton */}
      <div className="breadcrumb skeleton">
        <div className="skeleton-text"></div>
      </div>
      
      {/* Post Header Skeleton */}
      <motion.div 
        className="post-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="post-meta skeleton">
          <div className="skeleton-meta"></div>
          <div className="skeleton-meta"></div>
        </div>
        <div className="skeleton-title"></div>
        <div className="skeleton-meta"></div>
      </motion.div>
      
      {/* Featured Image Skeleton */}
      <motion.div 
        className="post-featured-image skeleton"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="skeleton-image"></div>
      </motion.div>
      
      {/* Post Content Skeleton */}
      <div className="post-container">
        <motion.div 
          className="post-content skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
        </motion.div>
        
        {/* Post Footer Skeleton */}
        <div className="post-footer skeleton">
          <div className="skeleton-tags">
            {[1, 2, 3].map((index) => (
              <div key={index} className="skeleton-tag"></div>
            ))}
          </div>
          <div className="skeleton-share">
            <div className="skeleton-meta"></div>
            <div className="skeleton-social"></div>
          </div>
        </div>
        
        {/* Author Bio Skeleton */}
        <div className="author-bio skeleton">
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
        </div>
        
        {/* Back to Blog Skeleton */}
        <div className="back-to-blog skeleton">
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  </div>
);

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [responseMessage, setResponseMessage] = useState<{
      success: boolean;
      message: string;
  } | null>(null);
  
  useEffect(() => {
    if (slug) {
      getBlogs();
    }
  }, [slug]);
  
  const getBlogs = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;
    
      if (!apiUrl) {
        throw new Error('API URL is not configured');
      }
      const response = await fetch(`${apiUrl}/blogs/fetch/${slug}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();

      if (!responseData.success) {
        setResponseMessage({
          success: false,
          message: responseData.message
        });
      } else {
        setPost(responseData.blog);
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      setResponseMessage({
        success: false,
        message: 'Failed to fetch blog post. Please try again later.'
      });
    }
  }

  if (router.isFallback || !post) {
    return (
      <>
        <Head>
          <title>Loading... | BestLeads Network</title>
        </Head>
        <LoadingSkeleton />
      </>
    );
  }
  
  return (
    <>
      <Head>
        <title>{post.title} | BestLeads Network</title>
        <meta name="description" content={post.body.substring(0, 160)} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.body.substring(0, 160)} />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_LARAVEL_APP_URL + post.feature_image} />
        <meta property="og:type" content="article" />
      </Head>
      
      <main>
        <BlogPostDetail post={post} />
      </main>
    </>
  );
};

export default BlogPostPage; 
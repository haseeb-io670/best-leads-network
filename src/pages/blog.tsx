import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import BlogMain from '../components/containers/BlogMain';
import { motion } from 'framer-motion';

interface Category {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  posts_count: number;
}

const BlogPage = () => {
  const [postsData, setPosts] = useState([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [responseMessage, setResponseMessage] = useState<{
      success: boolean;
      message: string;
    } | null>(null);

  const getCategories = async () => {
    try {
      const response = await fetch('/api/blogs/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      const responseData = await response.json();

      if (!responseData.success) {
        console.error('Failed to fetch categories:', responseData.message);
      } else {
        setCategories(responseData.data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getBlogs = async () => {
    try {
      setIsLoading(true);
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
    } catch (error) {
      setResponseMessage({
        success: false,
        message: 'Failed to fetch blog posts. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getBlogs();
    getCategories();
  }, []);

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="blog-main">
      <div className="container">
        {/* Blog Hero Skeleton */}
        <div className="blog-hero">
          <motion.div 
            className="blog-hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
          </motion.div>
        </div>

        {/* Blog Grid Skeleton */}
        <div className="blog-layout">
          <div className="blog-posts">
            <div className="posts-grid">
              {[1, 2, 3, 4, 5].map((index) => (
                <motion.div 
                  key={index}
                  className="blog-card skeleton"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="skeleton-image"></div>
                  <div className="card-content">
                    <div className="skeleton-meta"></div>
                    <div className="skeleton-title"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-meta"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="blog-sidebar">
            <div className="sidebar-section">
              <div className="skeleton-title"></div>
              <div className="skeleton-list">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="skeleton-item"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
        {isLoading ? (
          <LoadingSkeleton />
        ) : responseMessage ? (
          <div className={`form-status error`}>
            {responseMessage.message}
          </div>
        ) : (
          <BlogMain posts={postsData} categories={categories} />
        )}
      </main>

      <style jsx>{`
        .skeleton-title {
          height: 24px;
          background: #e0e0e0;
          border-radius: 4px;
          margin-bottom: 16px;
          width: 70%;
        }

        .skeleton-text {
          height: 16px;
          background: #e0e0e0;
          border-radius: 4px;
          margin-bottom: 12px;
          width: 100%;
        }

        .skeleton-meta {
          height: 14px;
          background: #e0e0e0;
          border-radius: 4px;
          margin-bottom: 12px;
          width: 40%;
        }

        .skeleton-image {
          height: 200px;
          background: #e0e0e0;
          border-radius: 4px;
          margin-bottom: 16px;
        }

        .skeleton-list {
          margin-top: 16px;
        }

        .skeleton-item {
          height: 20px;
          background: #e0e0e0;
          border-radius: 4px;
          margin-bottom: 12px;
          width: 100%;
        }

        .blog-card.skeleton {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .blog-card.skeleton .card-content {
          padding: 16px;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .skeleton-title,
        .skeleton-text,
        .skeleton-meta,
        .skeleton-image,
        .skeleton-item {
          background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </>
  );
};

export default BlogPage; 
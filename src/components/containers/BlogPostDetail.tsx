import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaUser, 
  FaTag, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaPinterestP,
  FaChevronLeft,
  FaInstagram
} from 'react-icons/fa';
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

interface BlogPostDetailProps {
  post: BlogPost;
}

const truncateHtmlContent = (html: string, maxLength: number = 200) => {
  // Remove HTML tags
  const text = html.replace(/<[^>]*>/g, '');
  
  // Remove extra whitespace and newlines
  const cleanText = text.replace(/\s+/g, ' ').trim();
  
  // If text is shorter than maxLength, return it as is
  if (cleanText.length <= maxLength) {
    return cleanText;
  }
  
  // Truncate to maxLength and add ellipsis
  return cleanText.substring(0, maxLength) + '...';
};

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="blog-post-detail">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">Home</Link> &nbsp; / &nbsp;
          <Link href="/blog">Blog</Link> &nbsp; / &nbsp;
          <span>{post.title}</span>
        </div>
        
        {/* Post Header */}
        <motion.div 
          className="post-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="post-meta">
            <span className="category">{post.category?.name}</span>
            <span className="date"><FaCalendarAlt /> {formatDate(post.created_at)}</span>
            <span className="read-time"><FaClock /> 2 min read</span>
          </div>
          <h1>{post.title}</h1>
          <div className="author-info">
            <span className="author-name">By {post.creator?.name}</span>
          </div>
        </motion.div>
        
        {/* Featured Image */}
        <motion.div 
          className="post-featured-image"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: 'block', maxWidth: '100%', margin: '20px auto', overflow: 'hidden', borderRadius: '8px' }}
        >
          <Image 
            src={process.env.NEXT_PUBLIC_LARAVEL_APP_URL + post.feature_image} 
            alt={post.title}
            width={1200}
            height={630}
            layout="responsive"
            objectFit="contain"
          />
        </motion.div>
        
        {/* Post Content */}
        <div className="post-container">
          <motion.div 
            className="post-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </motion.div>
          
          {/* Post Footer */}
          <div className="post-footer">
            <div className="post-tags">
              {post.tags.map((tag) => (
                <Link href={`/blog?tag=${tag.slug}`} key={tag.id} className="tag">
                  <FaTag /> {tag.name}
                </Link>
              ))}
            </div>
            
            <div className="post-share">
              <span className="share-title">Share this post:</span>
              <div className="social-share">
                <a href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="share-button facebook">
                  <FaFacebookF />
                </a>
                <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer" className="share-button instagram">
                  <FaInstagram />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="share-button linkedin">
                  <FaLinkedinIn />
                </a>
                <a href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(process.env.NEXT_PUBLIC_LARAVEL_APP_URL + post.feature_image)}&description=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="share-button pinterest">
                  <FaPinterestP />
                </a>
              </div>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="author-bio">
            <div className="author-content">
              <h3>{post.creator.name}</h3>
              <p>Insurance industry expert with over 10 years of experience helping agencies grow their business through effective lead generation and conversion strategies.</p>
            </div>
          </div>
          
          {/* Back to Blog */}
          <div className="back-to-blog">
            <Link href="/blog" className="back-button">
              <FaChevronLeft /> Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail; 
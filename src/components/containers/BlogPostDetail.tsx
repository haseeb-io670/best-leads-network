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
import { BlogPost, sampleBlogPosts } from '../../data/blogData';

interface BlogPostDetailProps {
  post: BlogPost;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post }) => {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState('');
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = sampleBlogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  
  // Set current URL after component mounts to avoid SSR issues
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  
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
          <Link href="/">Home</Link> / 
          <Link href="/blog">Blog</Link> / 
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
            <span className="category">{post.category}</span>
            <span className="date"><FaCalendarAlt /> {formatDate(post.date)}</span>
            <span className="read-time"><FaClock /> {post.readTime} min read</span>
          </div>
          <h1>{post.title}</h1>
          <div className="author-info">
            <span className="author-name">By {post.author}</span>
          </div>
        </motion.div>
        
        {/* Featured Image */}
        <motion.div 
          className="post-featured-image"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Image 
            src={post.coverImage} 
            alt={post.title}
            width={1200}
            height={630}
            layout="responsive"
            objectFit="cover"
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
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.div>
          
          {/* Post Footer */}
          <div className="post-footer">
            <div className="post-tags">
              {post.tags.map((tag) => (
                <Link href={`/blog?tag=${tag}`} key={tag} className="tag">
                  <FaTag /> {tag}
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
                <a href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(post.coverImage)}&description=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="share-button pinterest">
                  <FaPinterestP />
                </a>
              </div>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="author-bio">
            <div className="author-content">
              <h3>{post.author}</h3>
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
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="related-posts-section">
            <h2>You Might Also Like</h2>
            <div className="related-posts">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div 
                  key={relatedPost.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="card-image-link">
                    <div className="card-image">
                      <Image 
                        src={relatedPost.coverImage} 
                        alt={relatedPost.title}
                        width={400}
                        height={260}
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                  </Link>
                  <div className="card-content">
                    <div className="post-meta">
                      <span className="category">{relatedPost.category}</span>
                      <span className="date"><FaCalendarAlt /> {formatDate(relatedPost.date)}</span>
                    </div>
                    <h3>
                      <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h3>
                    <p className="excerpt">{relatedPost.excerpt}</p>
                    <div className="card-footer">
                      <div className="author-info">
                        <span className="author-name">{relatedPost.author}</span>
                      </div>
                      <span className="read-time"><FaClock /> {relatedPost.readTime} min</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostDetail; 
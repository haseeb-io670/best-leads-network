import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaCalendarAlt, 
  FaUser, 
  FaTag, 
  FaClock, 
  FaChevronRight,
  FaChevronLeft 
} from 'react-icons/fa';

// Types
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  body: string;
  feature_image: string;
  status: string;
  category_id: number;
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

interface Category {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
  posts_count: number;
}

interface BlogMainProps {
  posts: BlogPost[];
  categories: Category[];
}

// Categories for filter
const categories = [
  'All',
  'Medicare', 
  'Auto Insurance',
  'ACA',
  'Marketing',
  'Sales',
  'Industry News'
];

const BlogMain = ({ posts, categories }: BlogMainProps) => {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts || []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  
  // Featured post is the first one marked as featured, or the first post
  const featuredPost = posts?.[0];
  
  // Filter posts based on search term and category
  useEffect(() => {
    if (!posts) return;
    
    let result = [...posts];
    
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(
        post => 
          post.title.toLowerCase().includes(lowerSearchTerm) ||
          post.tags.some(tag => tag.name.toLowerCase().includes(lowerSearchTerm))
      );
    }
    
    if (selectedCategory !== 'all') {
      result = result.filter(post => post.category_id === selectedCategory);
    }
    
    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, posts]);
  
  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const truncateHtmlContent = (html: string, maxLength: number = 200) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    let text = tempDiv.textContent || '';
    text = text.replace(/\s+/g, ' ').trim();

    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };
  
  return (
    <div className="blog-main">
      <div className="container">
        {/* Blog Hero */}
        <div className="blog-hero">
          <motion.div 
            className="blog-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Insurance Industry Insights</h1>
            <p>Expert tips, guides, and industry updates to help you grow your insurance business</p>
          </motion.div>
        </div>
        
        {/* Blog Search & Filters */}
        <div className="blog-controls">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="category-filter">
            <button
              key="all"
              className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured Post */}
        {featuredPost && currentPage === 1 && selectedCategory === 'all' && !searchTerm && (
          <motion.div 
            className="featured-post"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="featured-post-image">
              <Image 
                src={process.env.NEXT_PUBLIC_LARAVEL_APP_URL + featuredPost.feature_image} 
                alt={featuredPost.title}
                width={600}
                height={400}
                layout="responsive"
                objectFit="cover"
              />
              <div className="featured-tag">Featured</div>
            </div>
            <div className="featured-post-content">
              <div className="post-meta">
                <span className="category">
                  {categories.find(cat => cat.id === featuredPost.category_id)?.name || 'Uncategorized'}
                </span>
                <span className="date"><FaCalendarAlt /> {formatDate(featuredPost.created_at)}</span>
              </div>
              <h2>{featuredPost.title}</h2>
              <div 
                className="post-body"
                dangerouslySetInnerHTML={{ __html: truncateHtmlContent(featuredPost.body) }}
              />
              <div className="author-info">
                <span className="author-name">{featuredPost.creator.name}</span>
              </div>
              <Link 
                href={`/blog/${featuredPost.slug}`} 
                className="read-more"
              >
                Read Article <FaChevronRight className="icon" />
              </Link>
            </div>
          </motion.div>
        )}
        
        {/* Blog Grid */}
        <div className="blog-layout">
          <div className="blog-posts">
            {currentPosts.length > 0 ? (
              <div className="posts-grid">
                {currentPosts.map((post, index) => (
                  <motion.div 
                    key={post.id}
                    className="blog-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`} className="card-image-link">
                      <div style={{ width: '400px', height: '260px', overflow: 'hidden', borderRadius: '8px' }} className="card-image">
                        <Image 
                          src={process.env.NEXT_PUBLIC_LARAVEL_APP_URL + post.feature_image} 
                          alt={post.title}
                          width={400}
                          height={260}
                        />
                      </div>
                    </Link>
                    <div className="card-content">
                      <div className="post-meta">
                        <span className="category">
                          {categories.find(cat => cat.id === post.category_id)?.name || 'Uncategorized'}
                        </span>
                        <span className="date"><FaCalendarAlt /> {formatDate(post.created_at)}</span>
                      </div>
                      <h3>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <div 
                        className="excerpt"
                        dangerouslySetInnerHTML={{ __html: post.body }}
                      />
                      <div className="card-footer">
                        <div className="author-info">
                          <span className="author-name">{post.creator.name}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>No posts found</h3>
                <p>Try adjusting your search or filters to find what you're looking for.</p>
                <button className="reset-button" onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}>
                  Reset Filters
                </button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredPosts.length > postsPerPage && (
              <div className="pagination">
                <button 
                  className="page-button prev"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <FaChevronLeft /> Prev
                </button>
                <div className="page-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`page-number ${currentPage === number ? 'active' : ''}`}
                    >
                      {number}
                    </button>
                  ))}
                </div>
                <button 
                  className="page-button next"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next <FaChevronRight />
                </button>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="blog-sidebar">
            {/* Popular Posts */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Popular Posts</h3>
              <div className="popular-posts">
                {posts?.slice(0, 3).map((post, index) => (
                  <div key={post.id} className="popular-post">
                    <div className="popular-post-number">{index + 1}</div>
                    <div className="popular-post-content">
                      <h4>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h4>
                      <span className="post-meta-item">
                        <FaCalendarAlt className="meta-icon" /> {formatDate(post.created_at)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Categories */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Categories</h3>
              <ul className="category-list">
                {categories.map((category) => (
                  <li 
                    key={category.id} 
                    className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="category-name">{category.name}</span>
                    <span className="category-count">
                      {category.posts_count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tags */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Popular Tags</h3>
              <div className="tags-cloud">
                {Array.from(new Set(posts?.flatMap(post => post.tags.map(tag => tag.name)) || []))
                  .slice(0, 12)
                  .map((tag) => (
                    <span 
                      key={tag} 
                      className="tag"
                      onClick={() => setSearchTerm(tag)}
                    >
                      <FaTag className="tag-icon" /> {tag}
                    </span>
                  ))
                }
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="sidebar-section newsletter-section">
              <h3 className="sidebar-title">Subscribe to Our Newsletter</h3>
              <p>Get the latest insurance industry insights delivered straight to your inbox.</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input" 
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
            </div>
            
            {/* CTA Banner */}
            <div className="sidebar-section cta-banner">
              <h3>Ready to Grow Your Business?</h3>
              <p>Access premium insurance leads today and boost your sales</p>
              <Link href="/contact-us" className="cta-button">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;

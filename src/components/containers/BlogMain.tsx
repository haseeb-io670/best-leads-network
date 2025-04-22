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
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  featured?: boolean;
}

interface BlogMainProps {
  posts?: BlogPost[];
}

// Sample blog data
const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'maximizing-medicare-lead-conversions',
    title: 'Maximizing Medicare Lead Conversions: 5 Proven Strategies',
    excerpt: 'Learn the most effective techniques for converting Medicare leads into clients, with practical tips from industry experts.',
    content: '...',
    coverImage: '/images/blogs/medicare-lead-conversions.jpg',
    author: 'Michael Johnson',
    authorImage: '/images/team/michael-johnson.jpg',
    date: '2023-08-15',
    readTime: 6,
    category: 'Medicare',
    tags: ['Medicare', 'Lead Conversion', 'Insurance Sales'],
    featured: true
  },
  {
    id: '2',
    slug: 'auto-insurance-lead-generation-guide',
    title: 'The Complete Guide to Auto Insurance Lead Generation in 2023',
    excerpt: 'Discover the latest techniques and channels for generating high-quality auto insurance leads for your agency.',
    content: '...',
    coverImage: '/images/blogs/auto-insurance-leads.jpg',
    author: 'Sarah Williams',
    authorImage: '/images/team/sarah-williams.jpg',
    date: '2023-07-28',
    readTime: 8,
    category: 'Auto Insurance',
    tags: ['Auto Insurance', 'Lead Generation', 'Digital Marketing']
  },
  {
    id: '3',
    slug: 'aca-compliance-updates',
    title: 'ACA Compliance Updates Every Insurance Agent Should Know',
    excerpt: 'Stay informed about the latest Affordable Care Act regulations and how they impact your insurance business.',
    content: '...',
    coverImage: '/images/blogs/aca-compliance.jpg',
    author: 'David Chen',
    authorImage: '/images/team/david-chen.jpg',
    date: '2023-07-12',
    readTime: 5,
    category: 'ACA',
    tags: ['ACA', 'Compliance', 'Healthcare']
  },
  {
    id: '4',
    slug: 'building-client-trust-insurance',
    title: 'Building Client Trust in the Insurance Industry',
    excerpt: 'Learn effective strategies to establish and maintain trust with potential clients from the first contact.',
    content: '...',
    coverImage: '/images/blogs/client-trust.jpg',
    author: 'Jennifer Martinez',
    authorImage: '/images/team/jennifer-martinez.jpg',
    date: '2023-06-30',
    readTime: 7,
    category: 'Sales',
    tags: ['Client Relations', 'Trust Building', 'Insurance Sales']
  },
  {
    id: '5',
    slug: 'digital-marketing-insurance-agents',
    title: 'Digital Marketing Essentials for Insurance Agents',
    excerpt: 'Master the fundamentals of digital marketing to attract more leads and grow your insurance business.',
    content: '...',
    coverImage: '/images/blogs/digital-marketing.jpg',
    author: 'Robert Thompson',
    authorImage: '/images/team/robert-thompson.jpg',
    date: '2023-06-15',
    readTime: 9,
    category: 'Marketing',
    tags: ['Digital Marketing', 'Lead Generation', 'Social Media']
  },
  {
    id: '6',
    slug: 'insurance-sales-scripts',
    title: 'Effective Insurance Sales Scripts That Actually Work',
    excerpt: 'Improve your sales conversations with proven scripts designed to address objections and close more deals.',
    content: '...',
    coverImage: '/images/blogs/sales-scripts.jpg',
    author: 'Michael Johnson',
    authorImage: '/images/team/michael-johnson.jpg',
    date: '2023-05-22',
    readTime: 6,
    category: 'Sales',
    tags: ['Sales Techniques', 'Scripts', 'Objection Handling']
  }
];

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

const BlogMain: React.FC<BlogMainProps> = ({ posts = sampleBlogPosts }) => {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  
  // Featured post is the first one marked as featured, or the first post
  const featuredPost = posts.find(post => post.featured) || posts[0];
  
  // Filter posts based on search term and category
  useEffect(() => {
    let result = posts;
    
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(
        post => 
          post.title.toLowerCase().includes(lowerSearchTerm) ||
          post.excerpt.toLowerCase().includes(lowerSearchTerm) ||
          post.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
      );
    }
    
    if (selectedCategory !== 'All') {
      result = result.filter(post => post.category === selectedCategory);
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
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured Post */}
        {featuredPost && currentPage === 1 && selectedCategory === 'All' && !searchTerm && (
          <motion.div 
            className="featured-post"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="featured-post-image">
              <Image 
                src={featuredPost.coverImage} 
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
                <span className="category">{featuredPost.category}</span>
                <span className="date"><FaCalendarAlt /> {formatDate(featuredPost.date)}</span>
                <span className="read-time"><FaClock /> {featuredPost.readTime} min read</span>
              </div>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <div className="author-info">
                <span className="author-name">{featuredPost.author}</span>
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
                      <div className="card-image">
                        <Image 
                          src={post.coverImage} 
                          alt={post.title}
                          width={400}
                          height={260}
                          layout="responsive"
                          objectFit="cover"
                        />
                      </div>
                    </Link>
                    <div className="card-content">
                      <div className="post-meta">
                        <span className="category">{post.category}</span>
                        <span className="date"><FaCalendarAlt /> {formatDate(post.date)}</span>
                      </div>
                      <h3>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="excerpt">{post.excerpt}</p>
                      <div className="card-footer">
                        <div className="author-info">
                          <span className="author-name">{post.author}</span>
                        </div>
                        <span className="read-time"><FaClock /> {post.readTime} min</span>
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
                  setSelectedCategory('All');
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
                {posts.slice(0, 3).map((post, index) => (
                  <div key={post.id} className="popular-post">
                    <div className="popular-post-number">{index + 1}</div>
                    <div className="popular-post-content">
                      <h4>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h4>
                      <span className="post-meta-item">
                        <FaCalendarAlt className="meta-icon" /> {formatDate(post.date)}
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
                {categories.filter(cat => cat !== 'All').map((category) => (
                  <li 
                    key={category} 
                    className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span className="category-name">{category}</span>
                    <span className="category-count">
                      {posts.filter(post => post.category === category).length}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tags */}
            <div className="sidebar-section">
              <h3 className="sidebar-title">Popular Tags</h3>
              <div className="tags-cloud">
                {Array.from(new Set(posts.flatMap(post => post.tags)))
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
              <Link href="/get-leads" className="cta-button">
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

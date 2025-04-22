import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Testimonial data interface
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Insurance Agent",
    company: "Elite Insurance Group",
    content: "BestLeads Network has completely transformed our agency's growth. The quality of Medicare leads is exceptional, with a 40% conversion rate. The platform is user-friendly and their customer support team is always responsive.",
    rating: 5,
    industry: "Medicare"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Agency Owner",
    company: "Williams Insurance Solutions",
    content: "Since partnering with BestLeads Network, we've seen our auto insurance sales double within just 3 months. Their leads are pre-qualified and the dashboard makes it easy to track our performance. Worth every penny!",
    rating: 5,
    industry: "Auto Insurance"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Senior Agent",
    company: "Pacific Coverage",
    content: "The ACA leads from BestLeads Network have been game-changers for our agency. We're now closing 30% more deals each month with less effort. Their filtering options allow us to target exactly the clients we want to work with.",
    rating: 4,
    industry: "ACA"
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    role: "Sales Director",
    company: "Secure Benefits Inc.",
    content: "I've worked with many lead providers over my 15-year career, and BestLeads Network outperforms them all. The MVA leads are consistently high-quality, and I appreciate their transparent pricing model with no hidden fees.",
    rating: 5,
    industry: "MVA"
  },
  {
    id: 5,
    name: "Robert Thompson",
    role: "Independent Agent",
    company: "Thompson Insurance",
    content: "As an independent agent, I need reliable lead sources that won't break the bank. BestLeads Network delivers premium leads at competitive prices, and their custom solutions have helped me focus on my niche market perfectly.",
    rating: 4,
    industry: "Custom Solutions"
  }
];

const HomeTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Variants for animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    })
  };

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.3, duration: 0.5 } 
    }
  };

  // Handle next and previous slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Handle selecting a specific slide
  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Setup autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, currentIndex]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setAutoplay(false);
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  // Render rating stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar 
        key={index} 
        className={index < rating ? "star-filled" : "star-empty"} 
      />
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by thousands of insurance professionals nationwide
          </p>
        </motion.div>

        <div 
          className="testimonial-slider-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="testimonial-slider">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="testimonial-slide"
              >
                <div className="testimonial-content">
                  <motion.div 
                    className="quote-icon"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <FaQuoteLeft />
                  </motion.div>
                  <motion.p 
                    className="testimonial-text"
                    variants={quoteVariants}
                    initial="initial"
                    animate="animate"
                  >
                    {testimonials[currentIndex].content}
                  </motion.p>
                  <motion.div 
                    className="rating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {renderStars(testimonials[currentIndex].rating)}
                  </motion.div>
                </div>

                <motion.div 
                  className="testimonial-author"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="author-avatar">
                    <div className="avatar-placeholder">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                    <p className="author-role">{testimonials[currentIndex].role}</p>
                    <p className="author-company">{testimonials[currentIndex].company}</p>
                    <span className="industry-tag">{testimonials[currentIndex].industry}</span>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <div className="slider-controls">
              <motion.button 
                className="control-button prev" 
                onClick={prevSlide}
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1, backgroundColor: "#0494d4", color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FaChevronLeft />
              </motion.button>
              <div className="slider-dots">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              <motion.button 
                className="control-button next" 
                onClick={nextSlide}
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1, backgroundColor: "#0494d4", color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FaChevronRight />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonial;

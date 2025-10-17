import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import cat1 from '../../../assets/img/cat-1.jpg';
import cat2 from '../../../assets/img/cat-2.png';
import cat3 from '../../../assets/img/cat-7.jpg';
import cat4 from '../../../assets/img/caat4.jpg';

const categories = [
{ 
    img: cat1, 
    title: 'Academic Tuition', 
    path: '/courses',
    description: 'Comprehensive tuition programs for Upper Primary, High School, and Higher Secondary students following State and CBSE syllabus.',
    courses: 12
  },
  { 
    img: cat2, 
    title: 'LSS USS ABACUS Special Coaching', 
    path: '/courses',
    description: 'Specialized coaching for LSS, USS, and ABACUS programs designed to strengthen logical reasoning and mental agility.',
    courses: 24
  },
  { 
    img: cat3, 
    title: 'Certificate & Diploma Courses', 
       path: '/courses',
    description: 'Industry-aligned certificate and diploma programs that build practical skills and enhance career opportunities.',
    courses: 18
  },
  { 
    img: cat4, 
    title: 'Advanced Diploma Programs', 
       path: '/courses',
    description: 'Hands-on advanced diploma programs developed with industry experts, offering practical experience and placement support.',
    courses: 15
  },
];

const CategoryCard = ({ category, index }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <motion.div
      className="col-lg-3 col-md-6 col-sm-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="border-0 shadow overflow-hidden bg-white h-100"
        style={{
          borderRadius: '24px',
          transition: 'all 0.4s ease',
        }}
        whileHover={{ 
          y: -12,
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="position-relative overflow-hidden" style={{ height: '200px', borderRadius: '24px 24px 0 0' }}>
          <motion.img
            src={category.img}
            loading="lazy"
            className="img-fluid w-100 h-100"
            alt={category.title}
            style={{ 
              objectFit: 'cover',
              transition: 'transform 0.6s ease',
            }}
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
          />
          <motion.div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
          />
        </div>
        
        <div className="p-4 p-md-4 position-relative d-flex flex-column" style={{ minHeight: '200px' }}>
          <motion.h3 
            className="fs-5 fw-bold mb-2"
            style={{
              transition: 'color 0.3s ease',
            }}
            animate={{
              color: isHovered ? '#4B86C8' : '#000',
            }}
          >
            {category.title}
          </motion.h3>
          <p className="text-muted mb-3 small flex-grow-1" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            {category.description}
          </p>
          <div className="pt-3 border-top mt-auto">
            <motion.button
              className="btn btn-link text-primary p-0 d-flex align-items-center gap-1 text-decoration-none"
              onClick={() => navigate(category.path)}
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              whileHover={{ 
                x: 8,
                color: '#0056b3',
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore
              <motion.span
                animate={{
                  x: isHovered ? 4 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CourseCategoriesSection = () => {
  return (
    <section className="py-5 py-md-6 bg-white position-relative overflow-hidden">
      <div
        className="position-absolute bottom-0 start-0 rounded-circle blur-3xl"
        style={{
          width: '16rem',
          height: '16rem',
          background: 'rgba(0, 123, 255, 0.05)',
          filter: 'blur(80px)',
        }}
      />
      <div className="container position-relative" style={{ zIndex: 10 }}>
        <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div style={{ 
          display: "inline-block", 
          background: "linear-gradient(135deg, #4B86C8 0%, #5b9bd5 100%)",
          color: "white",
          padding: "8px 24px",
          borderRadius: "50px",
          fontSize: "0.875rem",
          fontWeight: "600",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          marginBottom: "1rem",
          boxShadow: "0 4px 12px rgba(75, 134, 200, 0.3)"
        }}>
          Our programs
        </div>
          <h2 className="display-5 fw-bold mb-4">
            Course Categories 
          </h2>
          <p className="text-muted fs-6 mx-auto" style={{ maxWidth: '42rem' }}>
            Discover diverse programs designed to help you achieve your academic and career goals with expert
            guidance.
          </p>
        </div>

        <div className="row g-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategoriesSection;